
const container = document.querySelector(".container");
const content = document.querySelector(".content");



// Go to center -------------------------------------------------------------------

window.onload = GoToCenter();

function GoToCenter(){

        container.scrollLeft = (content.clientWidth - container.clientWidth) / 2;
        container.scrollTop = (content.clientHeight - container.clientHeight) / 2;
        
}


// container.scrollWidth - container.clientWidth max scrollable value

// let startX = 0, endX = 0, startY = 0, endY = 0, changedX = 0, changedY = 0;

// function StartMove(e){
//     startX = e.pageX || e.clientX;
//     startY = e.pageY || e.clientY;



// }


// function EndMove(e){
//     endX = e.pageX || e.clientX;
//     endY = e.pageY || e.clientY;


//     changedX = startX - endX;
//     changedY = startY - endY;

// }



// moving left right top bottom -------------------------------------------------------------------

let startInterval, movingSpeed = 3.5;

function StartBottom(){

    startInterval = setInterval(function(){
        container.scrollTop += movingSpeed;
    },5);

}

function StartTop(){
    startInterval = setInterval(function(){
        container.scrollTop += -movingSpeed;
    },5);

}


function StartLeft(){

    startInterval = setInterval(function(){
        container.scrollLeft += -movingSpeed;
    },5);

}

function StartRight(){

    startInterval = setInterval(function(){
        container.scrollLeft += movingSpeed;
    },5);

}

function OnMouseUp(){
    clearInterval(startInterval);
}


// zoom in out -------------------------------------------------------------------

let currentZoom = 1,zoomInterval, zoomingValue = 0.03;

function zoomIn(){
    zoomInterval = setInterval(function(){
        currentZoom += zoomingValue;
        content.style.transform = "scale(" + currentZoom + ")";
    },20);

}

function zoomOut(){
    zoomInterval = setInterval(function(){
        if(currentZoom >= 0.2)
            currentZoom -= zoomingValue;
        content.style.transform = "scale(" + currentZoom + ")";
    },20);
}

function stopZooming(){
    clearInterval(zoomInterval);
}

function standartZoom(){
    currentZoom = 1;
    content.style.transform = "scale(" + currentZoom + ")";
}