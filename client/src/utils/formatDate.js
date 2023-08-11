export const formatDate = (givenDate) => {
  const date = givenDate.split("T")[0];
  return date.replaceAll("-", "/");
};
