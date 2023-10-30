export class Ball{
    constructor(sw,sh,r,vx,vy) {
        this.radius = r;
        this.vx = vx;
        this.vy = vy;

        const diameter = this.radius * 2;
        this.x = diameter + (Math.random() * sw - diameter)
        this.y = diameter + (Math.random() * sh - diameter)
    }

    draw(ctx, sw, sh, Brick){
        this.x += this.vx;
        this.y += this.vy;

        this.bounceDectetion(sw,sh);
                
        ctx.fillStyle = '#fdd700';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
        ctx.fill();
    }

    bounceDectetion(sw,sh){
        const minX = this.radius;
        const maxX = sw - this.radius;
        const minY = this.radius;
        const maxY = sh - this.radius;

        if(this.x <= minX || this.x >= maxX){
            this.vx *= -1;
            this.x += this.vx;
        }
        else if(this.y <= minY || this.y >= maxY){
            this.vy *= -1;
            this.y += this.vy;
        }
    }

    /*bounceBrick(Brick){
        const minX = Brick.x - this.radius;
        const maxX = Brick.maxX + this.radius;
        const minY = Brick.y - this.radius;
        const maxY = Brick.maxY + this.radius;

        if(this.x > minX && this.x < maxX && this.y > minY && this.y < maxY){
            const x1 = Math.abs(minX - this.x);
            const x2 = Math.abs(this.x - maxX);

            const y1 = Math.abs(minY - this.y);
            const y2 = Math.abs(this.y - maxY);

            const min1 = Math.min(x1,x2);
            const min2 = Math.min(y1,y2);

            const min = Math.min(min1,min2);

            if(min == min1) {
                this.vx *= -1;
                this.x += this.vx;
            }

            else if(min == min2) {
                this.vy *= -1;
                this.y += this.vy;
            }

        }
    }
    */
}