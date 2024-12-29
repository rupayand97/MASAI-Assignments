var score =[29,78,79,28,91,82,83,34,95,86];
var count=0;
for(var i=0; i<=score.length-1; i++){
    if(score[i]<40){
        score[i]=score[i]+20;
    }
    else if(score[i]>90){
        score[i]=90;
    }
    else{
        score[i]=score[i];
    }
}
for(var j=0;j<=score.length-1;j++){
    if(score[j]>50){
        count++;
    }
}
console.log("Total Student Passed: "+count);

console.log("Final Adjusted Array Of Scores:");
console.log(score);