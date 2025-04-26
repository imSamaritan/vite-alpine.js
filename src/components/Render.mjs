export const Render = (alpineData) => {
  document.querySelector("#app").innerHTML = /*html*/ `
		<main x-data="${alpineData}">
		
		</main>
	`
}
