import { ONLINE } from "./line.enum";



export class User {
    name = '';
    lastName = '';
    mail = '';
    connected =  ONLINE.NOCONNECTED;

    constructor(name, lastName, mail, connected){
        this.name = name;
        this.lastName = lastName;
        this.mail = mail;
        this.connected = connected;
    }
}