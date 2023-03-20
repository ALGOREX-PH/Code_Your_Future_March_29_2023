
document.querySelector("#List_Down").onclick = function()
{
    if (document.querySelector("#Add_Task input").value.length == 0) 
    {
        alert("Please enter the name of the task.");
    }
    else 
    {
        document.querySelector("#Task_Area").innerHTML += `
           <div class = "task"> 
                <span id = "Task_Name"> ${document.querySelector("#Add_Task input").value}</span>
                <button class = "Delete_Task">
                    <i class = "far fa-trash-alt"></i>
                </button>
            </div>
            `;

        var current_tasks = document.querySelectorAll(".Delete_Task");

        for (var x = 0; x < current_tasks.length; ++x)
        {
            current_tasks[x].onclick = function()
            {
                this.parentNode.remove();
            }
        } // for loop to delete task who has its delete button clicked

        var tasks_to_complete = document.querySelectorAll(".task"); 
        for (var y = 0; y < tasks_to_complete.length; ++y)
        {
            tasks_to_complete[y].onclick = function()
            {
                this.classList.toggle("Completed");
            }
        } // for loop to mark task as completed when its name is clicked
        document.querySelector("#Add_Task input").value = "";
    }
}