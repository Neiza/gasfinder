'use strict';

const Options = (update) => {
  const divCont = $("<div class='div-cont hide'></div>");
  const div1 = $("<div class='div1'></div>");
  const div2 = $("<div class='div2'></div>");
  const div3 = $("<div class='div3'></div>");
  const div4 = $("<div class='div4'></div>");

  divCont.append(div1);
  divCont.append(div2);
  divCont.append(div3);
  divCont.append(div4);

  return divCont;
}
