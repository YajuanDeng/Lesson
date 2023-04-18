import { tb1Body } from "./createDom";

for (let j = 1; j < 10; j++) {
  // table row creation
  const row = document.createElement("tr");
  for (let i = 1; i <= j; i++) {
    const cell = document.createElement("td");
    cell.textContent = `${i} * ${j} = ${i*j}\t`
    row.appendChild(cell);
  }
  //row added to end of table body
  tb1Body.appendChild(row);
}
