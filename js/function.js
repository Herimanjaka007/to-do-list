const onRemoveClick = (e) => {
    e.currentTarget.parentElement.remove()
}

const onChange = (e) => {
    if (e.currentTarget.checked)
        e.currentTarget.parentElement.querySelector("p").classList.add("text-decoration-line-through");
    else
        e.currentTarget.parentElement
            .querySelector("p").classList.remove("text-decoration-line-through");

}

export const handleClick = () => {
    const input = document.querySelector("input[name='input']");

    if (input.value.trim() !== "") {
        let taskSection = document.querySelector(".todo");
        let template = document.querySelector("template").content.cloneNode(true);
        let taskItem = template.querySelector(".task-item");

        template.querySelector(".form-check-input").addEventListener("change", onChange);
        template.querySelector(".remove-task").addEventListener("click", onRemoveClick);

        taskItem.innerText = input.value.trim();
        taskSection.append(template);
        input.value = "";

    }
    else
        alert("Veuillez saisir une tache valide");
}