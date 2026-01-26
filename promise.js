// 81 promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const random = Math.random() ; // 成功 or 失败（随机）

    if (random > 0.5) {
      resolve("成功しました! random number:" + random);
    } else {
      reject("失敗しました... random number:" + random);
    }
  }, 1000);
});

promise
  .then((result) => {
    console.log("then:", result);
  })
  .catch((error) => {
    console.log("catch:", error);
  });
