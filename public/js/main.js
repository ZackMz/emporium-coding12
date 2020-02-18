/** * fixed navbar */
function myFunction() {
    if (window.pageYOffset >= 400) {
        document.getElementById('fixedHeader').style.display = 'inline-flex'
    }
  }


  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
    if (currentScrollPos >= 200) {
        document.getElementById('fixedHeader').style.display = 'inline-flex'
    } else {
        document.getElementById('fixedHeader').style.display = 'none'
    }
  }

/***************************************************************************** */
/* * changement de theme : */

/** clear theme */
let themeClear = document.getElementsByClassName('themeClear');

let removeTheme = () => {
    document.getElementsByTagName('body')[0].classList.remove('dark');
    document.getElementsByTagName('body')[0].classList.add('white');
    
    
    for (let i = 0; i < themeClear.length; i++) {
        themeClear[i].style.borderColor ='red'
        themeClear[i].style.backgroundColor = 'red'
        themeClear[i].style.transform = 'rotate(360deg)';
        themeClear[i].style.transition = 'all .5s ease';
    }
    // button rotataion
    let rotate = () => {
        for (let i = 0; i < themeDark.length; i++) {
            themeClear[i].style.borderColor ='#000000'
            themeClear[i].style.backgroundColor = '#ffffff'
            themeClear[i].style.transform = 'rotate(0deg)';
        }
    }
    
    setTimeout(rotate, 1000);
}

for (let i = 0; i < themeClear.length; i++) {
    themeClear[i].addEventListener('click', removeTheme);
}

/***************************************************************************** */
/** dark theme */

let themeDark = document.getElementsByClassName('themeDark');

let addTheme = () => {
    
    document.getElementsByTagName('body')[0].classList.add('dark');
    for (let i = 0; i < themeDark.length; i++) {
        themeDark[i].style.borderColor ='red'
        themeDark[i].style.backgroundColor = 'red'
        themeDark[i].style.transform = 'rotate(-360deg)';
        themeDark[i].style.transition = 'all .5s ease';

    }
    // button rotataion
    let rotate = () => {

        for (let i = 0; i < themeDark.length; i++) {
            themeDark[i].style.borderColor ='#000000'
            themeDark[i].style.backgroundColor = '#000000'
            themeDark[i].style.transform = 'rotate(0deg)';
        }
    }
    
    setTimeout(rotate, 1000);
}

for (let i = 0; i < themeDark.length; i++) {
    themeDark[i].addEventListener('click', addTheme);
}


/***************************************************************************** */
/** * formulaire de connexion : */

        let connect = document.getElementsByClassName('connect')[0];

        let connexion = () => {
        let connexion = document.getElementById('connexion');
        connexion.style.display ='block';
        connect.style.transition = 'all 1s ease-in';
        }

        connect.addEventListener('click', connexion);

/***************************************************************************** */
/** * formulaire d'inscription */

let inscript = document.getElementById('inscript');

let monInscription = () => {
    let connexion = document.getElementById('connexion');
    connexion.style.display ='none'
    let form = document.getElementById('inscription');
    form.style.display = 'block'
}

inscript.addEventListener('click', monInscription);

/***************************************************************************** */
 /** * si compte existe deja */

        let existe = document.querySelector('.existant > a');

        let maConnexion = () => {
            let form = document.getElementById('inscription');
            form.style.display = 'none'
            let connexion = document.getElementById('connexion');
            connexion.style.display ='block'
        }

        existe.addEventListener('click', maConnexion);

/***************************************************************************** */
/** *hot fashion */

let dots = document.getElementsByClassName('dot');

carouselActive = (even) => {

    let dots = document.getElementsByClassName('dot');
    for (let i = 0; i < dots.length; i++) {
        if (even == dots[i]) {
            dots[i].style.backgroundColor = '#888888';

            let mesImages = document.getElementsByClassName('rowElements')[0];
            if (even == dots[0]) {
                mesImages.style.transform = "translateX(-5px)";
            }
            else if (even == dots[1]){
                mesImages.style.transform = "translateX(-328px)";
            }
            else if (even == dots[2]){
                mesImages.style.transform = "translateX(-620px )";
            }
            else if (even == dots[3]){
                mesImages.style.transform = "translateX(-910px)";
            }

            mesImages.style.transition = 'all 1s ease-out';

        } else {
            dots[i].style.backgroundColor = '#ffffff';

        }
    }
}



for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', (event) => {
        carouselActive(event.target)
    });
}



let test = () => {

    let mesImages = document.getElementsByClassName('rowElements')[0];

    mesImages.style.transform = "translateX(0px)";
    test1 = () =>{
        mesImages.style.transform = "translateX(-328px)";
        mesImages.style.transform = "translateX(-620px)";
        mesImages.style.transform = "translateX(-910px)";
        mesImages.style.transition = 'all 5s ease-out';
    }
    
    let test2 = () => {
        mesImages.style.transform = "translateX(-910px)";
        mesImages.style.transform = "translateX(-620px)";
        mesImages.style.transform = "translateX(-328px)";
        mesImages.style.transform = "translateX(-5px)";
        mesImages.style.transition = 'all 5s ease-out';
        setTimeout (test, 5000)
    }
    setTimeout (test1, 1000)
    setTimeout (test2, 8000)
}


window.setTimeout(test(), 2000);



