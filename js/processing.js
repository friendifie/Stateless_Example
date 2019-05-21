$(document).ready(function() {
  $("#nameBtn").click(function() {
    var name = $.trim($("#nameIN").val());

        data = "proName=" + name;

        if(!name)
        {
          $("#stateless_success").hide();
          $("#stateless_error").show();
          $("#stateless_error").html("Please enter your name.");
        }
        else
        {
          $.ajax({
              url: "js/php/processing.php",
              type: "POST",
              data: data,
              success: function(data){
                $("#stateless_error").hide();
                $("#stateless_success").show();
                $("#stateless_success").html(data);
              }
          });
        }
  });
});
