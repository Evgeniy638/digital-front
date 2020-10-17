const Tree = {
    contauner: document.getElementById("contauner"),
    treeElements: document.getElementById("tree_elements"),

    _widthTask: 300,
    _heightTask: 100,

    _dx: 100,
    _dy: 100,

    //рисуем линию 
    drawLine: (xCenter0, yCenter0, xCenter1, yCenter1) => {

    },

    //рисуем задачу
    drawTask: (xCenter, yCenter, data) => {

    },

    //настраиваем дерево
    setUpTree(data) {
        const widthTree = countFinalChildren * (this._widthTask + this._dx) + this._dx;
        const heightTree = countFinalChildren * (this._heightTask + this._dy) + this._dy;

        this.contauner.style.height = heightTree + "px";
        this.treeElements.style.height = heightTree + "px";
        
        this.contauner.style.width = widthTree + "px";
        this.treeElements.style.width = widthTree + "px";
    },

    //рисуем дерево
    drawTree(data) {
        this._addParentToTaskNode(data, null);

        const finalChildren = this._getFinalChildren(data);

        this.setUpTree(data);
        this.drawTask(data);
    },

    _addParentToTaskNode(data, parent) {
        data.parent = parent;
        data.children.forEach(child => this._addParentToTaskNode(child, data));
    },

    _getFinalChildren(data) {
        if (data.children.length === 0) {
            return [data];
        }

        return data.children.reduce((finalChildren, child) => {
            return [...finalChildren, ...this._getFinalChildren(child)];
        }, [])
    }
}