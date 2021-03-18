$(document).ready(function(){
    $('.search-results').hide();
$('#search-button').click(function(){

    if($('#fromplace').val() == '' || $('#dest').val() == '' )
        alert('Please enter the required fields')
    else{
        $('.search-results').show();
        $.ajaxSetup({
            headers : {
                        "x-rapidapi-key": "6b1dd19125msh66c428d656f8b00p14948djsn7b53e22d2979",
                        "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
            }
        });
    
    $.getJSON("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2021-03-21", function(response){
        $(".Departure").html(response.Quotes[0].OutboundLeg.DepartureDate.substring(11,16) + " AM");
        $(".price").html("$ "+response.Quotes[0].MinPrice);
    });  
    }        
});

$('.clear_button').click(function(){

    $('.search-results').hide();
});

$('.collapse-btn').click(function(){
    
   $(this).parent().next().toggle();
//    $('.collapse-cls, closest_cls').toggle();
})

$("#development_in_progress").click(function(){
    $.ajaxSetup({
        headers : {
                    "x-rapidapi-key": "6b1dd19125msh66c428d656f8b00p14948djsn7b53e22d2979",
                    "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
        }
    });

$.getJSON("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2021-03-21", function(response){
    
});       
});

$('.book_ticket').click(function(){

    //alert($(this).parents('tr').find('td:eq(3)').text())
    sessionStorage.setItem("price", $(this).parents('tr').find('td:eq(3)').text());
    window.location.replace("html/payment.html");
})

});