class Polygon {
    constructor(sides){
        this.sides = sides
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        return this.sides.reduce(function(total, side){return total + side}, 0)
    }
}

class Triangle extends Polygon {
    
    get isValid(){
        let a = this.sides[0]
        let b = this.sides[1]
        let c = this.sides[2]
       
        if (this.countSides !== 3){
            return false
        } else if ((a + b > c) && (a + c > b) && (b + c > a)){
            return true
        } else {
            return false
        }
    }
}

class Square extends Polygon {

    get isValid(){
        let a = this.sides[0]
        let b = this.sides[1]
        let c = this.sides[2]
        let d = this.sides[3]

        if (this.countSides !== 4){
            return false
        } else if (a === b && b === c && c === d && a === d){
            return true
        } else {
            return false
        }
    }

    get area(){
        return this.sides[0] * this.sides[1]
    }
}