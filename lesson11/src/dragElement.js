import { GetElement } from "./getElement";

class DragElement {
  constructor(dragElement, moveElement) {
    this.dragElement = dragElement;
    this.moveElement = moveElement || dragElement;
    this.mouseDownPosition = { x: 0, y: 0 };
    this.moveDistance = { x: 0, y: 0 };
    this.originalMoveDistance = { x: 0, y: 0 };
    this.mouseDown = false;
    this.transition = dragElement.style.transition
    this.zIndex = dragElement.style.zIndex
    this.mousedown()
    this.mouseup()
    this.mousemove()
    this.targetClick()
  }

  mousedown() {
    document.body.addEventListener("mousedown", (event) => {
        this.mouseDownPosition.x = event.clientX;
        this.mouseDownPosition.y = event.clientY;

    });
  }
  mouseup() {
    document.body.addEventListener("mouseup", () => {
        this.originalMoveDistance.x = this.moveDistance.x;
        this.originalMoveDistance.y = this.moveDistance.y;

    });
  }
  mousemove() {
    document.body.addEventListener("mousemove", (event) => {
        if (this.mouseDown) {
          const target = this.moveElement;
          this.moveDistance.x = event.clientX - this.mouseDownPosition.x + this.originalMoveDistance.x;
          this.moveDistance.y = event.clientY - this.mouseDownPosition.y + this.originalMoveDistance.y;
          target.style.transform = `translate(${this.moveDistance.x}px, ${this.moveDistance.y}px)`;
        }

    });
  }
  targetClick = () => {
    this.dragElement.addEventListener('mousedown', () => {
        this.mouseDown = true
        this.moveElement.style.transition = 'none'
        this.moveElement.style.zIndex = 999
    })
    this.dragElement.addEventListener("mouseup", () => {
      this.mouseDown = false;
      this.dragElement.style.transition = this.transition
      this.dragElement.style.zIndex = this.zIndex
    });

  }

}
new DragElement(GetElement.getMoveBar(), GetElement.getContainer())
// new DragElement(GetElement.getUnits()[0]);
GetElement.getUnits().forEach(el => {
  new DragElement(el);
})


export { DragElement };