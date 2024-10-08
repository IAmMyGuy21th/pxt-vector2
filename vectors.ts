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

        public divide(divider: number) {
            return new Vector2(this.x / divider, this.y / divider)
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
        
        public clone() {
            return new Vector2(this.x,this.y)
        }

        public setAdd(vector: Vector2) {
            this.x += vector.x
            this.y += vector.y
        }

        public setSubtract(vector: Vector2) {
            this.x -= vector.x
            this.y -= vector.y
        }

        public setMultiply(scale: number) {
            this.x *= scale
            this.y *= scale
        }

        public setDivide(divider: number) {
            this.x /= divider
            this.y /= divider
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

    const zero = new Vector2(0,0)

    /**
     * TODO: returns zero vector
     */
    //% block="vector zero"
    export function vectorZero() {
        return zero.clone()
    }

    /**
     * TODO: Clones vector
     * @param vector vector to clone
     */
    //% block="clone $vector"
    export function cloneVector(vector: Vector2) {
        return vector.clone()
    }

    /**
     * TODO: Returns a vector with a sprite position.
     * @param sprite sprite
     */
    //% block="$sprite pos as vector"
    export function spritepos(sprite: Sprite) {
        return new Vector2(sprite.x, sprite.y)
    }

    /**
     * TODO: Returns a vector with a sprite velocity.
     * @param sprite sprite
     */
    //% block="$sprite vel as vector"
    export function spritevel(sprite: Sprite) {
        return new Vector2(sprite.vx, sprite.vy)
    }

    /**
     * TODO: Returns a vector with a sprite acceleration.
     * @param sprite sprite
     */
    //% block="$sprite accel as vector"
    export function spriteaccel(sprite: Sprite) {
        return new Vector2(sprite.ax, sprite.ay)
    }

    /**
     * TODO: Returns a vector with a sprite size.
     * @param sprite sprite
     */
    //% block="$sprite size as vector"
    export function spritesize(sprite: Sprite) {
        return new Vector2(sprite.sx, sprite.sy)
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
     * TODO: Divides a 2d vector.
     * @param vectorA Vector A
     * @param divider Divider
     */
    //% block="$vectorA / $divider"
    export function divideVector(vectorA: Vector2, divider: number) {
        return vectorA.divide(divider)
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

    /**
     * TODO: Sets a sprite position to a vector.
     * @param sprite sprite to modify
     * @param pos position
     */
    //% block="$sprite set position to $pos"
    export function setSpritePos(sprite: Sprite, pos: Vector2) {
        sprite.x = pos.x
        sprite.y = pos.y
    }

    /**
     * TODO: Sets a sprite velocity to a vector.
     * @param sprite sprite to modify
     * @param vel velocity
     */
    //% block="$sprite set velocity to $vel"
    export function setSpriteVel(sprite: Sprite, vel: Vector2) {
        sprite.vx = vel.x
        sprite.vy = vel.y
    }    
    
    /**
     * TODO: Sets a sprite acceleration to a vector.
     * @param sprite sprite to modify
     * @param accel acceleration
     */
    //% block="$sprite set acceleration to $accel"
    export function setSpriteAccel(sprite: Sprite, accel: Vector2) {
        sprite.ax = accel.x
        sprite.ay = accel.y
    }

    /**
     * TODO: Sets a sprite size to a vector.
     * @param sprite sprite to modify
     * @param size size
     */
    //% block="$sprite set size to $size"
    export function setSpriteSize(sprite: Sprite, size: Vector2) {
        sprite.sx = size.x
        sprite.sy = size.y
    }

    /**
     * TODO: Returns Controller acceleration as a vector
     */
    //% block="acceleration as vector"
    export function accelAsVector() {
        return new Vector2(controller.acceleration(ControllerDimension.X), controller.acceleration(ControllerDimension.Y))
    }


    /**
     * TODO: Converts vector into tilemap position.
     * @param vec vector
     */
    //% block="$vec as tilepos"
    export function vectorAsTilepos(vec: Vector2) {
        return tiles.getTileLocation(vec.x, vec.y)
    }
}