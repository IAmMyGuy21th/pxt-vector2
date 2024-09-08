// Add your code here


enum axis {
    //% block="x"
    x,
    //% block="y"
    y
}

enum value {
    //% block="position"
    pos,
    //% block="velocity"
    vel,
    //% block="size"
    size
}

/**
 * Custom blocks
 */
//% weight=100 color=#94bd00 icon="" block="Vectors"
namespace vectors {
    export class Vector2 {
        x: number
        y: number
        public constructor(x: number, y: number) {
            this.x = x
            this.y = y
        }

        public mag(): number {
            return Math.sqrt((this.x ** 2) + (this.y ** 2))
        }

        public subtract(otherVector: Vector2) {
            return new Vector2(this.x - otherVector.x, this.y - otherVector.y)
        }

        public add(otherVector: Vector2) {
            return new Vector2(this.x + otherVector.x, this.y + otherVector.y)
        }

        public scale(scaleFactor: number) {
            return new Vector2(this.x * scaleFactor, this.y * scaleFactor)
        }

        public matrixMultiply(otherVector: Vector2) {
            return new Vector2((this.x * otherVector.x) + (this.x * otherVector.y), (this.y * otherVector.x) + (this.y * otherVector.y))
        }

        public directionVector() {
            return new Vector2(this.x / this.mag(), this.y / this.mag())
        }

        public addArray(opArray: Vector2[]) {
            let resultX = this.x
            let resultY = this.y
            for (let opItem of opArray) {
                resultX += opItem.x
                resultY += opItem.y
            }
            return new Vector2(resultX, resultY)
        }

        public subtractArray(opArray: Vector2[]) {
            let resultX = this.x
            let resultY = this.y
            for (let opItem of opArray) {
                resultX -= opItem.x
                resultY -= opItem.y
            }
            return new Vector2(resultX, resultY)
        }

        public scaleArray(opArray: number[]) {
            let resultX = this.x
            let resultY = this.y
            for (let opItem of opArray) {
                resultX *= opItem
                resultY *= opItem
            }
            return new Vector2(resultX, resultY)
        }
    }

    export class Node {
        pos: Vector2
        vel: Vector2
        size: number
        public constructor(pos: Vector2, vel: Vector2, size: number) {
            this.pos = pos
            this.vel = vel
            this.size = size
        }
    }

    /**
     * TODO: Creates a 2d vector.
     * @param x X Value
     * @param y Y Value
     */
    //% block="Create New Vector2 $x $y"
    export function createVector2(x: number, y: number) {
        return new Vector2(x, y)
    }

    /**
     * TODO: Creates a Node
     * @param pos position
     * @param vel velocity
     * @param size size
     */
    //% block="Create new Node $pos $vel $size"
    export function createNode(pos: Vector2, vel: Vector2, size: number) {
        return new Node(pos, vel, size)
    }

    /**
     * TODO: Returns one of a node's values
     * @param $node node
     * @param $val the value it will return
     */
    //% block="Node $node $val"
    export function returnVal(node: Node, val: value) {
        if (val == 0) {
            return node.pos
        } else if (val == 1) {
            return node.vel
        } else {
            return node.size
        }
    }

    /**
     * TODO: Returns the given vector's magnitude.
     * @param vector 
     */
    //% block="Magnitude $vector"
    export function magnitude(vector: Vector2) {
        return vector.mag()
    }

    /**
     * TODO: Returns a normalized vector, a bit like a direction vector.
     * @param vector
     */
    //% block="Normalize $vector"
    export function normalize(vector: Vector2) {
        return vector.directionVector()
    }

    /**
     * TODO: Adds two 2d vectors together.
     * @param vectorA Vector A
     * @param vectorB Vector B
     */
    //% block="$vectorA + $vectorB"
    export function addVectors(vectorA: Vector2, vectorB: Vector2) {
        return vectorA.add(vectorB)
    }

    /**
     * TODO: Subtracts two 2d vectors.
     * @param vectorA Vector A
     * @param vectorB Vector B
     */
    //% block="$vectorA - $vectorB"
    export function subtractVectors(vectorA: Vector2, vectorB: Vector2) {
        return vectorA.subtract(vectorB)
    }

    /**
     * TODO: Scales a 2d vector.
     * @param vectorA Vector A
     * @param scale Scale Factor
     */
    //% block="$vectorA * $scale"
    export function scaleVector(vectorA: Vector2, scale: number) {
        return vectorA.scale(scale)
    }

    /**
     * TODO: Multiplies one 2d vector by the other.
     * @param vectorA Vector A
     * @param vectorB Vector B
     */
    //% block="$vectorA * $vectorB"
    export function vectorMultiply(vectorA: Vector2, vectorB: Vector2) {
        return vectorA.matrixMultiply(vectorB)
    }

    /**
     * TODO: Returns either x or y of the given 2d vector.
     * @param vector
     * @param axis Either x or y
     */
    //% block="vector $vector $axis"
    export function vectorXY(vector: Vector2, axis: axis) {
        if (axis === 0) {
            return vector.x
        } else {
            return vector.y
        }
    }
}