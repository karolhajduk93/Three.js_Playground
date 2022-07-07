import { 
    SphereBufferGeometry,
    Group,
    MathUtils,
    Mesh, 
    MeshStandardMaterial,

} from "three";


function createMeshGroup(){
    const group = new Group();
    const geometry = new SphereBufferGeometry(0.25, 32, 32);
    const material = new MeshStandardMaterial({
        color: 'indigo',
        flatShading: true
    });

    const protoSphere = new Mesh(geometry, material)

    group.add(protoSphere);

    for (let i = 0; i < 1; i += 0.075){
        const sphere = protoSphere.clone();

        sphere.position.x = Math.cos(2 * Math.PI * i);
        sphere.position.y = Math.sin(2 * Math.PI * i);
        sphere.position.z = -i +0.5;

        sphere.scale.multiplyScalar(0.01 + i);
        group.add(sphere);
    }

    group.scale.multiplyScalar(2);

    const radiansPerSecond = MathUtils.degToRad(30);

    group.tick = (delta) => {
        group.rotation.z -= delta * radiansPerSecond

    };
    
    return group;
}

export { createMeshGroup  };
