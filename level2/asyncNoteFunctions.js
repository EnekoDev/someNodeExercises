import { writeFile, readFile, truncate } from "node:fs/promises";
import path from "node:path";

async function asyncAddNote(file, text) {
    await writeFile(file, text, {encoding: "utf-8"});
}

async function asyncReadNotes(file) {
    console.log("Reading asyncronously content from", path.basename(file, path.extname(file)));
    const data = await readContent(file);
    data.forEach((line) => {
        console.log(line);
    })
}

async function readContent(file) {
    const content = await readFile(file, {encoding: "utf-8"});
    return content.trim().split("/n");
}

async function asyncDeleteNotes(file) {
    await truncate(file, 0, () => {
        console.log("Content from", path.basename(file, path.extname(file)), "deleted");
    });
}

export { asyncAddNote, asyncReadNotes, asyncDeleteNotes };