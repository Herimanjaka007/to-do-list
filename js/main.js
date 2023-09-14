import { handleClick } from "./function.js";

document.addEventListener("DOMContentLoaded", () => {
    
    document.querySelector("#addTask")
        .addEventListener("click", handleClick);
})