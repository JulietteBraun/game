
class Shot {
    constructor(x, y, color='blue') {
        this.x = x;
        this.y = y;
        this.width = 1;
        this.height = 10;
        this.dy = -5;
        this.color = color;
    }

    move() {
        this.y += this.dy;
    }
    render(context){
        context.save();
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
        context.restore();

    }
    hits(other){
        const withInX = this.x >= other.x && this.x <= other.x + other.width;
        const withInY = this.y <= other.y + other.height && this.y >= other.y;
        return withInX && withInY;
    }

    outOfAtmosphere(boundary){
        return this.y <= 0;
    }
}