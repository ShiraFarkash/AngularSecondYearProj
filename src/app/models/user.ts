export class User {

    id: number | undefined;
    username: string | undefined;
    password: string | undefined;
    
    signUpDate: Date = new Date();
    loginDates = new Array<Date>();
    

}