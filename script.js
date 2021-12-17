1
//FUNCTIONS DE BASE---------------------------------------------------------------
function domOn(selector, event, callback) {
    domForEach(selector, ele => ele.addEventListener(event, callback));
}

// Param: selecteur + fonction a lancer
function domForEach(selector, callback) {
    document.querySelectorAll(selector).forEach(callback);
}


function openInNewTab(url) {
    window.open(url, '_blank').focus();
}

function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
}

async function load(url) {
    const response = await fetch(url);
    const xmlText = await response.text();
    const parser = new DOMParser();
    return parser.parseFromString(xmlText, 'text/xml');
  }


  async function loadJsonUrls(urls) {
    window.dispatchEvent(new Event('fetch-start'));
    const results = await Promise.all(urls.map(url => fetch(url)));
    const responses = Promise.all(results.map(result => result.json()));
    window.dispatchEvent(new Event('fetch-stop'));
    return responses;
  }

  async function loadJsonUrl(url) {
    return (await loadJsonUrls([url]))[0];
  }

  function makeDate(){
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    return dd+"."+mm+"."+yyyy;
  }

function retourneJour(jour) {
    switch (jour) {
        case 0:
            return "Sunday";
            break;
        case 1:
            return "Monday";
            break;
        case 2:
            return "Tuesday";
            break;
        case 3:
            return "Wednesday";
            break;
        case 4:
            return "Thursday";
            break;
        case 5:
            return "Friday TGIF";
            break;
        case 6:
            return "Saturday";
            break;

        default:
            break;
    }
}



//Gestion du temps  
tempsDOM = document.querySelector(".theTime");
jourDOM = document.querySelector(".theDay");
console.log(tempsDOM);

let today = new Date();
let day = today.getDay();


jourDOM.textContent = retourneJour(day)+" "+makeDate();
if (today.getMinutes() < 10) {
    let time = today.getHours() + ':0' + today.getMinutes();
    tempsDOM.textContent = time;
} else {
    let time = today.getHours() + ":" + today.getMinutes();
    tempsDOM.textContent = time;
}



//Affichage background des panels site
domOn('.Element', 'mouseover', evt => {
    evt.currentTarget.classList.add('selected');
})

//Affichage background des panels site
domOn('.Element', 'mouseout', evt => {
    evt.currentTarget.classList.remove('selected');
})



//Affichage background des panels site
domOn('.News', 'mouseover', evt => {
    evt.currentTarget.classList.add('selected');
})

//Affichage background des panels site
domOn('.News', 'mouseout', evt => {
    evt.currentTarget.classList.remove('selected');
})

// domOn('body', 'wheel', evt => {
//     console.log('wesh')
//     let panel = document.querySelectorAll('.Panel');
//     panel.forEach(elm => {
//         if (!elm.classList.contains('hide')) {
//             elm.classList.add('hide')
//          }else{elm.classList.remove('hide');}
//     });

    
  
// })



domOn('.Element', 'click', evt => {
    let laClasse = evt.currentTarget.className;
    console.log(laClasse)
    //partie des favorits
    if (evt.currentTarget.classList.contains('Reddit')) {
        window.open("https://reddit.com", "_blank")
    }
    if (evt.currentTarget.classList.contains('Netflix')) {
        window.open("https://www.netflix.com/browse", "_blank")
    }
    if (evt.currentTarget.classList.contains('Outlook')) {
        window.open("https://outlook.com", "_blank")
    }
    if (evt.currentTarget.classList.contains('HEIG')) {
        window.open("https://webmail.heig-vd.ch", "_blank")
    }
    if (evt.currentTarget.classList.contains('Cyberlearn')) {
        window.open("https://cyberlearn.hes-so.ch", "_blank")
    }
    if (evt.currentTarget.classList.contains('GAPS')) {
        window.open("https://gaps.heig-vd.ch/consultation/", "_blank")
    }
    
})

//partie des news
domOn('.News','click', evt=>{
    let newsClasse = evt.currentTarget.className;
    if (evt.currentTarget.classList.contains('Techradar')) {
        window.open("https://techradar.com", "_blank")
    }
    if (evt.currentTarget.classList.contains('Engadget')) {
        window.open("https://engadget.com", "_blank")
    }
    if (evt.currentTarget.classList.contains('JeuxVideo')) {
        window.open("https://jeuxvideo.com", "_blank")
    }
    if(evt.currentTarget.classList.contains('MDN')){
        window.open("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference","_blank")
    }
    if(evt.currentTarget.classList.contains('w3c')){
        window.open("https://www.w3schools.com/html/default.asp","_blank")
    }
    if(evt.currentTarget.classList.contains('github')){
        window.open("https://github.com/dk-xy/","_blank")
}
})


//partie finance

