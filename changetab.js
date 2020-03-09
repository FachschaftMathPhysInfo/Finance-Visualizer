$('.top.menu .item').tab();

function change(tabnr) {
  if (tabnr == 1) {
    $('div').removeClass("active");
    $('#allgemein').addClass("active");

    $('a').removeClass("active");
    $('#allgemeintab').addClass("active");

    $('#chartcontainer').hide();
  } else if (tabnr == 2) {
    $('div').removeClass("active");
    $('#einnahmen').addClass("active");

    $('a').removeClass("active");
    $('#einnahmentab').addClass("active");

    $('#ausgabencontainer').hide();
    $('#chartcontainer').show();
    $('#einnahmencontainer').show();
  } else if (tabnr == 3) {
    $('div').removeClass("active");
    $('#ausgaben').addClass("active");

    $('a').removeClass("active");
    $('#ausgabentab').addClass("active");

    $('#einnahmencontainer').hide();
    $('#chartcontainer').show();
    $('#ausgabencontainer').show();
  }
}