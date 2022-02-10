class Alians{
    constructor(x, y, sprite){
        this.x = x;
        this.y = y;
        this.height = 30;
        this.width = 30;
        this.sprite = sprite;
        this.dx = 1;
    }
    render(context){
        context.save();
        context.drawImage(this.sprite,this.x, this.y, this.width, this.height);
        context.restore();
    }
    move(){
        this.x += this.dx;
    }
    hit(screen){
        return this.x + this.width >= screen.width  || this.x <= 0;
    }
    goDown(){
        this.y += this.height/2;
        this.dx = -1 * this.dx;
        this.move();
    }
}





