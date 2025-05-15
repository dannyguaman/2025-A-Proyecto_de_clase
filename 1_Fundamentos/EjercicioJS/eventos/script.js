function welcome() {
 var name = document.getElementById("name").value;    
alert("Hi, " + name + "!");
 }

const welcomeArrow = () => {
    const name = document.getElementById("name").value;
    //alert("Hi, " + name + "!");
    const age = document.getElementById("age").value;
    let message = "Hi, " + name + "!";
    if (age > 18) {
        message += " You can drink a beer with me.";
    } else {
        message += " You can drink a soda with me.";
    }
    alert(message);
};
