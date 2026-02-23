import { addNote, readNotes, deleteNotes } from './noteFunctions.js';
import { asyncAddNote, asyncReadNotes, asyncDeleteNotes } from './asyncNoteFunctions.js';

let file = "./notes.txt";
let text = "Text added from the writeFileSync function";

console.log("Sychronic method");
addNote(file, text);
readNotes(file);
deleteNotes(file);

file = "./asyncNotes.txt";
text = "Text added from the writeFile function";

console.log("Asynchronic method");
await asyncAddNote(file, text);
await asyncReadNotes(file);
await asyncDeleteNotes(file);