function addition(q1,q2,q3){
   return q1+q2+q3;
}

$(document).ready(function(){
   $("#quiz").submit(function(event){
       event.preventDefault();
       var q1=parseInt($("input:radio[name=choice1]:checked").val());
       var q2 = parseInt($("input:radio[name=choice2]:checked").val());
       var q3 = parseInt($("input:radio[name=choice3]:checked").val());

       var results = addition(q1,q2,q3);

       $("#output").text(results + "%");

var percentage = (results/100)*100;

       if(percentage>80 && percentage<=100){
           $("#output2").text("Excellent");
       } else if (percentage>=50 && percentage<=80){
           $("#output2").text("Fair Results");
       } else{
           $("#output2").text("Retake test");
       }
   });
})
