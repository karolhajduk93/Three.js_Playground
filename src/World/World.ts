import { createLights } from './components/lights.js';
import { createCamera } from './components/camera';
import { createShape } from './components/shape';
import { createScene } from './components/scene';

import { createRenderer } from './systems/renderer';
import { Resizer } from './systems/Resizer';
import { Loop } from './systems/Loop';
import { createControls } from './systems/controls';


class World {

    private camera: any;
    private scene: any;
    private renderer: any;
    private loop: any;
    public state: boolean

    constructor(container) {
        this.camera = createCamera();
        this.scene = createScene();
        this.renderer = createRenderer()
        this.loop = new Loop(this.camera, this.scene, this.renderer)

        const controls = createControls(this.camera, this.renderer.domElement);
        //controls.target.set(1, 2, 3);

        container.append(this.renderer.domElement);

        const shape = createShape();
        const {directionalLight, ambientLight } = createLights();

        this.loop.updatables.push(controls);
        //this.loop.updatables.push(shape);
        //this.loop.updatables.push(this.camera);
        //this.loop.updatables.push(light);
     
        this.scene.add(shape, directionalLight, ambientLight);

        new Resizer(container, this.camera, this.renderer);

    }

    render(): void {
        this.renderer.render(this.scene, this.camera)
    }

    start() {
        this.state = true;
        this.loop.start();
        
    }

    stop() {
        this.state = false;
        this.loop.stop();
        
    }
    
}

export { World };