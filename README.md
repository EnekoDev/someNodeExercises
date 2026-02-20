Great choice 👍 Practicing is the best way to learn **Node.js basics**.

Here are **progressive exercises** (from beginner → slightly more advanced) focused on core concepts like modules, file system, HTTP server, events, and async programming.

---

## 🟢 Level 1 – Core JavaScript in Node

### 1️⃣ Console App – Calculator

Create a file `calculator.js` that:

* Accepts 3 command-line arguments: `num1 operator num2`
* Supports `+ - * /`
* Example:

```bash
node calculator.js 10 + 5
```

Output:

```
Result: 15
```

👉 Concepts:

* `process.argv`
* Basic JS logic

---

### 2️⃣ Create Your Own Module

Create:

* `math.js`
* `app.js`

In `math.js`:

* Export functions: `add`, `subtract`, `multiply`

In `app.js`:

* Import and use them.

👉 Concepts:

* `module.exports`
* `require()`

---

## 🟡 Level 2 – File System (fs module)

### 3️⃣ Simple Note App

Build a CLI app that:

* Adds a note to `notes.txt`
* Reads all notes
* Deletes all notes

Use:

```js
const fs = require('fs');
```

👉 Practice:

* `fs.writeFileSync`
* `fs.appendFileSync`
* `fs.readFileSync`

Bonus: Make it asynchronous using `fs.promises`.

---

### 4️⃣ JSON File Manager

Create a file `users.json`.

Write a script that:

* Reads JSON file
* Adds a new user
* Saves it back

👉 Concepts:

* `JSON.parse()`
* `JSON.stringify()`
* Async file handling

---

## 🟠 Level 3 – HTTP Server

### 5️⃣ Basic Web Server

Create a server using:

```js
const http = require('http');
```

Requirements:

* `/` → "Welcome"
* `/about` → "About page"
* `/contact` → "Contact page"
* Any other route → 404 message

👉 Concepts:

* `http.createServer`
* Routing
* `req.url`
* `res.writeHead`

---

### 6️⃣ Return JSON from API

Modify previous server:

* Route `/api/users`
* Return JSON array of users
* Set proper header:

```js
res.writeHead(200, { "Content-Type": "application/json" });
```

---

## 🔵 Level 4 – Events & Async

### 7️⃣ Custom Event Emitter

Create a custom logger:

```js
const EventEmitter = require('events');
```

* Emit event `userLoggedIn`
* Listen to event and log message

👉 Concepts:

* `on()`
* `emit()`

---

### 8️⃣ Async/Await Practice

Create a function that:

* Waits 2 seconds
* Returns a message

Then:

* Call it using async/await
* Handle errors with try/catch

---

## 🟣 Level 5 – Mini Project

### 9️⃣ Simple REST API (No Express)

Build:

* GET `/tasks`
* POST `/tasks`
* DELETE `/tasks/:id`

Store tasks in a JSON file.

👉 You’ll practice:

* Routing
* Parsing request body
* File persistence
* REST principles

---

### 🔟 Bonus – Build with Express

Install:

```bash
npm init -y
npm install express
```

Create:

* Basic Express server
* Middleware logging
* REST API routes

---

# 🔥 Extra Challenges

* Add environment variables using `process.env`
* Use `dotenv`
* Create a simple logger middleware
* Add timestamps to logs
* Handle invalid input properly
* Structure project with folders (`routes`, `controllers`)

---

If you tell me:

* 👉 Are you a complete beginner?
* 👉 Or already know JavaScript well?

I can create a **7-day structured practice plan** just for you 🚀
