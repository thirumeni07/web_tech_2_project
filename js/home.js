$(document).ready(function(){
    $('.search-results').hide();
$('#search-button').click(function(){

    if($('#fromplace').val() == '' || $('#dest').val() == '' )
        alert('Please enter the required fields')
    else{
        $('.search-results').show();
        $("#table-body > tr").remove();

        var from = $('#fromplace').val();
            var to = $('#dest').val();
            var url = "https://flight-ticket-booking.herokuapp.com/fetch-flight-data?from="+from+"&to="+to;
            $.get( url, function( data ) {
                if(data=="[]"){
                    data = "No results found"
                    console.log(data);
                    var row = `<tr>
                               <td colspan="5">No results found</td>
                               </tr>
                               `
                    $("#table-body").append(row);
                    $("#page_foot > tr").hide();
                }
                else{
                    //$('.result').text(data);
                    $("#page_foot > tr").show();
                    var tableDataInput = JSON.parse(data);
				    console.log(tableDataInput.length + " thiru ");
				    pageWorker(tableDataInput)
                }                                       

            }).fail(function() {
                console.log("No results found");
              });
    
    
    /*
        1 - Loop Through Array & Access each value
      2 - Create Table Rows & append to table
    */
    
    function pageWorker(tableData){
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
        
        }
        
        
        function buildTable() {
            var table = $('#table-body')
        
            var data = pagination(state.querySet, state.page, state.rows)
            var myList = data.querySet
        
            for (var i = 1 in myList) {
                //Keep in mind we are using "Template Litterals to create rows"
                var row = `<tr>
                          <td>${myList[i].departure}</td>
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

    
    }        
});

$('.clear_button').click(function(){

    $('.search-results').hide();
});

$('.collapse-btn').click(function(){
    
   $(this).parent().next().toggle();
//    $('.collapse-cls, closest_cls').toggle();
})


});