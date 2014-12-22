// when the page loads
//   attach an event to the form (listen for a submit event)
$(document).ready(function(){
    $("#save-new-item").click(function() {
      $( 'form' ).submit(function(event){
          var data = $(this).serialize();
          console.log(data);

          $.ajax({
            type: "POST",
            url: $(this).attr('action'),
            data: data,
            dataType: "JSON.parse(response.body)"
          }).success(function(json){
            $('#item-table tbody').append(data);
            $('.new-item').html("<%= escape_javascript(render 'form') %>");
          });
          console.log(JSON);

      });
  });
});

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
