$(function(){
    $('#registration').validate({
        rules:{
            fname : "required" ,
            lname : "required",
            GetEmail:{  
                required:true,
                email:true
                },
            GetPassword:  {required: true, minlength: 5},
            RePassword: { required: true, minlength :5, equalTo: "#password"
            },
        messages:{
            required: '<br>',
            GetEmail:'<br> Please enter a valid email id',
            GetPassword: 'Please Choose a Password of atleast 5 characters',
            RePassword: 'Passwords do not match'
        }}
    })
});
