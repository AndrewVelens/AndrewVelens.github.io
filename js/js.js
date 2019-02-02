function test3(){
    var element = document.getElementById('task');
    var link = document.createElement('div');
    var br = document.createElement('br');
    link.className="placeholder";
    
    link.innerHTML = ' Go to Google ';
    link.href = 'https://www.youtube.com/results?search_query=sorax';
    element.appendChild(br);
    element.appendChild(link);
}


/*
var elem = document.getElementById('second');
function someFunc(){

if(document.getElementById("name").value > 0) {
    alert('oook')
} 
    
}
document.getElementById("btn").onclick = someFunc;

 function fun1() {
    var sel=document.getElementById('prioritySelect').selectedIndex;
    var options=document.getElementById('prioritySelect').options;
    switch (options[sel].value) {
  case "High":
    taskPlaceholderPriorityClr2.className = " placeholder-priority-clr placeholder-priority-clr-yellow" "
    break;
  case "Medium":
    alert( 'В точку!' );
    break;
  case "Low":
    alert( 'Перебор' );
    break;
  default:
    alert( 'Я таких значений не знаю' );
}
}


var task = document.getElementById('task');
    var taskPlaceholder = document.getElementById('taskPlaceholder');
    var taskPlaceholderPriority = document.getElementById('taskPlaceholderPriority');
    var taskPlaceholderPriorityClr = document.getElementById('taskPlaceholderPriorityClr');
    
    
    var taskPlaceholder2 = document.createElement('div');
    taskPlaceholder2.className = "placeholder-priority"
    
    
    var priorityClr = document.createElement('div');
    priorityClr.className="placeholder-priority-clr";
    
    
    taskPlaceholder2.innerHTML =" Task.value" ;
    taskPlaceholder2.href = 'https://www.youtube.com/results?search_query=sorax';
    task.appendChild(taskPlaceholder2);







var elem = document.getElementById("name").lenght;

function someFunc(){

alert(elem);
    
}
document.getElementById("btn").onclick = someFunc;




*/