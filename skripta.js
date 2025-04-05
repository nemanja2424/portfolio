// skripta.js

//alert ("This web site is not finished")



var skrolovanje = 100;
var skrolDugme = document.getElementById('scroll-to-top');

window.onscroll = function () {
    if (document.documentElement.scrollTop > skrolovanje) {
        skrolDugme.style.display = 'flex';
    }
    else {
        skrolDugme.style.display = 'none';
    }
}

function scrollToTop () {
    window.scrollTo({
        top: 0, behavior: 'smooth'
    });
}



function downscroll(id) {
    var element = document.getElementById(id);

    if (element) {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    }
}


function promeniSliku(brSlike){
    var putanjaSlike = "Media/social/druga" + brSlike + ".png";
    var idSlike = "socialSlika" + brSlike;
    document.getElementById(idSlike).src= putanjaSlike;
}

function vratiSliku(brSlike){
    var putanjaSlike = "Media/social/prva" + brSlike + ".png";
    var idSlike = "socialSlika" + brSlike;
    document.getElementById(idSlike).src= putanjaSlike;
}





document.addEventListener("DOMContentLoaded", function() {
    if (window.matchMedia("(max-width: 1001px)").matches) {
        var hamburger = document.getElementById('hamburger');
        var navigacija = document.getElementById('navigacija');
        var iks = document.getElementById('iks');

        hamburger.addEventListener('click', function() {
            if (getComputedStyle(navigacija).display === 'flex') {
                navigacija.style.display = 'none';
            } 
            else {
                navigacija.style.display = 'flex';
                hamburger.style.display = 'none';
            }
        });


        iks.addEventListener('click', function() {
            if (getComputedStyle(navigacija).display === 'none') {
                navigacija.style.display = 'flex';
            }
            else {
                navigacija.style.display = 'none';
                hamburger.style.display = 'flex'
            }
        });
        console.log("Telefon");
    } else {
        console.log("PC");
    }
    console.log("Dokument je učitan!");
});

