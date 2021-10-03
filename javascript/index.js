(function() {
    // https://dashboard.emailjs.com/admin/integration
    emailjs.init("user_ygLjWftHrBIMjX56zrREF");
})();

function sendMail() {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        if (validateFirstName() && validateLastName() && validateEmailAddress() && validatePhoneNumber() && validateMessage()) {
            emailjs.sendForm("service_h0xh8ir", "template_a9pjk99", this)
                .then(function () {
                    console.log("SUCCESS");
                });
            document.getElementById("contact-form").reset();
            window.alert("Email sent successfully!");
        }
        
        else if (!validateFirstName()) 
        {
            alert("Cannot leave first name blank!")
        }
        
        else if (!validateLastName()) 
        {
            alert("Cannot leave last name blank!")
        }
        
        else if (!validateEmailAddress()) 
        {
            alert("Please enter a valid email!")
        }
        
        else if (!validatePhoneNumber()) 
        {
            alert("Please enter a valid phone number!")
        }
        
        else if (!validateMessage()) 
        {
            alert("Cannot leave message blank!")
        }
    });

}

function validateFirstName() 
{
    if (document.getElementById("user_fname").value != "") 
    {
        return true;
    }
    return false;
}

function validateLastName() 
{
    if (document.getElementById("user_lname").value != "") 
    {
        return true;
    }
    return false;
}

function validateEmailAddress() 
{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("user_email").value)) 
    {
        return true;
    }
    return false;
}

function validatePhoneNumber() 
{
    if (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(document.getElementById("user_phone").value)) 
    {
        return true;
    }
    return false;
}

function validateMessage() 
{
    if (document.getElementById("user_message").value != "")  
    {
        return true;
    }
    return false;
}