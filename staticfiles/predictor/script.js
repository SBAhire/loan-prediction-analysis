gender = document.getElementById("gender")
married = document.getElementById("married")
edu = document.getElementById("edu")
depend = document.getElementById("depend")
self_emp = document.getElementById("self-emp")
app_inc = document.getElementById("app-inc")
coapp_inc = document.getElementById("coapp-inc")
amount = document.getElementById("amount")
months = document.getElementById("months")
credit = document.getElementById("credit")
property = document.getElementById("property")

form = document.querySelector('.form-group')

form.addEventListener('submit',e=>{
    if (gender.value=="" || married.value=="" || edu.value==""|| depend.value==""|| self_emp.value==""|| app_inc.value==""|| coapp_inc.value==""|| amount.value==""|| months.value==""|| credit.value==""|| property.value==""){
        e.preventDefault();
        alert("All Fields are mandatory! ")
        app_inc.focus();
    }
    
    
})
