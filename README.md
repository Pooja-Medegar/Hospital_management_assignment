# Hospital_management_assignment
##  Description
A simple **Hospital Management System** built using **Node.js**, **HTML**, **CSS**, and **JavaScript**.  
You can **add**, **view**, and **delete** patient records (Name, Age, Illness).  
All data is stored locally in `patients.json`. The frontend uses **Fetch API** for real-time updates.

---

##  Frontend
- Built with **HTML, CSS, and JavaScript**
- Lets you add new patients
- Displays a dynamic table with delete option
- Uses **DOM manipulation** and **AJAX (Fetch API)**  

**Folder Structure**
public/
├── index.html
├── style.css
└── script.js

---

##  Backend
- Created using **core Node.js modules** (`http`, `fs`, `path`)
- Handles routes:
  - `GET /api/patients` → Get all patients  
  - `POST /api/patients` → Add a new patient  
  - `DELETE /api/patients/:id` → Delete patient by ID  
- Saves data to `patients.json`

**File:** `server.js` (~30 lines)

---

# 🛠️ Installation & Setup
## Clone the repository
git clone https://github.com/<your-username>/hospital-management.git

## Navigate to project folder
cd hospital-management

## Run the server
node server.js

##  Author
**Pooja M**  
Basic Node.js CRUD project using Fetch API and DOM manipulation.

