$(function(){

    var validator = $('#registration').validate({
        rules:{
        GetEmail:"required",
        GetEmail: {email:true
                },
        GetPassword: "required",
        RePassword: { equalTo: "#password"
            },
        messages:{
            required: '<br>Please enter email id',
            GetEmail:'<br> Please enter a valid email id',
            GetPassword: 'Please Enter Password',
            RePassword: 'Passwords do not match'
        }}
       
    })
    if(validator.form()) {
        alert('Registered Sucessfully');
    }
})
