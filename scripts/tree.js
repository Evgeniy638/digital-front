const Tree = {
    contauner: document.getElementById("contauner"),

    _widthTask: 300,
    _heightTask: 100,

    _dx: 100,
    _dy: 100,

    _widthTree: 0,
    _heightTree: 0,

    _leves: [],

    _stage: acgraph.create('contauner'),

    _levelFinishTask: [],

    _zoom: 1,

    //рисуем линию 
    _drawLine(xCenter0, yCenter0, xCenter1, yCenter1) {
        let linePath = this._stage.path();

        linePath.moveTo(xCenter0, yCenter0);

        let x = xCenter0;
        let y = yCenter0 + this._dy / 2;

        linePath.lineTo(x, y);

        x = xCenter1;

        linePath.lineTo(x, y);

        linePath.lineTo(xCenter1, yCenter1);

        linePath.stroke({ color: "black" }, 2);
    },

    //рисует задачу
    _drawTask(data, xCenter, yCenter) {
        const x0 = xCenter - this._widthTask / 2;
        const y0 = yCenter;

        this._stage.rect(x0, y0, this._widthTask, this._heightTask).fill("#a84832");

        const padding = 10;

        const textStyleTime = { fontFamily: "Georgia", fontSize: "15px" };
        this._stage.text(x0 + padding, y0 + padding, data.deadline, textStyleTime);

        const fontSize = 18;
        const textStyleDesc = { fontFamily: "Georgia", fontSize: fontSize + "px" };
        this._stage.text(x0 + padding, y0 + this._heightTask / 2 - fontSize / 2, data.short_desc, textStyleDesc);
    },

    //рисуем рекурсивно дерево
    _drawTree(data) {
        data.children.forEach(child => {
            this._drawTree(child);
        })

        if (data.children.length === 0) {
            data.x = this._levelFinishTask.indexOf(data.id) * (this._widthTask + this._dx) + (this._widthTask / 2 + this._dx);
            data.y = (data.numberLevel + 1) * (this._heightTask + this._dy) - this._dy;
        } else {
            const maxX = data.children.reduce((max, child) => Math.max(max, child.x), 0);
            const minX = data.children.reduce((min, child) => Math.min(min, child.x), data.children[0].x);
            data.x = (maxX + minX) / 2;
            data.y = data.children[0].y - this._dy - this._heightTask;
        }

        this._drawTask(data, data.x, data.y);

        data.children.forEach(child => {
            this._drawLine(data.x, data.y + this._heightTask, child.x, child.y);
        });
    },

    //настраиваем дерево
    setUpTree() {
        this._widthTree = this._levelFinishTask.length * (this._widthTask + this._dx) + this._dx;
        this._heightTree = this._leves.length * (this._heightTask + this._dy) + this._dy;

        this.contauner.style.height = this._heightTree + "px";

        this.contauner.style.width = this._widthTree + "px";
    },

    //рисуем дерево
    drawTree(data) {
        // this.contauner.innerHTML = "";

        this._zoom = 1;

        document.querySelector(".scaleIncrease").addEventListener("click", () => { Tree.zoomIncrease() });
        document.querySelector(".scaleOut").addEventListener("click", () => { Tree.zoomOut() });

        this._addParentToTaskNode(data, null);

        const finalChildren = this._getFinalChildren(data, 0);

        this.setUpTree();
        this._drawTree(data);
    },

    _addParentToTaskNode(data, parent) {
        data.parent = parent;
        data.children.forEach(child => this._addParentToTaskNode(child, data));
    },

    _getFinalChildren(data, numberLevel) {
        data.numberLevel = numberLevel;

        if (!this._leves[numberLevel]) {
            this._leves[numberLevel] = [data.id];
        } else {
            this._leves[numberLevel].push(data.id);
        }

        if (data.children.length === 0) {
            this._levelFinishTask.push(data.id);
            return [data];
        }

        return data.children.reduce((finalChildren, child) => {
            return [...finalChildren, ...this._getFinalChildren(child, numberLevel + 1)];
        }, [])
    },


    zoomIncrease() {
        this._zoom *= 4 / 3;
        this.contauner.style.transform = `scale(${this._zoom}, ${this._zoom})`
    },


    zoomOut() {
        this._zoom *= 3 / 4;
        this.contauner.style.transform = `scale(${this._zoom}, ${this._zoom})`
    }
}