$(function () {
 $('.saveBtn').click(function() {
    var hourId = $(this).parent().attr('id'); //saves the id name of the parent element 
    var userInput = $(this).siblings('.description').val(); //saves the users input
    localStorage.setItem(hourId, userInput); //saves the data to local storage
  });
  
  $('.time-block').each(function() {
    var currentHour = dayjs().hour();
    var blockHour = parseInt($(this).attr('id').split('-')[1]);
  
    if (blockHour < currentHour) {
      $(this).addClass('past').removeClass('present future');
    } else if (blockHour === currentHour) {
      $(this).addClass('present').removeClass('past future');
    } else {
      $(this).addClass('future').removeClass('past present');
    }
  });

  
  $('.time-block').each(function() { 
    var hourId = $(this).attr('id');
    var savedInput = localStorage.getItem(hourId);
    if (savedInput) {
      $(this).find('.description').val(savedInput);
    }
  });

  $('#currentDay').text(dayjs().format('dddd, MMMM D')); //add date to the top of the page
});
