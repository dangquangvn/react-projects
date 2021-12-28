const paginate = (followers) => {
  // console.log("followers olf -->", followers);
  // let newArray = [];
  // const newFollowers = followers.map((follower, index) => {
  //   newArray.push(follower);
  //   console.log(
  //     "🚀TCL: ~ file: utils.js ~ line 6 ~ newFollowers ~ newArray",
  //     newArray
  //   );
  //   if (index % 10 === 0) {
  //     newArray = [];
  //   }
  // });
  // console.log("newFollowers -->", newFollowers);
  const itemPerPage = 9;
  const pages = Math.ceil(followers.length / itemPerPage);
  console.log("🚀TCL: ~ file: utils.js ~ line 17 ~ paginate ~ pages", pages);
  //= cach 1: callback trong Array.from co the dung nhu 'map'
  const newFollowers = Array.from({ length: pages }, (_, index) => {
    const start = index * itemPerPage;
    return followers.slice(start, start + itemPerPage);
  });
  console.log(
    "🚀TCL: ~ file: utils.js ~ line 19 ~ paginate ~ newFollowers",
    newFollowers
  );
  //= cach 2
  // const newFollowers2 = new Array(pages).fill(0).map((_, index) => {
  //   const start = index * itemPerPage;
  //   return followers.slice(start, start + itemPerPage);
  // });
  // console.log(
  //   "🚀TCL: ~ file: utils.js ~ line 27 ~ paginate ~ newFollowers2",
  //   newFollowers2
  // );
};

export default paginate;
