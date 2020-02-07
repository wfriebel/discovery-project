export const getYearsExperienceText = yearsExperience => {
  return `${yearsExperience} ${
    yearsExperience === 1 ? "year" : "years"
  } of experience`;
};
