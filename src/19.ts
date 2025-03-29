class MyClass {
    private _data: any = {};

    get data(): any {
        return this._data;
    }

    set data(value: any) {
        if (typeof value === 'object' && !Array.isArray(value)) {
            this._data = value;
        }
    }

    log() {
        console.log(this.data);
    }
}

// Usage
const myClass = new MyClass();
console.log(myClass.data); // Outputs the default data, which can be modified in the parent class or any child classes.
