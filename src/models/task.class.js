import { levels } from "./levels.enum";



export class Task {
    name = '';
    description = '';
    completed = false;
    level = levels.NORMAL;

    constructor(name, descripcion, completed, level){
        this.name = name;
        this.description = descripcion;
        this.completed = completed;
        this.level = level;
    }
}

