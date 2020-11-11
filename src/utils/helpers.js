export const getEntityId = (url) => {
  const index = url.slice(0, -1).lastIndexOf("/");
  return url.substring(index + 1, url.length - 1);
};
