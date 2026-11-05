/**
 * Business logic calculations for AI Automation ROI and efficiency estimator.
 */

export interface RoiInput {
  teamSize: number;
  hoursPerWeekPerPerson: number;
  averageHourlyRate: number;
  automationCoveragePct?: number; // default typically 65-75% of routine tasks
}

export interface RoiResult {
  weeklyHoursSaved: number;
  monthlyHoursSaved: number;
  annualHoursSaved: number;
  monthlyCostSaved: number;
  annualCostSaved: number;
  efficiencyGainPercentage: number;
  roiMultiplier: number;
}

export function calculateAutomationRoi(input: RoiInput): RoiResult {
  const team = Math.max(1, input.teamSize || 1);
  const hoursPerWeek = Math.max(1, input.hoursPerWeekPerPerson || 1);
  const hourlyRate = Math.max(10, input.averageHourlyRate || 35);
  const coverage = (input.automationCoveragePct ?? 70) / 100;

  // Repetitive manual hours across team per week
  const totalRepetitiveHoursPerWeek = team * hoursPerWeek;
  
  // Hours saved by automated AI workflows
  const weeklyHoursSaved = Math.round(totalRepetitiveHoursPerWeek * coverage);
  const monthlyHoursSaved = Math.round(weeklyHoursSaved * 4.33);
  const annualHoursSaved = Math.round(weeklyHoursSaved * 52);

  // Financial savings
  const monthlyCostSaved = Math.round(monthlyHoursSaved * hourlyRate);
  const annualCostSaved = Math.round(annualHoursSaved * hourlyRate);

  // Efficiency percentage (hours saved vs 40hr standard work week across the team)
  const totalStandardTeamHours = team * 40;
  const efficiencyGainPercentage = Math.min(
    95,
    Math.round((weeklyHoursSaved / totalStandardTeamHours) * 100)
  );

  // Typical estimated monthly implementation/maintenance cost factor (~$750 - $1500 baseline)
  const estimatedMonthlySystemInvestment = 850 + team * 35;
  const roiMultiplier = Number(
    Math.max(1.8, (monthlyCostSaved / estimatedMonthlySystemInvestment)).toFixed(1)
  );

  return {
    weeklyHoursSaved,
    monthlyHoursSaved,
    annualHoursSaved,
    monthlyCostSaved,
    annualCostSaved,
    efficiencyGainPercentage,
    roiMultiplier,
  };
}

export function validateBookingForm(data: {
  fullName: string;
  email: string;
  companyName: string;
  primaryBottleneck: string;
}): { isValid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  if (!data.fullName.trim()) {
    errors.fullName = 'Full name is required';
  } else if (data.fullName.trim().length < 2) {
    errors.fullName = 'Name must be at least 2 characters';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email.trim()) {
    errors.email = 'Email address is required';
  } else if (!emailRegex.test(data.email.trim())) {
    errors.email = 'Please provide a valid email address';
  }

  if (!data.companyName.trim()) {
    errors.companyName = 'Company / Business name is required';
  }

  if (!data.primaryBottleneck) {
    errors.primaryBottleneck = 'Please select your primary operational challenge';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
