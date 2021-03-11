$(function(){
    $('#contact-form').validate({
        rules:{
            email:{
                required:true,
                email:true
            }
        },
        messages:{
            required: '<br>Please enter an email address',
            email:'<br>Please enter a valid email id'
        }
    })
})