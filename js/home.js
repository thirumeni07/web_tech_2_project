$(document).ready(function(){
    $('.search-results').hide();
$('#search-button').click(function(){

    if($('#fromplace').val() == '' || $('#dest').val() == '' )
        alert('Please enter the required fields')
    else{
        $('.search-results').show();
        $("#table-body > tr").remove();
        var tableData = [{
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '5H',
            'arrival': '01-Apr-2021 10:00 PM',
            'price': '$ 187'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '4H 5M',
            'arrival': '01-Apr-2021 5:55 PM',
            'price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 2:00 PM',
            'duration': '6H 10M',
            'arrival': '01-Apr-2021 8:10 PM',
            'price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M',
            'arrival': '01-Apr-2021 11:10 PM',
            'price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M',
            'arrival': '01-Apr-2021 11:10 PM',
            'price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 12:00 AM',
            'duration': '13H 40M',
            'arrival': '01-Apr-2021 1:40 PM','price': '$ 999'
        },
        {
            'depart': '01-Apr-2021 3:30 PM',
            'duration': '3H 30M' ,
            'arrival': '01-Apr-2021 7:00 PM','price': '$ 730'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        }, {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 11:00 AM',
            'duration': '7H 50M' ,
            'arrival': '01-Apr-2021 6:50 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 780'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 440'
        },
        {
            'depart': '01-Apr-2021 4:00 PM',
            'duration': '4H 10M' ,
            'arrival': '01-Apr-2021 8:10 PM','price': '$ 350'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 5:00 PM',
            'duration': '18H 13M' ,
            'arrival': '01-Apr-2021 11:10 PM','price': '$ 127'
        },
        {
            'depart': '01-Apr-2021 3:00 PM',
            'duration': '5H 10M' ,
            'arrival': '01-Apr-2021 8:50 PM','price': '$ 400'
        },
        {
            'depart': '01-Apr-2021 8:00 AM',
            'duration': '5H 40M' ,
            'arrival': '01-Apr-2021 1:40 PM','price': '$ 500'
        },
    ]
    
    
    /*
        1 - Loop Through Array & Access each value
      2 - Create Table Rows & append to table
    */
    
    
    var state = {
        'querySet': tableData,
    
        'page': 1,
        'rows': 5,
        'window': 5,
    }
    
    buildTable()
    
    function pagination(querySet, page, rows) {
    
        var trimStart = (page - 1) * rows
        var trimEnd = trimStart + rows
    
        var trimmedData = querySet.slice(trimStart, trimEnd)
    
        var pages = Math.round(querySet.length / rows);
    
        return {
            'querySet': trimmedData,
            'pages': pages,
        }
    }
    
    function pageButtons(pages) {
        var wrapper = document.getElementById('pagination-wrapper')
    
        wrapper.innerHTML = ``
        console.log('Pages:', pages)
    
        var maxLeft = (state.page - Math.floor(state.window / 2))
        var maxRight = (state.page + Math.floor(state.window / 2))
    
        if (maxLeft < 1) {
            maxLeft = 1
            maxRight = state.window
        }
    
        if (maxRight > pages) {
            maxLeft = pages - (state.window - 1)
            
            if (maxLeft < 1){
                maxLeft = 1
            }
            maxRight = pages
        }
        
        
    
        for (var page = maxLeft; page <= maxRight; page++) {
            wrapper.innerHTML += `<button value=${page} class="page bttn">${page}</button>`
        }
    
        if (state.page != 1) {
            wrapper.innerHTML = `<button value=${1} class="page bttn">&#171; First</button>` + wrapper.innerHTML
        }
    
        if (state.page != pages) {
            wrapper.innerHTML += `<button value=${pages} class="page bttn">Last &#187;</button>`
        }
    
        $('.page').on('click', function() {
            $('#table-body').empty()
    
            state.page = Number($(this).val())
            console.log(Number($(this).val()))
    
            buildTable()
        })
        /*
        var from = $('#fromplace').val();
        var to = $('#dest').val();
        var url = "/fetch-flight-data?from="+from+"&to="+to;
        $.get(url, function(data){
            if(data == "[]")
                data = "No results found"
            $('.result').text(data);
            Console.log(JSON.parse(data))
        });
        */
    
    }
    
    
    function buildTable() {
        var table = $('#table-body')
    
        var data = pagination(state.querySet, state.page, state.rows)
        var myList = data.querySet
    
        for (var i = 1 in myList) {
            //Keep in mind we are using "Template Litterals to create rows"
            var row = `<tr>
                      <td>${myList[i].depart}</td>
                      <td>${myList[i].duration}</td>
                      <td>${myList[i].arrival}</td>
                      <td>${myList[i].price}</td>
                      <td> <input class="search_button book_ticket" type="submit" value="Book"> </td>
                      </tr>
                      `
            table.append(row)
        }
    
        pageButtons(data.pages)
    }
    
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