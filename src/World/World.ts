import { createLights } from './components/lights';
import { createCamera } from './components/camera';
//import { createMeshGroup  } from './components/meshGroup';
import { createScene } from './components/scene';
// import { createAxesHelper, createGridHelper } from './components/helpers'
// import { Train } from './components/Train/Train';
import { loadBirds } from './components/birds/birds.js';

import { createRenderer } from './systems/renderer';
import { Resizer } from './systems/Resizer';
import { Loop } from './systems/Loop';
import { createControls } from './systems/controls';


class World {

    private camera: any;
    private scene: any;
    private renderer: any;
    private loop: any;
    private controls: any;
    private birds: Array<any>;
    private activeBird: number;


    public state: boolean


    constructor(container) {
        this.camera = createCamera();
        this.scene = createScene();
        this.renderer = createRenderer()
        this.loop = new Loop(this.camera, this.scene, this.renderer);

        this.controls = createControls(this.camera, this.renderer.domElement);

        container.append(this.renderer.domElement);

        // //const meshGroup = createMeshGroup();
        // const gridHelper = createGridHelper();
        // const axesHelper = createAxesHelper();
        const {directionalLight, ambientLight } = createLights();
        // const train = new Train();
        
        this.loop.updatables.push(this.controls);
        // this.loop.updatables.push(train);
        //this.loop.updatables.push(meshGroup);
        //this.loop.updatables.push(this.camera);
        //this.loop.updatables.push(light);
     
        this.scene.add(directionalLight, ambientLight);
        //this.scene.add(meshGroup)
        // this.scene.add(gridHelper, axesHelper, train);

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

    async  init() {
        this.birds = await loadBirds();
        this.activeBird = 0;

        this.controls.target.copy(this.birds[this.activeBird].position);

        this.loop.updatables.push(this.birds[0], this.birds[1], this.birds[2])
        this.scene.add(this.birds[0], this.birds[1], this.birds[2]);
    }

    focusNext() {
        this.activeBird += 1;
        if(this.activeBird >= this.birds.length)
            this.activeBird = 0;
        
        this.controls.target.copy(this.birds[this.activeBird].position);
    }
    
}

export { World };