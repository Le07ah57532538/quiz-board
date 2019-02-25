//Business logic
function sum(q1, q2, q3, q4) {
  return q1 + q2 + q3 + q4;
}

// user logic
$(document).ready(function(){
  $('#quiz').submit(function(event){
    event.preventDefault();
    $("#quiz").hide();

      var q1 = parseInt($("input:radio[name=choice1]:checked").val());
      var q2 = parseInt($("input:radio[name=choice2]:checked").val());
      var q3 = parseInt($("input:radio[name=choice3]:checked").val());
      var q4 = parseInt($("input:radio[name=choice4]:checked").val());
      var total =sum(q1, q2, q3, q4);




      var percentage = (total/50)*100;
      $('#output2').text(percentage);
      if(percentage>80 && percentage<=100){
        $("#output2").text(percentage + "%" + "Excellent");
      } else if (percentage>=50 && percentage<=80){
        $("#output2").text(percentage + "%" + "Fair Results");
      } else{
        $("#output2").text(percentage + "%" + "failed! Retake test");
      }
    });
  });
