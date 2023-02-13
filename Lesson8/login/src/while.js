window.addEventListener("load", () => {
  {
    let i = 0;
    while (i < 10) {
      console.log("while", i);
      i++;
    }
    console.log("========================");

    for (let i = 0; i < 10; i++) {
      console.log("for", i);
    }
    console.log("========================");

    const list = [12, 13, 34, 23];

    for (let key in list) {
      console.log(key);
    }

    for (let element of list) {
      console.log(element);
    }
    console.log("========================");

    const user = {
      name: "claire",
      age: 20,
      profile: {
        address: "xxxxxxx",
      },
    };
    for (let key in user) {
      console.log(key);
    }

    list.forEach((element, index) => {
      console.log(element);
      console.log(index);
      if (index == 2) {
        return;
        // forEach只要开始无法停止
      }
    });

    list.some((element, index) => {
      console.log(element);
      console.log(index);
      if (index == 2) {
        return true;
        // 在return true时可以停下来
      }
    });

    list.every((element, index) => {
      console.log(element);
      console.log(index);
      if (index === 2) {
        return false;
      }
      return true;
    });
    //  只有return true才能完成循环
  }
  {
    const number = 5
    const numberList = [34,69,19,39,432]
    console.log(numberList.map(el => el + number));
    numberList.map(el => console.log(el + number));
  }
  {
    console.log("=====================");
    for(let i = 1; i < 10; i++) {
        let chart = ""
        for (let j = 1; j <= i; j++) {
            const number = i*j
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
});
