$(document).ready(function() {
  function main() {
    var value = $("#search-value").val();

    var api =
      "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
      value +
      "&format=json&callback=?";

    if (value !== "") {
      $.getJSON(api, function(data) {
       console.log(api);
        $("#intro").html("Top " + data[1].length +" articles with keyword " + "'" + value + "':");
        $(".res").remove();
        for (var i = 0; i < data[1].length; i++) {
          $("#output").append(
            '<a href="' +
              data[3][i] +
              '"  target="_blank"><li class="list-unstyled res"> ' +
              "<strong>" +
              data[1][i] +
              "</strong>" +
              "<br>" +
              data[2][i] +
              "</li></a>"
          );
        }
      });
    }
  }
  $("#search").click(function() {
    main();
  });
  $(".form").keypress(function(e) {
    if (e.which == 13) {
      main();
    }
  });
});
