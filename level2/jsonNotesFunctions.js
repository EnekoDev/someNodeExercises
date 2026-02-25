import { readFileSync, writeFileSync } from 'node:fs';

function writeJson(file, text) {
    const parsedText = JSON.stringify(text); 
    writeFileSync(file, parsedText, { encoding:"utf-8" });
}

function readJson(file) {
    const rawData = readFileSync(file, { encoding:"utf-8" });
    return JSON.parse(rawData);
}

export { writeJson, readJson };