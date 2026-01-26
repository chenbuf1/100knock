/* 
// 82
const status = document.getElementById("status");
const ul = document.getElementById("postList");
*/
/* 83
// 取得中
status.textContent = "Loading...";
fetch("https://jsonplaceholder.typicode.com/posts")
.then((response) => response.json())
.then((data) => {
// console.log(data); // 80 
setTimeout(() => {
// 完了後：Loading を消す
status.textContent = "";

data.forEach((post) => {
const li = document.createElement("li");
li.textContent = post.title;
ul.appendChild(li);
});
}, 2000); // 2000ms = 2秒
});
*/

/* 84
// 取得中
status.textContent = "Loading...";

// make mistake on URL
fetch("https://jsonplaceholder.typicode.com/POSTS_WRONG")
.then((response) => {
if (!response.ok) {
throw new Error("API error");
}
return response.json();
})
.then((data) => {
// 成功
status.textContent = "";
data.forEach((post) => {
const li = document.createElement("li");
li.textContent = post.title;
ul.appendChild(li);
});
})

.catch((error) => {
// 👇 84
status.textContent = "データの取得に失敗しました";
});
*/



fetch("https://jsonplaceholder.typicode.com/posts", {
method: "POST", //我是来“送数据”的
headers: {
"Content-Type": "application/json" //我送的是 JSON
},
body: JSON.stringify({   //真正送给服务器的内容。JS 对象 → 转成 JSON → 发出去
title: "test title",
body: "test body",
userId: 1  
})
})
.then((response) => response.json())
.then((data) => {  //把服务器回你的东西  打印出来让你确认
console.log("サーバーから返却されたデータ:", data);
});




