class Storage {
    #item;
    constructor(item){
        this.#item = item
    }
    getItems(){
       return this.#item;
    }
    addItem(item){
        return this.#item.push(item)
    }
    removeItem (item){
        if(this.#item.includes(item)){
            const index = this.#item.indexOf(item);
            this.#item.splice(index, 1);
        }
    }

   
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

