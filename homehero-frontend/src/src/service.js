class HomeService {
    constructor(types){
        this.types = types;
        HomeService.all.push(this);
    }
}
HomeService.all = [];

