{
  // const mySpan = document.querySelector("span");
  // const mySpanList = document.querySelectorAll("span");
  // console.log(mySpan);
  // const add = document.getElementById("add");
  // console.log(add);
  // const myAdd = document.getElementsByClassName("myAdd");
  // console.log(myAdd);
}
{
  // const span = document.querySelector("span")
  // const list = []
  // let num = 0
  // span.addEventListener('click', () => {
  //     console.log(++num);
  // })
  // let num2 =100
  // span.onclick = function () {
  //     console.log(--num2);
  // }
}
{
  const span = document.querySelector("span");
  const list = [];
  let num = 0;
  span.addEventListener("click", () => {
    console.log(++num);
    const input = document.querySelector("input").value;
    console.log(input);
    //document.querySelector("input").value = ""
    const inputDom = document.querySelector("input");
    inputDom.value = "";

    list.push(+input);
    console.log(list);

    const sortList = mySort(list);
    console.log("This is my sort list", sortList);

    const tbody = document.querySelector("tbody")
    tbody.innerHTML = ""
    sortList.forEach((element, index) => {
        // console.log(element, index);
        const tr = document.createElement("tr")
        const th = document.createElement("th")
        th.textContent = index +1
        const td = document.createElement("td")
        td.textContent = element

        tr.append(th,td)
        tbody.append(tr)

    })

  });
  /**
   *
   * @function mySort 对数据进行排序
   */
  function mySort(list) {
    // 应该先做一个克隆，以免影响原数据
    const flatList = list.flat(Infinity);

    function isNumber(something) {
      return something = +something;
    }
    const filterList = flatList.filter(el => isNumber(el));

    const setList = [...new Set(filterList)];

    const sortList = setList.sort((a, b) => a - b);

    return sortList;
  }
}
