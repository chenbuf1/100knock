// 81 promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = Math.random() > 0.5; // 成功 or 失败（随机）

    if (success) {
      resolve("成功しました");
    } else {
      reject("失敗しました");
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
