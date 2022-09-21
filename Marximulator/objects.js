function getCompanyTemplate(name) {
    var e = document.createElement('section');
    e.className = "company";
    e.id = name;
    e.innerHTML =
        "<h3 class=\"company-name\">".concat(name, "</h3>\n     <div class=\"directors\">Directors</div>\n     <div class=\"unproductive-workers\">Managers</div>\n     <div class=\"productive-workers\">Workers</div>");
    return e;
}
function getPersonTemplate(name) {
    return "<div class=\"person\" id=\"".concat(name, "\">\n                <span class=\"name\">Example name</span>\n                <span class=\"value\"></span>\n            </div>");
}
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var people = [];
var hour = 0;
function hireWorker(person, company, titles) {
    var shifts = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        shifts[_i - 3] = arguments[_i];
    }
    var existingCompany = document.getElementById(company);
    if (existingCompany == undefined) {
        var newCompanyHTML = getCompanyTemplate(company);
        document.body.appendChild(newCompanyHTML);
    }
}
window.onload = function () {
    hireWorker(new Person("Marius"), "Pharma", "Director");
};
