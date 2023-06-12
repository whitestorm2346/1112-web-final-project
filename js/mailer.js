const sendEmail = () => {
    Email.send({
        SecureToken : "218c96be-e6ba-4233-908e-173f7ba5331e",
        To : "tsehsunyu@gmail.com",
        From : "andrew770426@gmail.com",
        Subject : "New Contact Mail",
        Body : "Author:  " + document.getElementById("name").value
            + "<br> Author's Email:  " + document.getElementById("email").value
            + "<br> Message: <br>" + document.getElementById("body").value
    }).then(
        message => alert("Message Sent Successfully!")
    );
}