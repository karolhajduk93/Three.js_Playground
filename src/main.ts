import { World } from "./World/World";

async function main() {

	const container = document.querySelector('#scene-container');

	const button = document.querySelector('.change-focus')

	

	const world = new World(container);

	await world.init();


	world.start();
	button.addEventListener('click', () => world.focusNext())
	// container.addEventListener('click', ()=> {
	// 	world.state ? world.stop() : world.start();
	// });

	//container.onchange();
	
	
}

main().catch((err) => {
	console.log(err)
});