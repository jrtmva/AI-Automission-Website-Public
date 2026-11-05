import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateAutomationRoi, validateBookingForm } from './roi-calculator.ts';

test('calculateAutomationRoi computes savings accurately for a 5-person team', () => {
  const result = calculateAutomationRoi({
    teamSize: 5,
    hoursPerWeekPerPerson: 10,
    averageHourlyRate: 40,
    automationCoveragePct: 70,
  });

  // 5 * 10 = 50 total manual hours * 0.70 = 35 weekly hours saved
  assert.equal(result.weeklyHoursSaved, 35);
  // 35 * 4.33 = 151.55 => 152
  assert.equal(result.monthlyHoursSaved, 152);
  // 152 * 40 = 6080
  assert.equal(result.monthlyCostSaved, 6080);
  assert.ok(result.annualHoursSaved > 1500);
  assert.ok(result.annualCostSaved > 50000);
  assert.ok(result.efficiencyGainPercentage > 0);
  assert.ok(result.roiMultiplier > 1);
});

test('calculateAutomationRoi handles minimum boundary values gracefully', () => {
  const result = calculateAutomationRoi({
    teamSize: 0,
    hoursPerWeekPerPerson: 0,
    averageHourlyRate: 0,
  });

  assert.ok(result.weeklyHoursSaved >= 1);
  assert.ok(result.monthlyHoursSaved >= 1);
  assert.ok(result.monthlyCostSaved >= 10);
});

test('validateBookingForm flags empty and invalid fields', () => {
  const invalid = validateBookingForm({
    fullName: '',
    email: 'not-an-email',
    companyName: '',
    primaryBottleneck: '',
  });

  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.fullName);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.companyName);
  assert.ok(invalid.errors.primaryBottleneck);
});

test('validateBookingForm accepts valid inputs', () => {
  const valid = validateBookingForm({
    fullName: 'Jan Ryan Miraflor',
    email: 'janryantanmiraflor.va@gmail.com',
    companyName: 'AI AutoMission',
    primaryBottleneck: 'Manual lead management and follow-ups',
  });

  assert.equal(valid.isValid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});
