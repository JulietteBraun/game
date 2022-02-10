class Fig{
    constructor(x,y, sprite) {
        this.x = x;
        this.y = y;
        this.sprite = sprite;
        this.width = 100;
        this.height = 40;
    }

    move(step){
        this.x +=step;
    }

    render(context){
        context.save();
        context.drawImage(this.sprite,this.x, this.y, this.width, this.height);
        context.restore();
    }

}
