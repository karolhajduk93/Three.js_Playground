import { Clock } from "three";

class Loop {
camera: any;
scene: any;
renderer: any;
updatables: any[];
paused: boolean
private clock = new Clock();
    constructor(camera, scene, renderer){
        this.camera = camera;
        this.scene = scene;
        this.renderer = renderer;
        this.updatables = []
    }

    start() {
        this.renderer.setAnimationLoop(() => {
            this.tick();
            this.renderer.render(this.scene, this.camera)
        });
    }

    stop() {
        this.renderer.setAnimationLoop(null);
        this.paused = true;
    }

    tick() {
        let delta = this.clock.getDelta();

        if(this.paused){
            console.log(delta)
            delta = 0;
            this.paused = false;
        }

        this.updatables.forEach(object => {
            object.tick(delta);
       });
    }
}

export { Loop }