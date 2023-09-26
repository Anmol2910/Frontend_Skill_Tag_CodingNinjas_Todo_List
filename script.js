//varibales required to for adding features to html page
const inputBox=document.getElementById('input-box');   // Get the input box element
const listBlock=document.getElementById('list-block'); // Get the list block element
const taskCount=document.getElementById('count'); // Get the task count element

let count=0;   // Initialize a count variable to keep track of the number of tasks

function addTask(){
    // to check if the input box is empty
    if(inputBox.value === ""){
        alert("The input field should not be blank");
    }
    else{

        // Create a new list item (li) and set its innerHTML to the value entered in the input box
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;

        // Append the new list item to the list block
        listBlock.appendChild(li);

        // Increment the task count and update the taskCount element's innerHTML
        count++;
        taskCount.innerHTML=count;

        // Create a cross mark (X) and add it in front of the list item for deletion
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    // After adding a task, clear the input box

    inputBox.value="";
}

// Add an event listener to the list block for handling clicks on list items and the delete (X) marks

listBlock.addEventListener('click',function(e){
    // Check if the clicked element is a list item (LI)
    if(e.target.tagName=="LI"){
        // Toggle the "checked" class to mark/unmark the task as completed
        e.target.classList.toggle("checked")
    }
    // Check if the clicked element is the delete (X) mark (SPAN)
    else if(e.target.tagName=="SPAN"){

        // Remove the parent list item from the list block
        e.target.parentElement.remove();

        // Decrease the task count and update the taskCount element's innerHTML
        count--;
        taskCount.innerHTML=count;
    }
},false);