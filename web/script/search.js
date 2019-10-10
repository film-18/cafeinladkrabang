var read = null;
var photo = null;
var eat = null;
var nature = null;
var street = null;
var america = null;
var thai = null;
function search() {
    let readBox = document.getElementById('read');
    if (readBox.checked == true) {
        read = readBox.value;
    }
    let photoBox = document.getElementById('photo');
    if (photoBox.checked == true) {
        photo = photoBox.value;
    }
    let eatBox = document.getElementById('eat');
    if (eatBox.checked == true) {
        eat = eatBox.value;
    }
    let natureBox = document.getElementById('nature');
    if (natureBox.checked == true) {
        nature = natureBox.value;
    }
    let streetBox = document.getElementById('street');
    if (streetBox.checked == true) {
        street = streetBox.value;
    }
    let petBox = document.getElementById('pet');
    if (petBox.checked == true) {
        pet = petBox.value;
    }
    let americaBox = document.getElementById('american');
    if (americaBox.checked == true) {
        america = americaBox.value
    }
    let thaiBox = document.getElementById('thai');
    if (thaiBox.checked == true) {
        var thai = thaiBox.value;
    }

    console.log(read, photo, eat, nature, street, pet, america, thai)
}