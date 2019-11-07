var eating = false;
var readWork = false;
var takePhoto = false;
var naturn = false;
var steert = false;
var cute = false;
var thaiStyle = false;
var americaStyle = false;
var japanStyle = false;


var selectBox = null
function search(box) {
    if (box.style.backgroundColor == 'rgb(39, 174, 96)' || !box.style.backgroundColor) {
        box.style.backgroundColor = '#CADBAE' 
        if (!selectBox) {
            selectBox = box
        } else if (selectBox != box) {
            selectBox.style.backgroundColor = "#27ae60" 
            selectBox = box
        }
    } else if (box.style.backgroundColor == '#CADBAE' || !box.style.backgroundColor) {
        box.style.backgroundColor = '#27ae60' //เขียว
    }
}

var selectBox2 = null
function search2(box2) {
    if (box2.style.backgroundColor == 'rgb(243, 156, 185)' || !box2.style.backgroundColor) {
        box2.style.backgroundColor = '#B0CCCF'
        if (!selectBox2) {
            selectBox2 = box2 
        } else if (selectBox2 != box2) {
            selectBox2.style.backgroundColor = '#2980b9' // นง
            selectBox2 = box2
        }
    } else if (box2.style.backgroundColor == '#B0CCF' || !box2.style.backgroundColor) {
        box2.style.backgroundColor = '#2980b9'
    }
}

var selectBox3 = null
function search3(box3) {
    if (box3.style.backgroundColor == '#f39c12' || !box3.style.backgroundColor) {
        box3.style.backgroundColor = '#D0B987'
        if (!selectBox3) {
            selectBox3 = box3 
        } else if (selectBox3 != box3) {
            selectBox3.style.backgroundColor = '#f39c12' //เหลือง
            selectBox3 = box3
        }
    } else if (box3.style.backgroundColor == '#D0B987' || !box3.style.backgroundColor) {
        box3.style.backgroundColor = '#f39c12'
    }
}


const button = document.querySelector("button");
button.addEventListener("click", e => {
  document.querySelector(".element").classList.toggle("flip-scale-down-diag-2")
})

var choiceCafe = ['Timber cafe', 'Nalatkrabang', 'Beeloft cafe', 'Bissocafe', 'Olive cafe', 'Spacetime Art Galleria', 'Munwhan coffee cafe', 'Nom-mahalai', 'monwan-na-ladkrabang']

function submiss() {
    // if (eating && nature && thai) {

    // }
    // else if (eating && naturn && america) {

    // }
    // else if (eating && naturn && japan) {

    // }
    // else if (eating && street && thai) {

    // }
    // else if (eating && street && america) {

    // }
    // else if (eating && street && japan) {

    // }
    // else if (eating && cute && thai) {

    // }
    // else if (eating && cute && america) {

    // }
    // else if (eating && cute && japan) {

    // }
    // else if (readwork && naturn && japan) {}

}

a = {
    "eating nature thai" : "Timber"
}

b = {
    "Timber": {
        "name": "timber",
        "describe": "open"
    }
}

b["Timber"] --> {
    "name": "timber",
    "describe": "open"
}


c = {
    "eating street america" : "ccc"
}

c2 = {
    "ccc" : {
        "name" : "ccc",
        "describe" : "open"
    }
}


d = {
    "eating cute japan": "ddd"
}

d2 = {
    "ddd" : {
        "name" : "ddd",
        "describe" : "open"
    }
}

e = {
    "readwork naturn thai"
}


