const http = require("http"), fs = require("fs"), path = require("path");
const PORT = 3000, FILE = "patients.json";
const read = () => fs.existsSync(FILE) ? JSON.parse(fs.readFileSync(FILE)) : [];
const write = d => fs.writeFileSync(FILE, JSON.stringify(d, null, 2));

http.createServer((req, res) => {
  const send = (t, d, c=200) => { res.writeHead(c, {"Content-Type": t}); res.end(d); };
  if (req.url === "/" && req.method === "GET")
    return send("text/html", fs.readFileSync("public/index.html"));
  if (req.url === "/style.css") 
    return send("text/css", fs.readFileSync("public/style.css"));
  if (req.url === "/script.js")
    return send("text/javascript", fs.readFileSync("public/script.js"));

  if (req.url === "/api/patients" && req.method === "GET")
    return send("application/json", JSON.stringify(read()));

  if (req.url === "/api/patients" && req.method === "POST") {
    let b=""; req.on("data", c=>b+=c); req.on("end", ()=>{
      const list=read(), p=JSON.parse(b);
      p.id=list.length?list[list.length-1].id+1:1;
      list.push(p); write(list);
      send("application/json", JSON.stringify(p));
    }); return;
  }

  if (req.url.startsWith("/api/patients/") && req.method === "DELETE") {
    const id=+req.url.split("/").pop(); write(read().filter(p=>p.id!==id));
    return send("text/plain","Deleted");
  }

  send("text/plain","Not Found",404);
}).listen(PORT,()=>console.log(`✅ Server running at http://localhost:${PORT}`));
