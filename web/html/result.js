var choiceCafe = ['Timber cafe', 'Nalatkrabang', 'Beeloft cafe', 'Bissocafe', 'Thinkmilk', 'Spacetime Art Galleria', 'Munwhan coffee cafe', 'Nom-mahalai', 'monwan-na-ladkrabang']

function load() {
    let ans = window.location.search
    let ans1 = ans.split("=")[1]
    console.log(ans1)
    
    
    let choice = {
        "photoloftfourty" : "Timber",
        "readworkloftfourty" : "Timber",
        "familystreetfifty" : "Nalatkrabang",
        "photoloftfifty" : "Beeloft cafe",
        "readwordloftsixty" : "Bissocafe",
        "familyloftsixty" : "Bissocafe",
        "friendmodernfourty" : "Thinkmilk",
        "photolofteighty" : "Spacetime Art Galleria",
        "readandworklofteighty" : "Spacetime Art Galleria",
        "photoplanteighty" : "Spacetime Art Galleria",
        "readandworkplanteighty" : "Spacetime Art Galleria",
        "friendstreetfourty" : "Nom-mahalai",
        "photoloftsixty" : "Munwhan coffee cafe",
        "friendloftsixty" : "Munwhan coffee cafe",
        "readandworkloftsixty" : "Munwhan coffee cafe",
        "familypastelfifty" : "Whanyenpensuk",
        "readandworkplantonehun" : "Varvana",
        "friendplantonehun" : "Varvana",
        "photoloftfourty" : "WE DON'T HAVE FOR YOU",
        "photoloftfifty" : "WE DON'T HAVE FOR YOU",
        "photoloftsixty" : "WE DON'T HAVE FOR YOU",
        "photolofteighty" : "WE DON'T HAVE FOR YOU",
        "photoloftonehun" : "WE DON'T HAVE FOR YOU",

    }
    
    let allCafe = {
        "Timber": {
            "name": "Timber",
            "description": "",
            "opentime": ""
        },

        "Nalatkrabang" : {
            "name": "Nalatkrabang",
            "description": "",
            "opentime": ""
        },
        "Beeloft cafe" : {
            "name": "Beeloft cafe",
            "description": "",
            "opentime": ""
        },
        "Bissocafe" : {
            "name": "Bissocafe",
            "description": "",
            "opentime": ""
        },
        "Thinkmilk" : {
            "name": "Thinkmilk",
            "description": "",
            "opentime": ""
        },
        "Spacetime Art Galleria" : {
            "name": "Spacetime Art Galleria",
            "description": "",
            "opentime": ""
        },
        "Munwhan coffee cafe" : {
            "name": "Munwhan coffee cafe",
            "description": "",
            "opentime": ""
        },
        "Nom-mahalai" : {
            "name": "Nom-mahalai",
            "description": "",
            "opentime": ""
        },
        "Varvana" : {
            "name": "Varvana",
            "description": "",
            "opentime": ""
        },
        "Whanyenpensuk" : {
            "name": "Whanyenpensuk",
            "description": "",
            "opentime": ""
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

