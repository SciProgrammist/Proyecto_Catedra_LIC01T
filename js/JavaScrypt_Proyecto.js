/*
Se han usado algunos recursos externos para este mapa:
1. Leaflet, una librería de Javasscript que permite crear mapas interactivos (https://leafletjs.com/).
2. OpenStreetMap, como proveedor del mapa (https://www.openstreetmap.org/#map=9/13.7754/-88.8354)
 */

let crearMapa = () => {
    // Se establece la latitud, longitud y nivel de zoom, respectivamente. El objeto miMapa será la base de todo
    let miMapa = L.map('div_mapa').setView([13.7781, -88.8272], 9);

    // Se agrega el mapa usando OpenStreetMap como proveedor.
    const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(miMapa);

    // Se delimita el departamento, y se añade al mapa
    let ahuachapan = delAhuachapan();
    ahuachapan.addTo(miMapa);
    // Pop-up de Ahuachapan
    ahuachapan.bindPopup(infoAhuachapan());

    let sonsonate = delSonsonate();
    sonsonate.addTo(miMapa);
    sonsonate.bindPopup(infoSonsonate());

    let santaAna = delSantaAna();
    santaAna.addTo(miMapa);
    santaAna.bindPopup(infoSantaAna());
}

// La información previa de cada departamento
let infoAhuachapan = () => {
    let html = `<b>Ahuachapán</b>
    <ul>
    <li>Cabecera: Ahuachapán</li> 
    <li>Extensión territorial: -----</li> 
    <li>Fiestas patronales: ----</li> 
    <li>Cant. de habitantes: ----</li> 
    </ul>`;
    return html;
}

let infoSonsonate = () =>{
    let html = `<b>Ahuachapán</b>
    <ul>
    <li>Cabecera: Ahuachapán</li> 
    <li>Extensión territorial: -----</li> 
    <li>Fiestas patronales: ----</li> 
    <li>Cant. de habitantes: ----</li> 
    </ul>`;
    return html;
}

let infoSantaAna = () =>{
    let html = `<b>Ahuachapán</b>
    <ul>
    <li>Cabecera: Ahuachapán</li> 
    <li>Extensión territorial: -----</li> 
    <li>Fiestas patronales: ----</li> 
    <li>Cant. de habitantes: ----</li> 
    </ul>`;
    return html;
}

let infoChalatenango = () =>{
    let html = `<b>Ahuachapán</b>
    <ul>
    <li>Cabecera: Ahuachapán</li> 
    <li>Extensión territorial: -----</li> 
    <li>Fiestas patronales: ----</li> 
    <li>Cant. de habitantes: ----</li> 
    </ul>`;
    return html;
}

let infoLaLibertad = () =>{
    let html = `<b>Ahuachapán</b>
    <ul>
    <li>Cabecera: Ahuachapán</li> 
    <li>Extensión territorial: -----</li> 
    <li>Fiestas patronales: ----</li> 
    <li>Cant. de habitantes: ----</li> 
    </ul>`;
    return html;
}

let infoSanSalvador = () =>{
    let html = `<b>Ahuachapán</b>
    <ul>
    <li>Cabecera: Ahuachapán</li> 
    <li>Extensión territorial: -----</li> 
    <li>Fiestas patronales: ----</li> 
    <li>Cant. de habitantes: ----</li> 
    </ul>`;
    return html;
}

let infoCuscatlan = () =>{
    let html = `<b>Ahuachapán</b>
    <ul>
    <li>Cabecera: Ahuachapán</li> 
    <li>Extensión territorial: -----</li> 
    <li>Fiestas patronales: ----</li> 
    <li>Cant. de habitantes: ----</li> 
    </ul>`;
    return html;
}

let infoLaPaz = () =>{
    let html = `<b>Ahuachapán</b>
    <ul>
    <li>Cabecera: Ahuachapán</li> 
    <li>Extensión territorial: -----</li> 
    <li>Fiestas patronales: ----</li> 
    <li>Cant. de habitantes: ----</li> 
    </ul>`;
    return html;
}

let infoCabañas = () =>{
    let html = `<b>Ahuachapán</b>
    <ul>
    <li>Cabecera: Ahuachapán</li> 
    <li>Extensión territorial: -----</li> 
    <li>Fiestas patronales: ----</li> 
    <li>Cant. de habitantes: ----</li> 
    </ul>`;
    return html;
}

let infoSanVicente = () =>{
    let html = `<b>Ahuachapán</b>
    <ul>
    <li>Cabecera: Ahuachapán</li> 
    <li>Extensión territorial: -----</li> 
    <li>Fiestas patronales: ----</li> 
    <li>Cant. de habitantes: ----</li> 
    </ul>`;
    return html;
}

let infoUsulutan = () =>{
    let html = `<b>Ahuachapán</b>
    <ul>
    <li>Cabecera: Ahuachapán</li> 
    <li>Extensión territorial: -----</li> 
    <li>Fiestas patronales: ----</li> 
    <li>Cant. de habitantes: ----</li> 
    </ul>`;
    return html;
}

let infoSanMiguel = () =>{
    let html = `<b>Ahuachapán</b>
    <ul>
    <li>Cabecera: Ahuachapán</li> 
    <li>Extensión territorial: -----</li> 
    <li>Fiestas patronales: ----</li> 
    <li>Cant. de habitantes: ----</li> 
    </ul>`;
    return html;
}

let infoMorazan = () =>{
    let html = `<b>Ahuachapán</b>
    <ul>
    <li>Cabecera: Ahuachapán</li> 
    <li>Extensión territorial: -----</li> 
    <li>Fiestas patronales: ----</li> 
    <li>Cant. de habitantes: ----</li> 
    </ul>`;
    return html;
}

let infoLaUnion = () =>{
    let html = `<b>Ahuachapán</b>
    <ul>
    <li>Cabecera: Ahuachapán</li> 
    <li>Extensión territorial: -----</li> 
    <li>Fiestas patronales: ----</li> 
    <li>Cant. de habitantes: ----</li> 
    </ul>`;
    return html;
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



let delSantaAna = () =>{

    let poligono = L.polygon([
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


window.onload = crearMapa;
