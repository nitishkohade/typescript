type Point1 = {
    readonly x: number;
    y?:number
}

type Mapped<T> = {
   +readonly [P in keyof T]+?: T[P]
}
type Mapped1<T> = {
    -readonly [P in keyof T]-?: T[P]
 }
type Result = Mapped<Point1>


class State<T> {
    constructor(current: T) {}
    update(next: Partial<T>) {
        
    }
}