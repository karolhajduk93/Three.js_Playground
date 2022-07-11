import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { setupModel } from './setupModel';

async function loadBirds() {
    const loader = new GLTFLoader();

    const [parrotData, flamingoData, storkData] = await Promise.all([ 
        loader.loadAsync('assets/models/Parrot.glb'),
        loader.loadAsync('assets/models/Flamingo.glb'),
        loader.loadAsync('assets/models/Stork.glb')
    ]);

    const parrot = setupModel(parrotData);
    parrot.scale.set(0.1, 0.1, 0.1);
    parrot.position.set(0, 0, 5);

    const flamingo = setupModel(flamingoData);
    flamingo.scale.set(0.1, 0.1, 0.1)
    flamingo.position.set(25, 0, -10);

    const stork = setupModel(storkData);
    stork.scale.set(0.1, 0.1, 0.1)
    stork.position.set(-10, -5, -20);

    return [ stork, flamingo, parrot ];
}

export { loadBirds };