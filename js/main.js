
var PrioirityColor;

function Selected(a) {

    var label = a.value;

    if (label==1) {
        PrioirityColor = 'red';
         
    } else if (label==2) {
        PrioirityColor='yellow';

    } else if (label==3) 

        PrioirityColor='green';
}



function test3(){
    
    var form = document.querySelector('.formWithValidation');
    var validateBtn = form.querySelector('.validateBtn');
    var Task = form.querySelector('.Task');
    var TaskDescription = form.querySelector('.TaskDescription');
    var priority = form.querySelector('.priority');
    var fields = form.querySelectorAll('.field');
    var dateInf = form.querySelector('.dateInf');
    
    
    
    var placeholderTask2= document.createElement('div');
    placeholderTask2.className = "placeholder-task";
    var placeholderTaskText = document.createElement('h1');
    
    var taskPlaceholder2 = document.createElement('div');
    taskPlaceholder2.className = "placeholder";
    
    var taskPlaceholderPriority2 = document.createElement('div');
    taskPlaceholderPriority2.className = "placeholder-priority"
    
    
    var taskPlaceholderPriorityClr2 = document.createElement('div');
    taskPlaceholderPriorityClr2.className = " placeholder-priority-clr";
    taskPlaceholderPriorityClr2.style.backgroundColor = PrioirityColor;
    
     
    var PlaceholderDescription2 = document.createElement('div');
    PlaceholderDescription2.className = 'placeholder-description';
    
    var dateInf2 = document.createElement('div');
    dateInf2.className = 'placeholder-data';
    
    var CheckBox = document.createElement('input');
    CheckBox.type = ('checkbox'); 
    CheckBox.className = 'placeholder-status';
    
    

    placeholderTaskText.innerHTML = Task.value;
    PlaceholderDescription2.innerHTML = TaskDescription.value;
    dateInf2.innerHTML = dateInf.value;
    
    task.appendChild(taskPlaceholder2);
    taskPlaceholderPriority2.appendChild(taskPlaceholderPriorityClr2);
    taskPlaceholder2.appendChild(taskPlaceholderPriority2);    
    taskPlaceholder2.appendChild(placeholderTask2);
    placeholderTask2.appendChild(placeholderTaskText);
    taskPlaceholder2.appendChild(PlaceholderDescription2);
    taskPlaceholder2.appendChild(dateInf2);
    taskPlaceholder2.appendChild(CheckBox);
    
    Task.value = "";
    TaskDescription.value = "";
    
    
}
 


document.getElementById("btn").onclick = test3;


  function check() {
  var pole1 = document.querySelector('.Task');
  
  document.getElementById('btn').disabled = pole1.value  ? false : "disabled";}



   





