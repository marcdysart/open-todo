// Add a new Item
//   attach an event to the form (listen for a submit event)
$(document).ready(function(){
      $( 'form' ).submit(function(event){
          var data = $(this).serialize();
          $.ajax({
            type: "PUT",
            url: $(this).attr('action'),
            data: data,
            dataType: 'json',
            success: function(){
              $('#item-table tbody').append(JSON.parse(response.body));
              $('.new-item').reset();
              });
          })
          event.preventDefault();
      });
});

// Mark an Item completed.
// $(document).ready(function(){
//   $( 'form' ).submit(function(event){
//     var data = $(this).serialize();
//     $.ajax({
//       type: "DELETE",
//       url: $(this).attr('action'),
//       data: data,
//       dataType: 'json'
//     }).success(function(){
//       $('#item-table tbody').remove(JSON.parse(response.body));
//     });
//     event.preventDefault();
//   });
// });

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


//   assemble parameters
//   make ajax call - POST
//   on success do this:
//     add a new line to the table with the 'description' - by building a string of HTML that
//     includes the <tr> and <Td> elements, etc
// end
