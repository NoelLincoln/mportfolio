$(document).ready(() => {
  $('.dropdown-btn').click(() => {
    $('.dropdown-content').toggle('close');
  });
  $('#navbar').click(() => {
    $('.navbar-content').toggle('show');
    $('#navbar-icon').hide();

    $('#icon-close').show();
  });
});
