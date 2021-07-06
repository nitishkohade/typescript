class Disposable {
    isDisposed: boolean = false;
    dispose() {
        this.isDisposed = true
    }
}

class Activatable {
    isActive: boolean = false
    activate() {
        this.isActive = true
    }
    deactivate() {
        this.isActive = false
    }
}



type Class = new (...args: any[]) => any

function DisposableMixin<Base extends Class>(base: Base) {
    return class extends base {
        isDisposed: boolean = false;
        dispose() {
            this.isDisposed = true
        }
    }
}

function ActivatableMixin<Base extends Class>(base: Base) {
    return class extends base {
        isActive: boolean = false
        activate() {
            this.isActive = true
        }
        deactivate() {
            this.isActive = false
        }
    }
}

class A extends DisposableMixin(ActivatableMixin(class {})){
    constructor(){
        super()
    }
}

const Example = DisposableMixin(ActivatableMixin(class {
member = 123
constructor(e: any) {

}
}))

type Example = InstanceType<typeof Example>

function takeExample(example: Example){
example
}