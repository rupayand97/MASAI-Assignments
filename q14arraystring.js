var task =["Make Breakfast", "Bath", "Attend Class", "Do the assignment", "Do Yoga"];
console.log(task);
for(var i=0; i<=task.length-1; i++){
   task[i] = task[i+1];
}
task.length = task.length-1;
console.log(task);

for(var i=task.length-1; i>=0; i--){
    task[i+2] = task[i];
}

task[0]="check mail";
task[1]="check message";
task[task.length-1]="GYM";

console.log(task);