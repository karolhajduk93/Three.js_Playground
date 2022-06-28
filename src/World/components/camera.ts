import { PerspectiveCamera } from "three";

function createCamera() {
    const camera = new PerspectiveCamera(
        35, // fov = Field of View
        1, // aspect ratio (dummy value)
        0.1, // near clipping plane
        100 // far clipping plane
    );

    camera.position.set(0, 0, 15);

    camera.tick = (delta) => {
        camera.position.z += delta
    }

    return camera;
}

export { createCamera }