const imagenGrande = document.getElementById("imagengrande");
const imagen = document.getElementById("imagen");
const imagen1 = document.getElementById("imagen");
const cerrar = document.getElementById("Cerrar");
const BotE = document.getElementById("BotE");
const BotAR = document.getElementById("BotAR");
const BotTAH = document.getElementById("BotTAH");
const BotSG = document.getElementById("BotSG");
const BotLM = document.getElementById("BotLM");
const BotLP = document.getElementById("BotLP");
const BotFM = document.getElementById("BotFM");
const BotGMS = document.getElementById("BotGMS");
const BotEC = document.getElementById("BotEC");
const BotCEM = document.getElementById("BotCEM");
const BotMYM = document.getElementById("BotMYM");
const BotDRP = document.getElementById("BotDRP");
const BotRH = document.getElementById("BotRH");
const BotCoo = document.getElementById("BotCoo");
const BotHAL = document.getElementById("BotHAL");
const BotAR14 = document.getElementById("BotAR14");
const BotAR18 = document.getElementById("BotAR18");
const BotGS = document.getElementById("BotGS");
const BotEnU = document.getElementById("BotEnU");

const carruselG = document.getElementById("carruselG");
const CerrarC = document.getElementById("CerrarC");
const anterior = document.getElementById("anterior");
const siguiente = document.getElementById("siguiente");
const fotoC = document.getElementById("fotoC");

let fotosC = [];
let indiceC = 0;

const fotosUtil = 
[
    "../res/res_utiles/U1.jpg",
    "../res/res_utiles/U2.jpg",
    "../res/res_utiles/U3.jpg",
    "../res/res_utiles/U4.jpg",
    "../res/res_utiles/U5.jpg"
];

const fotosAfil = 
[

    "res/res_acAfi/A1.jpg",
    ""

];

function Mfoto() {
    if (fotosC.length === 0) return;

    fotoC.src = fotosC[indiceC];
}

siguiente.addEventListener("click", () => {
    if (fotosC.length === 0) return;

    indiceC = (indiceC + 1) % fotosC.length;
    Mfoto();
});

anterior.addEventListener("click", () => {
    if (fotosC.length === 0) return;

    indiceC = (indiceC - 1 + fotosC.length) % fotosC.length;
    Mfoto();
});

function AbriC(fotos) {
    if (fotos.length === 0) return;

    fotosC = fotos;
    indiceC = 0;

    Mfoto();
    carruselG.style.display = "flex";
}


    BotE?.addEventListener("click", () => {
        imagen.src = "../res/0.png"; 
        imagenGrande.style.display = "flex";
    });

    BotAR?.addEventListener("click", () => {
        imagen1.src = "../res/1.png"; 
        imagenGrande.style.display = "flex";
    });

    BotTAH?.addEventListener("click", () => {
        imagen.src = "../res/2.png"; 
        imagenGrande.style.display = "flex";
    })

    BotSG?.addEventListener("click", () => {
        imagen.src = "../res/3.png"; 
        imagenGrande.style.display = "flex";
    })

    BotLM?.addEventListener("click", () => {
        imagen.src = "../res/4.png"; 
        imagenGrande.style.display = "flex";
    })

    BotLP?.addEventListener("click", () => {
        imagen.src = "../res/5.png"; 
        imagenGrande.style.display = "flex";
    })

    BotFM?.addEventListener("click", () => {
        imagen.src = "../res/6.png"; 
        imagenGrande.style.display = "flex";
    })

    /*BotGMS.addEventListener("click", () => {
        imagen.src = "../res/.png"; 
        imagenGrande.style.display = "flex";
    })*/

    BotEC?.addEventListener("click", () => {
        imagen.src = "../res/8.png"; 
        imagenGrande.style.display = "flex";
    })

    BotCEM?.addEventListener("click", () => {
        imagen.src = "../res/9.png"; 
        imagenGrande.style.display = "flex";
    })

    BotMYM?.addEventListener("click", () => {
        imagen.src = "../res/10.png"; 
        imagenGrande.style.display = "flex";
    })

    BotDRP?.addEventListener("click", () => {
        imagen.src = "../res/11.png"; 
        imagenGrande.style.display = "flex";
    })

    BotRH?.addEventListener("click", () => {
        imagen.src = "../res/12.png"; 
        imagenGrande.style.display = "flex";
    })

    BotCoo?.addEventListener("click", () => {
        imagen.src = "../res/13.png"; 
        imagenGrande.style.display = "flex";
    })

    BotHAL?.addEventListener("click", () => {
        imagen.src = "../res/14.png"; 
        imagenGrande.style.display = "flex";
    })

    BotGS?.addEventListener("click", () => {
        imagen.src = "../res/SITRAMUSCA.png"; 
        imagenGrande.style.display = "flex";
    })

    BotAR14?.addEventListener("click", () => {
        imagen.src = "../res/14u.png"; 
        imagenGrande.style.display = "flex";
    })

     BotAR18?.addEventListener("click", () => {
        imagen.src = "../res/18s.png"; 
        imagenGrande.style.display = "flex";
    })

     BotEnU?.addEventListener("click", () => {
       AbriC(fotosUtil);
    })

     BotPrA?.addEventListener("click", () => {
       AbriC(fotosUtil);
    })

    cerrar.addEventListener("click", () => {
        imagenGrande.style.display = "none";
    });

    CerrarC.addEventListener("click", () => {
        carruselG.style.display = "none";
    });
