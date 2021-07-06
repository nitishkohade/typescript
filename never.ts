interface Square {
    kind: 'square';
    size: number;
}

interface Rectangle {
    kind: 'rectangle';
    size: number;
}

interface Circle {
    kind: 'circle';
    size: number;
}
type Shape = Square | Rectangle | Circle
function area(s: Shape) {
    if(s.kind === 'square') {
        return s.size
    } else if (s.kind === 'rectangle'){
        return s.size
    } else if(s.kind === 'circle'){
        return s.size
    }
    const _ensureAllCasesAreHandled: never = s;
}

area({size: 3, kind: 'square'})

// const a3: never = error('')

type NoEmpty<T> = T extends null | undefined ? never : T

type exampl = NoEmpty<string|null>