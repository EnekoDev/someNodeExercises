import { addNote, readNotes, deleteNotes } from './noteFunctions.js';
import { asyncAddNote, asyncReadNotes, asyncDeleteNotes } from './asyncNoteFunctions.js';
import { writeJson, readJson } from './jsonNotesFunctions.js';

console.log("Sychronic method");

let file = "./notes.txt";
let text = "Text added from the writeFileSync function";

addNote(file, text);
readNotes(file);
deleteNotes(file);

console.log("Asynchronic method");

file = "./asyncNotes.txt";
text = "Text added from the writeFile function";

await asyncAddNote(file, text);
await asyncReadNotes(file);
await asyncDeleteNotes(file);

console.log("JSON method");

file = "./notes.json";
text = {
    text:"Text added to the json",
    function:"fs synchronous methods"
}

writeJson(file, text);
console.log(readJson(file));