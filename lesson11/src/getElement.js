class GetElement {
  static oneUnitClass = "one-unit";
  static addUnitClass = "add-unit";
  static selectedUnitClass = "selected-unit";
  static moveBarClass = "moveBar";
  static containerClass = "container";
  // 是否要取代里面的内容取决于是否影响理解及减少冗余，二者权衡的结果  

  static getUnits() {
    return [...document.querySelectorAll("." + GetElement.oneUnitClass)].filter((el) =>
      !el.classList.contains(GetElement.addUnitClass)
    );
  }

  static getAddElement() {
    return document.querySelector("." + GetElement.addUnitClass);
  }

  static getSelectUnit() {
    return document.querySelector("." + GetElement.selectedUnitClass);
  }

  static getMoveBar() {
    return document.querySelector("." + GetElement.moveBarClass);
  }

  static getContainer() {
    return document.querySelector("." + GetElement.containerClass);
  }
}

export { GetElement }

