import {
    Box
} from './box.js';

export class Bar extends Box{
    setxandy(mx,my){

        this.maxX = this.width + this.x;
        this.maxY = this.height + this.y;

        this.x = mx - this.width/2;
        this.y = my - this.height/2;

    }

    draw(ctx,Ball) {
        const xGap = 40;
        const yGap = 30;

        this.bounceBall(Ball);


        ctx.fillStyle = '#ff384e';
        ctx.beginPath();
        ctx.rect(this.x , this.y, this.width, this.height);
        ctx.fill();


        ctx.fillStyle = '#190f3a';
        ctx.beginPath();
        ctx.moveTo(this.maxX, this.maxY);
        ctx.lineTo(this.maxX - xGap, this.maxY + yGap);
        ctx.lineTo(this.x - xGap, this.maxY + yGap);
        ctx.lineTo(this.x, this.y + this.height);
        ctx.fill();

        ctx.fillStyle = '#190f3a';
        ctx.beginPath();
        ctx.lineTo(this.x, this.maxY);
        ctx.lineTo(this.x - xGap, this.maxY + yGap);
        ctx.lineTo(this.x - xGap, this.maxY + yGap - this.height);
        ctx.lineTo(this.x, this.y);
        ctx.fill();

    }
}