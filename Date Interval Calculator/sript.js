$(".fromdate").datepicker({
  dateFormat: "dd-mm-yy",
  changeMonth: true,
  changeYear: true,
});
$(".todate").datepicker({
  dateFormat: "dd-mm-yy",
  changeMonth: true,
  changeYear: true,
});
$(".fromdate").datepicker().bind("change", function () {
    var minValue = $(this).val();
    minValue = $.datepicker.parseDate("dd-mm-yy", minValue);
    $(".todate").datepicker("option", "minDate", minValue);
    calculate();
  });
$(".todate").datepicker().bind("change", function () {
    var maxValue = $(this).val();
    maxValue = $.datepicker.parseDate("dd-mm-yy", maxValue);
    $(".fromdate").datepicker("option", "maxDate", maxValue);
    calculate();
  });

function calculate() {
  var d1 = $(".fromdate").datepicker("getDate");
  var d2 = $(".todate").datepicker("getDate");
  var oneDay = 24 * 60 * 60 * 1000;
  var diffDays = 0;
  var diffWeeks =0;
  var diffMonths = 0;
  var diffYears = 0;
  if (d1 && d2) {
    
    diffDays = Math.round(Math.abs((d2.getTime() - d1.getTime()) / oneDay));
    diffWeeks = Math.round(diffDays/7);
    diffMonths = Math.round(diffDays / 30);
    diffYears = Math.round(diffMonths / 12);
  }
  console.log(d1, d2);

  $(".calculated").text(
    `Difference in days : ${diffDays} ,
    Difference in weeks : ${diffWeeks} ,   
    Difference in months : ${diffMonths} , 
    Difference in Years : ${diffYears} `
  );
}
