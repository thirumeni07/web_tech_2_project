$(document).ready(function(){
    var citySuggestions = [
        "chennai",
        "london",
        "niagara falls",
        "alberta",
        "ottawa",
        "vancouver",
        "quebec",
        "toronto",
        "british columbia",
        "gujarat",
        "punjab",
        "mumbai"
        ];
        var img_url = '../images/default.jpg';
        $( "#city-search" ).autocomplete({
            source: citySuggestions
            });
        //$('body').css('background-image','url('+img_url+')');
        //$('body').addClass('main_background');
        $('#city-search-btn').click(function(){
            var city = $('#city-search').val();
            var key = '151ff9657309b5501660994da2fef0a3';
            var units = $('.units:checked').val(); //standard, metric and imperial
            var url= 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+key+'&units='+units;
            $.get(url,function(data){
                var name = data.name;
                var description_short = data.weather[0].main;
                var description_long = data.weather[0].description;
                var temp = data.main.temp;
                var temp_min = data.main.temp_min;
                var temp_max = data.main.temp_max;
                var pressure = data.main.pressure ; 
                var humidity = data.main.humidity;
                var wind_speed = data.wind.speed;
                var country = data.country;
                if(citySuggestions.includes(city.toLowerCase()))
                    $('#weather_main').css('background-image','url(../images/'+city.toLowerCase()+'.jpg)');
                else
                    $('#weather_main').css('background-image','url(../images/default.jpg)');
                var img_src = 'http://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png';
                var html_dom = '<h2>'+name+'<img src='+img_src+' width="50em"></h2>'
                                +'<p>'+description_short+','+description_long+'|'
                                +'Temp:'+temp+'|'
                                +'Temp_min:'+temp_min+'|'
                                +'Temp_max:'+temp_max+'|'
                                +'Humidity:'+humidity+'</p>'
                                ;
                $('#weather-display').empty();
                $('#weather-display').append(html_dom);


            });
        });
            
        $('.theme').click(function(){
            var selected_theme = $(this).val();
            if(selected_theme=='dark')
            {
                $('nav li a').css("background-color", "rgb(170, 23, 23)");
                $('nav li a').hover(function(){
                    $(this).css("background-color", "black");
                    }, function(){
                    $(this).css("background-color", "rgb(170, 23, 23)");
                  });
                $('nav').addClass('dark_red_theme');
                $('nav ul').addClass('dark_red_theme');
                $('body').addClass('dark_black_theme');
                $('#main').addClass('dark_gray_theme');
                $('.sub-heading').addClass('dark_red_theme');
                $('#ticket-div .details_child').addClass('dark_red_theme');
                $('.table-search caption').addClass('dark_red_theme');
                $('.table-search th').addClass('dark_red_theme');
                $('.table-search tr').addClass('dark_red_theme');
                $('.table-search tr').css('border','solid white');
                $('.table-search td').css('border','solid white');
                $('.table-search th').css('border','solid white');
                $('.footer').addClass('dark_red_theme');
                $('.bx-wrapper').addClass('dark_black_theme');
            
            }
            else{
                $('nav li a').css("background-color", "rgb(8, 130, 187)");
                $('nav li a').hover(function(){
                    $(this).css("background-color", "#140363;");
                    }, function(){
                    $(this).css("background-color", "rgb(8, 130, 187)");
                  });
                $('nav').removeClass('dark_red_theme');
                $('nav ul').removeClass('dark_red_theme');
                $('body').removeClass('dark_black_theme');
                $('#main').removeClass('dark_gray_theme');
                $('.sub-heading').removeClass('dark_red_theme');
                $('#ticket-div .details_child').removeClass('dark_red_theme');
                $('.table-search caption').removeClass('dark_red_theme');
                $('.table-search th').removeClass('dark_red_theme');
                $('.table-search tr').removeClass('dark_red_theme');
                $('.table-search tr').css('border','solid black');
                $('.table-search td').css('border','solid black');
                $('.table-search th').css('border','solid black');
                $('.footer').removeClass('dark_red_theme');
                $('.bx-wrapper').removeClass('dark_black_theme');
            }
            });
            
})