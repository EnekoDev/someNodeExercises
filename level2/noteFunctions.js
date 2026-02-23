import { writeFileSync, readFileSync, truncateSync } from "node:fs";
import path from "node:path";

function addNote(file, text) {
    writeFileSync(file, text);
    console.log("Text added to the file");
}

function readNotes(file) {
    console.log("Reading content from ", path.basename(file, path.extname(file)));
    readContent(file).forEach((line) => {
        console.log(line);
    })
}

function readContent(file) {
    const fileContent = readFileSync(file, {encoding:"utf-8"});
    return fileContent.trim().split('\n');
}

function deleteNotes(file) {
    truncateSync(file, 0);
    console.log("File content deleted");
}

export { addNote, readNotes, deleteNotes };