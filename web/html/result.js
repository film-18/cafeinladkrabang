var choiceCafe = ['Timber cafe', 'Nalatkrabang', 'Beeloft cafe', 'Bissocafe', 'Thinkmilk', 'Spacetime Art Galleria', 'Munwhan coffee cafe', 'Nom-mahalai', 'monwan-na-ladkrabang']

function load() {
    let ans = window.location.search
    let ans1 = ans.split("=")[1]
    console.log(ans1)
    
    
    let choice = {
        "photoloftfifty" : "Timber",
        "readworkloftfifty" : "Timber",
        "familystreetfifty" : "Nalatkrabang",
        "readwordloftseventy" : "Bissocafe",
        "familyloftseventy" : "Bissocafe",
        "friendloftfifty" : "Thinkmilk",
        "photoloftseventy" : "Spacetime Art Galleria",
        "readworkloftseventy" : "Spacetime Art Galleria",
        "photoplantseventy" : "Spacetime Art Galleria",
        "readworkplantseventy" : "Spacetime Art Galleria",
        "friendstreetfifty" : "Nom-mahalai",
        "photoloftseventy" : "Munwhan coffee cafe",
        "friendloftseventy" : "Munwhan coffee cafe",
        "readworkloftseventy" : "Munwhan coffee cafe",
        "familypastelfifty" : "Whanyenpensuk",
        "readworkplantonehun" : "Varvana",
        "friendplantonehun" : "Varvana",
        "photoloftseventy" : "WE DON'T HAVE FOR YOU",
        "photoloftonehun" : "WE DON'T HAVE FOR YOU",
        "photostreetfifty" : "WE DON'T HAVE FOR YOU",
        "photostreetseventy" : "WE DON'T HAVE FOR YOU",
        "photostreetonehun" : "WE DON'T HAVE FOR YOU",
        "photoplantfifty" : "WE DON'T HAVE FOR YOU",
        "photoplantonehun" : "WE DON'T HAVE FOR YOU",
        "photopastelfifty" : "WE DON'T HAVE FOR YOU",
        "photopastelseventy" : "WE DON'T HAVE FOR YOU",
        "photopastelonehun" : "WE DON'T HAVE FOR YOU",
        "readworkloftonehun" : "WE DON'T HAVE FOR YOU",
        "readworkstreetfifty" : "WE DON'T HAVE FOR YOU",
        "readworkstreetseventy" : "WE DON'T HAVE FOR YOU",
        "readworkstreetonehun" : "WE DON'T HAVE FOR YOU",
        "readworkplantfifty" : "WE DON'T HAVE FOR YOU",
        "readworkpastelfifty" : "WE DON'T HAVE FOR YOU",
        "readworkpastelseventy" : "WE DON'T HAVE FOR YOU",
        "readworkpastelonehun" : "WE DON'T HAVE FOR YOU",
        "friendloftonehun" : "WE DON'T HAVE FOR YOU",
        "friendstreetseventy" : "WE DON'T HAVE FOR YOU",
        "friendstreetonehun" : "WE DON'T HAVE FOR YOU",
        "friendplantfifty" : "WE DON'T HAVE FOR YOU",
        "friendplantseventy" : "WE DON'T HAVE FOR YOU",
        "friendpastelfifty" : "WE DON'T HAVE FOR YOU",
        "friendpastelseventy" : "WE DON'T HAVE FOR YOU",
        "friendpastelonehun" : "WE DON'T HAVE FOR YOU",
        "familyloftfifty" : "WE DON'T HAVE FOR YOU",
        "familyloftonehun" : "WE DON'T HAVE FOR YOU",
        "familystreetseventy" : "WE DON'T HAVE FOR YOU",
        "familystreetonehun" : "WE DON'T HAVE FOR YOU",
        "familyplantfifty" : "WE DON'T HAVE FOR YOU",
        "familyplantseventy" : "WE DON'T HAVE FOR YOU",
        "familyplantonehun" : "WE DON'T HAVE FOR YOU",
        "familypastelseventy" : "WE DON'T HAVE FOR YOU",
        "familypastelonehun" : "WE DON'T HAVE FOR YOU",

    }
    
    let allCafe = {
        "Timber": {
            "name": "Timber",
            "description": "take photo and review, reading or working, Loft, start 50 baht",
            "opentime": "11:00 - 22:00"
        },

        "Nalatkrabang" : {
            "name": "Nalatkrabang",
            "description": "rest with family, street or vintage, start 50 baht",
            "opentime": "10:00 - 19:00"
        },
        "Beeloft cafe" : {
            "name": "Beeloft cafe",
            "description": "take photo and review, Loft, start 50 baht",
            "opentime": "09:00 - 21:00"
        },
        "Bissocafe" : {
            "name": "Bissocafe",
            "description": "reading or working, rest with family, Loft, ",
            "opentime": "07.00 - 18.00"
        },
        "Thinkmilk" : {
            "name": "Thinkmilk",
            "description": "hang out with friends, Loft, start 50 baht",
            "opentime": "16:00 - 00:00"
        },
        "Spacetime Art Galleria" : {
            "name": "Spacetime Art Galleria",
            "description": "take photo and review, reading or working, Loft, plant & tropical, ",
            "opentime": "08:00 - 21:00"
        },
        "Munwhan coffee cafe" : {
            "name": "Munwhan coffee cafe",
            "description": "take photo and review, reading or working, hang out with friends, Loft, ",
            "opentime": "06:00 - 19:00"
        },
        "Nom-mahalai" : {
            "name": "Nom-mahalai",
            "description": "hang out with friends, street or vintage, start 50 baht",
            "opentime": "15:00 - 00:00"
        },
        "Varvana" : {
            "name": "Varvana",
            "description": "reading or working, hang out with friends, plant & tropical, start 100 baht",
            "opentime": "11:30-21:30"
        },
        "Whanyenpensuk" : {
            "name": "Whanyenpensuk",
            "description": "rest with family, pastel, start 50 baht",
            "opentime": "17:00 - 22:30"
        },
        "WE DON'T HAVE FOR YOU" : {
            "name" : "WE DON'T HAVE FOR YOU",
            "description": "PLEASE TRY AGIAN",
            "opentime": "THANKYOU"
        }
     }
    console.log(choice[ans1])
    
    let cafe = allCafe[choice[ans1]];
    let name = cafe["name"];
    let description = cafe["description"];
    let opentime = cafe["opentime"];
    
    let nameBox = document.getElementById("name");
    let descriptionBox = document.getElementById("description");
    let opentimeBox = document.getElementById("opentime");
    nameBox.innerHTML = "Name: " + name
    descriptionBox.innerHTML = "Description: " + description;
    opentimeBox.innerHTML = "Open-Close: " + opentime;
}

