const paginate = (followers) => {
  const itemPerPage = 9;
  const pages = Math.ceil(followers.length / itemPerPage);
  console.log("🚀TCL: ~ file: utils.js ~ line 17 ~ paginate ~ pages", pages);
  //= cach 1: callback trong Array.from co the dung nhu 'map'
  const newFollowers = Array.from({ length: pages }, (_, index) => {
    const start = index * itemPerPage;
    return followers.slice(start, start + itemPerPage);
  });
  //= cach 2
  // const newFollowers2 = new Array(pages).fill(0).map((_, index) => {
  //   const start = index * itemPerPage;
  //   return followers.slice(start, start + itemPerPage);
  // });
  return newFollowers;
};

export default paginate;
