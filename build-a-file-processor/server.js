const fs = require("fs");
// fs.appendFileSync("assets/output.txt", "\nSecond Line" )
// const exists = fs.existsSync("assets/output.txt")
// console.log(exists);

// const entries = fs.readdirSync("assets");
// console.log(entries);

// const buf = Buffer.from("Hello, Node!");
// console.log(buf);
// console.log(buf.toString("hex"));
// console.log(buf.toString("base64"));

// const buf2 = Buffer.alloc(8, 0xff);
// console.log(buf2)

// const decoded = Buffer.from("ZnJlZUNvZGVDYW1w", "base64").toString("utf8");
// console.log(decoded);

// const crypto = require("crypto");
// const hash = crypto.createHash("sha256").update("freeCodeCamp!").digest("hex");
// console.log(hash);

// const random = crypto.randomBytes(16).toString("hex");
// console.log(random);

// const id = crypto.randomUUID();
// console.log(id)


// const os = require("os");
// console.log(os.platform())
// console.log(os.arch());
// console.log(os.hostname());
// console.log(os.totalmem());
// console.log(os.freemem());
// console.log(os.uptime());
// console.log(os.cpus().length);


const path = require("path");
const filePath = path.join(__dirname, "assets", "poem.txt");
// console.log(filePath)
// console.log(path.basename(filePath));
// console.log(path.dirname(filePath));
// console.log(path.extname(filePath))

// const filePath1 = path.join("assets", "..", "server.js");
// const filePath2 = path.resolve("assets", "..", "server.js");
// console.log(filePath1)
// console.log(filePath2)

// const parts = path.parse(filePath);
// console.log(parts);
// console.log(process.argv)

// process.stdout.write("Hello from stdout\n ")
// process.stdout.write("World \n");
// process.stderr.write("Something went wrong")

// const readable = fs.createReadStream("assets/poem.txt", {encoding: "utf8"});

// readable.on("data", (chunk)=> {
//     console.log(chunk);

// })
// readable.on("end", ()=>{
//     console.log("reading finished");
// })

// const writeable = fs.createWriteStream("assets/stream-output.txt");
// writeable.write("First chunk\n");
// writeable.write("second chunk ni halam");
// writeable.end()

const readable = fs.createReadStream("assets/poem.txt");
const writable = fs.createWriteStream("assets/stream-output.txt");
readable.pipe(writable)
