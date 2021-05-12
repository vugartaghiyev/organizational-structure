
// Add element

let elementNumber = 1;

function Adding(e){
    e.parentElement.parentElement.parentElement.children[1].innerHTML += GetAddChild();

    // focus new element

    let newElement = document.querySelector(".content__"+elementNumber);
    newElement.children[0].children[0].focus();
}


function GetAddChild(){
    elementNumber++;
    return '<div class="content__' + elementNumber + ' content__item">' +
    '    <div class="content__item--parent">         ' + 
    '    <input type="text" class="input-box first-box" placeholder = "Category name"  onkeypress="this.style.width = ((this.value.length + 1) * 15) + \'px\';">' +
       
    '    <div class="adition-icons">' +
    '        <div class="mini-icon add-button" onclick = "Adding(this)">' +
    '            <img src="./add.png" alt="">' +
    '        </div>' +
    '        <div class="mini-icon write-button" onclick = "Write(this)">' +
    '            <img src="./pen.png" alt="">' +
    '        </div>                      ' +  
    '        <div class="mini-icon remove-button" onclick ="Remove(this)">' +
    '            <img src="./close-cross.png" alt="">' +
    '        </div>' +
    '    </div>' +

    '    <div class="other-icons">' +
    '        <div class="mini-icon cancel-button" onclick = "Clear(this)">' +
    '            <img src="./close-cross.png" alt="">' +
    '        </div>      ' +                  
    '        <div class="mini-icon done-button" onclick = "Done(this)">' +
    '            <img src="./done-tick.png" alt="">' +
    '        </div>' +
    '    </div>' +

    '</div>' +
    '<div class="children">' +

    '</div>' +
    '</div>';
}


// Done 

function Done(e){
    e.parentElement.parentElement.children[1].style.display = "flex";
    e.parentElement.style.display = "none";
    e.parentElement.parentElement.children[0].readOnly = true;
}

function Write(e){
    e.parentElement.parentElement.children[2].style.display = "flex";
    e.parentElement.style.display = "none";
    e.parentElement.parentElement.children[0].readOnly = false;
    e.parentElement.parentElement.children[0].focus();
}

function Remove(e){
    e.parentElement.parentElement.parentElement.remove();
}

function Clear(e){
    e.parentElement.parentElement.children[0].value = "";
    e.parentElement.parentElement.children[0].focus();
}