import { PerspectiveCamera } from "three";

function createCamera() {
    const camera = new PerspectiveCamera(
        35, // fov = Field of View
        1, // aspect ratio (dummy value)
        0.1, // near clipping plane
        100 // far clipping plane
    );

    let zoomOut = true;
    let positionValue = 0
    camera.position.set(0, 0, 15);

    camera.tick = (delta) => {
   
        if(zoomOut){
            positionValue = camera.position.z - 15 + 5*delta
            if(positionValue > 30)
                zoomOut = false;   
        }
        else{
            positionValue = camera.position.z - 15 - 5*delta
            if(positionValue < 0)
                zoomOut = true; 
        }
        camera.position.z = positionValue + 15;
    }



    return camera;
}

export { createCamera }