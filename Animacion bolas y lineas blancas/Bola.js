// Definición de la clase Bola
class Bola {
    constructor(x, y) {
        this.x = x;                      // Posición en el eje x
        this.y = y;                      // Posición en el eje y
        this.radio = 7;                 // Radio de la bola
        this.dirX = (Math.random() * 2) - 1; // Dirección aleatoria en x
        this.dirY = (Math.random() * 2) - 1; // Dirección aleatoria en y
        this.velocidad = 3;              // Velocidad de la bola
    }

    // Método para dibujar la bola en el canvas
    // Método para dibujar la bola en el canvas
    dibujar(ctx) {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radio, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    }


    // Método para mover la bola y hacerla rebotar en los bordes
    mover(canvas) {
        this.x += this.dirX * this.velocidad;
        this.y += this.dirY * this.velocidad;

        // Detecta colisiones con los bordes del canvas y cambia la dirección
        if (this.x + this.radio > canvas.width || this.x - this.radio < 0) {
            this.dirX *= -1;
        }

        if (this.y + this.radio > canvas.height || this.y - this.radio < 0) {
            this.dirY *= -1;
        }
    }
}