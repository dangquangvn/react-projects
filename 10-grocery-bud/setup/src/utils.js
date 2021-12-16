export const randomString = () => {
  return (+new Date()).toString(36).slice(-5);
};
