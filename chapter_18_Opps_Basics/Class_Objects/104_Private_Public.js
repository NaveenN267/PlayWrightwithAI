class PrivateAndPublic {
    name;
    #api; // private variable; not allowed to use outside the class

    constructor(name, api) {
        this.name = name;
        this.#api = api; // private variables are defined with the '#' key
    }

    accesskey() {
        console.log("able to access the api " + this.#api);
    }
}

const obj = new PrivateAndPublic("Naveen", "Api key accessed");
obj.accesskey();
console.log(obj.api);