$(document).ready(function(){
    var budget = parseFloat($(".total_budget").find("span").text());

    $(".department input").on("keyup keydown keypress change", function(e){
      var new_budget = budget;


      $(".department input").each(function(){
        var value = $(this).val();

        if (value !== "") {
            value = parseFloat(value);
        } else{
          value=0;
        }

        new_budget = new_budget - value;
      });

      $(".total_budget").find("span").text(new_budget);

      if (new_budget < 0) {
          $(".total_budget").css("color", '#ff0000');
        } else {
          $(".total_budget").css("color", '#000');
        }
        // alert("You're over budget!");
  });
});
