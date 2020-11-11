class Service {
    constructor(types){
        this.types = types;
        Service.all.push(this);
    }
}
Service.all = [];