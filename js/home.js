$(document).ready(function(){
    $('.search-results').hide();
$('#search-button').click(function(){

    if($('#fromplace').val() == '' || $('#dest').val() == '' )
        alert('Please enter the required fields')
    else
        $('.search-results').show();
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
    var count = 0;
    $.each(response,function(key,value){	  	
        count += 1;
        var child_count = 0;
        console.log("Count is "+count);
        console.log(value);
        $.each(value,function(k,v){
            child_count += 1;
            console.log("Child Count is "+child_count);
            if('OutboundLeg' in v){
                console.log(v.OutboundLeg.DepartureDate.substring(11,19));	
            }	  		
            //console.log(v.OutboundLeg['DepartureDate']);
        })
  })
});       
});

});