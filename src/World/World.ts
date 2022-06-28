import { createLights } from './components/lights.js';
import { createCamera } from './components/camera';
import { createShape } from './components/shape';
import { createScene } from './components/scene';

import { createRenderer } from './systems/renderer';
import { Resizer } from './systems/Resizer';
import { Loop } from './systems/Loop';


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

        container.append(this.renderer.domElement);

        const shape = createShape();
        const light = createLights();

        this.loop.updatables.push(shape);
        //this.loop.updatables.push(this.camera);
        //this.loop.updatables.push(light);
     
        this.scene.add(shape, light);

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