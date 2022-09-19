var companyTemplate = "<section class=\"company\">\n    <div class=\"company-name\">Company name</div>\n    <div class=\"directors\"></div>\n    <div class=\"productive-workers\"></div>\n    <div class=\"unproductive-workers\"></div>\n</section>";
var personTemplate = "<div class=\"person\">\n    <span class=\"name\">Example name</span>\n    <span class=\"value\"></span>\n</div>";
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var Company = /** @class */ (function () {
    function Company() {
    }
    return Company;
}());
document.body.append(companyTemplate);
