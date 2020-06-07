function load(params) {
    document.getElementById("aboout").style.display = "none";
}

function web(params) {
    document.getElementById('hometxt').innerHTML="Welcome to my website!<br>Here, you'll find more about me. Be sure to click through to learn more!"
}
function who(params) {
    document.getElementById('hometxt').innerHTML = "My name is Audry!<br>I'm an eleventh grade student who likes coding.<br>This is my first website."
}
function home(params) {
    document.getElementById('hometxt').innerHTML = "Hello!<br><span>&#128075;&#127998;</span>"
    document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/76/ec/a8/76eca8e9e408283e32823b736e19c966.gif')";
    document.getElementById("hoome").style.display = "inherit";
    document.getElementById("aboout").style.display = "none";
}
function about(params) {    
    document.body.style.backgroundImage = "none";
    document.getElementById("hoome").style.display = "none";
    document.getElementById("aboout").style.display = "inherit";
}
