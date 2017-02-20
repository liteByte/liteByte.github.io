$(document).ready(function () {

  $("#contact .submit").click(function () {
    disableContactForm();
    submitContactForm();
  });

});

function submitContactForm() {

  var section = $("#contact");

  var data = [];
  var questions = section.find(".questions .question-container");

  questions.each(function () {

    var q = $(this).find('.answer');
    var question = q.attr('placeholder');
    var answer = q.val();

    data.push({
      question: question,
      answer: answer
    });
  });

  $.ajax({
    url: 'https://litebyteus.ipage.com/util/functions.php',
    type: 'POST',
    data: {
      operation: 'submitContactForm',
      data: JSON.stringify(data)
    },
    success: function () {
      section.find('.submit').prop('value', 'Sent!');
    }
  });
}

function disableContactForm() {
  $("#contact .submit").prop('disabled', true);
}

function adjustTextArea(textarea) {
  textarea.style.height = "1px";
  textarea.style.height = (118 + textarea.scrollHeight) + "px";
}

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.5883534, lng: -58.4298406},
    scrollwheel: false,
    zoom: 16
  });
  var marker = new google.maps.Marker({
    map: map,
    position: {lat: -34.5883534, lng: -58.4298406},
    title: 'We are here!'
  });
}
