$(document).ready(function () {
  $(".dropdown-btn").click(function () {
    $(".dropdown-content").toggle("close");
  });
  $("#navbar").click(function () {
    $(".navbar-content").toggle("show");
    $("#navbar-icon").hide();

    $("#icon-close").show();
  });
});
