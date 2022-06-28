import { DirectionalLight, MathUtils } from "three";

function createLights(){
    const light = new DirectionalLight('#f7f781', 16); //yellowish
    //const light = new SpotLight('#f7f781', 7); //yellowish

    light.position.set(-10, 5, 10);
    const radiansPerSecond = MathUtils.degToRad(36);

    light.tick = (delta) => {
        // light.position.x = 100 *delta * Math.sin(Date.now() / 240);
        // light.position.z = 100 *delta * Math.cos(Date.now() / 240);
     
    }

    return light;
}

export { createLights }