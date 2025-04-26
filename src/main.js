import "./style.css"
import Alpine from "alpinejs"
import { Render } from "./components/Render.mjs"

window.Alpine = Alpine
Alpine.start()

const run = () => {
  Alpine.data("app", () => ({
    message: "Hello, Alpine.js!",
    count: 0,
    increment() {
      this.count++
    },
  }))

  Render("app")
}

document.addEventListener("alpine:init", run())
