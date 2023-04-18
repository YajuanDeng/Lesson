import { tb1Body } from "./createDom";

for (let i = 1; i < 10; i++) {
  const row = document.createElement("tr");
  for (let n = 9 - i; n > 0; n--) {
    // const element = array[n];
    const blank = document.createElement("td");
    blank.textContent = ""
    row.appendChild(blank);
    }
  for (let j = 1; j < i + 1; j++) {
    const cell = document.createElement("td");
    cell.textContent = `${j} * ${i} = ${i * j}\t`;
    row.appendChild(cell);
  }
  
  tb1Body.appendChild(row);
}

