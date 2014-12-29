

$(document).ready(function(){
      $( '#new_item' ).submit(handle_submit);

      complete_button_listener();
});


// Add a new Item
function handle_submit(event){
  var data = $(this).serialize();
  var site = $(this).attr('action');
  console.log(site);

  $.ajax({
    type: "POST",
    url: site,
    data: data,
    dataType: 'json',
    success: function(response){
      console.log(site);
      console.log('got it'+response);
      desc = response['item']['description'];
      item_num = response['item']['id'];/// This will have to change once the delete button is fixed
      console.log(response['item']);
      var new_row = $('<tr><td>'+desc+'</td><td><a data-item-id="'+item_num+'" href= "#" class="btn mark-complete" id="item-btn-'+item_num+'">Mark Complete</a></td></tr>');
      $('#item-table tbody').append(new_row);
      $('#item_description').val("");
      complete_button_listener();
      // add_listener  - adds a listener to every button that is added to the page
    }
  });
  event.preventDefault();
}

function complete_button_listener(){
  $( '.mark-complete').click(handle_complete);
}


// Mark an Item completed.
///api/users/:user_id/lists/:list_id/items/:id(.:format)
function handle_complete(event){
  var data = "item[completed]=true";
  var row = $(this).parents('tr');

  var site = '/api/users/'+$('#new_item #user_id').val()+'/lists/'+$('#new_item #list_id').val()+'/items/'+$(this).data('item-id')+'?password='+$('#new_item #password').val()
  console.log(site);

  $.ajax({
    type: "PUT",
    url: site,
    data: data,
    dataType: 'json',
    success: function(){
      console.log(row)
      console.log(data)
      row.remove();
    }
  });
  event.preventDefault();
}

// $(document).ready(function(){
//   c
// });
// Need id from tr so it knows which one to remove

// Create a new List.
// $(document).ready(function(){
//   $( 'form' ).submit(function(event){
//     var data = $(this).serialize();
//     $.ajax({
//       type: "POST",
//       url: $(this).attr('action'),
//       data: data,
//       dataType: 'json'
//     }).success(function(){
//       $('#item-table tbody').append(JSON.parse(response.body));
//       $('.new-item').reset();
//     });
//     event.preventDefault();
//   });
// });
//   call the 'submit_new_item' method
// end


// $.post( "lists/show.html.haml", function( submit_new_item ) {
//   $( ".result" ).html( submit_new_item );
// });

//   attach an event to the form (listen for a submit event)
//   assemble parameters
//   make ajax call - POST
//   on success do this:
//     add a new line to the table with the 'description' - by building a string of HTML that
//     includes the <tr> and <Td> elements, etc
// end
