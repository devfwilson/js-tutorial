var palabras = [
    'javascript', 'html', 'intellij', 'tecnologia', 'springboot', 'hibernate', 'netbeans', 'zapato', 'github', 'python',
    'programacion', 'scrum', 'frontend', 'backend', 'localhost', 'cliente', 'navegador', 'framework', 'variable', 'funcion'
];

var palabraSecreta = '';
var letrasAdivinadas = [];
var letrasUsadas = new Set();
var errores = 0;
var maxErrores = 7;
var juegoTerminado = false;

var canvas, ctx;

function elegirPalabra() {
    palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];
}

function init() {
    canvas = document.getElementById('canvas');
    if (canvas) {
        ctx = canvas.getContext('2d');
    }
    elegirPalabra();
    letrasAdivinadas = [];
    letrasUsadas.clear();
    errores = 0;
    juegoTerminado = false;
    actualizarIntentos();
    limpiarCanvas();
    dibujarBase();
    mostrarPalabra();
    crearTeclado();
    document.getElementById('resultado').textContent = '';
    document.getElementById('resultado').className = 'h5';
    var btnReiniciar = document.getElementById('reiniciar');
    btnReiniciar.classList.add('d-none');
    btnReiniciar.onclick = reiniciar;
}

function mostrarPalabra() {
    var palabraMostrada = palabraSecreta.split('').map(letra => (letrasAdivinadas.includes(letra) ? letra.toUpperCase() : '_')).join(' ');
    var el = document.getElementById('palabra');
    el.textContent = palabraMostrada;
}

function mostrarPalabraFinal(colorClass) {
    var el = document.getElementById('palabra');
    el.innerHTML = palabraSecreta.split('').map(l => '<span class="' + colorClass + '">' + l.toUpperCase() + '</span>').join(' ');
}

function crearTeclado() {
    var cont = document.getElementById('teclado');
    cont.innerHTML = '';
    var letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    letras.forEach(letra => {
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.textContent = letra;
        btn.className = 'btn btn-outline-primary m-1 px-3 py-2 fs-5';
        btn.onclick = function() { adivinarLetra(letra.toLowerCase(), btn); };
        cont.appendChild(btn);
    });
}

function adivinarLetra(letra, boton) {
    if (juegoTerminado) return;
    if (letrasUsadas.has(letra)) return;

    letrasUsadas.add(letra);

    var acierto = palabraSecreta.includes(letra);
    if (acierto) {
        if (!letrasAdivinadas.includes(letra)) {
            letrasAdivinadas.push(letra);
        }
        if (boton) {
            boton.classList.remove('btn-outline-primary');
            boton.classList.add('btn-success');
        }
    } else {
        errores++;
        dibujarPaso(errores);
        if (boton) {
            boton.classList.remove('btn-outline-primary');
            boton.classList.add('btn-danger');
        }
    }
    if (boton) boton.disabled = true;

    mostrarPalabra();
    verificarEstado();
    actualizarIntentos();
}

function verificarEstado() {
    var resultado = document.getElementById('resultado');
    if (errores >= maxErrores) {
        juegoTerminado = true;
        mostrarPalabraFinal('text-danger');
        resultado.textContent = '¡Has perdido! La palabra era: ' + palabraSecreta.toUpperCase();
        mostrarBotonReiniciar();
        deshabilitarTeclado();
    } else if (palabraSecreta.split('').every(l => letrasAdivinadas.includes(l))) {
        juegoTerminado = true;
        mostrarPalabraFinal('text-success');
        var intentosUsados = letrasUsadas.size;
        resultado.textContent = '¡Has ganado! Adivinaste todas las letras de la palabra.';
        resultado.classList.add('text-success');
        mostrarBotonReiniciar();
        deshabilitarTeclado();
    }
}

function actualizarIntentos() {
    var restantes = maxErrores - errores;
    document.getElementById('intentos').textContent = 'Intentos restantes: ' + restantes;
}

function deshabilitarTeclado() {
    var cont = document.getElementById('teclado');
    Array.from(cont.children).forEach(btn => btn.disabled = true);
}

function mostrarBotonReiniciar() {
    var btn = document.getElementById('reiniciar');
    btn.classList.remove('d-none');
}

function reiniciar() {
    init();
}

function limpiarCanvas() {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function dibujarBase() {
    if (!ctx) return;
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(10, 190); ctx.lineTo(190, 190); 
    ctx.moveTo(40, 190); ctx.lineTo(40, 20); 
    ctx.lineTo(130, 20); 
    ctx.lineTo(130, 40); 
    ctx.stroke();
}

function dibujarPaso(paso) {
    if (!ctx) return;
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    switch (paso) {
        case 1: 
            ctx.beginPath();
            ctx.arc(130, 55, 15, 0, Math.PI * 2);
            ctx.stroke();
            break;
        case 2:
            ctx.beginPath();
            ctx.moveTo(130, 70); ctx.lineTo(130, 110); ctx.stroke();
            break;
        case 3:
            ctx.beginPath();
            ctx.moveTo(130, 110); ctx.lineTo(115, 135); ctx.stroke();
            break;
        case 4: 
            ctx.beginPath();
            ctx.moveTo(130, 110); ctx.lineTo(145, 135); ctx.stroke();
            break;
        case 5: 
            ctx.beginPath();
            ctx.moveTo(130, 85); ctx.lineTo(110, 100); ctx.stroke();
            break;
        case 6: 
            ctx.beginPath();
            ctx.moveTo(130, 85); ctx.lineTo(150, 100); ctx.stroke();
            break;
        case 7: 
            ctx.beginPath();
            ctx.moveTo(124, 50); ctx.lineTo(128, 54);
            ctx.moveTo(128, 50); ctx.lineTo(124, 54);
            ctx.moveTo(132, 50); ctx.lineTo(136, 54);
            ctx.moveTo(136, 50); ctx.lineTo(132, 54);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(124, 60); ctx.lineTo(136, 60); ctx.stroke();
            break;
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
