$(function() {
	//  hid all errors, which will only show when called below
	$("#cardholder_error_message").hide();
	$("#cardno_error_message").hide();
	$("#expirydate_error_message").hide();
	$("#carditem_error_message").hide();
	

	var error_cardholder = false;
	var error_cardno = false;
	var error_expirydate = false;
	var error_carditem = false;
	
	//Excecute when the use click out of the box "focusout"
	$("#card_holder").focusout(function() {

		check_cardholder();
		
	});

	$("#card_number").focusout(function() {

		check_cardno();
		
	});

	$("#expiry_date").focusout(function() {

		check_expirydate();
		
	});

	$("#card_item").focusout(function() {

		check_carditem();
		
	});
	
	function check_cardholder() {
	
		var card_holder = $("#card_holder").val().length;
		
		if(card_holder < 5 || card_holder > 20) {
			$("#cardholder_error_message").html("Enter the name of card holder");
			$("#cardholder_error_message").show();
			error_cardholder = true;
		} else {
			$("#cardholder_error_message").hide();
		}
	
	}

	function check_cardno() {
	
		var card_number = $("#card_number").val().length;
		
		if(card_number < 8) {
			$("#cardno_error_message").html("Enter a valid 16 digit number");
			$("#cardno_error_message").show();
			error_cardno = true;
		} else {
			$("#cardno_error_message").hide();
		}
	
	}

	function check_expirydate(){

		var pattern = new RegExp(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/);
	
		if(pattern.test($("#expiry_date").val())) {
			$("#expirydate_error_message").hide();
		} else {
			$("#expirydate_error_message").html("Enter the Expiry date");
			$("#expirydate_error_message").show();
			error_expirydate = true;
		}
	
	}
	function check_carditem() {
        var card_item = $("#card_item").val().length;
        if(card_item > 3) {
            $("#carditem_error_message").html("Please enter 3 digit CVV");
            $("#carditem_error_message").show();
            error_carditem = true;
        }
         else 
        {
            $("#carditem_error_message").hide();
        }
    }


	$("#payment_form").submit(function() {
											
		error_cardholder = false;
		error_cardno = false;
		error_expirydate = false;
		error_carditem = false;
		
											
		check_cardholder();
		check_cardno();
		check_carditem();
		check_expirydate();
		
		
		if(error_cardholder == false && error_cardno == false && error_expirydate == false && error_carditem == false) {
			return true && alert("Do you want to submit the form");
		} else {
			return false;	
		}
	});

	});
