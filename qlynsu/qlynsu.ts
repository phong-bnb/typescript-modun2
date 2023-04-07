import { Person } from "./nsu";
export class PersonManager{
  static  personList: Person[]=[]
    constructor(){

    }
    getList(): Person[] {
       return PersonManager.personList
    }
    add(person: Person){
PersonManager.personList.push(person)
    }
    delete(n:number){
        if(n<PersonManager.personList.length){
        PersonManager.personList.splice(n,1)
        }
    }
    update(n:number,m: Person){
        if(n<PersonManager.personList.length){
            PersonManager.personList[n]=m
        }
    }
    

}