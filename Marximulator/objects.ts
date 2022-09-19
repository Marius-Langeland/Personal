class Person{
    public name: string;
    public age: number;
    public skill: number;
    public efficiency: number;
    public shifts: number[];

    constructor(name?: string){
        if(name != undefined){
            
        }
    }
}

class Company{
    public directors: Person[];
    public workers: Person[];
    public value: number;

    constructor(companyName: string){
        // If company name is blank, create random company

    }
}

let companies: Company[] = new Company[0];


function generatePerson(): Person{
    let person = new Person(){
        age = Math.random() * 40 + 18,
        skill = Math.random(),
        efficiency = Math.random(),
    };

    return person;
}