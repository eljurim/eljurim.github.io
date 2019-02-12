document.getElementById("user-contact-form").addEventListener("submit", function(event){
    event.preventDefault()
    console.log("El usuario ingreso el valor:  "+document.getElementById("userEmail").value);
    
    alert("Gracias en breve te contactaremos")
    console.log("datos guardados");
    document.getElementById("userEmail").value = ""
    
  });