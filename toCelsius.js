function toCelsius(fahreheit){

        return (5/9) *(fahreheit -32);

}
document.getElementId("demo3").innerHTML = "The Temperature is " + toCelsius(77) + " Celsius"
