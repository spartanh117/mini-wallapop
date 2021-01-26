export class Usuario {
    email: String;
    password: String;

    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    equals(usuario:Usuario){
        if(this.email == usuario.email){
            if(this.password == usuario.password)return true
            else return false
        }
        else return false
    }
}
