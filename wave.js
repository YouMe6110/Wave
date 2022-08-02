import {
    Point
} from './point.js';

export class Wave {
    constructor(index, totalPoints, color) {
        this.index = index;
        this.totalPoints = totalPoints;
        this.color = color;
        this.point = [];
    }

    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.centerX = stageWidth / 2;
        this.centerY = stageHeight / 2;
        
        this.pointGap = this.stageWidth / (this.totalPoints - 1);

        this.init();
    }

    init() {
        this.point = [];

        for (let i = 0; i < this.totalPoints; i++) {
            const point = new Point(this.index + i, this.pointGap * i, this.centerY);
            this.point[i] = point;
        }
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color;

        let prevX = this.points[0].x;
        let prevY = this.points[0].y;

        ctx.moveTo(prevX, prevY);

        for (let i = 0; i < this.totalPoints; i++) {
            if (i < this.totalPoints - 1) {
                this.points[i].update();
            }
        }
    }
}