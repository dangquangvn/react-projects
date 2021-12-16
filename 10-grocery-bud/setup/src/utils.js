export const randomString = () => {
  // new Date().getTime().toString()
  return (+new Date()).toString(36).slice(-5);
};
