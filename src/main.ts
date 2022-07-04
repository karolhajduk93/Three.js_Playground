import { World } from "./World/World";

function main() {

	const container = document.querySelector('#scene-container');

	const world = new World(container);


	world.start();
	// container.addEventListener('click', ()=> {
	// 	world.state ? world.stop() : world.start();
	// });

	//container.onchange();
	
	
}

main();