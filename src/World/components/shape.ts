import { Mesh, MeshStandardMaterial, TorusGeometry, MathUtils } from "three";

function createShape(){
    //const geometry = new BoxBufferGeometry(2, 2, 2);
    const geometry = new TorusGeometry( 1.5, 0.8, 45, 200 ) 
    const material = new MeshStandardMaterial({
        color: '#361b05'
    });

    const shape = new Mesh(geometry, material);

    shape.rotation.set(-0.9, 0.5, 0);
    shape.scale.set(1, -1, 1);

    const radiansPerSecond = MathUtils.degToRad(10.8);

    shape.tick = (delta) => {
        console.log(shape.rotation.z)
        console.log(shape.rotation.x)
        console.log(shape.rotation.y)
        shape.rotation.z += radiansPerSecond * delta;
        shape.rotation.x += radiansPerSecond * delta;
        shape.rotation.y += radiansPerSecond * delta;        
    }

    return shape;
}

export { createShape };