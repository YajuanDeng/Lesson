import { GetElement } from "./getElement";
import { DragElement } from "./dragElement";

class DragUnit extends DragElement {
    
    constructor(target){
        super(target)
        this.target = target
        this.mouseMove()

    }

    mouseMove = () => {
        document.body.addEventListener('mousemove', (event) => {
            if (this.mouseDown) {
                console.log('here');
            }
        })
    }
}

export { DragUnit }
// 对dragElement的拓展，有dragElement的所有功能