const getColorByBirthday = (date) => {
  const msInYear = 1000 * 60 * 60 * 24 * 365;
  const today = new Date().getTime();
  const birthday = new Date(date).getTime();

  const years = (today - birthday) / msInYear;

  return years > 1 ? 'orange' : 'purple';
};

export default getColorByBirthday;
