import { 
    AmbientLight,
    DirectionalLight, 
    HemisphereLight
    //MathUtils 
} from "three";

function createLights(){
    //const light = new DirectionalLight('#f7f781', 16); //yellowish
    const directionalLight = new DirectionalLight('white', 13);
    //const light = new SpotLight('#f7f781', 7); //yellowish
    const ambientLight = new HemisphereLight('white', 13);
    directionalLight.position.set(-10, 5, 10);
    //const radiansPerSecond = MathUtils.degToRad(36);

    // light.tick = (delta) => {
    //     light.position.x = 100 *delta * Math.sin(Date.now() / 240);
    //     light.position.z = 100 *delta * Math.cos(Date.now() / 240);
     
    // }

    return {directionalLight, ambientLight };
}

export { createLights }