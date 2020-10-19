const data = require("../mochawesome-report/mochawesome.json")
export function outputformatter(){
    res.send(data);
}
