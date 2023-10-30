import {
    Ball
} from './ball.js';

import {
    Bar
} from './bar.js';

import {
    Brick
} from "./brick.js";


class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');

        document.body.appendChild(this.canvas);
        window.addEventListener('resize',this.resize.bind(this),false);
        this.resize();

        this.make_ball();
        this.bar = new Bar(700,30,300,450);

        this.brick = new Brick(340,100,120,40);

        document.addEventListener("mousemove", (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
        })
        
        window.requestAnimationFrame(this.animate.bind(this));
    }

    resize(){
        this.stageHeight = document.body.clientHeight;
        this.stageWidth = document.body.clientWidth;

        this.canvas.width = this.stageWidth*2;
        this.canvas.height = this.stageHeight*2;
        this.ctx.scale(2,2);
    }

    make_ball() {
        this.ball = new Ball(this.stageWidth,this.stageHeight,20,10,10);
    }

    animate() {
        window.requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0,0,this.stageWidth,this.stageHeight);
        this.bar.draw(this.ctx,this.ball);
        this.bar.setxandy(this.mouseX,this.mouseY);
        this.ball.draw(this.ctx,this.stageWidth,this.stageHeight);
        this.brick.draw(this.ctx,this.ball);

    }
}


window.onload = () => {
    new App();
}