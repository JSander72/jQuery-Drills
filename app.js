$(document).ready(function(){

  $("#btnSubmit").click(function(){
    $("#btnSubmit").attr("disabled",false)
    $("#btnSubmit").click(function(){
      var str = $("#myForm").val();
      alert(str);
      // find out how to set the string in the tet field as a alert
    })
    alert("This is an alert message!");
  });
});
