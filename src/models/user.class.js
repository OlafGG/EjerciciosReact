import { ONLINE } from "./line.enum";



export class User {
    name = '';
    lastName = '';
    mail = '';
    connected =  ONLINE.NOCONNECTED;
    Sconnected = false;

    constructor(name, lastName, mail, connected, Sconnected){
        this.name = name;
        this.lastName = lastName;
        this.mail = mail;
        this.connected = connected;
        this.Sconnected = Sconnected;
    }
}