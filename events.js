// Edit the sample content below to show your real scouting events, newsletters and documents.
const events = [
  { title: "Scouts Leadership Training", category: "training", date: "2026-12-12", place: "Community Scout Centre", description: "A practical session on teamwork, leadership and planning scouting activities.", icon: "✦" },
  { title: "Outdoor Camping Weekend", category: "camping", date: "2026-12-19", place: "Green Hills Campsite", description: "Build outdoor skills, practise camping safely and enjoy activities together.", icon: "⌂" },
  { title: "Community Clean-up Day", category: "community", date: "2027-01-09", place: "Town Community Grounds", description: "Join fellow scouts in a community service and environmental clean-up activity.", icon: "♧" }
];

const news = [
  { title: "Our Scouting Month in Review", date: "November 2026", description: "Highlights, achievements and memorable moments from our scouting community.", file: "documents/news-november.pdf" },
  { title: "Preparing for Outdoor Adventure", date: "October 2026", description: "Helpful reminders and preparation tips for upcoming outdoor activities.", file: "documents/news-october.pdf" },
  { title: "Community Service Highlights", date: "September 2026", description: "Read about recent service projects and how scouts made a difference.", file: "documents/news-september.pdf" }
];

const documents = [
  { title: "Current active members", category: "membership", type: "docx", details: "Current active members Document", file: "documents/CURRENT ACTIVE MEMBERS.docx" },
  { title: "Crew constitution", category: "administration", type: "docx", details: " Scouts constitution", file: "documents/chuka crew constitution.docx" },
  { title: "KSA shop price list 2024", category: "administration", type: "PDF", details: "KSA Scouts shop price list 2024-1", file: "documents/KSA SCOUTS SHOP PRICE LIST 2024-1.docx" },
  { title: "Rover Scouts Semester Calendar", category: "administration", type: "DOCX", details: "Calendar for a Semister", file: "documents/Rover Scouts Semester Calendar 2026 (AutoRecovered).docx" },
  { title: "Rovers REG form-2025", category: "membership", type: "PDF", details: "Registration form", file: "documents/ROVERS REG FORM-2025.pdf" }
];

const eventsGrid = document.getElementById("eventsGrid");
const newsGrid = document.getElementById("newsGrid");
const documentsList = document.getElementById("documentsList");
let activeEventFilter = "all";

function formatDate(dateString) {
  return new Date(`${dateString}T00:00:00`).toLocaleDateString(undefined, {
    day: "numeric", month: "short", year: "numeric"
  });
}

function renderEvents() {
  const term = document.getElementById("eventSearch").value.trim().toLowerCase();
  const filtered = events.filter(event =>
    (activeEventFilter === "all" || event.category === activeEventFilter) &&
    `${event.title} ${event.description} ${event.place}`.toLowerCase().includes(term)
  );
  eventsGrid.innerHTML = filtered.map(event => `
    <article class="card">
      <div class="card-image" aria-hidden="true"></div>
      <div class="card-body">
        <span class="tag">${event.category === "community" ? "Community service" : event.category}</span>
        <h3>${escapeHTML(event.title)}</h3>
        <p>${escapeHTML(event.description)}</p>
        <div class="card-meta">${formatDate(event.date)} · ${escapeHTML(event.place)}</div>
      </div>
    </article>`).join("");
  document.getElementById("eventsEmpty").classList.toggle("hidden", filtered.length !== 0);
}

function renderNewsletters() {
  const term = document.getElementById("newsSearch").value.trim().toLowerCase();
  const filtered = news.filter(item =>
    `${item.title} ${item.description} ${item.date}`.toLowerCase().includes(term)
  );
  newsGrid.innerHTML = filtered.map(item => `
    <article class="card">
      <div class="card-image" aria-hidden="true"></div>
      <div class="card-body">
        <span class="tag">News</span>
        <h3>${escapeHTML(item.title)}</h3>
        <p>${escapeHTML(item.description)}</p>
        <div class="card-meta">${escapeHTML(item.date)}</div>
       
      </div>
    </article>`).join("");
  document.getElementById("newsEmpty").classList.toggle("hidden", filtered.length !== 0);
}

function renderDocuments() {
  const term = document.getElementById("docSearch").value.trim().toLowerCase();
  const category = document.getElementById("docCategory").value;
  const filtered = documents.filter(doc =>
    (category === "all" || doc.category === category) &&
    `${doc.title} ${doc.details} ${doc.category}`.toLowerCase().includes(term)
  );
  documentsList.innerHTML = filtered.map(doc => `
    <div class="document-row">
      <div class="file-icon" aria-hidden="true">${escapeHTML(doc.type)}</div>
      <div class="document-info">
        <strong>${escapeHTML(doc.title)}</strong>
        <span>${escapeHTML(doc.details)} · ${escapeHTML(doc.category)}</span>
      </div>
      <a class="download-btn" href="${escapeAttribute(doc.file)}" download>Download ↓</a>
    </div>`).join("");
  document.getElementById("docsEmpty").classList.toggle("hidden", filtered.length !== 0);
}

// Escape text before inserting editable content into HTML.
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}
function escapeAttribute(value) { return escapeHTML(value); }

document.getElementById("eventSearch").addEventListener("input", renderEvents);
document.getElementById("newsSearch").addEventListener("input", renderNewsletters);
document.getElementById("docSearch").addEventListener("input", renderDocuments);
document.getElementById("docCategory").addEventListener("change", renderDocuments);

document.getElementById("eventFilters").addEventListener("click", event => {
  const button = event.target.closest("button[data-filter]");
  if (!button) return;
  activeEventFilter = button.dataset.filter;
  document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.toggle("active", btn === button));
  renderEvents();
});


const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();
renderEvents();
renderNewsletters();
renderDocuments();
