// Circle - Class

class Circle{
    constructor(color, radius){
        this.color=color;
        this.radius=radius;
    }
    setColor(color){
        this.color=color;
    }
    setRadius(radius){
        this.radius=radius;
    }
    getColor(){
        return this.color;
    }
    getRadius(){
        return this.radius;
    }
    getArea(){
        let area=(3.14*this.getRadius()).toFixed(2)
        return "Area of circle is" ${area}
    }
    getCircumference(){
        let circum(2*3.14*this.getRadius()).toFixed(2)
        return "Circumference of circle is" ${circum}
    }
    display(){
        let str = [radius : ${this.getradius()}, color : ${this.getColor()}]
    return str;
    }
}
let circle1 = new Circle();
let circle2 = new Circle("red");
let circle3 = new Circle("green", 3);
circle1.setradius(6);
circle1.setcolor("white");
circle1.setradius(9);
console.log(circle1.display());
console.log(circle2.display());
console.log(circle3.getArea());
console.log(circle3.getCircumference());