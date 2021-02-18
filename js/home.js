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

});