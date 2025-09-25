/**
 * 
 *      ESTRUCTURA SWITCH
 * 
 */

let comprar = "Mangos";

switch (comprar) {
    case "Naranjas":
        console.log("Las Naranjas estan a Q10 la mano");
        break;
    case "Manzanas":
        console.log("Las Manzanas estan a Q5 la unidad");
        break;
    case "Platanos":
        console.log("Los Platanos estan a Q15 la docena");
        break;
    
    case "Mangos":
    case "Papayas":
        console.log(`Los mangos y las papayas estan a Q20 la unidad`);
        break;
    default:
        console.log(`Lo sentimos, no contamos con ${comprar}`);
        break;
}