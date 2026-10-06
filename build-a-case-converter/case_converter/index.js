const { __esModule } = require("@babel/generator");

function getUpperCase(string){
    return string.toUpperCase();

}
function getLowerCase(string){
    return string.toLowerCase();
}
function getSentenceCase(string){
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
function getProperCase(string){
    return string.toLowerCase().split(" ").map(key=>key.charAt(0).toUpperCase() + key.slice(1)).join(" ");
}
module.exports = {
    getUpperCase,
    getLowerCase,
    getSentenceCase,
    getProperCase
}