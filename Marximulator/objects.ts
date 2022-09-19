let companyTemplate = 
`<section class="company">
    <div class="company-name">Company name</div>
    <div class="directors"></div>
    <div class="productive-workers"></div>
    <div class="unproductive-workers"></div>
</section>`;

let personTemplate =
`<div class="person">
    <span class="name">Example name</span>
    <span class="value"></span>
</div>`;

class Person{
    public name: string;
    public age: number;
    public skill: number;
    public efficiency: number;
    public shifts: number[];
}

class Company{
    public directors: Person[];
    public workers: Person[];
    public value: number;
}

document.body.append(companyTemplate);