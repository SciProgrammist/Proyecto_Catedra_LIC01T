/*
Se han usado algunos recursos externos para este mapa:
1. Leaflet, una librería de Javasscript que permite crear mapas interactivos (https://leafletjs.com/).
2. OpenStreetMap, como proveedor del mapa (https://www.openstreetmap.org/#map=9/13.7754/-88.8354)
*/

let miMapa;
let ahuachapanJ, sonsonateJ, santaAnaJ, chalatetangoJ, lalibertadJ, sansalvadorJ, cuscatlanJ, lapazJ, sanvicenteJ, cabañasJ, sanmiguelJ, usulutanJ, morazanJ, launionJ;
let ahuachapanP, sonsonateP, santaAnaP, chalatenangoP, lalibertadP, sansalvadorP, cuscatlanP, lapazP, sanvicenteP, cabañasP, sanmiguelP, usulutanP, morazanP, launionP;
let crearMapa = () => {
    // Se establece la latitud, longitud y nivel de zoom, respectivamente. El objeto miMapa será la base de todo
    miMapa = L.map('div_mapa').setView([13.7994, -88.8272], 9);

    // Se agrega el mapa usando OpenStreetMap como proveedor.
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        minZoom: 9,
        maxZoom: 10,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(miMapa);

    delimitarDepartamentos(); // Se delimitan los departamentos.
    ayudaVisualZonas();
}

let delimitarDepartamentos = () => {
    infoPrevia(); // Se establece la información previa

    ahuachapanP = delAhuachapan();
    ahuachapanP.addTo(miMapa);
    ahuachapanP.on('mouseover', function () {
        crearMensaje(this, ahuachapanJ);
        this.setStyle({ fillColor: "#17255e" });
    }
    );
    ahuachapanP.on('click', function () {
        crearLink('./departamentos_html/occidente/Ahuachapan_InfoDepart.html')
    })
    ahuachapanP.on('mouseout', function () {
        this.setStyle({ fillColor: "#3388ff" });
    })

    sonsonateP = delSonsonate();
    sonsonateP.addTo(miMapa);
    sonsonateP.on('mouseover', function () {
        crearMensaje(this, sonsonateJ);
        this.setStyle({ fillColor: "#17255e" });
    }
    );
    sonsonateP.on('click', function () {
        crearLink('./departamentos_html/occidente/Sonsonate_InfoDepart.html')
    })
    sonsonateP.on('mouseout', function () {
        this.setStyle({ fillColor: "#3388ff" });
    })

    santaAnaP = delSantaAna();
    santaAnaP.addTo(miMapa);
    santaAnaP.on('mouseover', function () {
        crearMensaje(this, santaAnaJ);
        this.setStyle({ fillColor: "#17255e" });

    }
    );
    santaAnaP.on('click', function () {
        crearLink('./departamentos_html/occidente/Santa_Ana_InfoDepart.html')
    })
    santaAnaP.on('mouseout', function () {
        this.setStyle({ fillColor: "#3388ff" });
    })

    lalibertadP = delLaLibertad();
    lalibertadP.addTo(miMapa);
    lalibertadP.on('mouseover', function () {
        crearMensaje(this, lalibertadJ);
        this.setStyle({ fillColor: "#17255e" });

    }
    );
    lalibertadP.on('click', function () {
        crearLink('./departamentos_html/central/La_Libertad_InfoDepart.html')
    })
    lalibertadP.on('mouseout', function () {
        this.setStyle({ fillColor: "#3388ff" });
    })

    sansalvadorP = delSanSalvador();
    sansalvadorP.addTo(miMapa);
    sansalvadorP.on('mouseover', function () {
        crearMensaje(this, sansalvadorJ);
        this.setStyle({ fillColor: "#17255e" });
    }
    );
    sansalvadorP.on('click', function () {
        crearLink('./departamentos_html/central/San_Salvador_InfoDepart.html')
    })
    sansalvadorP.on('mouseout', function () {
        this.setStyle({ fillColor: "#3388ff" });
    })


    cuscatlanP = delCuscatlan();
    cuscatlanP.addTo(miMapa);
    cuscatlanP.on('mouseover', function () {
        crearMensaje(this, cuscatlanJ);
        this.setStyle({ fillColor: "#17255e" });
    }
    );
    cuscatlanP.on('click', function () {
        crearLink('./departamentos_html/central/Cuscatlan_InfoDepart.html')
    })
    cuscatlanP.on('mouseout', function () {
        this.setStyle({ fillColor: "#3388ff" });
    })


    cabañasP = delCabañas();
    cabañasP.addTo(miMapa);
    cabañasP.on('mouseover', function () {
        crearMensaje(this, cabañasJ);
        this.setStyle({ fillColor: "#17255e" });
    }
    );
    cabañasP.on('click', function () {
        crearLink('./departamentos_html/central/Cabañas_InfoDepart.html')
    })
    cabañasP.on('mouseout', function () {
        this.setStyle({ fillColor: "#3388ff" });
    })


    chalatenangoP = delChalatenango();
    chalatenangoP.addTo(miMapa);
    chalatenangoP.on('mouseover', function () {
        crearMensaje(this, chalatetangoJ);
        this.setStyle({ fillColor: "#17255e" });
    }
    );
    chalatenangoP.on('click', function () {
        crearLink('./departamentos_html/central/Chalatenango_InfoDepart.html')
    })
    chalatenangoP.on('mouseout', function () {
        this.setStyle({ fillColor: "#3388ff" });
    })


    lapazP = delLaPaz();
    lapazP.addTo(miMapa);
    lapazP.on('mouseover', function () {
        crearMensaje(this, lapazJ);
        this.setStyle({ fillColor: "#17255e" });
    }
    );
    lapazP.on('click', function () {
        crearLink('./departamentos_html/central/La_Paz_InfoDepart.html')
    })
    lapazP.on('mouseout', function () {
        this.setStyle({ fillColor: "#3388ff" });
    })


    sanvicenteP = delSanVicente();
    sanvicenteP.addTo(miMapa);
    sanvicenteP.on('mouseover', function () {
        crearMensaje(this, sanvicenteJ);
        this.setStyle({ fillColor: "#17255e" });
    }
    );
    sanvicenteP.on('click', function () {
        crearLink('./departamentos_html/central/San_Vicente_InfoDepart.html')
    })
    sanvicenteP.on('mouseout', function () {
        this.setStyle({ fillColor: "#3388ff" });
    })


    usulutanP = delUsulutan();
    usulutanP.addTo(miMapa);
    usulutanP.on('mouseover', function () {
        crearMensaje(this, usulutanJ);
        this.setStyle({ fillColor: "#17255e" });
    }
    );
    usulutanP.on('click', function () {
        crearLink('./departamentos_html/oriente/Usulutan_InfoDepart.html')
    })
    usulutanP.on('mouseout', function () {
        this.setStyle({ fillColor: "#3388ff" });
    })

    sanmiguelP = delSanMiguel();
    sanmiguelP.addTo(miMapa);
    sanmiguelP.on('mouseover', function () {
        crearMensaje(this, sanmiguelJ);
        this.setStyle({ fillColor: "#17255e" });
    }
    );
    sanmiguelP.on('click', function () {
        crearLink('./departamentos_html/oriente/San_Miguel_InfoDepart.html')
    })
    sanmiguelP.on('mouseout', function() {
        this.setStyle({fillColor: "#3388ff"});
    })


    morazanP = delMorazan();
    morazanP.addTo(miMapa);
    morazanP.on('mouseover', function () {
        crearMensaje(this, morazanJ);
        this.setStyle({ fillColor: "#17255e" });
    }
    );
    morazanP.on('click', function () {
        crearLink('./departamentos_html/oriente/Morazan_infoDepart.html')
    })
    morazanP.on('mouseout', function() {
        this.setStyle({fillColor: "#3388ff"});
    })

    launionP = delLaUnion();
    launionP.addTo(miMapa);
    launionP.on('mouseover', function () {
        crearMensaje(this, launionJ);
        this.setStyle({ fillColor: "#17255e" });
    }
    );
    launionP.on('click', function () {
        crearLink('./departamentos_html/oriente/La_Union_InfoDepart.html')
    })
    launionP.on('mouseout', function() {
        this.setStyle({fillColor: "#3388ff"});
    })

}

// Se establecen todos los JSON con la información previa
let infoPrevia = () => {
    let obj1 = new departamento('San Salvador', 'San Salvador', '651.31', 'Del 1 al 6 de agosto', '2,404,097');
    sansalvadorJ = JSON.stringify(obj1);
    let objSV = new departamento('San Vicente', 'San Vicente', '267.25', 'Del 12 al 31 de diciembre', '53,213');
    sanvicenteJ = JSON.stringify(objSV);

    
    let objdptLP = new departamento('La Paz','Zacatecoluca','1,223.61','del 18 al 25 de junio','320,379');
    lapazJ=JSON.stringify(objdptLP);
    let objdptMrzn = new departamento('Morazan','San Francisco Gotera','1,447','del 1 al 4 de octubre','174,406');
    morazanJ=JSON.stringify(objdptMrzn);
    let objdptchlt = new departamento('Chalatenango','Chalatenango','2017','del 15 al 24 de junio','275,100');
    chalatetangoJ=JSON.stringify(objdptchlt);
    let objdptcbns =new departamento('Cabañas','Sensuntepeque','1,103.51','Del 25 de noviembre al 5 de diciembre','215,400');
    cabañasJ = JSON.stringify(objdptcbns);
    let objCSCT = new departamento('Cuscatlán', 'Cuscatlán', '756', 'Del 26 al 28 de Diciembre', '232,238');
    cuscatlanJ = JSON.stringify(objCSCT);
    

    let objSSNT = new departamento('Sonsonate', 'Sonsonate', '232.5', 'Del 22 de enero al 2 de febrero', '72,951');
    sonsonateJ = JSON.stringify(objSSNT);
    let objSTNA = new departamento('Santa Ana', 'Santa Ana', '408', 'Del 17 al 26 de julio', '272,554');
    santaAnaJ = JSON.stringify(objSTNA);
    let objAHCP = new departamento('Ahuachapán', 'Ahuachapán', '244.8', 'Del 22 de febrero al 12 de marzo', '129,750');
    ahuachapanJ = JSON.stringify(objAHCP);
    let objLL = new departamento('La Libertad', 'Santa Tecla', '1652.9', 'Del 1 al 30 de diciembre', '660,653');
    lalibertadJ = JSON.stringify(objLL);

    let objLU= new departamento('La Unión', 'La Unión', '144.4', 'Del 1 al 15 de octubre', '34,045');
    launionJ = JSON.stringify(objLU);
    let objSM = new departamento('San Miguel', 'San Miguel', '594', 'Del 29 de octubre al 26 de noviembre', '247,119');
    sanmiguelJ = JSON.stringify(objSM);
    let objU = new departamento('Usulután', 'Usulután', '139.8', 'Del 19 al 27 de noviembre', '73,064');
    usulutanJ = JSON.stringify(objU);
    // AÑADIR acá 
}

// Se establece el popup según los objetos dados
let crearMensaje = (departamento, depJSON) => {
    let mensaje = L.popup();
    mensaje.setLatLng(departamento.getCenter())
    mensaje.setContent(JSON.parse(depJSON).html);
    mensaje.openOn(miMapa)
    mensaje.autoClose = true;
}

// Se establece el link
let crearLink = (enlace) => {
    window.location = enlace;
}

let ayudaVisualZonas = () => {
    let occidente = document.getElementById("zOccidente");
    // Cuando el mouse está en la zona
    occidente.addEventListener("mouseover", function(){
        sombraOccidente("red");
    })
    // Cuando el mouse sale de la zona
    occidente.addEventListener("mouseleave", function(){
        sombraOccidente("#3388ff")
    });

    let central = document.getElementById("zCentral");
    central.addEventListener("mouseover", function(){
        sombraCentral("green");
    })
    central.addEventListener("mouseleave", function(){
        sombraCentral("#3388ff");
    })

    let oriente = document.getElementById("zOriente");
    oriente.addEventListener("mouseover", function(){
        sombraOriente("orange");
    })
    oriente.addEventListener("mouseleave", function(){
        sombraOriente("#3388ff");
    })

}
// Función que destaca occidente
let sombraOccidente = (colorD) =>{
    sonsonateP.setStyle({fillColor: `${colorD}`});
    ahuachapanP.setStyle({fillColor: `${colorD}`})
    santaAnaP.setStyle({fillColor: `${colorD}`});
}

// Función que destaca la zona central
let sombraCentral = (colorD) =>{
    sansalvadorP.setStyle({fillColor: `${colorD}`});
    chalatenangoP.setStyle({fillColor: `${colorD}`});
    cuscatlanP.setStyle({fillColor: `${colorD}`});
    lapazP.setStyle({fillColor: `${colorD}`});
    cabañasP.setStyle({fillColor: `${colorD}`});
    sanvicenteP.setStyle({fillColor: `${colorD}`});
    lalibertadP.setStyle({fillColor: `${colorD}`});

}

// Función que destaca la zona oriental
let sombraOriente = (colorD) =>{
    usulutanP.setStyle({fillColor: `${colorD}`});
    sanmiguelP.setStyle({fillColor: `${colorD}`});
    morazanP.setStyle({fillColor: `${colorD}`});
    launionP.setStyle({fillColor: `${colorD}`});
}

// La información previa de cada departamento se guardará en una clase
let departamento = function (dep, cabecera, extension, fiestas, habitantes) {
    this.nombre = dep;
    this.cabecera = cabecera;
    this.extensionT = extension;
    this.fiestasP = fiestas;
    this.cantidadH = habitantes;

    this.html = `<h5>${this.nombre}</h5>
        <ul>
        <li><b>Cabecera</b>: ${cabecera}</li> 
        <li><b>Extensión territorial</b>: ${this.extensionT}km<sup>2</sup></li> 
        <li><b>Fiestas patronales</b>: ${this.fiestasP}</li> 
        <li><b>Cant. de habitantes</b>: ${this.cantidadH} personas</li> 
        </ul>`;

}

// Delimita las coordenadas del departamento

let delAhuachapan = () => {

    // Se traza un poligono, uniendo las coordenadas.
    let poligono = L.polygon([
        [13.7434, -90.136],
        [13.7487, -90.0961],
        [13.7781, -90.1126],
        [13.8087, -90.1057],
        [13.8701, -90.0879],
        [13.8714, -90.0851],
        [13.8927, -90.0343],
        [13.9261, -90.0275],
        [14.0127, -89.9107],
        [14.0407, -89.8953],
        [14.041, -89.8616],
        [14.0577, -89.8561],
        [14.0627, -89.8187],
        [14.0323, -89.7748],
        [14.0348, -89.7664],
        [14.0357, -89.7465],
        [14.0327, -89.736], //Santa Ana- Sonsonate,
        [14.0332, -89.7264],
        [14.0122, -89.7226],
        [14.0037, -89.6987],
        [14.0, -89.6962],
        [13.9884, -89.6962],
        [13.9867, -89.6987],
        [13.9801, -89.6985],
        [13.9795, -89.6976],
        [13.979, -89.6975],
        [13.978, -89.6972],
        [13.97759, -89.69755],
        [13.97727, -89.69759],
        [13.97664, -89.69722],
        [13.97603, -89.6974],
        [13.97583, -89.6972],
        [13.9748, -89.6972],
        [13.97411, -89.69802],
        [13.97395, -89.69807],
        [13.97321, -89.69789],
        [13.97212, -89.69831],
        [13.97229, -89.69917],
        [13.97206, -89.69938],
        [13.97189, -89.69984],
        [13.97162, -89.70003],
        [13.97162, -89.70003],
        [13.97033, -89.70091],
        [13.96942, -89.70111],
        [13.96914, -89.70132],
        [13.96877, -89.70235],
        [13.96824, -89.7029],
        [13.9501, -89.7082],
        [13.9447, -89.7137],
        [13.9314, -89.7198],
        [13.9047, -89.726], // Santa Ana- Sonsonate
        [13.8927, -89.7878], // Sonsonate
        [13.8621, -89.7676],
        [13.8347, -89.7782],
        [13.8221, -89.7861],
        [13.7521, -89.7926],
        [13.7487, -89.8029],
        [13.7234, -89.8119],
        [13.7234, -89.8119],
        [13.7234, -89.8119],
        [13.6967, -89.8867],
        [13.7147, -89.9018],
        [13.7014, -89.9286],
        [13.6673, -89.9581] // Sonsonate 
    ]);

    return poligono;

}

let delSonsonate = () => {
    let poligono = L.polygon([
        [13.9047, -89.726], // Santa Ana- Sonsonate
        [13.8927, -89.7878], // Sonsonate
        [13.8621, -89.7676],
        [13.8347, -89.7782],
        [13.8221, -89.7861],
        [13.7521, -89.7926],
        [13.7487, -89.8029],
        [13.7234, -89.8119],
        [13.7234, -89.8119],
        [13.7234, -89.8119],
        [13.6967, -89.8867],
        [13.7147, -89.9018],
        [13.7014, -89.9286],
        [13.6673, -89.9581], // Mar,
        [13.5981, -89.8392],
        [13.5913, -89.8342],
        [13.5868, -89.8351],
        [13.5656, -89.8321],
        [13.5472, -89.8252],
        [13.5335, -89.8194],
        [13.526, -89.8089],
        [13.526, -89.8089],
        [13.5257, -89.801],
        [13.5255, -89.7952],
        [13.5305, -89.7746],
        [13.5305, -89.7533],
        [13.5289, -89.7126],
        [13.5325, -89.6759],
        [13.5215, -89.6296], // Sonsonate-La Libertad
        [13.5711, -89.5782],
        [13.5986, -89.5482],
        [13.6036, -89.553],
        [13.6033, -89.5575],
        [13.6143, -89.5537],
        [13.61, -89.5478],
        [13.645, -89.5207],
        [13.6557, -89.529],
        [13.6533, -89.5314],
        [13.6597, -89.5355],
        [13.662, -89.519],
        [13.6713, -89.5259],
        [13.698, -89.5283],
        [13.7064, -89.5242],
        [13.7044, -89.5183],
        [13.7154, -89.4974],
        [13.7494, -89.4775],
        [13.7454, -89.4445],
        [13.7654, -89.4452],
        [13.7694, -89.4644],
        [13.7787, -89.4651], // Sonsonate - Santa Ana- La Libertad
        [13.7786, -89.4694],
        [13.7842, -89.4788],
        [13.7881, -89.4745],
        [13.7882, -89.4809],
        [13.7997, -89.486],
        [13.8141, -89.5242],
        [13.8127, -89.5345],
        [13.8361, -89.5626],
        [13.8307, -89.5956],
        [13.8154, -89.599],
        [13.8121, -89.6155],
        [13.8207, -89.6512],
        [13.8454, -89.6354],
        [13.8574, -89.6443],
        [13.8914, -89.6745],
        [13.9041, -89.6924]
    ]);

    return poligono;
}

let delSantaAna = () => {

    let poligono = L.polygon([
        [13.7787, -89.4651],
        [13.7786, -89.4694], // Sonsonate - La Libertad
        [13.7842, -89.4788],
        [13.7881, -89.4745],
        [13.7882, -89.4809],
        [13.7997, -89.486],
        [13.8141, -89.5242],
        [13.8127, -89.5345],
        [13.8361, -89.5626],
        [13.8307, -89.5956],
        [13.8154, -89.599],
        [13.8121, -89.6155],
        [13.8207, -89.6512],
        [13.8454, -89.6354],
        [13.8574, -89.6443],
        [13.8914, -89.6745],
        [13.9041, -89.6924],
        [13.9047, -89.726],
        [13.9314, -89.7198],
        [13.9447, -89.7137],
        [13.9501, -89.7082],
        [13.96824, -89.7029],
        [13.96877, -89.70235],
        [13.96914, -89.70132],
        [13.96942, -89.70111],
        [13.97033, -89.70091],
        [13.97162, -89.70003],
        [13.97162, -89.70003],
        [13.97189, -89.69984],
        [13.97206, -89.69938],
        [13.97229, -89.69917],
        [13.97212, -89.69831],
        [13.97321, -89.69789],
        [13.97395, -89.69807],
        [13.97411, -89.69802],
        [13.9748, -89.6972],
        [13.97583, -89.6972],
        [13.97603, -89.6974],
        [13.97664, -89.69722],
        [13.97727, -89.69759],
        [13.97759, -89.69755],
        [13.978, -89.6972],
        [13.979, -89.6975],
        [13.9795, -89.6976],
        [13.9801, -89.6985],
        [13.9867, -89.6987],
        [13.9884, -89.6962],
        [14.0, -89.6962],
        [14.0037, -89.6987],
        [14.0122, -89.7226],
        [14.0332, -89.7264],
        [14.0327, -89.736],// Santa Ana- Sonsonate
        [14.0573, -89.7439],
        [14.1326, -89.715],
        [14.1705, -89.6752],
        [14.2012, -89.634],
        [14.2038, -89.5818],
        [14.2091, -89.5619],
        [14.2225, -89.5516],
        [14.2198, -89.531],
        [14.2344, -89.5207],
        [14.2777, -89.5475],
        [14.2983, -89.5468],
        [14.3156, -89.5708],
        [14.3143, -89.5921],
        [14.3482, -89.5873],
        [14.3522, -89.566],
        [14.3715, -89.5805],
        [14.4161, -89.5763],
        [14.4161, -89.5448],
        [14.3981, -89.5345],
        [14.3801, -89.5317],
        [14.3974, -89.5139],
        [14.4101, -89.509],
        [14.4074, -89.4994],
        [14.4307, -89.4685],
        [14.4134, -89.4363],
        [14.4247, -89.4164],
        [14.4466, -89.4019],
        [14.4516, -89.3933],
        [14.428, -89.3841],
        [14.4373, -89.3793],
        [14.4227, -89.3552],// SA-Chalate
        [14.3915, -89.3182],
        [14.3569, -89.3044],
        [14.3226, -89.2492],
        [14.3003, -89.2577],
        [14.2524, -89.2735],
        [14.2424, -89.2886],
        [14.2424, -89.2886],
        [14.2371, -89.3223],
        [14.2191, -89.3178],
        [14.1759, -89.3216],
        [14.1685, -89.3703],
        [14.1332, -89.3971],
        [14.1299, -89.4146],
        [14.0963, -89.404],
        [14.0723, -89.4311],
        [14.052, -89.4335],
        [14.0317, -89.4297],
        [14.036, -89.4239],
        [14.0247, -89.4095],
        [14.027, -89.3837], // SA-Chalate-LA
        [13.986, -89.3999],
        [13.9546, -89.3918],
        [13.9314, -89.426],
        [13.9174, -89.4514],
        [13.8921, -89.4576],
        [13.8544, -89.45],
        [13.8307, -89.45],
        [13.8331, -89.4593],
        [13.8224, -89.4562],
        [13.8134, -89.4538],
        [13.8134, -89.4538],
        [13.8134, -89.4538]

    ]);

    return poligono;
}

let delLaLibertad = () => {
    let poligono = L.polygon([
        [14.027, -89.3837], // SA-Chalate-LA
        [13.986, -89.3999],
        [13.9546, -89.3918],
        [13.9314, -89.426],
        [13.9174, -89.4514],
        [13.8921, -89.4576],
        [13.8544, -89.45],
        [13.8307, -89.45],
        [13.8331, -89.4593],
        [13.8224, -89.4562],
        [13.8134, -89.4538],
        [13.8134, -89.4538],
        [13.8134, -89.4538],
        [13.7787, -89.4651], // Sonsonate - Santa Ana- La Libertad
        [13.7694, -89.4644],
        [13.7654, -89.4452],
        [13.7454, -89.4445],
        [13.7494, -89.4775],
        [13.7154, -89.4974],
        [13.7044, -89.5183],
        [13.7064, -89.5242],
        [13.698, -89.5283],
        [13.6713, -89.5259],
        [13.662, -89.519],
        [13.6597, -89.5355],
        [13.6533, -89.5314],
        [13.6557, -89.529],
        [13.645, -89.5207],
        [13.61, -89.5478],
        [13.6143, -89.5537],
        [13.6033, -89.5575],
        [13.6036, -89.553],
        [13.5986, -89.5482],
        [13.5711, -89.5782],
        [13.5215, -89.6296], // Sonsonate-La Libertad
        [13.5142, -89.6087],
        [13.4945, -89.526],
        [13.499, -89.4759],
        [13.4925, -89.4236],
        [13.492, -89.3702],
        [13.4848, -89.3544],
        [13.4865, -89.3488],
        [13.4806, -89.3275],
        [13.4873, -89.3196],
        [13.4851, -89.3118],
        [13.4866, -89.3079],
        [13.4509, -89.2218],
        [13.4261, -89.1722],
        [13.4259, -89.1672],
        [13.4509, -89.1567],
        [13.4584, -89.1467],
        [13.4845, -89.1631],
        [13.49, -89.159],
        [13.4916, -89.1604],// La Libertad - San Salvador
        [13.4911, -89.1716],
        [13.4845, -89.1716],
        [13.4761, -89.1829],
        [13.4794, -89.2076],
        [13.4991, -89.21],
        [13.4995, -89.2145],
        [13.5369, -89.2323],
        [13.5622, -89.2217],
        [13.5796, -89.2203],
        [13.5893, -89.2306],
        [13.6079, -89.2268],
        [13.6193, -89.2275],
        [13.6206, -89.2234],
        [13.6275, -89.2215],
        [13.633, -89.2234],
        [13.634, -89.2351],
        [13.6361, -89.2351],
        [13.636, -89.243],
        [13.6423, -89.2431],
        [13.6573, -89.2382],
        [13.6557, -89.2279],
        [13.663, -89.2248],
        [13.6834, -89.2323],
        [13.6813, -89.2454],
        [13.6909, -89.2492],
        [13.6947, -89.255],
        [13.7087, -89.2612],
        [13.7107, -89.2756],
        [13.7367, -89.2639],
        [13.7461, -89.2646],
        [13.7374, -89.2862],
        [13.7374, -89.2862],
        [13.7374, -89.2862],
        [13.8137, -89.2639],
        [13.8224, -89.2546],
        [13.8484, -89.245],
        [13.8944, -89.2354],
        [13.9204, -89.2344],
        [13.9191, -89.2186],
        [13.9331, -89.2189],
        [13.9427, -89.2241],
        [13.9414, -89.2382],
        [13.9541, -89.2667],
        [13.9641, -89.257],
        [13.9839, -89.2802],
        [13.9779, -89.2822],
        [14.0004, -89.291],
        [14.026, -89.2838],
        [14.0343, -89.2728], // Chalate- SS- LA
        [14.0467, -89.277],
        [14.0515, -89.2847],
        [14.0453, -89.2886],
        [14.0458, -89.3037],
        [14.0572, -89.3075],
        [14.0634, -89.3057],
        [14.0642, -89.3200],
        [14.0642, -89.3200],
        [14.0508, -89.3352],
        [14.0463, -89.347],
        [14.0507, -89.3566],
        [14.0453, -89.3637],
        [14.0363, -89.3659],
        [14.0343, -89.3678],
        [14.0247, -89.3705],
        [14.0264, -89.3740],
        [14.0304, -89.3769]
    ])

    return poligono;
}

let delSanSalvador = () => {
    let poligono = L.polygon([
        [13.4916, -89.1604],// La Libertad - San Salvador
        [13.4911, -89.1716],
        [13.4845, -89.1716],
        [13.4761, -89.1829],
        [13.4794, -89.2076],
        [13.4991, -89.21],
        [13.4995, -89.2145],
        [13.5369, -89.2323],
        [13.5622, -89.2217],
        [13.5796, -89.2203],
        [13.5893, -89.2306],
        [13.6079, -89.2268],
        [13.6193, -89.2275],
        [13.6206, -89.2234],
        [13.6275, -89.2215],
        [13.633, -89.2234],
        [13.634, -89.2351],
        [13.6361, -89.2351],
        [13.636, -89.243],
        [13.6423, -89.2431],
        [13.6573, -89.2382],
        [13.6557, -89.2279],
        [13.663, -89.2248],
        [13.6834, -89.2323],
        [13.6813, -89.2454],
        [13.6909, -89.2492],
        [13.6947, -89.255],
        [13.7087, -89.2612],
        [13.7107, -89.2756],
        [13.7367, -89.2639],
        [13.7461, -89.2646],
        [13.7374, -89.2862],
        [13.7374, -89.2862],
        [13.7374, -89.2862],
        [13.8137, -89.2639],
        [13.8224, -89.2546],
        [13.8484, -89.245],
        [13.8944, -89.2354],
        [13.9204, -89.2344],
        [13.9191, -89.2186],
        [13.9331, -89.2189],
        [13.9427, -89.2241],
        [13.9414, -89.2382],
        [13.9541, -89.2667],
        [13.9641, -89.257],
        [13.9839, -89.2802],
        [13.9779, -89.2822],
        [14.0004, -89.291],
        [14.026, -89.2838],
        [14.0343, -89.2728],
        [14.0427, -89.2656], // S. S. Chalatenango - La Libertad
        [14.0457, -89.2536],
        [14.0523, -89.2516],
        [14.052, -89.2389],
        [14.0493, -89.2327],
        [14.0495, -89.227],
        [14.0407, -89.2196],
        [14.0453, -89.2068],
        [14.0567, -89.1994],
        [14.0578, -89.194],
        [14.062, -89.1896],
        [14.0565, -89.1796],
        [14.0461, -89.1807],
        [14.0438, -89.1657],
        [14.0517, -89.1625],
        [14.0543, -89.1527],
        [14.0602, -89.1517],
        [14.0645, -89.1433],
        [14.0648, -89.1388],  // S.S - Chalatenango - Cuscatlán
        [14.0487, -89.1413],
        [14.0402, -89.1472],
        [14.0389, -89.153],
        [14.0375, -89.1537],
        [14.0268, -89.1535],
        [14.025, -89.1544],
        [14.0236, -89.1526],
        [14.0206, -89.1513],
        [14.0192, -89.1496],
        [14.0133, -89.1506],
        [14.0101, -89.1503],
        [14.0093, -89.1507],
        [14.0029, -89.147],
        [13.9977, -89.1498],
        [13.9959, -89.1486],
        [13.9809, -89.1575],
        [13.9732, -89.1575],
        [13.9701, -89.1589],
        [13.9692, -89.1628],
        [13.9622, -89.1685],
        [13.9466, -89.1649],
        [13.9327, -89.1556],
        [13.9184, -89.1496],
        [13.9102, -89.1379],
        [13.9102, -89.1345],
        [13.8957, -89.1235],
        [13.8957, -89.1235],
        [13.8767, -89.1331],
        [13.8676, -89.1508],
        [13.8687, -89.1557],
        [13.8678, -89.1559],
        [13.8626, -89.1558],
        [13.8586, -89.1489],
        [13.8484, -89.1432],
        [13.8389, -89.141],
        [13.8444, -89.1333],
        [13.8466, -89.1334],
        [13.8457, -89.1223],
        [13.8379, -89.1141],
        [13.8237, -89.1132],
        [13.8197, -89.1077],
        [13.8134, -89.1021],
        [13.8067, -89.1019],
        [13.8012, -89.0883],
        [13.8014, -89.0699],
        [13.7917, -89.0705],
        [13.7672, -89.0524],
        [13.7524, -89.05],
        [13.7448, -89.0403],
        [13.7374, -89.04],
        [13.6707, -89.045], // San Salvador - La Paz- Cuscatlán
        [13.6356, -89.0873],
        [13.6316, -89.0902],
        [13.6278, -89.0941],
        [13.6235, -89.102],
        [13.6186, -89.1020],
        [13.6126, -89.1037],
        [13.6061, -89.1097],
        [13.6115, -89.1135],
        [13.6140, -89.1184],
        [13.6128, -89.1251],
        [13.611, -89.128],
        [13.6101, -89.1574],
        [13.5991, -89.1561],
        [13.5964, -89.1525],
        [13.5903, -89.1515],
        [13.5826, -89.145],
        [13.5733, -89.1401],
        [13.5677, -89.1352],
        [13.5618, -89.1341],
        [13.5555, -89.1377],
        [13.5509, -89.1351],
        [13.5417, -89.1347],
        [13.5365, -89.1435],
        [13.5374, -89.1457],
        [13.5289, -89.141],
        [13.518, -89.1475],
        [13.5122, -89.1474],
        [13.5122, -89.1474],
        [13.4988, -89.159],
        [13.4956, -89.1614]

    ]);

    return poligono;
}

let delCuscatlan = () => {

    let poligono = L.polygon([
        [14.0648, -89.1388],  // S.S - Chalatenango - Cuscatlán
        [14.0487, -89.1413],
        [14.0402, -89.1472],
        [14.0389, -89.153],
        [14.0375, -89.1537],
        [14.0268, -89.1535],
        [14.025, -89.1544],
        [14.0236, -89.1526],
        [14.0206, -89.1513],
        [14.0192, -89.1496],
        [14.0133, -89.1506],
        [14.0101, -89.1503],
        [14.0093, -89.1507],
        [14.0029, -89.147],
        [13.9977, -89.1498],
        [13.9959, -89.1486],
        [13.9809, -89.1575],
        [13.9732, -89.1575],
        [13.9701, -89.1589],
        [13.9692, -89.1628],
        [13.9622, -89.1685],
        [13.9466, -89.1649],
        [13.9327, -89.1556],
        [13.9184, -89.1496],
        [13.9102, -89.1379],
        [13.9102, -89.1345],
        [13.8957, -89.1235],
        [13.8957, -89.1235],
        [13.8767, -89.1331],
        [13.8676, -89.1508],
        [13.8687, -89.1557],
        [13.8678, -89.1559],
        [13.8626, -89.1558],
        [13.8586, -89.1489],
        [13.8484, -89.1432],
        [13.8389, -89.141],
        [13.8444, -89.1333],
        [13.8466, -89.1334],
        [13.8457, -89.1223],
        [13.8379, -89.1141],
        [13.8237, -89.1132],
        [13.8197, -89.1077],
        [13.8134, -89.1021],
        [13.8067, -89.1019],
        [13.8012, -89.0883],
        [13.8014, -89.0699],
        [13.7917, -89.0705],
        [13.7672, -89.0524],
        [13.7524, -89.05],
        [13.7448, -89.0403],
        [13.7374, -89.04],
        [13.6707, -89.045], // San Salvador - La Paz- Cuscatlán
        [13.6615, -88.9973],
        [13.6627, -88.9815],
        [13.6487, -88.9697],
        [13.6463, -88.9515],
        [13.644, -88.9481],
        [13.6397, -88.9439],
        [13.6404, -88.9408],
        [13.6436, -88.9407],
        [13.6462, -88.9367],
        [13.6487, -88.9354],
        [13.6508, -88.9362],
        [13.6563, -88.9344],
        [13.6599, -88.9335],
        [13.661, -88.935],
        [13.6624, -88.9345],
        [13.6618, -88.9281],
        [13.6636, -88.9259],
        [13.662, -88.9234],
        [13.6636, -88.9166],
        [13.6645, -88.9171],
        [13.6674, -88.9131],
        [13.6673, -88.912],
        [13.67, -88.9094],
        [13.6681, -88.9085],
        [13.6684, -88.9009], // La Paz - Cuscatlan - San Vicente
        [13.674, -88.8921],
        [13.6881, -88.883],
        [13.6881, -88.8722],
        [13.6915, -88.8668],
        [13.7099, -88.8749],
        [13.7219, -88.8715],
        [13.7355, -88.8617],
        [13.7506, -88.8615],
        [13.7629, -88.8585],
        [13.7706, -88.8657], // Cuscatlán, Cabañas, San Vicente
        [13.7767, -88.8766],
        [13.7754, -88.8856],
        [13.7884, -88.8986],
        [13.7896, -88.9118],
        [13.7917, -88.9202],
        [13.806, -88.9215],
        [13.8076, -88.9125],
        [13.8147, -88.9112],
        [13.8186, -88.9128],
        [13.8191, -88.9142],
        [13.8232, -88.9169],
        [13.8192, -88.9251],
        [13.8216, -88.9345],
        [13.8242, -88.9337],
        [13.8254, -88.932],
        [13.8307, -88.9326],
        [13.8387, -88.9407],
        [13.8392, -88.9438],
        [13.8474, -88.9508],
        [13.8434, -88.9577],
        [13.8441, -88.9611],
        [13.8694, -88.9886],
        [13.8796, -88.9817],
        [13.885, -88.9816],
        [13.8867, -88.9872],
        [13.9012, -88.9838],
        [13.9102, -88.9752],
        [13.9137, -88.975],
        [13.9272, -88.9577],
        [13.9334, -88.9571],
        [13.9411, -88.9489], // Cusca - Chalate - Cabañas
        [13.9479, -88.9676],
        [13.9449, -88.9745],
        [13.9532, -88.9905],
        [13.9531, -89.0021],
        [13.9574, -89.0152],
        [13.9877, -89.0212],
        [13.9955, -89.0195],
        [14.0012, -89.0299],
        [14.0362, -89.0344],
        [14.0478, -89.1044],
        [14.0778, -89.1208]
    ]);

    return poligono;
}

let delCabañas = () => {
    let poligono = L.polygon([

        [13.7706, -88.8657], // Cuscatlán, Cabañas, San Vicente
        [13.7767, -88.8766],
        [13.7754, -88.8856],
        [13.7884, -88.8986],
        [13.7896, -88.9118],
        [13.7917, -88.9202],
        [13.806, -88.9215],
        [13.8076, -88.9125],
        [13.8147, -88.9112],
        [13.8186, -88.9128],
        [13.8191, -88.9142],
        [13.8232, -88.9169],
        [13.8192, -88.9251],
        [13.8216, -88.9345],
        [13.8242, -88.9337],
        [13.8254, -88.932],
        [13.8307, -88.9326],
        [13.8387, -88.9407],
        [13.8392, -88.9438],
        [13.8474, -88.9508],
        [13.8434, -88.9577],
        [13.8441, -88.9611],
        [13.8694, -88.9886],
        [13.8796, -88.9817],
        [13.885, -88.9816],
        [13.8867, -88.9872],
        [13.9012, -88.9838],
        [13.9102, -88.9752],
        [13.9137, -88.975],
        [13.9272, -88.9577],
        [13.9334, -88.9571],
        [13.9411, -88.9489], // Cusca - Chalate - Cabañas
        [13.9391, -88.9396],
        [13.9504, -88.9192],
        [13.9384, -88.9139],
        [13.9406, -88.907],
        [13.9329, -88.8909],
        [13.9371, -88.8811],
        [13.9364, -88.8729],
        [13.9501, -88.8574],
        [13.9574, -88.856],
        [13.9517, -88.8354],
        [13.9667, -88.8224],
        [13.9659, -88.8099],
        [13.9719, -88.785],
        [13.9767, -88.775],
        [13.9912, -88.7692],
        [13.9895, -88.7564],
        [13.9982, -88.7443],
        [13.999, -88.7332],
        [13.996, -88.7268],
        [14.0017, -88.7141],
        [14.0017, -88.7101],
        [14.004, -88.7004],
        [14.0102, -88.6834], //Fin del Chalate - Cabañas
        [14.0097, -88.6703],
        [14.0244, -88.6617],
        [14.0164, -88.6398],
        [14.0234, -88.6291],
        [14.0044, -88.6078],
        [14.0057, -88.5962],
        [14.0095, -88.5938],
        [14.0067, -88.5865],
        [13.9814, -88.5725],
        [13.9775, -88.5677],
        [13.9834, -88.557],
        [13.9844, -88.5268],
        [13.9676, -88.5004],
        [13.9521, -88.4976],
        [13.9434, -88.5072],
        [13.9221, -88.5062],
        [13.9107, -88.5114],
        [13.9084, -88.5059],
        [13.8771, -88.4911],
        [13.8716, -88.4961],
        [13.8592, -88.4925], // Cabañas - San Miguel
        [13.8434, -88.4949],
        [13.8207, -88.4966],
        [13.8017, -88.5158],
        [13.7887, -88.5089],
        [13.7837, -88.5162],
        [13.7666, -88.5282],
        [13.7491, -88.5271], // Cabañas - San Miguel - San Vicente
        [13.7459, -88.5397],
        [13.7435, -88.5486],
        [13.7442, -88.5643],
        [13.7476, -88.5665],
        [13.7426, -88.5907],
        [13.7496, -88.5915],
        [13.7506, -88.5892],
        [13.7534, -88.5968],
        [13.7615, -88.6013],
        [13.7639, -88.5981],
        [13.7664, -88.5980],
        [13.7701, -88.5971],
        [13.7676, -88.6029],
        [13.7676, -88.6099],
        [13.7747, -88.6238],
        [13.7807, -88.6318],
        [13.7792, -88.6336],
        [13.7849, -88.6482],
        [13.7876, -88.6525],
        [13.7906, -88.6525],
        [13.7922, -88.6583],
        [13.7966, -88.6609],
        [13.7867, -88.6779],
        [13.7896, -88.6878],
        [13.7935, -88.6928],
        [13.7902, -88.6937],
        [13.7889, -88.704],
        [13.7851, -88.7091],
        [13.7917, -88.7222],
        [13.7989, -88.7261],
        [13.7964, -88.7367],
        [13.8021, -88.7486],
        [13.7899, -88.7558],
        [13.7921, -88.7702],
        [13.7741, -88.8039],
        [13.7791, -88.8284],
        [13.7821, -88.8288],
        [13.7821, -88.8288],
        [13.7802, -88.8452],
        [13.7756, -88.8563],
        [13.7706, -88.86]
    ]);

    return poligono;
}

let delChalatenango = () => {
    let poligono = L.polygon([
        [14.4227, -89.3552],// SA-Chalate
        [14.3915, -89.3182],
        [14.3569, -89.3044],
        [14.3226, -89.2492],
        [14.3003, -89.2577],
        [14.2524, -89.2735],
        [14.2424, -89.2886],
        [14.2424, -89.2886],
        [14.2371, -89.3223],
        [14.2191, -89.3178],
        [14.1759, -89.3216],
        [14.1685, -89.3703],
        [14.1332, -89.3971],
        [14.1299, -89.4146],
        [14.0963, -89.404],
        [14.0723, -89.4311],
        [14.052, -89.4335],
        [14.0317, -89.4297],
        [14.036, -89.4239],
        [14.0247, -89.4095],
        [14.027, -89.3837], // SA-Chalate-LA
        [14.0304, -89.3769],
        [14.0264, -89.3740],
        [14.0247, -89.3705],
        [14.0343, -89.3678],
        [14.0363, -89.3659],
        [14.0453, -89.3637],
        [14.0507, -89.3566],
        [14.0463, -89.347],
        [14.0508, -89.3352],
        [14.0642, -89.3200],
        [14.0642, -89.3200],
        [14.0634, -89.3057],
        [14.0572, -89.3075],
        [14.0458, -89.3037],
        [14.0453, -89.2886],
        [14.0515, -89.2847],
        [14.0467, -89.277],
        [14.0343, -89.2728], // Chalate- SS- LA
        [14.0427, -89.2656], // S. S. Chalatenango - La Libertad
        [14.0457, -89.2536],
        [14.0523, -89.2516],
        [14.052, -89.2389],
        [14.0493, -89.2327],
        [14.0495, -89.227],
        [14.0407, -89.2196],
        [14.0453, -89.2068],
        [14.0567, -89.1994],
        [14.0578, -89.194],
        [14.062, -89.1896],
        [14.0565, -89.1796],
        [14.0461, -89.1807],
        [14.0438, -89.1657],
        [14.0517, -89.1625],
        [14.0543, -89.1527],
        [14.0602, -89.1517],
        [14.0645, -89.1433],
        [14.0648, -89.1388],  // S.S - Chalatenango - Cuscatlán
        [14.0778, -89.1208],
        [14.0478, -89.1044],
        [14.0362, -89.0344],
        [14.0012, -89.0299],
        [13.9955, -89.0195],
        [13.9877, -89.0212],
        [13.9574, -89.0152],
        [13.9531, -89.0021],
        [13.9532, -88.9905],
        [13.9449, -88.9745],
        [13.9479, -88.9676],
        [13.9411, -88.9489], // Cusca - Chalate - Cabañas
        [13.9391, -88.9396],
        [13.9504, -88.9192],
        [13.9384, -88.9139],
        [13.9406, -88.907],
        [13.9329, -88.8909],
        [13.9371, -88.8811],
        [13.9364, -88.8729],
        [13.9501, -88.8574],
        [13.9574, -88.856],
        [13.9517, -88.8354],
        [13.9667, -88.8224],
        [13.9659, -88.8099],
        [13.9719, -88.785],
        [13.9767, -88.775],
        [13.9912, -88.7692],
        [13.9895, -88.7564],
        [13.9982, -88.7443],
        [13.999, -88.7332],
        [13.996, -88.7268],
        [14.0017, -88.7141],
        [14.0017, -88.7101],
        [14.004, -88.7004],
        [14.0102, -88.6834], //Fin del Chalate - Cabañas
        [14.0190, -88.6822],
        [14.0245, -88.6854],
        [14.0313, -88.6827],
        [14.0437, -88.6928],
        [14.0465, -88.7093],
        [14.1317, -88.7379],
        [14.1644, -88.7987],
        [14.1409, -88.8082],
        [14.1366, -88.8063],
        [14.1327, -88.8009],
        [14.1304, -88.8013],
        [14.1279, -88.8058],
        [14.1188, -88.8073],
        [14.1084, -88.8143],
        [14.1048, -88.8306],
        [14.1128, -88.8294],
        [14.1316, -88.8413],
        [14.1499, -88.8488],
        [14.1526, -88.8581],
        [14.1725, -88.8615],
        [14.1895, -88.8849],
        [14.1908, -88.9014],
        [14.2071, -88.9034],
        [14.2038, -88.9312],
        [14.2128, -88.9700],
        [14.2191, -88.9755],
        [14.2263, -88.9697],
        [14.2584, -88.9918],
        [14.2712, -89.0143],
        [14.2712, -89.0255],
        [14.2843, -89.0251],
        [14.3145, -89.0229],
        [14.3179, -89.0347],
        [14.3328, -89.0354],
        [14.3404, -89.0811],
        [14.3500, -89.0868],
        [14.3587, -89.0799],
        [14.3886, -89.0888],
        [14.3961, -89.0909],
        [14.4091, -89.1087],
        [14.3663, -89.1686],
        [14.3653, -89.1824],
        [14.3728, -89.2112],
        [14.3841, -89.2128],
        [14.3876, -89.2095],
        [14.3880, -89.2256],
        [14.3928, -89.2272],
        [14.3956, -89.2349],
        [14.3951, -89.2352],
        [14.4021, -89.2775],
        [14.4177, -89.2982],
        [14.4144, -89.3089],
        [14.4194, -89.3192],
        [14.4347, -89.3254],
        [14.4387, -89.3358]
    ]);

    return poligono;
}

let delLaPaz = () => {
    let poligono = L.polygon([
        [13.4261, -89.1722],
        [13.4259, -89.1672],
        [13.4509, -89.1567],
        [13.4584, -89.1467],
        [13.4845, -89.1631],
        [13.49, -89.159],
        [13.4916, -89.1604],// La Libertad - San Salvador

        [13.4956, -89.1614],
        [13.4988, -89.159],
        [13.5122, -89.1474],
        [13.5122, -89.1474],
        [13.518, -89.1475],
        [13.5289, -89.141],
        [13.5374, -89.1457],
        [13.5365, -89.1435],
        [13.5417, -89.1347],
        [13.5509, -89.1351],
        [13.5555, -89.1377],
        [13.5618, -89.1341],
        [13.5677, -89.1352],
        [13.5733, -89.1401],
        [13.5826, -89.145],
        [13.5903, -89.1515],
        [13.5964, -89.1525],
        [13.5991, -89.1561],
        [13.6101, -89.1574],
        [13.611, -89.128],
        [13.6128, -89.1251],
        [13.6140, -89.1184],
        [13.6115, -89.1135],
        [13.6061, -89.1097],
        [13.6126, -89.1037],
        [13.6186, -89.1020],
        [13.6235, -89.102],
        [13.6278, -89.0941],
        [13.6316, -89.0902],
        [13.6356, -89.0873],
        [13.6707, -89.045], // San Salvador - La Paz- Cuscatlán
        [13.6615, -88.9973],
        [13.6627, -88.9815],
        [13.6487, -88.9697],
        [13.6463, -88.9515],
        [13.644, -88.9481],
        [13.6397, -88.9439],
        [13.6404, -88.9408],
        [13.6436, -88.9407],
        [13.6462, -88.9367],
        [13.6487, -88.9354],
        [13.6508, -88.9362],
        [13.6563, -88.9344],
        [13.6599, -88.9335],
        [13.661, -88.935],
        [13.6624, -88.9345],
        [13.6618, -88.9281],
        [13.6636, -88.9259],
        [13.662, -88.9234],
        [13.6636, -88.9166],
        [13.6645, -88.9171],
        [13.6674, -88.9131],
        [13.6673, -88.912],
        [13.67, -88.9094],
        [13.6681, -88.9085],
        [13.6684, -88.9009], // La Paz - Cuscatlan - San Vicente
        [13.6690, -88.9000],
        [13.6672, -88.8988],
        [13.6653, -88.8996],
        [13.6613, -88.8984],
        [13.6513, -88.8895],
        [13.6366, -88.8926],
        [13.6328, -88.8945],
        [13.6199, -88.8921],
        [13.6168, -88.8951],
        [13.6160, -88.8976],
        [13.5998, -88.8923],
        [13.5998, -88.8851],
        [13.6012, -88.8827],
        [13.5916, -88.8471],
        [13.5964, -88.8381],
        [13.5756, -88.8342],
        [13.5659, -88.8264],
        [13.5541, -88.8274],
        [13.5400, -88.8183],
        [13.5332, -88.8130],
        [13.5183, -88.8147],
        [13.5083, -88.8188],
        [13.4988, -88.8255],
        [13.4828, -88.8265],
        [13.4671, -88.8221],
        [13.4611, -88.8245],
        [13.4431, -88.8183],
        [13.4390, -88.8070],
        [13.4277, -88.8042],
        [13.4173, -88.7908],
        [13.4006, -88.7802],
        [13.3612, -88.7874],
        [13.3549, -88.8032],
        [13.3262, -88.7922],
        [13.3140, -88.8018],
        [13.3073, -88.8161],
        [13.3008, -88.8245],
        [13.2887, -88.8313],
        [13.2800, -88.8337],
        [13.2734, -88.8315],
        [13.2715, -88.8358],
        [13.2633, -88.8339],
        [13.2627, -88.8379],
        [13.2657, -88.8413],
        [13.2705, -88.8440],
        [13.2734, -88.8557],
        [13.2711, -88.8560],
        [13.2802, -88.8779],
        [13.2895, -88.8864],
        [13.2907, -88.8986],
        [13.3282, -88.9728],
        [13.3649, -89.0602]

    ]);

    return poligono;
}

let delSanVicente = () => {

    let poligono = L.polygon([
        [13.7491, -88.5271], // Cabañas - San Miguel - San Vicente
        [13.7459, -88.5397],
        [13.7435, -88.5486],
        [13.7442, -88.5643],
        [13.7476, -88.5665],
        [13.7426, -88.5907],
        [13.7496, -88.5915],
        [13.7506, -88.5892],
        [13.7534, -88.5968],
        [13.7615, -88.6013],
        [13.7639, -88.5981],
        [13.7664, -88.5980],
        [13.7701, -88.5971],
        [13.7676, -88.6029],
        [13.7676, -88.6099],
        [13.7747, -88.6238],
        [13.7807, -88.6318],
        [13.7792, -88.6336],
        [13.7849, -88.6482],
        [13.7876, -88.6525],
        [13.7906, -88.6525],
        [13.7922, -88.6583],
        [13.7966, -88.6609],
        [13.7867, -88.6779],
        [13.7896, -88.6878],
        [13.7935, -88.6928],
        [13.7902, -88.6937],
        [13.7889, -88.704],
        [13.7851, -88.7091],
        [13.7917, -88.7222],
        [13.7989, -88.7261],
        [13.7964, -88.7367],
        [13.8021, -88.7486],
        [13.7899, -88.7558],
        [13.7921, -88.7702],
        [13.7741, -88.8039],
        [13.7791, -88.8284],
        [13.7821, -88.8288],
        [13.7821, -88.8288],
        [13.7802, -88.8452],
        [13.7756, -88.8563],
        [13.7706, -88.86],
        [13.7706, -88.8657], // Cuscatlán, Cabañas, San Vicente
        [13.7629, -88.8585],
        [13.7506, -88.8615],
        [13.7355, -88.8617],
        [13.7219, -88.8715],
        [13.7099, -88.8749],
        [13.6915, -88.8668],
        [13.6881, -88.8722],
        [13.6881, -88.883],
        [13.674, -88.8921],
        [13.6684, -88.9009], // La Paz - Cuscatlan - San Vicente
        [13.6690, -88.9000],
        [13.6672, -88.8988],
        [13.6653, -88.8996],
        [13.6613, -88.8984],
        [13.6513, -88.8895],
        [13.6366, -88.8926],
        [13.6328, -88.8945],
        [13.6199, -88.8921],
        [13.6168, -88.8951],
        [13.6160, -88.8976],
        [13.5998, -88.8923],
        [13.5998, -88.8851],
        [13.6012, -88.8827],
        [13.5916, -88.8471],
        [13.5964, -88.8381],
        [13.5756, -88.8342],
        [13.5659, -88.8264],
        [13.5541, -88.8274],
        [13.5400, -88.8183],
        [13.5332, -88.8130],
        [13.5183, -88.8147],
        [13.5083, -88.8188],
        [13.4988, -88.8255],
        [13.4828, -88.8265],
        [13.4671, -88.8221],
        [13.4611, -88.8245],
        [13.4431, -88.8183],
        [13.4390, -88.8070],
        [13.4277, -88.8042],
        [13.4173, -88.7908],
        [13.4006, -88.7802],
        [13.3612, -88.7874],
        [13.3549, -88.8032],
        [13.3262, -88.7922],
        [13.3140, -88.8018],
        [13.3073, -88.8161],
        [13.3008, -88.8245],
        [13.2887, -88.8313],
        [13.2800, -88.8337],
        [13.2734, -88.8315],
        [13.2715, -88.8358],
        [13.2633, -88.8339],
        [13.2627, -88.8379],
        [13.2657, -88.8413],
        [13.2705, -88.8440],
        [13.2734, -88.8557],
        [13.2711, -88.8560],
        [13.2575, -88.8325],
        [13.2583, -88.8308],
        [13.2548, -88.8179],
        [13.2521, -88.8118], // San Vicente - Usulutan
        [13.2653, -88.8140],
        [13.2941, -88.7750],
        [13.3118, -88.7513],
        [13.3252, -88.7434],
        [13.3368, -88.7225],
        [13.3517, -88.7254],
        [13.3634, -88.7309],
        [13.3911, -88.7201],
        [13.4073, -88.7182],
        [13.4177, -88.7094],
        [13.4270, -88.6969],
        [13.4537, -88.6892],
        [13.4587, -88.6775],
        [13.4781, -88.6775],
        [13.5172, -88.6710],
        [13.5322, -88.6655],
        [13.5405, -88.6689],
        [13.5529, -88.6610],
        [13.5529, -88.6610],
        [13.5556, -88.6434],
        [13.5771, -88.6325],
        [13.5863, -88.6341],
        [13.5851, -88.6107],
        [13.5971, -88.5723],
        [13.6235, -88.5598],
        [13.6493, -88.5393],
        [13.6632, -88.5234],
        [13.6937, -88.4870],
        [13.7052, -88.4947], // San Vicente, Usulutan, San Miguel
        [13.7170, -88.5017],
        [13.7214, -88.5122],
        [13.7202, -88.5220],
        [13.7237, -88.5247]

    ]);

    return poligono;
}

let delUsulutan = () => {
    let poligono = L.polygon([
        [13.2521, -88.8118], // San Vicente - Usulutan
        [13.2653, -88.8140],
        [13.2941, -88.7750],
        [13.3118, -88.7513],
        [13.3252, -88.7434],
        [13.3368, -88.7225],
        [13.3517, -88.7254],
        [13.3634, -88.7309],
        [13.3911, -88.7201],
        [13.4073, -88.7182],
        [13.4177, -88.7094],
        [13.4270, -88.6969],
        [13.4537, -88.6892],
        [13.4587, -88.6775],
        [13.4781, -88.6775],
        [13.5172, -88.6710],
        [13.5322, -88.6655],
        [13.5405, -88.6689],
        [13.5529, -88.6610],
        [13.5529, -88.6610],
        [13.5556, -88.6434],
        [13.5771, -88.6325],
        [13.5863, -88.6341],
        [13.5851, -88.6107],
        [13.5971, -88.5723],
        [13.6235, -88.5598],
        [13.6493, -88.5393],
        [13.6632, -88.5234],
        [13.6937, -88.4870],
        [13.7052, -88.4947], // San Vicente, Usulutan, San Miguel
        [13.6897, -88.4739],
        [13.6965, -88.4494],
        [13.6667, -88.4229],
        [13.6598, -88.3970],
        [13.6685, -88.3831],
        [13.6572, -88.3775],
        [13.6448, -88.3778],
        [13.6316, -88.3843],
        [13.6141, -88.3732],
        [13.6026, -88.3757],
        [13.5933, -88.3878],
        [13.5682, -88.3898],
        [13.5445, -88.3811],
        [13.5232, -88.3812],
        [13.5028, -88.3730],
        [13.4956, -88.3730],
        [13.4918, -88.3814],
        [13.4858, -88.3854],
        [13.4738, -88.3864],
        [13.4426, -88.4005],
        [13.4329, -88.4006],
        [13.4342, -88.3922],
        [13.4397, -88.3862],
        [13.4337, -88.3843],
        [13.3789, -88.3891],
        [13.3592, -88.3551],
        [13.3409, -88.3548],
        [13.3410, -88.3191],
        [13.3474, -88.3090],
        [13.3378, -88.2971],
        [13.3302, -88.3011],
        [13.3238, -88.2963],
        [13.3148, -88.2995],
        [13.2886, -88.3253],
        [13.2784, -88.3285],
        [13.2518, -88.3191],
        [13.2567, -88.2942],
        [13.2557, -88.2892],
        [13.2603, -88.2805],
        [13.2715, -88.2930],
        [13.2822, -88.2940],
        [13.2936, -88.2854],
        [13.3012, -88.2891],
        [13.3072, -88.2825],
        [13.3037, -88.2788],
        [13.3155, -88.2679],
        [13.3086, -88.2654],
        [13.3115, -88.2621],
        [13.3023, -88.2472],
        [13.3044, -88.2444],
        [13.3013, -88.2417],
        [13.3036, -88.2351],
        [13.3076, -88.2373],
        [13.3054, -88.2305],
        [13.3038, -88.2266],
        [13.3010, -88.2269],
        [13.2866, -88.2206],
        [13.2813, -88.2192],
        [13.2791, -88.2078],
        [13.2822, -88.2054],
        [13.2805, -88.1966],
        [13.2744, -88.1902],
        [13.2541, -88.2169],
        [13.2438, -88.2230],
        [13.2348, -88.2235],
        [13.2323, -88.1855],
        [13.2259, -88.1643],
        [13.2174, -88.1658],
        [13.1965, -88.1435],
        [13.1674, -88.1220], // Usulutan - San Miguel
        [13.1651, -88.1263],
        [13.1667, -88.1689],
        [13.1614, -88.2149],
        [13.1647, -88.2470],
        [13.1734, -88.3315],
        [13.1674, -88.3795],
        [13.1597, -88.4005],
        [13.1774, -88.4966],
        [13.2222, -88.6988],
        [13.2329, -88.7585],

    ]);

    return poligono;
}

let delSanMiguel = () => {
    let poligono = L.polygon([
        [13.8592, -88.4925], // Cabañas - San Miguel
        [13.8434, -88.4949],
        [13.8207, -88.4966],
        [13.8017, -88.5158],
        [13.7887, -88.5089],
        [13.7837, -88.5162],
        [13.7666, -88.5282],
        [13.7491, -88.5271], // Cabañas - San Miguel - San Vicente
        [13.7237, -88.5247],
        [13.7202, -88.5220],
        [13.7214, -88.5122],
        [13.7170, -88.5017],
        [13.7052, -88.4947], // San Vicente, Usulutan, San Miguel
        [13.6897, -88.4739],
        [13.6965, -88.4494],
        [13.6667, -88.4229],
        [13.6598, -88.3970],
        [13.6685, -88.3831],
        [13.6572, -88.3775],
        [13.6448, -88.3778],
        [13.6316, -88.3843],
        [13.6141, -88.3732],
        [13.6026, -88.3757],
        [13.5933, -88.3878],
        [13.5682, -88.3898],
        [13.5445, -88.3811],
        [13.5232, -88.3812],
        [13.5028, -88.3730],
        [13.4956, -88.3730],
        [13.4918, -88.3814],
        [13.4858, -88.3854],
        [13.4738, -88.3864],
        [13.4426, -88.4005],
        [13.4329, -88.4006],
        [13.4342, -88.3922],
        [13.4397, -88.3862],
        [13.4337, -88.3843],
        [13.3789, -88.3891],
        [13.3592, -88.3551],
        [13.3409, -88.3548],
        [13.3410, -88.3191],
        [13.3474, -88.3090],
        [13.3378, -88.2971],
        [13.3302, -88.3011],
        [13.3238, -88.2963],
        [13.3148, -88.2995],
        [13.2886, -88.3253],
        [13.2784, -88.3285],
        [13.2518, -88.3191],
        [13.2567, -88.2942],
        [13.2557, -88.2892],
        [13.2603, -88.2805],
        [13.2715, -88.2930],
        [13.2822, -88.2940],
        [13.2936, -88.2854],
        [13.3012, -88.2891],
        [13.3072, -88.2825],
        [13.3037, -88.2788],
        [13.3155, -88.2679],
        [13.3086, -88.2654],
        [13.3115, -88.2621],
        [13.3023, -88.2472],
        [13.3044, -88.2444],
        [13.3013, -88.2417],
        [13.3036, -88.2351],
        [13.3076, -88.2373],
        [13.3054, -88.2305],
        [13.3038, -88.2266],
        [13.3010, -88.2269],
        [13.2866, -88.2206],
        [13.2813, -88.2192],
        [13.2791, -88.2078],
        [13.2822, -88.2054],
        [13.2805, -88.1966],
        [13.2744, -88.1902],
        [13.2541, -88.2169],
        [13.2438, -88.2230],
        [13.2348, -88.2235],
        [13.2323, -88.1855],
        [13.2259, -88.1643],
        [13.2174, -88.1658],
        [13.1965, -88.1435],
        [13.1674, -88.1220], // Usulutan - San Miguel
        [13.1726, -88.1160],
        [13.1709, -88.0915], // San Miguel - La Unión
        [13.1848, -88.0915],
        [13.2296, -88.0719],
        [13.2481, -88.0758],
        [13.2466, -88.0525],
        [13.2498, -88.0374],
        [13.2892, -88.0343],
        [13.3029, -88.0339],
        [13.3191, -88.0412],
        [13.3352, -88.0317],
        [13.3340, -88.0271],
        [13.3438, -88.0253],
        [13.3459, -88.0295],
        [13.3504, -88.0316],
        [13.3529, -88.0320],
        [13.3589, -88.0365],
        [13.3644, -88.0462],
        [13.3676, -88.0453],
        [13.3682, -88.0379],
        [13.3708, -88.0313],
        [13.3781, -88.0300],
        [13.3808, -88.0323],
        [13.3874, -88.0314],
        [13.3895, -88.0299],
        [13.3890, -88.0276],
        [13.3936, -88.0275],
        [13.3989, -88.0235],
        [13.4016, -88.0229],
        [13.4021, -88.0212],
        [13.4008, -88.0199],
        [13.4043, -88.0193],
        [13.4203, -88.0448],
        [13.4284, -88.0413],
        [13.4691, -88.0444],
        [13.4976, -88.0224],
        [13.5039, -88.0255],
        [13.5039, -88.0255],
        [13.5097, -88.0198],
        [13.5474, -88.0247],
        [13.5539, -88.0262],
        [13.5594, -88.0271],
        [13.5662, -88.0240], // San Miguel - Morazan - La Unión
        [13.5516, -88.0753],
        [13.5556, -88.0928],
        [13.5442, -88.1052],
        [13.5584, -88.1109],
        [13.5715, -88.1272],
        [13.5755, -88.1375],
        [13.5853, -88.1401],
        [13.5941, -88.1322],
        [13.6079, -88.1381],
        [13.6122, -88.1421],
        [13.6153, -88.1391],
        [13.6180, -88.1491],
        [13.6163, -88.1491],
        [13.6079, -88.1738],
        [13.6170, -88.1747],
        [13.6195, -88.1803],
        [13.6181, -88.1821],
        [13.6149, -88.1885],
        [13.6151, -88.2038],
        [13.6170, -88.1980],
        [13.6208, -88.1990],
        [13.6308, -88.2263],
        [13.6484, -88.2303],
        [13.6595, -88.2418],
        [13.6685, -88.2439],
        [13.6723, -88.2521],
        [13.6749, -88.2521],
        [13.6779, -88.2554],
        [13.6727, -88.2611],
        [13.7051, -88.2715],
        [13.7265, -88.2672],
        [13.7291, -88.2486],
        [13.7353, -88.2305],
        [13.7451, -88.2236],
        [13.7582, -88.2238],
        [13.7727, -88.2345],
        [13.7734, -88.2454],
        [13.8014, -88.2628],
        [13.8082, -88.2621],
        [13.8254, -88.2763],
        [13.8316, -88.2678],
        [13.8326, -88.2509],
        [13.8471, -88.2425],
        [13.8619, -88.2592],
        [13.8779, -88.2551],
        [13.9184, -88.2630], // San Miguel - Morazán
        [13.9122, -88.2685],
        [13.9094, -88.2811],
        [13.9149, -88.2896],
        [13.9053, -88.3025],
        [13.8974, -88.3174],
        [13.8897, -88.3167],
        [13.8967, -88.3452],
        [13.8902, -88.3495],
        [13.8711, -88.3560],
        [13.8692, -88.3627],
        [13.8849, -88.3759],
        [13.8812, -88.3950],
        [13.8797, -88.4142],
        [13.8854, -88.4183],
        [13.8777, -88.4310],
        [13.8587, -88.4396],
        [13.8641, -88.4499],
        [13.8584, -88.4506],
        [13.8631, -88.4657],
        [13.8491, -88.4671],
        [13.8546, -88.4719]


    ]);

    return poligono;
}

let delMorazan = () => {
    let poligono = L.polygon([

        [13.5662, -88.0240], // San Miguel - Morazan - La Unión
        [13.5516, -88.0753],
        [13.5556, -88.0928],
        [13.5442, -88.1052],
        [13.5584, -88.1109],
        [13.5715, -88.1272],
        [13.5755, -88.1375],
        [13.5853, -88.1401],
        [13.5941, -88.1322],
        [13.6079, -88.1381],
        [13.6122, -88.1421],
        [13.6153, -88.1391],
        [13.6180, -88.1491],
        [13.6163, -88.1491],
        [13.6079, -88.1738],
        [13.6170, -88.1747],
        [13.6195, -88.1803],
        [13.6181, -88.1821],
        [13.6149, -88.1885],
        [13.6151, -88.2038],
        [13.6170, -88.1980],
        [13.6208, -88.1990],
        [13.6308, -88.2263],
        [13.6484, -88.2303],
        [13.6595, -88.2418],
        [13.6685, -88.2439],
        [13.6723, -88.2521],
        [13.6749, -88.2521],
        [13.6779, -88.2554],
        [13.6727, -88.2611],
        [13.7051, -88.2715],
        [13.7265, -88.2672],
        [13.7291, -88.2486],
        [13.7353, -88.2305],
        [13.7451, -88.2236],
        [13.7582, -88.2238],
        [13.7727, -88.2345],
        [13.7734, -88.2454],
        [13.8014, -88.2628],
        [13.8082, -88.2621],
        [13.8254, -88.2763],
        [13.8316, -88.2678],
        [13.8326, -88.2509],
        [13.8471, -88.2425],
        [13.8619, -88.2592],
        [13.8779, -88.2551],
        [13.9184, -88.2630], // San Miguel - Morazán
        [13.9347, -88.2662],
        [13.9384, -88.2600],
        [13.9381, -88.2271],
        [13.9536, -88.2195],
        [13.9707, -88.2362],
        [13.9882, -88.2343],
        [13.9919, -88.2379],
        [13.9950, -88.2331],
        [13.9997, -88.2305],
        [13.9929, -88.2180],
        [13.9964, -88.1976],
        [13.9904, -88.1881],
        [13.9905, -88.1792],
        [13.9837, -88.1595],
        [13.9909, -88.1479],
        [13.9930, -88.1272],
        [13.9999, -88.1134],
        [14.0009, -88.1064],
        [13.9920, -88.0728],
        [13.9729, -88.0719],
        [13.9547, -88.0640],
        [13.9437, -88.0635],
        [13.9322, -88.0460],
        [13.9134, -88.0359],
        [13.8932, -88.0199],
        [13.8931, -88.0174],
        [13.8892, -88.0154],
        [13.8713, -88.0141],
        [13.8709, -88.0067],
        [13.8753, -88.0054],
        [13.8874, -87.9861],
        [13.8872, -87.9798],
        [13.8947, -87.9687],
        [13.8922, -87.9643],
        [13.9027, -87.9596],
        [13.8944, -87.9535],
        [13.8916, -87.9516],
        [13.8962, -87.9438],
        [13.8933, -87.9406],
        [13.8932, -87.9371], // Morazán - La Unión
        [13.8741, -87.9417],
        [13.8692, -87.9323],
        [13.8636, -87.9317],
        [13.8634, -87.9343],
        [13.8496, -87.9394],
        [13.8470, -87.9462],
        [13.8281, -87.9318],
        [13.8138, -87.9302],
        [13.7994, -87.9340],
        [13.7634, -87.9615],
        [13.7545, -87.9729],
        [13.7343, -87.9818],
        [13.7319, -87.9668],
        [13.7382, -87.9574],
        [13.7394, -87.9479],
        [13.7366, -87.9463],
        [13.7211, -87.9520],
        [13.7194, -87.9529],
        [13.7101, -87.9480],
        [13.6886, -87.9518],
        [13.67803, -87.95174],
        [13.6756, -87.9478],
        [13.6713, -87.9493],
        [13.6690, -87.9468],
        [13.6650, -87.9475],
        [13.6673, -87.9460],
        [13.6651, -87.9429],
        [13.6583, -87.9489],
        [13.6545, -87.9501],
        [13.6509, -87.9501],
        [13.6503, -87.9484],
        [13.6480, -87.9464],
        [13.6393, -87.9423],
        [13.6384, -87.9411],
        [13.6362, -87.9412],
        [13.6366, -87.9420],
        [13.6353, -87.9436],
        [13.6361, -87.9488],
        [13.6361, -87.9488],
        [13.6337, -87.9527],
        [13.6341, -87.9539],
        [13.6313, -87.9552],
        [13.6253, -87.9583],
        [13.6076, -87.9629],
        [13.5971, -87.9885],
        [13.5957, -87.9862],
        [13.5928, -87.9834],
        [13.5856, -87.9804],
        [13.5823, -87.9832],
        [13.5768, -87.9827],
        [13.5824, -87.9909],
        [13.5788, -87.9956],
        [13.5832, -88.0015],
        [13.5759, -88.0041],
        [13.5717, -88.0022],
        [13.5723, -88.0059],
        [13.5693, -88.0098],
        [13.5665, -88.0159]

    ]);

    return poligono;
}

let delLaUnion = () => {
    let poligono = L.polygon([
        [13.1709, -88.0915], // San Miguel - La Unión
        [13.1848, -88.0915],
        [13.2296, -88.0719],
        [13.2481, -88.0758],
        [13.2466, -88.0525],
        [13.2498, -88.0374],
        [13.2892, -88.0343],
        [13.3029, -88.0339],
        [13.3191, -88.0412],
        [13.3352, -88.0317],
        [13.3340, -88.0271],
        [13.3438, -88.0253],
        [13.3459, -88.0295],
        [13.3504, -88.0316],
        [13.3529, -88.0320],
        [13.3589, -88.0365],
        [13.3644, -88.0462],
        [13.3676, -88.0453],
        [13.3682, -88.0379],
        [13.3708, -88.0313],
        [13.3781, -88.0300],
        [13.3808, -88.0323],
        [13.3874, -88.0314],
        [13.3895, -88.0299],
        [13.3890, -88.0276],
        [13.3936, -88.0275],
        [13.3989, -88.0235],
        [13.4016, -88.0229],
        [13.4021, -88.0212],
        [13.4008, -88.0199],
        [13.4043, -88.0193],
        [13.4203, -88.0448],
        [13.4284, -88.0413],
        [13.4691, -88.0444],
        [13.4976, -88.0224],
        [13.5039, -88.0255],
        [13.5039, -88.0255],
        [13.5097, -88.0198],
        [13.5474, -88.0247],
        [13.5539, -88.0262],
        [13.5594, -88.0271],
        [13.5662, -88.0240], // San Miguel - Morazan - La Unión
        [13.5665, -88.0159],
        [13.5693, -88.0098],
        [13.5723, -88.0059],
        [13.5717, -88.0022],
        [13.5759, -88.0041],
        [13.5832, -88.0015],
        [13.5788, -87.9956],
        [13.5824, -87.9909],
        [13.5768, -87.9827],
        [13.5823, -87.9832],
        [13.5856, -87.9804],
        [13.5928, -87.9834],
        [13.5957, -87.9862],
        [13.5971, -87.9885],
        [13.6076, -87.9629],
        [13.6253, -87.9583],
        [13.6313, -87.9552],
        [13.6341, -87.9539],
        [13.6337, -87.9527],
        [13.6361, -87.9488],
        [13.6361, -87.9488],
        [13.6353, -87.9436],
        [13.6366, -87.9420],
        [13.6362, -87.9412],
        [13.6384, -87.9411],
        [13.6393, -87.9423],
        [13.6480, -87.9464],
        [13.6503, -87.9484],
        [13.6509, -87.9501],
        [13.6545, -87.9501],
        [13.6583, -87.9489],
        [13.6651, -87.9429],
        [13.6673, -87.9460],
        [13.6650, -87.9475],
        [13.6690, -87.9468],
        [13.6713, -87.9493],
        [13.6756, -87.9478],
        [13.67803, -87.95174],
        [13.6886, -87.9518],
        [13.7101, -87.9480],
        [13.7194, -87.9529],
        [13.7211, -87.9520],
        [13.7366, -87.9463],
        [13.7394, -87.9479],
        [13.7382, -87.9574],
        [13.7319, -87.9668],
        [13.7343, -87.9818],
        [13.7545, -87.9729],
        [13.7634, -87.9615],
        [13.7994, -87.9340],
        [13.8138, -87.9302],
        [13.8281, -87.9318],
        [13.8470, -87.9462],
        [13.8496, -87.9394],
        [13.8634, -87.9343],
        [13.8636, -87.9317],
        [13.8692, -87.9323],
        [13.8741, -87.9417],
        [13.8932, -87.9371], // Morazán - La Unión
        [13.8841, -87.9220],
        [13.8956, -87.9176],
        [13.9026, -87.8994],
        [13.8981, -87.8899],
        [13.9021, -87.8831],
        [13.8987, -87.8645],
        [13.8942, -87.8584],
        [13.8980, -87.8448],
        [13.9062, -87.8426],
        [13.9185, -87.8314],
        [13.9220, -87.8053],
        [13.9204, -87.7997],
        [13.9051, -87.7953],
        [13.9015, -87.7947],
        [13.8959, -87.7993],
        [13.8930, -87.7994],
        [13.8741, -87.7746],
        [13.8759, -87.7720],
        [13.8542, -87.7468],
        [13.8342, -87.7463],
        [13.8297, -87.7348],
        [13.8176, -87.7166],
        [13.8154, -87.7124],
        [13.8115, -87.7131],
        [13.8031, -87.7083],
        [13.7917, -87.7097],
        [13.7904, -87.7088],
        [13.7785, -87.7163],
        [13.7651, -87.7207],
        [13.7634, -87.7260],
        [13.7497, -87.7327],
        [13.7481, -87.7366],
        [13.7160, -87.7320],
        [13.6935, -87.7490],
        [13.6887, -87.7547],
        [13.6570, -87.7554],
        [13.6039, -87.7543],
        [13.5839, -87.7718],
        [13.5432, -87.7869],
        [13.5342, -87.7814],
        [13.5215, -87.7907],
        [13.5082, -87.7653],
        [13.5185, -87.7543],
        [13.5042, -87.7200],
        [13.4431, -87.7224],
        [13.4364, -87.7471],
        [13.4421, -87.7578],
        [13.4090, -87.8208],
        [13.4217, -87.8546],
        [13.3806, -87.8724],
        [13.3542, -87.8687],
        [13.3355, -87.8319],
        [13.3221, -87.8144],
        [13.3064, -87.7959],
        [13.2921, -87.7806],
        [13.2339, -87.8395],
        [13.2055, -87.9050],
        [13.1901, -87.9153],
        [13.1734, -87.9129],
        [13.1682, -87.9001],
        [13.1584, -87.8956],
        [13.1565, -87.9138],
        [13.1614, -87.9643],
        [13.1574, -87.9656],
        [13.1602, -87.9742],
        [13.1659, -88.0217],
        [13.1680, -88.0504],
        [13.1699, -88.0641],
        [13.1710, -88.0665],
        [13.1698, -88.0693],

    ]);

    return poligono;
}
window.onload = crearMapa;
