function checkAge() {
 var userName = document.getElementById("name").value;
 var age = document.getElementById("age").value; 

 if (age < 21) {
 alert(userName + ", you can't drink!" + "\n" + "You are " + age + " years old.");
 } else {
 alert("Hi " + userName + ", drink away!" + "\n" + "You are " + age + " years old.");
 } }