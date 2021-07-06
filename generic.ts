type B<T> = (x: T) => T
type C = <T>(x: T) => T

declare const a: B<number>


const numToNum: B<number> = function(x1: number) {
    return x1
}

const identity: C = function<T>(x: T) {
    return x
}


interface generInt<T> {
    (x: T): T
}

interface genericB {
    <T>(x: T): T
}
