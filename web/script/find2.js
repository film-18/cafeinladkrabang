var eating = null;
var readWork = null;
var takePhoto = null;
var naturn = null;
var steert = null;
var cute = null;
var thaiStyle = null;
var americaStyle = null;
var japanStyle = null;


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