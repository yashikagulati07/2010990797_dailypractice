function calmercury(){
    let weight = document.getElementById("hellohowareyou").value;
    let mercuryw = weight * 0.38;
    // alert("Your weight on Mercury is : " + mercuryw);
    document.getElementById("mw").innerHTML = "Mercury : " + mercuryw;
}

function calvenus(){
    let weight = document.getElementById("hellohowareyou").value;
    let venusw = weight * 0.91;
    // alert("Your weight on Venus is : " + venusw);
    document.getElementById("vw").innerHTML = "Venus : " + venusw;
}

function calearth(){
    let weight = document.getElementById("hellohowareyou").value;
    let earthw = weight * 1;
    // alert("Your weight on Earth is : " + earthw);
    document.getElementById("ew").innerHTML = "Earth : " + earthw;
}

function calmars(){
    let weight = document.getElementById("hellohowareyou").value;
    let marsw = weight * 0.38;
    // alert("Your weight on Mars is : " + marsw);
    document.getElementById("msw").innerHTML = "Mars : " + marsw;
}

function caljupiter(){
    let weight = document.getElementById("hellohowareyou").value;
    let jupiterw = weight * 2.34;
    // alert("Your weight on Jupiter is : " + jupiterw);
    document.getElementById("jw").innerHTML = "Jupiter : " + jupiterw;
}

function calsaturn(){
    let weight = document.getElementById("hellohowareyou").value;
    let saturnw = weight * 1.06;
    // alert("Your weight on Saturn is : " + saturnw);
    document.getElementById("sw").innerHTML = "Saturn : " + saturnw;

}

function caluranus() {
    let weight = document.getElementById("hellohowareyou").value;
    let uranusw = weight * 0.92;
    // alert("Your weight on Uranus is : " + uranusw);
    document.getElementById("uw").innerHTML = "Uranus : " + uranusw;
}

function calneptune(){
    let weight = document.getElementById("hellohowareyou").value;
    let neptunew = weight * 1.19;
    // alert("Your weight on Neptune is : " + neptunew);
    document.getElementById("nw").innerHTML = "Neptune : " + neptunew;
}

function calpluto(){
    let weight = document.getElementById("hellohowareyou").value;
    let plutow = weight * 0.06;
    // alert("Your weight on Pluto is : " + plutow);
    document.getElementById("pw").innerHTML = "Pluto : " + plutow;
}




// To calculate weight all at ones
var wage = document.getElementById("hellohowareyou");
wage.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
        validate(e);
    }
});

function validate(e) {
    // var text = e.target.value;
    let weight = document.getElementById("hellohowareyou").value;
    var mercuryw = weight * 0.38;
    var venusw = weight * 0.91;
    var earthw = weight * 1;
    var marsw = weight * 0.38;
    var jupiterw = weight * 2.34;
    var saturnw = weight * 1.06;
    var uranusw = weight * 0.92;
    var neptunew = weight * 1.19;
    var plutow = weight * 0.06;
    document.getElementById("mw").innerHTML = "Mercury : " + mercuryw;
    document.getElementById("vw").innerHTML = "Venus : " + venusw;
    document.getElementById("ew").innerHTML = "Earth : " + earthw;
    document.getElementById("msw").innerHTML = "Mars : " + marsw;
    document.getElementById("jw").innerHTML = "Jupiter : " + jupiterw;
    document.getElementById("sw").innerHTML = "Saturn : " + saturnw;
    document.getElementById("uw").innerHTML = "Uranus : " + uranusw;
    document.getElementById("nw").innerHTML = "Neptune : " + neptunew;
    document.getElementById("pw").innerHTML = "Pluto : " + plutow;

}