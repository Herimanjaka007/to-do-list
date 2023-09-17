import { handleClick,loadTask, handleKeyDown } from "./function.js";

document.addEventListener("DOMContentLoaded", () => {

    loadTask();
    document.querySelector("#addTask")
        .addEventListener("click", handleClick);
    
    document.addEventListener('keydown',handleKeyDown)
        
})