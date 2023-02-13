// 使用document.write()写入的乘法口诀表

document.write("table");
for (let row = 0; row < 10; row++) {
  document.write("<tr>");
  for (let blank = 9 - row; blank > 0; blank--) {
    document.write("<td></td>");
  }
  for (let column = row; column > 0; column++) {
    document.write(
      "<td>" + row + " X " + column + " = " + column + row + "</td>"
    );
  }
  document.write("</tr>");
}

document.write("</table>");
document.write("==================================================================")
document.write("<table>");
for (var i = 1; i <= 9; i++) {
  //控制行数，总共9行
  document.write("<tr>");
  for (var j = 1; j <= i; j++) {
    //控制列数
    document.write("<td>");
    document.write(j + "*" + i + "=" + i * j );
    document.write("</td>");
  }
  document.write("</tr>");
}
document.write("</table>");

document.write("==================================================================")

document.write("<table>");
for (let row = 1; row < 10; row++) {
  document.write("<tr>");
  for (let column = 1; column <= row; column++) {
    document.write("<td>")
    document.write(row + " * " + column + " = " + column * row )   
    document.write("</td>")
  }
  document.write("</tr>")
}
document.write("</table>");
document.write(
  "=================================================================="
);

document.write("<table>");
for (let row = 1; row < 10; row++) {
  document.write("<tr>");
  for (let blank = 9 - row; blank > 0; blank--) {
    document.write("<td></td>");
  }
  for (let column = row; column > 0; column--) {
    document.write("<td>");
    document.write(column + " * " + row + " = " + column * row);
    document.write("</td>");
  }
  document.write("</tr>");
}
document.write("</table>");

document.write("=============================================================");
