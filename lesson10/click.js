// const elementList = [...document.querySelectorAll('.one-unit')]

// elementList.forEach(el => {
//     el.addEventListener('click', elementClick)
// })

// function elementClick(){
//     console.log("here");
//     console.log(event);

//     const target = event.currentTarget
//     console.log(target);

//     const addUnit = target.classList.contains('add-unit')
//     console.log(addUnit);

//     if(addUnit) {
//         addUnitFunc(target)
//     }else{
//         selectUnitFunc(target)
//     }

// }
// function addUnitFunc(target) {
//     console.log("add Unit");
//     const newUnit = document.createElement('div')
//     newUnit.classList.add('one-unit')
//     newUnit.innerHTML = `
//         <span class="currency">NEW</span>
//         <div>
//           <span class="num">66</span>
//           <span class="symbol">%</span>
//         </div>
//     `
//     console.log(target.parentNode);

//     // target.parentNode.insertBefore(newUnit, target);

//     target.parentNode.insertBefore(newUnit, target.parentNode.lastElementChild)

//     newUnit.addEventListener('click',elementClick)

// }
// function selectUnitFunc(target){
//     console.log("select unit");
//     const elementList = [...document.querySelectorAll(".one-unit")];
//     elementList.some(el => {
//         if(el.classList.contains('selected-unit')) {
//             el.classList.remove('selected-unit')
//             return false
//         }
//     })
//     // 两种循环都可以实现，但是在数据量特别大的时候上面一种运算速度更快
//     // for(let el of elementList) {
//     //     el.classList.remove('selected-unit')
//     // }

//     target.classList.add('selected-unit')
// }

class ElementClick {
  constructor() {
    console.log("自带的构造函数");
  }
  run = () => {
    console.log("自定义的函数");
    // this._elementListAddClickListener();
  };
  addListener = () => {
    this._elementListAddClickListener();

  }
  removeListener = () => {
    this._getElementList().forEach(el => {
        el.removeEventListener("click",this._elementClick)
    })

  }


  _getElementList = () => {
    return [...document.querySelectorAll(".one-unit")];
  };

  _elementListAddClickListener = () => {
    this._getElementList().forEach((el) => {
      el.addEventListener("click", this._elementClick);
    });
  };

  _elementClick = (event) => {
    const target = event.currentTarget;
    const addUnit = target.classList.contains("add-unit");
    // if (addUnit) {
    //   addUnitFunc(target);
    // } else {
    //   selectUnitFunc(target);
    // }
    addUnit ? this._addUnitFunc(target) : this._selectUnitFunc(target);
  };

  _addUnitFunc = (target) => {
    
    const newUnit = document.createElement('div')
    newUnit.classList.add('one-unit')
    newUnit.innerHTML = `
        <span class="currency">NEW</span>
        <div>
          <span class="num">66</span>
          <span class="symbol">%</span>
        </div>
    `
    console.log(target.parentNode);
    // target.parentNode.insertBefore(newUnit, target);
    target.parentNode.insertBefore(newUnit, target.parentNode.lastElementChild)
    newUnit.addEventListener('click',this._elementClick)
  };

  _selectUnitFunc = (target) => {

    const elementList = this._getElementList()
    elementList.some(el => {
        if(el.classList.contains('selected-unit')) {
            el.classList.remove('selected-unit')
            return false
        }
    })
    // 两种循环都可以实现，但是在数据量特别大的时候上面一种运算速度更快
    // for(let el of elementList) {
    //     el.classList.remove('selected-unit')
    // }
    target.classList.add('selected-unit')
  };

}

export { ElementClick }