import { tb1Body } from "./createDom";

for (let i = 1; i < 10; i++) {
  // table row creation
  const row = document.createElement("tr");
  for (let j = 1; j < 11 - i ; j++) {
    const cell = document.createElement("td");
    cell.textContent = `${i} * ${j} = ${i * j}\t`;
    row.appendChild(cell);
  }
  //row added to end of table body
  tb1Body.appendChild(row);
}
