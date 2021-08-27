export const dateUtil = (dateString) => {
  const x = dateString.split("T");
  const y = x[1].substr(0, 5);
  return `${y}, ${x[0]}`;
};
