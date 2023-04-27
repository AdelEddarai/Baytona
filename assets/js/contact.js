function sendMail(){
Email.send({
    SecureToken : "dc268774-abf9-4a55-87a2-757f300e35db",
    To : 'adeleddarai29@gmail.com',
    From : "adeleddarai29@gmail.com",
    Subject : "This is the subject",
    Body : "Name: " + document.getElementById("name").value
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Message: " + document.getElementById("messages").value
        
}).then(
message => alert("message sent succesfully")
);

}