//81 promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("成功しました");
  }, 1000);
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
