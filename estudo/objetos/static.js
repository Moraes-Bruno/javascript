//static: keyword que define propriedades ou metodos que fazem parte de uma classe em si e não de um objeto

class Mathutils {
  static PI = 3.13159;

  static getDiamenter(radius) {
    return radius * 2;
  }

  static getCircumference(radius) {
    return 2 * this.PI * radius;
  }

  static getArea(radius) {
    return this.PI * radius ** 2;
  }
}

console.log(Mathutils.getDiamenter(10));
console.log(Mathutils.getCircumference(10));
console.log(Mathutils.getArea(10));
