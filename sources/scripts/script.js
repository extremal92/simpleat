// popup 
$(document).ready(function () {
  $(".popup-iframe").hide();
  $(".openpop").click(function (e) {
      e.preventDefault();
      $(".video-iframe-link").attr("src", $(this).attr('href'));
      $(".links").fadeOut('slow');
      $(".popup-iframe").fadeIn('slow');
      $(".popup-iframe-item").fadeIn('slow');
  });

  $(".btn-close").click(function () {
      $(this).parent().fadeOut("slow");
      $(".links").fadeIn("slow");
      $(".popup-iframe").hide();

  });
});
$(document).ready(function () {
  $(".testimonial-popup-iframe").hide();
  $(".testimonial-openpop").click(function (e) {
      e.preventDefault();
      $(".testimonial-iframe-link").attr("src", $(this).attr('href'));
      $(".testimonial-links").fadeOut('slow');
      $(".testimonial-popup-iframe").fadeIn('slow');
      $(".testimonial-popup-iframe-item").fadeIn('slow');
  });

  $(".testimonial-btn-close").click(function () {
      $(this).parent().fadeOut("slow");
      $(".testimonial-links").fadeIn("slow");
      $(".testimonial-popup-iframe").hide();

  });
});


//Code for Modal of use cookies

jQuery.cookie = function(name, value, options) {
  if (typeof value != 'undefined') { 
      options = options || {};
      if (value === null) {
          value = '';
          options.expires = -1;
      }
      var expires = '';
      if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
          var date;
          if (typeof options.expires == 'number') {
              date = new Date();
              date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
          } else {
              date = options.expires;
          }
          expires = '; expires=' + date.toUTCString();
      }
      var path = options.path ? '; path=' + (options.path) : '';
      var domain = options.domain ? '; domain=' + (options.domain) : '';
      var secure = options.secure ? '; secure' : '';
      document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
  } else { // only name given, get cookie
      var cookieValue = null;
      if (document.cookie && document.cookie != '') {
          var cookies = document.cookie.split(';');
          for (var i = 0; i < cookies.length; i++) {
              var cookie = jQuery.trim(cookies[i]);
              if (cookie.substring(0, name.length + 1) == (name + '=')) {
                  cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                  break;
              }
          }
      }
      return cookieValue;
  }
};
$(document).ready(function(){
  $("#setCookie").click(function () {
    $.cookie("popup", "", { expires:0, path: '/' });
    $("#bg_popup").hide();
  });

  if ( $.cookie("popup") == null )
    {
        setTimeout(function(){
        $("#bg_popup").show();
      }, 1000)
    }
  else { $("#bg_popup").hide();
  }
});


// Chart JS
var ctx = document.getElementById("myChart").getContext('2d');

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["0", "30 min",	"60 min", "", ""],
        datasets: [{
            label: 'Glucose',
            data: [0, 3,	1,	0.5, -1], 
            fill: false,
            borderColor: '#86898d', 
            backgroundColor: '#86898d',
            borderWidth: 4
        },
                  {
            label: 'Simpleat', 
            data: [0, 1,	0.5,	-0.5, 0], 
            fill: false,
            borderColor: '#36c1b9', 
            backgroundColor: '#36c1b9',
            borderWidth: 4 
        }]
    },
    options: {
      responsive: true, 
      maintainAspectRatio: false, 
        scales: {
          yAxes: [{
            gridLines : {
                display : false
            },
            scaleLabel: {
              display: true,
              labelString: 'Glucose(mmol/L)'
            },
            ticks: {
                fontSize: 16
            }
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Time',
              fontSize: 20
            },
            ticks: {
                fontSize: 18
            }
          }]
        } 
    }
});


// DropDawn for language Footer
var langArray = [];
$('.vodiapicker option').each(function(){
  var img = $(this).attr("data-thumbnail");
  var text = this.innerText;
  var value = $(this).val();
  var item = '<li><img src="'+ img +'" alt="" value="'+value+'"/><span>'+ text +'</span></li>';
  langArray.push(item);
})

$('#list').html(langArray);

$('.btn-select').html(langArray[0]);
$('.btn-select').attr('value', 'en');

$('#list li').click(function(){
   var img = $(this).find('img').attr("src");
   var value = $(this).find('img').attr('value');
   var text = this.innerText;
   var item = '<li><img src="'+ img +'" alt="" /><span>'+ text +'</span></li>';
  $('.btn-select').html(item);
  $('.btn-select').attr('value', value);
  $(".lang-select-item").toggle();
});

$(".btn-select").click(function(){
        $(".lang-select-item").toggle();
    });

var sessionLang = localStorage.getItem('lang');
if (sessionLang){
  var langIndex = langArray.indexOf(sessionLang);
  $('.btn-select').html(langArray[langIndex]);
  $('.btn-select').attr('value', sessionLang);
} else {
   var langIndex = langArray.indexOf('ch');
  $('.btn-select').html(langArray[langIndex]);
}













$(".custom-select").each(function() {
  var classes = $(this).attr("class"),
      id      = $(this).attr("id"),
      name    = $(this).attr("name");
  var template =  '<div class="' + classes + '">';
      template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
      template += '<div class="custom-options">';
      $(this).find("option").each(function() {
        template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
      });
  template += '</div></div>';
  
  $(this).wrap('<div class="custom-select-wrapper"></div>');
  $(this).hide();
  $(this).after(template);
});
$(".custom-option:first-of-type").hover(function() {
  $(this).parents(".custom-options").addClass("option-hover");
}, function() {
  $(this).parents(".custom-options").removeClass("option-hover");
});
$(".custom-select-trigger").on("click", function() {
  $('html').one('click',function() {
    $(".custom-select").removeClass("opened");
  });
  $(this).parents(".custom-select").toggleClass("opened");
  event.stopPropagation();
});
$(".custom-option").on("click", function() {
  $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
  $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
  $(this).addClass("selection");
  $(this).parents(".custom-select").removeClass("opened");
  $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
});