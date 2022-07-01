import { 
    BoxBufferGeometry, 
    Mesh, 
    MeshStandardMaterial, 
    TorusGeometry, 
    MathUtils,
    TextureLoader
} from "three";




function createMaterial() {

    const textureLoader = new TextureLoader();
    

    const texture = textureLoader.load('./assets/textures/uv-test-bw.png')
    console.log(texture);
    const material = new MeshStandardMaterial({
        map: texture,
        color: 'gray'
    });

    return material
}

function createShape(){
    const geometry = new BoxBufferGeometry(2, 2, 2);
    //const geometry = new TorusGeometry( 1.5, 0.8, 45, 200 ) 
    const material = createMaterial();

    const shape = new Mesh(geometry, material);

    shape.rotation.set(-0.9, 0.5, 0);
    shape.scale.set(1, -1, 1);

    const radiansPerSecond = MathUtils.degToRad(10.8);

    shape.tick = (delta) => {
        shape.rotation.z += radiansPerSecond * delta;
        shape.rotation.x += radiansPerSecond * delta;
        shape.rotation.y += radiansPerSecond * delta;        
    }

    return shape;
}

export { createShape };
