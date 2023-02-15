export function isNumber(element) {
    return element === +element
}

export function isString(element) {
    return typeof(element) === "string"
}



// const list = [324,12,434,54,1234,"asd","2",434]

// export function mySort(sortList) {
//   const flatList = sortList.flat(Infinity);
//   const filterList = flatList.filter((element) => isNumber(+element));
//   const setList = [...new Set(filterList)];
//   const mapList = setList.map((element) => +element);

//   mapList.sort((a, b) => a - b);

//   console.log(mapList);
// }
// mySort(list)