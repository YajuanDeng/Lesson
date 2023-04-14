import './style.css'

const button = document.querySelector('.btn')
const text = document.querySelector('#text')
const userInfo = document.querySelector('#userInfo')


window.onload = (event) => {
    fetch(`http://192.168.1.6:9290/user`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        text.value = "";
        userInfo.innerHTML = "";
        data.forEach((element) => {
          text.value += JSON.stringify(element) + "\n";
          const content = document.createElement("div");
          content.innerHTML = `
      <h3>Name:<h3>
      <span>${element.name}</span>
      <br>
      <h3>Age:<h3>
      <span>${element.age}</span>
      `;
          userInfo.appendChild(content);
        });
      })
      .catch((err) => {
        text.value = err;
      });
  }



button.addEventListener('click',(e)=> {
  e.preventDefault()
  fetch(`http://192.168.1.6:9290/user`).then(response => {
    return response.json()
  })
  .then(data => {
    text.value = "";
    userInfo.innerHTML = ''
    data.forEach(element => {
      text.value += JSON.stringify(element) + '\n'
      const content = document.createElement('div')
      content.innerHTML = `
      <h3>Name:<h3>
      <span>${element.name}</span>
      <br>
      <h3>Age:<h3>
      <span>${element.age}</span>
      `;
      userInfo.appendChild(content)

    });
  })
  .catch(err => {
    text.value = err
  })
})