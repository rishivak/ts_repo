"use strict";
var People;
(function (People) {
    People[People["shivi"] = 0] = "shivi";
    People[People["rishi"] = 1] = "rishi";
    People[People["tarsh"] = 2] = "tarsh";
    People[People["rajeev"] = 3] = "rajeev";
    People[People["cheenu"] = 4] = "cheenu";
})(People || (People = {}));
let tripBY = [People[People.cheenu], People[People.rajeev], People[People.tarsh]];
let homeStay = [People[People.rishi], People[People.shivi]];
console.log("People who were traveling: ", tripBY);
console.log("People who were staying at home: ", homeStay);
