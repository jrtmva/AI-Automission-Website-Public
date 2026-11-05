import test from 'node:test';
import assert from 'node:assert';
import {
  detectUserTimezone,
  getTimezoneSummary,
  getUpcomingDates,
  getTimeSlotsForDate,
  buildIcsCalendarContent,
} from './timezone-scheduler.ts';

test('detectUserTimezone returns a string containing a slash or valid timezone', () => {
  const tz = detectUserTimezone();
  assert.ok(typeof tz === 'string');
  assert.ok(tz.length > 0);
});

test('getTimezoneSummary returns human-readable summary for America/New_York', () => {
  const summary = getTimezoneSummary('America/New_York', new Date('2026-11-06T12:00:00Z'));
  assert.strictEqual(summary.name, 'America/New_York');
  assert.strictEqual(summary.city, 'New York');
  assert.ok(summary.offset.includes('GMT') || summary.offset.includes('UTC') || summary.offset.length > 0);
});

test('getUpcomingDates generates the requested count of days skipping Sundays', () => {
  // Use a fixed Wednesday date: 2026-11-04
  const refDate = new Date('2026-11-04T10:00:00Z');
  const dates = getUpcomingDates('America/New_York', refDate, 4);

  assert.strictEqual(dates.length, 4);
  assert.strictEqual(dates[0].isTomorrow, true);
  for (const d of dates) {
    assert.notStrictEqual(d.dayName, 'Sunday');
    assert.match(d.isoDate, /^\d{4}-\d{2}-\d{2}$/);
  }
});

test('getTimeSlotsForDate converts Manila hours to user timezone correctly', () => {
  const slotsNY = getTimeSlotsForDate('2026-11-06', 'America/New_York');
  assert.strictEqual(slotsNY.length, 6);
  for (const slot of slotsNY) {
    assert.ok(slot.localTime.includes('AM') || slot.localTime.includes('PM'));
    assert.ok(slot.manilaTime.includes('PHT'));
    assert.ok(slot.utcIso.includes('2026-11'));
  }

  // 10:00 AM PHT (UTC+8) is 02:00 UTC
  // In New York (EST, UTC-5), 02:00 UTC on Nov 6 is 9:00 PM on Nov 5 (Previous day)
  assert.strictEqual(slotsNY[0].manilaTime, '10:00 AM PHT');
  assert.strictEqual(slotsNY[0].localTime, '9:00 PM');
  assert.strictEqual(slotsNY[0].dateShiftLabel, 'Previous day');

  // 10:00 PM PHT (UTC+8) is 14:00 UTC
  // In New York (EST, UTC-5), 14:00 UTC on Nov 6 is 9:00 AM on Nov 6
  assert.strictEqual(slotsNY[4].manilaTime, '10:00 PM PHT');
  assert.strictEqual(slotsNY[4].localTime, '9:00 AM');
});

test('buildIcsCalendarContent generates RFC 5545 calendar event', () => {
  const ics = buildIcsCalendarContent({
    summary: 'AI Strategy Call',
    description: 'Discovery session',
    userEmail: 'test@example.com',
    clientTimezone: 'America/New_York',
    utcIso: '2026-11-06T14:00:00.000Z',
    googleCalendarUrl: 'https://calendar.app.google/9m3GmWy9GGJgfMWx9',
  });

  assert.ok(ics.includes('BEGIN:VCALENDAR'));
  assert.ok(ics.includes('DTSTART:20261106T140000Z'));
  assert.ok(ics.includes('DTEND:20261106T142500Z'));
  assert.ok(ics.includes('test@example.com'));
  assert.ok(ics.includes('https://calendar.app.google/9m3GmWy9GGJgfMWx9'));
  assert.ok(ics.includes('END:VCALENDAR'));
});
