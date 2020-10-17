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

        linePath.stroke({color: "black"}, 2);
    },

    //рисует задачу
    _drawTask(data, xCenter, yCenter) {
        const x0 = xCenter - this._widthTask/2;
        const y0 = yCenter;

        this._stage.rect(x0, y0, this._widthTask, this._heightTask).fill("#a84832");

        const padding = 10;

        const textStyleTime = {fontFamily: "Georgia", fontSize: "15px"};
        this._stage.text(x0 + padding, y0 + padding, data.deadline, textStyleTime);

        const fontSize = 18;
        const textStyleDesc = {fontFamily: "Georgia", fontSize: fontSize + "px"};
        this._stage.text(x0 + padding, y0 + this._heightTask/2 - fontSize/2, data.short_desc, textStyleDesc);
    },

    //рисуем рекурсивно дерево
    _drawTree(data, xCenter, yCenter) {
        this._drawTask(data, xCenter, yCenter);

        if (data.numberLevel + 1 >= this._leves.length) return;

        const dx = (this._widthTree - this._widthTask - 2 * this._dx) / (this._leves[data.numberLevel + 1].length - 1);

        data.children.forEach(child => {
            const index = this._leves[child.numberLevel].indexOf(child.id);

            const xCenter1 =  this._leves[child.numberLevel].length > 1 ?dx * (index) + this._widthTask/2 + this._dx :xCenter;
            const yCenter1 =  yCenter + this._heightTask + this._dy;

            this._drawTree(child, xCenter1, yCenter1);
            this._drawLine(xCenter, yCenter + this._heightTask, xCenter1, yCenter1);
        });
    },

    //настраиваем дерево
    setUpTree() {
        const maxLengthLevel = this._leves.reduce((max, level) => Math.max(max, level.length), 0);
        this._widthTree = maxLengthLevel * (this._widthTask + this._dx) + this._dx;
        this._heightTree = this._leves.length * (this._heightTask + this._dy) + this._dy;

        this.contauner.style.height = this._heightTree + "px";
        
        this.contauner.style.width = this._widthTree + "px";
    },

    //рисуем дерево
    drawTree(data) {
        this._addParentToTaskNode(data, null);

        const finalChildren = this._getFinalChildren(data, 0);

        this.setUpTree();
        this._drawTree(data, this._widthTree / 2, this._dy);
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
            return [data];
        }

        return data.children.reduce((finalChildren, child) => {
            return [...finalChildren, ...this._getFinalChildren(child, numberLevel+1)];
        }, [])
    }
}