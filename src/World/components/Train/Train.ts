import { Group, MathUtils } from "three";

import { createMeshes } from './meshes';

class Train extends Group {
meshes: any;
wheelSpeed: number;
    constructor(){
        super();

        this.meshes = createMeshes();
        this.wheelSpeed = MathUtils.degToRad(24);

        this.add(
            this.meshes.nose,
            this.meshes.cabin,
            this.meshes.smallWheelRear,
            this.meshes.smallWheelCenter,
            this.meshes.smallWheelFront,
            this.meshes.bigWheel
        )
    }

    tick(delta) {  
        this.meshes.bigWheel.rotation.y += this.wheelSpeed * delta;
        this.meshes.smallWheelRear.rotation.y += this.wheelSpeed * delta;
        this.meshes.smallWheelCenter.rotation.y += this.wheelSpeed * delta;
        this.meshes.smallWheelFront.rotation.y += this.wheelSpeed * delta;
      }
}

export { Train }