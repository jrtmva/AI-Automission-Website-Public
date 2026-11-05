/**
 * Utility functions for timezone detection, dynamic dates, and slot conversion.
 * Enables automatic adjustment of scheduling consultation dates and times
 * based on the client's detected location timezone.
 */

export interface TimezoneOption {
  value: string;
  label: string;
  offset: string;
}

export interface AvailableDate {
  isoDate: string; // YYYY-MM-DD
  label: string; // "Tomorrow", "Mon, Nov 9", etc.
  dayName: string; // "Monday", "Tuesday", etc.
  formattedDate: string; // "Nov 9, 2026"
  isTomorrow: boolean;
}

export interface TimeSlot {
  id: string; // unique ID
  localTime: string; // e.g. "10:00 AM"
  manilaTime: string; // e.g. "10:00 PM PHT"
  utcIso: string; // ISO 8601 UTC string
  dateShiftLabel?: string; // "+1 day" or "-1 day" if timezone crosses midnight
}

/**
 * Curated list of major global business timezones for manual switching
 */
export const COMMON_TIMEZONES: TimezoneOption[] = [
  { value: 'Asia/Manila', label: 'Manila / Singapore (PHT / SGT)', offset: 'UTC+8' },
  { value: 'America/New_York', label: 'New York / Eastern Time (EST/EDT)', offset: 'UTC-5' },
  { value: 'America/Chicago', label: 'Chicago / Central Time (CST/CDT)', offset: 'UTC-6' },
  { value: 'America/Denver', label: 'Denver / Mountain Time (MST/MDT)', offset: 'UTC-7' },
  { value: 'America/Los_Angeles', label: 'Los Angeles / Pacific Time (PST/PDT)', offset: 'UTC-8' },
  { value: 'Europe/London', label: 'London / United Kingdom (GMT/BST)', offset: 'UTC+0' },
  { value: 'Europe/Berlin', label: 'Berlin / Paris / Amsterdam (CET/CEST)', offset: 'UTC+1' },
  { value: 'Asia/Dubai', label: 'Dubai / Gulf Standard (GST)', offset: 'UTC+4' },
  { value: 'Asia/Tokyo', label: 'Tokyo / Japan (JST)', offset: 'UTC+9' },
  { value: 'Australia/Sydney', label: 'Sydney / Melbourne (AEST/AEDT)', offset: 'UTC+11' },
];

/**
 * Automatically detect user's local timezone via Intl API
 */
export function detectUserTimezone(): string {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz && typeof tz === 'string' && tz.includes('/')) {
      return tz;
    }
  } catch {
    // fallback if unsupported
  }
  return 'America/New_York';
}

/**
 * Formats a timezone identifier into a human-friendly string with current GMT offset
 */
export function formatTimezoneOffset(timeZone: string, referenceDate: Date = new Date()): string {
  try {
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone,
      timeZoneName: 'shortOffset',
    });
    const parts = formatter.formatToParts(referenceDate);
    const tzPart = parts.find((p) => p.type === 'timeZoneName');
    return tzPart ? tzPart.value : '';
  } catch {
    return 'UTC';
  }
}

/**
 * Gets a clean short abbreviation or label for display, e.g. "EST (UTC-5)"
 */
export function getTimezoneSummary(timeZone: string, referenceDate: Date = new Date()): {
  name: string;
  offset: string;
  city: string;
} {
  const offset = formatTimezoneOffset(timeZone, referenceDate);
  const city = timeZone.split('/')[1]?.replace(/_/g, ' ') || timeZone;
  return {
    name: timeZone,
    offset,
    city,
  };
}

/**
 * Calculates upcoming business consultation dates starting from tomorrow
 * adjusted to the client's timezone.
 */
export function getUpcomingDates(
  userTimezone: string,
  referenceDate: Date = new Date(),
  count: number = 5
): AvailableDate[] {
  const dates: AvailableDate[] = [];
  
  // Format reference date in the user's timezone to establish local today
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: userTimezone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  
  // Start from tomorrow in client's perspective
  const tomorrow = new Date(referenceDate.getTime() + 24 * 60 * 60 * 1000);
  let candidate = new Date(tomorrow);
  let added = 0;

  while (added < count) {
    // Format candidate in user's timezone
    const dayOfWeek = new Intl.DateTimeFormat('en-US', {
      timeZone: userTimezone,
      weekday: 'long',
    }).format(candidate);

    // Skip Sundays
    if (dayOfWeek !== 'Sunday') {
      const year = new Intl.DateTimeFormat('en-US', { timeZone: userTimezone, year: 'numeric' }).format(candidate);
      const month = new Intl.DateTimeFormat('en-US', { timeZone: userTimezone, month: '2-digit' }).format(candidate);
      const day = new Intl.DateTimeFormat('en-US', { timeZone: userTimezone, day: '2-digit' }).format(candidate);
      const isoDate = `${year}-${month}-${day}`;

      const shortMonth = new Intl.DateTimeFormat('en-US', { timeZone: userTimezone, month: 'short' }).format(candidate);
      const formattedDate = `${shortMonth} ${parseInt(day, 10)}, ${year}`;

      let label = `${dayOfWeek.slice(0, 3)}, ${shortMonth} ${parseInt(day, 10)}`;
      if (added === 0) {
        label = `Tomorrow (${dayOfWeek.slice(0, 3)})`;
      }

      dates.push({
        isoDate,
        label,
        dayName: dayOfWeek,
        formattedDate,
        isTomorrow: added === 0,
      });

      added++;
    }

    // Step forward 1 day
    candidate = new Date(candidate.getTime() + 24 * 60 * 60 * 1000);
  }

  return dates;
}

/**
 * Jan Ryan Miraflor's base consultation windows in Manila time (Asia/Manila, UTC+8):
 * Hours represented in 24-hr Manila time: [hour, minute]
 * Covers morning, afternoon, and evening windows to accommodate global US/EU timezones.
 */
export const MANILA_CONSULTATION_HOURS: [number, number][] = [
  [10, 0],  // 10:00 AM PHT
  [14, 0],  // 02:00 PM PHT
  [16, 30], // 04:30 PM PHT
  [20, 30], // 08:30 PM PHT (8:30 AM EDT / 5:30 AM PDT / 1:30 PM BST)
  [22, 0],  // 10:00 PM PHT (10:00 AM EDT / 7:00 AM PDT / 3:00 PM BST)
  [23, 30], // 11:30 PM PHT (11:30 AM EDT / 8:30 AM PDT / 4:30 PM BST)
];

/**
 * Converts Jan's available Manila consultation windows for a specific ISO date
 * into the visitor's local timezone.
 */
export function getTimeSlotsForDate(
  isoDate: string,
  userTimezone: string
): TimeSlot[] {
  const [yearStr, monthStr, dayStr] = isoDate.split('-');
  const year = parseInt(yearStr, 10);
  const month = parseInt(monthStr, 10) - 1; // 0-indexed
  const day = parseInt(dayStr, 10);

  return MANILA_CONSULTATION_HOURS.map(([phtHour, phtMinute], index) => {
    // Construct UTC timestamp by calculating Manila offset (+8 hrs)
    // Manila is UTC+8 without DST.
    const utcDate = new Date(Date.UTC(year, month, day, phtHour - 8, phtMinute, 0));

    // Format local time in user's timezone
    const localTimeFormatter = new Intl.DateTimeFormat('en-US', {
      timeZone: userTimezone,
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
    const localTime = localTimeFormatter.format(utcDate);

    // Format Manila reference time
    const manilaFormatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Manila',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
    const manilaTime = `${manilaFormatter.format(utcDate)} PHT`;

    // Check if date shifted in client timezone
    const localDayFormatter = new Intl.DateTimeFormat('en-US', {
      timeZone: userTimezone,
      day: 'numeric',
    });
    const localDay = parseInt(localDayFormatter.format(utcDate), 10);
    let dateShiftLabel: string | undefined = undefined;
    if (localDay < day) {
      dateShiftLabel = 'Previous day';
    } else if (localDay > day) {
      dateShiftLabel = 'Next day';
    }

    return {
      id: `slot-${index}-${utcDate.getTime()}`,
      localTime,
      manilaTime,
      utcIso: utcDate.toISOString(),
      dateShiftLabel,
    };
  });
}

/**
 * Builds an RFC 5545 compliant .ics calendar event string with UTC timestamps
 */
export function buildIcsCalendarContent(params: {
  summary: string;
  description: string;
  userEmail: string;
  clientTimezone: string;
  utcIso: string;
  durationMinutes?: number;
  googleCalendarUrl: string;
}): string {
  const startDate = new Date(params.utcIso);
  const duration = params.durationMinutes || 25;
  const endDate = new Date(startDate.getTime() + duration * 60 * 1000);

  const formatUtcIcs = (d: Date) =>
    d
      .toISOString()
      .replace(/[-:]/g, '')
      .replace(/\.\d{3}/, '');

  const startUtc = formatUtcIcs(startDate);
  const endUtc = formatUtcIcs(endDate);

  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//AI AutoMission//Strategy Call//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:REQUEST',
    'BEGIN:VEVENT',
    `UID:automission-${startDate.getTime()}@aiautomission.com`,
    `DTSTAMP:${formatUtcIcs(new Date())}`,
    `DTSTART:${startUtc}`,
    `DTEND:${endUtc}`,
    `SUMMARY:${params.summary}`,
    `DESCRIPTION:${params.description}\\n\\nClient Timezone: ${params.clientTimezone}\\nDirect Google Calendar Booking: ${params.googleCalendarUrl}`,
    'LOCATION:Google Meet (Link will be emailed to ' + params.userEmail + ')',
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');
}
