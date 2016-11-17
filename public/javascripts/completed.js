$(document).ready(function() {
  $(".checkbox").click(function() {
    const value = $(this).attr('value')
      if($(this).is(':checked') == true) {
        $.post('/items/completed', { id: value })
      }
      else {
        $.post('/items/uncompleted', { id: value })
      }
  })
})
