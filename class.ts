

type Fish = {
    swim(): void
}

type Bird = {
    fly(): void
}

function getSmallPet(): Fish | Bird {
     return {fly: ()=>{}}
}

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Bird).fly !== undefined;
}

  let pet1 = getSmallPet();

if (isFish(pet1)) {
  pet1.swim();
} else {
  pet1.fly();
}


type DD = {
    person?: {
        name: ""
    }
}

const person123: DD = {} 

person123.person!.name