// 后台打印各种乘法口诀
{
  console.log("=====================");
  for (let i = 1; i < 10; i++) {
    let chart = "";
    for (let j = 1; j <= i; j++) {
      const number = i * j;
      chart += `${j} * ${i} = ${number}\t`;
    }
    console.log(chart);
  }
  console.log("=====================================================");

  for (let i = 1; i < 10; i++) {
    let chart = "";

    for (let n = 9 - i; n > 0; n--) {
      chart += "\t\t\t";
    }
    for (let j = i; j > 0; j--) {
      const number = i * j;
      chart += `${j} * ${i} = ${number}\t`;
    }
    console.log(chart);
  }

  console.log("====================================");

  for (let i = 9; i >= 1; i--) {
    let chart = "";
    for (let j = 1; j <= i; j++) {
      const number = i * j;
      chart += `${j} * ${i} = ${number}\t`;
    }
    console.log(chart);
  }
}
