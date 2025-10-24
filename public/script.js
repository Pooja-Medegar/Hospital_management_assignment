const tbody = document.getElementById("patients");
const nameEl = document.getElementById("name");
const ageEl = document.getElementById("age");
const illnessEl = document.getElementById("illness");
const addBtn = document.getElementById("add");

async function load() {
  const res = await fetch("/api/patients");
  const data = await res.json();
  tbody.innerHTML = data.length
    ? data.map(p => `
        <tr>
          <td>${p.id}</td>
          <td>${p.name}</td>
          <td>${p.age}</td>
          <td>${p.illness}</td>
          <td><button class="delete" onclick="del(${p.id})">Delete</button></td>
        </tr>
      `).join("")
    : `<tr><td colspan="5">No patients found</td></tr>`;
}

addBtn.onclick = async () => {
  const name = nameEl.value.trim(), age = ageEl.value.trim(), illness = illnessEl.value.trim();
  if (!name || !age || !illness) return alert("Please fill all fields!");
  await fetch("/api/patients", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ name, age, illness })
  });
  nameEl.value = ageEl.value = illnessEl.value = "";
  load();
};

async function del(id) {
  await fetch("/api/patients/" + id, { method: "DELETE" });
  load();
}

load();
