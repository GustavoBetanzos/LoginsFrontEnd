// Configuración inicial del canvas y su contexto
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 1329; // Establece el ancho del canvas
canvas.height = 592; // Establece la altura del canvas

// Crear múltiples instancias de Bola en posiciones aleatorias dentro del canvas
let bolas = [];
for (let i = 0; i < 50; i++) {
    // Genera posiciones x e y aleatorias dentro de los límites del canvas
    let x = Math.random() * (canvas.width - 20) + 10;  // Resta 20 y suma 10 para evitar que esté justo en el borde
    let y = Math.random() * (canvas.height - 20) + 10; // Resta 20 y suma 10 para evitar que esté justo en el borde
    bolas.push(new Bola(x, y));
}

// Función de animación
// Función de animación
function animar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpia el canvas
    ctx.strokeStyle = 'white';  // Color blanco para las líneas

    // Dibuja líneas entre bolas cercanas
    bolas.forEach((bola, i) => {
        for (let j = i + 1; j < bolas.length; j++) {
            let bola2 = bolas[j];
            let dx = bola2.x - bola.x;
            let dy = bola2.y - bola.y;
            let dist = Math.sqrt(dx ** 2 + dy ** 2);

            if (dist < 200) {
                ctx.beginPath();
                ctx.moveTo(bola.x, bola.y);
                ctx.lineTo(bola2.x, bola2.y);
                ctx.stroke();
                ctx.closePath();
            }
        }
        bola.dibujar(ctx);
        bola.mover(canvas);
    });

    requestAnimationFrame(animar);
}

// Inicia la animación
animar();