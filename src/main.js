import "bootstrap/dist/js/bootstrap.bundle.js"
import "./style.css"
import Alpine from "alpinejs"
import { Render } from "./components/Render.mjs"

window.Alpine = Alpine
Alpine.start()

const run = () => {
  Alpine.data("app", () => ({}))

  Render("app")
}

document.addEventListener("alpine:init", run())
