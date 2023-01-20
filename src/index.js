//////// Variables Needed //////
const form = document.querySelector("#create-task-form");
const div = document.querySelector("#list");
const tasksList = document.querySelector("#tasks");

////// Form Submit Event ///////
document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const listItem = document.createElement("li");
    tasksList.appendChild(listItem);
    const description = e.target["new-task-description"].value;
    listItem.textContent = description;
    form.reset();
  });
});
