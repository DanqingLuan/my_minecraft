namespace agent {

    /** 向前走 */
    export function moveForward(blocks: number = 1): void {
        agent.move(SixDirection.Forward, blocks);
    }

    /** 向后走 */
    export function moveBack(blocks: number = 1): void {
        agent.move(SixDirection.Back, blocks);
    }

/** 向左走 */
    export function moveLeft(blocks: number = 1): void {
        agent.move(SixDirection.Left, blocks);
    }

/** 向右走 */
    export function moveRight(blocks: number = 1): void {
        agent.move(SixDirection.Right, blocks);
    }

    /**向上走 */
    export function moveUp(blocks: number = 1): void {
        agent.move(SixDirection.Up, blocks);
    }

    /**向下走 */
    export function moveDown(blocks: number = 1): void {
        agent.move(SixDirection.Down, blocks);
    }

    /**
     * 向左转
     */
    export function turnLeft(): void {
        agent.turn(TurnDirection.Left);        
    }

    /**
     * 向右转
     */
    export function turnRight(): void {
        agent.turn(TurnDirection.Right);
    }

} 
