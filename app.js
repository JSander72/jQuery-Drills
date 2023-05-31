$(document).ready(function () { //readied the document

  $("#btnSubmit").attr("disabled", true);//set the submit button as disabled
  $("<ul></ul>").appendTo("body");

  $("#btnSubmit").click(function (event) {//click function
      event.preventDefault(); //made it so the page does not default to refresh after the form is submitted
      let inputText = $("#inputText").val();// named the textcontent of the input "inputText"
      alert(inputText);//will alert the textcontent when button clicked
      $("<div></div>").appendTo("body");//created a div and connected to body
      let li= $("<li>" + inputText + "</li>");
      $("ul").append(li);

      li.click(function () {
          var random = "rgb(" + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random() * 256)) + ")"
          li.css("color", random); //I feel like there is a better way to do this...
          li.dblclick(function () {
              li.remove();
          });
      });
  });


  $("body").keydown(function () {//keydown function- when something is typed in the input box the following occurs:
      let inputText = $("#inputText").val();// named the textcontent of the input "inputText"
      if (inputText === "") { //if the inputText is nothing then the button stays disabled
          $("#btnSubmit").prop("disabled", true);
      }
      else { //if the inputText is something, then the button is enabled
          $("#btnSubmit").prop("disabled", false);
      }
  });

  //$("h2").hover(function(){//created a mouseover function defining changes to the heading
  //$("h2").css({
  //"background-color": "purple",
  //"border-radius": "5px" });
