function getCompanyTemplate(name: string){
    let e =  document.createElement('section');
    e.className = "company";
    e.id = name;
    e.innerHTML = 
    `<h3 class="company-name">${name}</h3>
     <div class="directors">Directors</div>
     <div class="unproductive-workers">Managers</div>
     <div class="productive-workers">Workers</div>`;
    return e;
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
        document.body.appendChild(newCompanyHTML);
    }
}

window.onload = function(){
    hireWorker(new Person("Marius"), "Pharma", "Director");
}