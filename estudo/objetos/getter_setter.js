//getter = metodo especial que permite ler uma propriedade
//setter = metodo especial que permite escrever uma propriedade

//utilizado para validar e modificar um valor de um propriedade na operação de leitura/escrita
// _ = Propriedade privada

class Rectangle{
    constructor(width,height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }else{
            console.error("A largura deve ser um numero positivo")
        }
    }

    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        }else{
            console.error("A Altura deve ser um numero positivo")
        }
    }

    get width(){
        return `${this._width.toFixed(1)}cm`;
    }

    get height(){
        return `${this._height.toFixed(1)}cm`;
    }

    get area(){
       return `${(this._width * this._height).toFixed(1)}cm`;
    }
}

const rectangle = new Rectangle(10,8);

rectangle.width = 5;
rectangle.height = 10;

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);