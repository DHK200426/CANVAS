import {
    Box
} from './box.js';

export class Brick extends Box {
    
    draw(ctx,ball) {
        ctx.fillStyle = '#4F6F52';
        ctx.beginPath();
        this.disapper(ball);
        ctx.rect(this.x , this.y, this.width, this.height);
        ctx.fill();
    }

    disapper(ball){
        const minX = this.x - ball.radius;
        const maxX = this.maxX + ball.radius;
        const minY = this.y - ball.radius;
        const maxY = this.maxY + ball.radius;

        if(ball.x > minX && ball.x < maxX && ball.y > minY && ball.y < maxY){
            const x1 = Math.abs(minX - ball.x);
            const x2 = Math.abs(ball.x - maxX);

            const y1 = Math.abs(minY - ball.y);
            const y2 = Math.abs(ball.y - maxY);

            const min1 = Math.min(x1,x2);
            const min2 = Math.min(y1,y2);

            const min = Math.min(min1,min2);

            if(min == min1) {
                ball.vx *= -1;
                ball.x += ball.vx;
            }

            else if(min == min2) {
                ball.vy *= -1;
                ball.y += ball.vy;
            }

            

        }
    }
}