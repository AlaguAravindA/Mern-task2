function cal(){
    var num1=document.getElementById("numberone").value;
    var num2=document.getElementById("numbertwo").value;
    var e=String(document.getElementById("operator").value);
    var result;
    if(num1=="" || num2==""){
        alert("Enter the Value(s)");
    }
    else{

    num1=Number(num1);
    num2=Number(num2);

    switch(e){
        case "+":
            result=num1+num2;
            break;
        case "-":
            result=num1-num2;
            break;
        case "*":
            result=num1*num2;
            break;
        case "/":
            if(num1!=0 &&num2!=0){
                result=num1/num2;
            }
            else {
                alert("Any one input is 0");
            }
            break;
        default:
            alert("Select Any operator");
    }
    document.getElementById("result").innerHTML=result;
}
    
}