window.onscroll = function(){displayAbout(), displayGoToTop(), displayPlanningEvents()};

/* display navigation */
function displayNavigation(){
    let menu = document.getElementById('menu');
    let navigation = document.querySelector('nav');
    menu.addEventListener('click', function(){
        if (navigation.style.display == "block"){
            navigation.style.display = "none";
        }
        else{
            navigation.style.display = "block";
        }
    })
}
displayNavigation();
/* display about */
function displayAbout() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById('get-to-know-us').style.display = "block";
    }
    else{
        document.getElementById('get-to-know-us').style.display = "none";
    }
}
/* go to top */
function displayGoToTop() {
    if (document.body.scrollTop > 140 ||document.documentElement.scrollTop > 140) {
        document.getElementById('go-to-top').style.display = "block";
    }
    else{
        document.getElementById('go-to-top').style.display = "none";
    }
}
/* how may we be of help */
setTimeout(function(){
    document.getElementById('how-may-we-be-of-help').style.display = "block"
}, 10000)

/* plannnig events */
function displayPlanningEvents(){
    if(document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        document.getElementById('planning-events').style.display = "block";
    }
    else {
        document.getElementById('planning-events').style.display = "none";
    }
}