// 82
const status = document.getElementById("status");
const ul = document.getElementById("postList");

// 取得中
status.textContent = "Loading...";
fetch("https://jsonplaceholder.typicode.com/posts")
.then((response) => response.json())
.then((data) => {
// console.log(data); // 80 
// 完了後：Loading を消す
status.textContent = "";

data.forEach((post) => {
const li = document.createElement("li");
li.textContent = post.title;
ul.appendChild(li);
});
});








