// Add a new Item

$(document).ready(function(){
      $( '#new_item' ).submit(handle_submit);
      $( '#button-2').click(function() {alert("Button was clicked")
      });

});



function handle_submit(event){
  var data = $(this).serialize();


  $.ajax({
    type: "POST",
    url: $(this).attr('action'),
    data: data,
    dataType: 'json',
    success: function(response){
      console.log('got it'+response);
      desc = response['item']['description'];
      id =response['item'];
      console.log(id);
      item_num = 150;
      console.log(item_num);
      var new_row = $('<tr><td>'+desc+'</td><td><a data-method="delete" href= "/items/'+item_num+'" class="btn" id="button-2">Mark Complete</a></td></tr>');
      $('#item-table tbody').append(new_row);
      $('#item_description').val("");
      new_button_listener;
      // add_listener  - adds a listener to every button that is added to the page
    }
  });
  event.preventDefault();
}

function new_button_listener(event){
  $( '#button-2').click(function() {alert("Button was clicked")
});
}

// Add mark complete button

// Mark an Item completed.
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
