

$(document).ready(function(){
      $( '#new_item' ).submit(handle_submit);
      //This actually listens for when Mark Complete button is clicked.
      complete_button_listener();
      //This is for submitting a new list
      $( '#new_list' ).submit(handle_submit_list);
});


// Add a new Item
function handle_submit(event){
  var data = $(this).serialize();
  var site = $(this).attr('action');

  $.ajax({
    type: "POST",
    url: site,
    data: data,
    dataType: 'json',
    success: function(response){
      desc = response['item']['description'];
      item_num = response['item']['id'];
      var new_row = $('<tr><td>'+desc+'</td><td><a data-item-id="'+item_num+'" href= "#" class="btn mark-complete" id="item-btn-'+item_num+'">Mark Complete</a></td></tr>');
      $('#item-table tbody').append(new_row);
      $('#item_description').val("");
      //  - Resets the listener all buttons again since a new button was added to the page
      complete_button_listener();
    }
  });
  event.preventDefault();
}

function complete_button_listener(){
  $( '.mark-complete').click(handle_complete);
}


// Mark an Item completed.
function handle_complete(event){
  var data = "item[completed]=true";
  var row = $(this).parents('tr');
  var site = '/api/users/'+$('#new_item #user_id').val()+'/lists/'+$('#new_item #list_id').val()+'/items/'+$(this).data('item-id')+'?password='+$('#new_item #password').val();

  $.ajax({
    type: "PUT",
    url: site,
    data: data,
    dataType: 'json',
    success: function(){
      row.remove();
    }
  });
  event.preventDefault();
}


// Create a new List.

function handle_submit_list(event){
  var data = $(this).serialize();
  var site = $(this).attr('action');

  console.log(data);
  console.log(site);
  $.ajax({
    type: "POST",
    url: site,
    data: data,
    dataType: 'json',
    success: function(response){
      console.log(data);
      console.log('got it'+response);
      name = response['list']['name'];
      list_num = response['list']['id'];
      var new_row = $('<tr><td><a data-list-id="'+list_num+'" href= "#" class="btn" id="list-btn-'+list_num+'">'+name+'</a></td></tr>');
      $('#list-table tbody').append(new_row);
      $('#list_name').val("");
      // complete_button_listener();    //  - Resets the listener all buttons again since a new button was added to the page
    }
  });
  event.preventDefault();
}
// was  /api/users/4/lists
// var list_site = '/users/'+$('#new_list #user_id').val()+'/lists/'+$(this).data('list-id')+'?password='+$('#new_list #password').val();
//   attach an event to the form (listen for a submit event)
//   assemble parameters
//   make ajax call - POST
//   on success do this:
//     add a new line to the table with the 'description' - by building a string of HTML that
//     includes the <tr> and <Td> elements, etc
// end
