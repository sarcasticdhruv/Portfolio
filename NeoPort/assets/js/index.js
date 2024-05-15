//create an async function to iterate through all the <p> tags in the documatn and 
//change the css with a delay of 1 second after each element

async function revealTags() {
    // Returns a Promise that resolves after "ms" Milliseconds
    const timer = ms => new Promise(res => setTimeout(res, ms))
    
    var h3Tags = document.getElementsByTagName('h3');
    await timer(700);
    for (var i = 0; i < h3Tags.length; i++) {
        await timer(100);
        h3Tags[i].style.opacity = '1';
    }

    var h4Tags = document.getElementsByTagName('h4');
    await timer(700);
    for (var i = 0; i < h4Tags.length; i++) {
        await timer(100);
        h4Tags[i].style.opacity = '1';
    }

    var h5Tags = document.getElementsByTagName('h5');
    await timer(700);
    for (var i = 0; i < h5Tags.length; i++) {
        await timer(100);
        h5Tags[i].style.opacity = '1';
    }

    var spanTags = document.getElementsByTagName('span');
    await timer(1000);
    for (var i = 0; i < spanTags.length; i++) {
        await timer(70);
        spanTags[i].style.opacity = '1';
    }

    var pTags = document.getElementsByTagName('p');
    await timer(1000);
    for (var i = 0; i < pTags.length; i++) {
        await timer(50);
        pTags[i].style.color = 'aliceblue';
    }
}

revealTags();


//asyncrhonous function to iterate through all the h2 tags in the document and
//simulate a typewriter effect by placeing the letters one by one in the h2 tags
async function appear(ele, index) {
    const timer = ms => new Promise(res => setTimeout(res, ms))
    await timer(3000);
    for (var i = 0; i < ele.length; i++) {
        typeWritterLocation[index].innerHTML += ele[i];
        await timer(Math.floor(Math.random() * 200)+200);
    }
}
let content = ['Contact Info', 'Education', 'Career History'];
let typeWritterLocation = document.getElementsByTagName('h2');

appear(content[0].split(''), 0);
appear(content[1].split(''), 1);
appear(content[2].split(''), 2);


skillBox = document.getElementsByClassName('boxHover');

let infoBox = document.createElement('div');
infoBox.className = 'infoBox';
document.getElementsByClassName('skillGroups')[0].appendChild(infoBox);

function fillInfoBox(content){
    for(var i = 0; i < 3; i++){
        let infoContainer = document.createElement('div');
        infoContainer.className = 'infoContainer';
        infoBox.appendChild(infoContainer);
        for(var x = 0; x < 3; x++){
            let info = document.createElement('div');
            info.className = 'skillInfo';
            info.innerHTML = content;
            let infoContainer = document.getElementsByClassName('infoContainer')[i];
            infoContainer.appendChild(info);
        }
    }
    
}

//add event listener on hover to show the info box
for(var i = 0; i < skillBox.length; i++) {
    skillBox[i].addEventListener("mouseover", () => {
        infoBox = document.getElementsByClassName('infoBox')[0];
        if(document.body.clientWidth < 600) {
            infoBox.style.left = '30%';
            infoBox.style.width = '70%';
        }
        else {
            infoBox.style.left = '24%';
            infoBox.style.width = '76%';
        }
        fillInfoBox("Entering some information here");
        infoBox.style.animation = 'boxHover .4s ease-in forwards';
    }
    );
    skillBox[i].addEventListener("mouseout", () => {
        infoBox = document.getElementsByClassName('infoBox')[0];
        removeInfo = document.getElementsByClassName('infoContainer');
        for(var i = removeInfo.length-1; i > -1; i--){
            infoBox.removeChild(removeInfo[i]);
        }
        infoBox.style.animation = 'none';
        }
    );
}
