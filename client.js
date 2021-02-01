$(function () {
    getEvents(1)
  
    function getEvents(page) {
      $.getJSON({
        url: "https://modasapi.azurewebsites.net/api/event/pagesize/10/page/" + page,
        success: function (response, textStatus, jqXhr) {
          var entry = '';
          console.log(response);

          
          $.each(response, function(key, value){
             entry += '<tr>';
             entry += '<td>'+
              response.flagged + '</td>';

             entry += '<td>' + 
             response.timeStamp + '</td>';

              entry += '<td>' + 
              response.timeStamp + '</td>';

              entry += '<td>' + 
              response.location.name + '</td>';


          })
          $('#table').append(entry);
        },
        error: function (jqXHR, textStatus, errorThrown) {
          // log the error to the console
          console.log("The following error occured: " + textStatus, errorThrown);
        }
      });
    }
  });