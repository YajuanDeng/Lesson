import "@/css/style.scss"

// 防抖 节流
function search() {
    console.log("Try to search");
}
let timeHandle =null

document.getElementById('input').addEventListener('keyup', () => {
    if(timeHandle) {
        clearTimeout(timeHandle)
    }

    timeHandle = setTimeout(() => { search() }, 500)
})
// 即使放在异步，还是会阻塞程序运行
setTimeout(() => { alert('hello world')},500)

let time = 0
let step = 10
setInterval(() => {
  time += step;
  // console.log(`Time: ${time}ms`);
  document.getElementById("app").innerHTML = `
    <h1>Time: ${time}ms</h1>
    `;
}, step);

new Promise((resolve, reject) => {
    try {
        setTimeout(() => {
            console.log('hello world');
        }, 1800)
    } catch (error) {
        console.log(error);
    }
});