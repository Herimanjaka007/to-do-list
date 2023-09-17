const task = [];
const data = JSON.parse(localStorage.getItem("task")) ?? [];

const updateStorage = () => {
    let taskItem = document.querySelectorAll(".task-item");
    task.length = 0;

    for(let item of taskItem) {
        //stocker dans task [String : une tache , boolean : done or not]
        task.push([item.innerText, item.classList.contains("text-decoration-line-through")]);
    }
    localStorage.setItem("task", JSON.stringify(task));
}

const onRemoveClick = (e) => {
    e.currentTarget.parentElement.remove();
    updateStorage();
}

const onChange = (e) => {
    if (e.currentTarget.checked) {
        e.currentTarget.parentElement.querySelector("p").classList.add("text-decoration-line-through");
    }
    else {
        e.currentTarget.parentElement
            .querySelector("p").classList.remove("text-decoration-line-through");
    }
    
    updateStorage();
}

export const loadTask = () => {
    let taskSection = document.querySelector(".task");
    if(data?.length===0){
        let template = document.querySelector("#no-task").content.cloneNode(true);
        taskSection.append(template);
    }
    else{
        data.forEach(element => {
            let template = document.querySelector("template").content.cloneNode(true);
            let taskItem = template.querySelector(".task-item");

            template.querySelector(".form-check-input").addEventListener("change", onChange);
            template.querySelector(".remove-task").addEventListener("click", onRemoveClick);
            taskItem.innerText = element[0];
            // si la tache est deja faite   
            if (element[1]){
                taskItem.classList.add("text-decoration-line-through")
                template.querySelector("input[type='checkbox']").checked = true;
            }
            taskSection.append(template);
        });
    }
}

export const handleClick = () => {
    const input = document.querySelector("input[name='input']");
    if (input.value.trim() !== "") {
        let taskSection = document.querySelector(".task");
        let template = document.querySelector("template").content.cloneNode(true);
        let taskItem = template.querySelector(".task-item");

        template.querySelector(".form-check-input").addEventListener("change", onChange);
        template.querySelector(".remove-task").addEventListener("click", onRemoveClick);

        taskItem.innerText = input.value.trim();
        input.value = "";
        if(data?.length ===0){
            taskSection.innerHTML ="";
            data.length = 1;
        }
        taskSection.append(template);
        updateStorage();
    }
}

export const handleKeyDown = (e)=>{
    document.removeEventListener('click',handleClick)
    if(e.key === "Enter")
        handleClick();
}