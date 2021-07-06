type Person = {
    name: string;
    age: number;
}

const john: Person = {
    age: 34,
    name: "nitish"
}

// function logAccess(obj: Person, key: 'age'|'name') {
//     return obj
// }

function logAccess<T>(obj: T, key: keyof T): T {
    return obj
}

const person: Person = logAccess<Person>({name: 'john', age: 3}, 'age')