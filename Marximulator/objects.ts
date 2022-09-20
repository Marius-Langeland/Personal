function getCompanyTemplate(name: string){
    return  `<section class="company" id="${name}">
                <div class="company-name">Company name</div>
                <div class="directors"></div>
                <div class="productive-workers"></div>
                <div class="unproductive-workers"></div>
            </section>`;
}

function getPersonTemplate(name: string){
    return  `<div class="person" id="${name}">
                <span class="name">Example name</span>
                <span class="value"></span>
            </div>`;
}

class Person{
    constructor(name){
        this.name = name;
    }
    
    public name: string;
    public age: number;
    public skill: number;
    public efficiency: number;

    public employedAt: string[];
    public values: string[];
    public titles: string[];
    public shiftStart: number[];
    public shiftEnd: number[];
}

let people: Person[] = [];
let hour = 0;

function hireWorker(person: Person, company: string, titles: string, ...shifts: number[]){
    let existingCompany = document.getElementById(company);
    if(existingCompany == undefined){
        let newCompanyHTML = getCompanyTemplate(company);
        document.body.append(newCompanyHTML);
    }
}

hireWorker(new Person("Marius"), "Pharma", "Director");