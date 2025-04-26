export const Render = (alpineData) => {
  document.querySelector("#app").innerHTML = /*html*/ `
		<main x-data="${alpineData}">
			<h3 x-text=message></h3>
			<h1 x-text=count></h1>
			<button x-on:click=increment>Counter Up</button>
		</main>
	`
}
