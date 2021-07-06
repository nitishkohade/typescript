type Point = {
    x: number;
    y: number
}

// type ReadonlyPoint = {
//     readonly x: number;
//     readonly y: number;
// }

type ReadonlyPoint = {
    readonly [Key in 'x' | 'y']: number
}

type ReadonlyPoint1 = {
    readonly [Key in 'x' | 'y']: Point[Key]
}

type ReadonlyPoint2 = {
    readonly [Key in keyof Point]: Point[Key]
}

type ReadonlyPoint3<T> = {
    readonly [Key in keyof T]: T[Key]
}

// type ReadonlyPoint = Readonly<Point>

type X = Point['x']

type PointKeys = keyof Point;

const origin1: ReadonlyPoint3<Point> = {
    x: 0,
    y: 0
}

// origin1.x = 45;