$(document).ready(function () {

  $("#btnSubmit").attr("disabled", true);
  $("<ul></ul>").appendTo("body");

  $("#btnSubmit").click(function (event) {//click function
      event.preventDefault();
      let inputText = $("#inputText").val();
      alert(inputText);//will alert the textcontent when button clicked
      $("<div></div>").appendTo("body");//created a div and connected to body
      let li= $("<li>" + inputText + "</li>");
      $("ul").append(li);

      li.click(function () {
          var random = "rgb(" + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random() * 256)) + ")"
          li.css("color", random);
          li.dblclick(function () {
              li.remove();
          });
      });
  });


  $("body").keydown(function () {//created a keydown function
      let inputText = $("#inputText").val();
      if (inputText === "") { //if the inputText is nothing then the button stays disabled
          $("#btnSubmit").prop("disabled", true);
      }
      else { //if the inputText is something, then the button is enabled
          $("#btnSubmit").prop("disabled", false);
      }
  });
});

  //$("h2").hover(function(){//created a mouseover function defining changes to the heading
  //$("h2").css({
  //"background-color": "blue",
  //"border-radius": "6px" });
