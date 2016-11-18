
$(document).ready(function() {
  $(".checkbox").click(function() {
    let value = $(this).attr('value')
      if($(this).is(':checked') == true) {
        $.post('/items/completed', { id: value })
      }
      else {
        $.post('/items/uncompleted', { id: value })
      }
  });

  $('#sortable_id').sortable({
    create: function (event, ui) {
        let data = $(this).sortable('toArray')
        console.log(data)
        $.post('/items/sorted', {
            data: data
        });
      },
    update: function (event, ui) {
        let data = $(this).sortable('toArray')
        console.log(data)
        $.post('/items/sorted', {
            data: data
        });
    }
  });


})
