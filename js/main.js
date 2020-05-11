//button to take you to the top of page becomes active after scrolling down a certain distance

var topBtn = document.getElementById('top-btn');

window.onscroll = function(){
    displayButton();
}

function displayButton(){
    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){
        topBtn.style.display = "block";
    }
    else{
        topBtn.style.display = "none";
    }
}


function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}