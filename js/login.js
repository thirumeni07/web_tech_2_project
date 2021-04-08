//$(document).ready(function(){
    
  //  $('#submit').click(function(){
        
    //    var currentUrl = $(location).attr('href','../index.html');
//    })
//  })
 $(function(){
        
        $('#main-form').validate({
            rules:{
                GetEmail:{  
                      required:true,
                      email:true
                         },
                GetPassword:  {required: true, minlength: 5},
            },
            messages:{
                required: '<br>',
                GetEmail: '<br> Please enter valid Email',
                GetPassword: 'Please enter valid Password',
            }}
        )
    });
