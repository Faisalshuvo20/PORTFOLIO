
// ============================================
// FAISAL SHUVA CYBERSECURITY PORTFOLIO
// JavaScript: Projects, Gallery, Navigation
// ============================================

// Edit these entries to add your own photos.
const galleryPhotos = [
  {
    src: "images/photo1.jpg",
    title: "My Cybersecurity Journey",
    caption: "A personal moment from my learning journey."
  },
  {
    src: "images/photo2.jpg",
    title: "Linux Lab Practice",
    caption: "Hands-on Linux and command-line learning."
  },
  {
    src: "images/photo3.jpg",
    title: "Coding Workspace",
    caption: "Working on programming and development projects."
  },
  {
    src: "images/photo4.jpg",
    title: "CTF Practice",
    caption: "Exploring controlled cybersecurity challenges."
  },
  {
    src: "images/photo5.jpg",
    title: "Project Development",
    caption: "Building and testing software projects."
  },
  {
    src: "images/photo6.jpg",
    title: "Learning Notes",
    caption: "Documenting practical learning."
  }
];

// Add verified evidence URLs here when available.
// Empty URLs are displayed as pending evidence.

const projects = [
  {
    id: "linux",
    number: "01",
    category: "security",
    type: "SECURITY PRACTICE",
    title: "Linux Security Fundamentals & CTF Challenges",
    summary: "Practical Linux learning and controlled CTF challenges focused on command-line exploration and problem-solving.",
    status: "Ongoing",
    tags: ["Linux", "Bash", "CTF", "Enumeration"],
    why: "I wanted to strengthen my Linux command-line knowledge and learn to solve security challenges systematically.",
    objective: "Practice Linux commands, file permissions, system information gathering, basic networking and CTF-style challenges.",
    tools: [
      "Linux terminal",
      "Bash",
      "Linux command-line utilities",
      "CTF lab environment"
    ],
    work: [
      "Practiced Linux navigation and file management.",
      "Explored directory structures and hidden files.",
      "Examined file metadata and permissions.",
      "Practiced basic system enumeration.",
      "Investigated networking and service information.",
      "Worked through command-line CTF challenges."
    ],
    skills: [
      "Linux fundamentals",
      "File-system navigation",
      "Basic enumeration",
      "Troubleshooting",
      "Analytical problem-solving"
    ],
    outcome: "Developing stronger Linux knowledge and a systematic approach to solving practical security challenges.",
    relevance: "Linux skills support security operations, digital forensics, system administration and authorized security assessments.",
    evidence: [
      { label: "GitHub Repository", url: "" },
      { label: "Screenshots", url: "" },
      { label: "CTF Write-up", url: "" },
      { label: "Technical Notes", url: "" }
    ]
  },

  {
    id: "results",
    number: "02",
    category: "development",
    type: "SOFTWARE DEVELOPMENT",
    title: "Student Result Management System",
    summary: "A browser-based academic result management project featuring class-based records, semesters and automated grading.",
    status: "In development",
    tags: ["HTML", "CSS", "JavaScript", "Browser Storage"],
    why: "I wanted to build a useful application that could simplify academic record management and result calculations.",
    objective: "Develop an organized student result system with an admin dashboard, student information, semester records and automated grade calculations.",
    tools: [
      "HTML",
      "CSS",
      "JavaScript",
      "Browser-based storage",
      "Visual Studio Code"
    ],
    work: [
      "Designed the application structure.",
      "Worked on the administrative dashboard.",
      "Created student information and class organization workflows.",
      "Implemented grade and GPA calculation logic.",
      "Worked on semester-based result handling.",
      "Practiced debugging and responsive interface development."
    ],
    skills: [
      "Frontend development",
      "JavaScript programming",
      "Data management",
      "Application debugging",
      "Logical problem-solving"
    ],
    outcome: "A developing web application and practical experience in frontend logic, data organization and user-interface development.",
    relevance: "Understanding web application architecture helps build foundations for authentication, access control and secure software development.",
    evidence: [
      { label: "GitHub Repository", url: "" },
      { label: "Application Screenshots", url: "" },
      { label: "Live Demo", url: "" },
      { label: "Documentation", url: "" }
    ]
  },

  {
    id: "bash",
    number: "03",
    category: "automation",
    type: "LINUX AUTOMATION",
    title: "Linux Automation & Bash Scripting",
    summary: "Introductory shell scripting projects involving authentication logic, calculators and academic grade calculation.",
    status: "Practical learning",
    tags: ["Bash", "Linux", "Automation", "Shell"],
    why: "I wanted to understand how shell scripts automate repetitive tasks and improve Linux workflow efficiency.",
    objective: "Practice user input, conditional statements, loops, arithmetic and menu-based programming.",
    tools: [
      "Bash",
      "Linux terminal",
      "Shell scripting utilities"
    ],
    work: [
      "Created a basic login-checking exercise.",
      "Built a menu-based calculator.",
      "Developed student grade calculation logic.",
      "Practiced input processing and conditional statements.",
      "Debugged Bash scripts and reviewed program outputs."
    ],
    skills: [
      "Bash scripting",
      "Conditional logic",
      "Loops",
      "Input handling",
      "Basic automation",
      "Debugging"
    ],
    outcome: "Improved confidence in shell scripting and introductory automation. The login script is a programming exercise, not a production authentication solution.",
    relevance: "Bash is useful for automating Linux administration tasks, processing logs and building repeatable cybersecurity workflows.",
    evidence: [
      { label: "Source Code", url: "" },
      { label: "Terminal Screenshots", url: "" },
      { label: "Example Output", url: "" },
      { label: "GitHub Repository", url: "" }
    ]
  },

  {
    id: "recon",
    number: "04",
    category: "security",
    type: "OFFENSIVE SECURITY",
    title: "Web Reconnaissance & Bug Bounty Learning",
    summary: "Foundational web reconnaissance and responsible security research using Linux and command-line tools.",
    status: "Ongoing learning",
    tags: ["Kali Linux", "Docker", "Subfinder", "httpx", "DNS"],
    why: "I wanted to understand how security researchers investigate web environments and approach vulnerability research responsibly.",
    objective: "Learn web reconnaissance workflows using authorized labs and in-scope testing activities.",
    tools: [
      "Kali Linux",
      "Docker",
      "Subfinder",
      "httpx",
      "nslookup",
      "Linux terminal"
    ],
    work: [
      "Studied bug bounty programs and responsible disclosure.",
      "Practiced DNS lookup concepts.",
      "Explored subdomain discovery.",
      "Studied web reconnaissance workflows.",
      "Practiced running tools in Linux and Docker environments.",
      "Learned the importance of scope and documentation."
    ],
    skills: [
      "Reconnaissance fundamentals",
      "DNS concepts",
      "Web technology discovery",
      "Security tool usage",
      "Responsible research"
    ],
    outcome: "Developing foundational web security knowledge. No confirmed vulnerability discoveries or bug bounty rewards are claimed.",
    relevance: "Reconnaissance methodology supports authorized penetration testing, security assessment and defensive asset awareness.",
    evidence: [
      { label: "Authorized Lab Screenshots", url: "" },
      { label: "Workflow Documentation", url: "" },
      { label: "Learning Notes", url: "" },
      { label: "GitHub Repository", url: "" }
    ]
  }
];

// ============================================
// SAFE HTML OUTPUT
// ============================================

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[character]));
}

function createList(items) {
  return `<ul>${items.map(item =>
    `<li>${escapeHTML(item)}</li>`
  ).join("")}</ul>`;
}

// ============================================
// PROJECT CARDS
// ============================================

const projectsGrid = document.getElementById("projectsGrid");

function renderProjects(filter = "all") {
  const filtered = projects.filter(project =>
    filter === "all" || project.category === filter
  );

  projectsGrid.innerHTML = filtered.map(project => `
    <article class="project-card">
      <div class="project-top">
        <span class="project-number">/ ${project.number}</span>
        <span class="project-category">
          ${escapeHTML(project.type)}
        </span>
      </div>

      <h3>${escapeHTML(project.title)}</h3>
      <p>${escapeHTML(project.summary)}</p>

      <div class="tags">
        ${project.tags.map(tag =>
          `<span class="tag">${escapeHTML(tag)}</span>`
        ).join("")}
      </div>

      <div class="project-footer">
        <small>${escapeHTML(project.status)}</small>
        <button type="button" data-project="${project.id}">
          View Case Study ↗
        </button>
      </div>
    </article>
  `).join("");
}

// Project filters
document.querySelectorAll(".filter-btn").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(item => {
      item.classList.remove("active");
      item.setAttribute("aria-pressed", "false");
    });

    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");

    renderProjects(button.dataset.filter);
  });
});

// ============================================
// PROJECT DETAILS MODAL
// ============================================

const projectModal = document.getElementById("projectModal");
const projectDetails = document.getElementById("projectDetails");
const closeProjectButton = document.getElementById("closeProject");

let lastProjectButton = null;

function detailSection(title, content) {
  return `
    <section class="detail-section">
      <h3>${title}</h3>
      ${content}
    </section>
  `;
}

function openProject(id, trigger) {
  const project = projects.find(item => item.id === id);
  if (!project) return;

  lastProjectButton = trigger;

  projectDetails.innerHTML = `
    <h2>${escapeHTML(project.title)}</h2>

    <p class="modal-summary">
      ${escapeHTML(project.summary)}
    </p>

    <div class="tags modal-tags">
      ${project.tags.map(tag =>
        `<span class="tag">${escapeHTML(tag)}</span>`
      ).join("")}
    </div>

    <div class="details-grid">
      ${detailSection(
        "What is the project?",
        `<p>${escapeHTML(project.summary)}</p>`
      )}

      ${detailSection(
        "Why I started",
        `<p>${escapeHTML(project.why)}</p>`
      )}

      ${detailSection(
        "Objective",
        `<p>${escapeHTML(project.objective)}</p>`
      )}

      ${detailSection(
        "Tools & Technologies",
        createList(project.tools)
      )}

      ${detailSection(
        "What I Actually Did",
        createList(project.work)
      )}

      ${detailSection(
        "Skills Developed",
        createList(project.skills)
      )}

      ${detailSection(
        "Outcome",
        `<p>${escapeHTML(project.outcome)}</p>`
      )}

      ${detailSection(
        "Real-world Relevance",
        `<p>${escapeHTML(project.relevance)}</p>`
      )}
    </div>

    <div class="evidence-section">
      <h3>Project Evidence</h3>

      <div class="evidence-grid">
        ${project.evidence.map(item => {
          if (item.url) {
            const url = String(item.url).trim();
            if (/^https:\/\//i.test(url)) {
              return `
                <a class="evidence-link"
                   href="${escapeHTML(url)}"
                   target="_blank"
                   rel="noopener noreferrer">
                  ${escapeHTML(item.label)} ↗
                </a>
              `;
            }
          }

          return `
            <span class="evidence-pending">
              ${escapeHTML(item.label)} — Pending
            </span>
          `;
        }).join("")}
      </div>

      <p class="evidence-note">
        Evidence placeholders are not clickable until
        verified links are added to script.js.
      </p>
    </div>
  `;

  projectModal.showModal();
  document.body.classList.add("modal-open");
  closeProjectButton.focus();
}

projectsGrid.addEventListener("click", event => {
  const button = event.target.closest("[data-project]");

  if (button) {
    openProject(button.dataset.project, button);
  }
});

function closeProjectModal() {
  projectModal.close();
}

closeProjectButton.addEventListener("click", closeProjectModal);

projectModal.addEventListener("click", event => {
  if (event.target === projectModal) closeProjectModal();
});

projectModal.addEventListener("close", () => {
  document.body.classList.remove("modal-open");
  lastProjectButton?.focus();
});

// ============================================
// PHOTO GALLERY
// ============================================

const galleryGrid = document.getElementById("galleryGrid");
const galleryModal = document.getElementById("galleryModal");
const galleryModalImage = document.getElementById("galleryModalImage");
const galleryModalTitle = document.getElementById("galleryModalTitle");
const galleryModalCaption = document.getElementById("galleryModalCaption");
const galleryCounter = document.getElementById("galleryCounter");
const viewAllButton = document.getElementById("viewAllGallery");

let showAllPhotos = false;
let currentPhoto = 0;
let lastGalleryButton = null;

// Gallery cards
function renderGallery() {
  const visiblePhotos = showAllPhotos
    ? galleryPhotos
    : galleryPhotos.slice(0, 6);

  galleryGrid.innerHTML = visiblePhotos.map((photo, index) => `
    <button class="gallery-item" type="button"
      data-photo="${index}"
      aria-label="View ${escapeHTML(photo.title)}">

      <div class="gallery-placeholder">
        <span>▧</span>
        <small>ADD PHOTO</small>
      </div>

      <img
        src="${escapeHTML(photo.src)}"
        alt="${escapeHTML(photo.title)}"
        loading="lazy"
        hidden
      >

      <div class="gallery-label">
        ${escapeHTML(photo.title)}
      </div>
    </button>
  `).join("");

  // Show photos only if their files exist
  galleryGrid.querySelectorAll(".gallery-item").forEach(card => {
    const img = card.querySelector("img");
    const placeholder = card.querySelector(".gallery-placeholder");

    img.onload = () => {
      img.hidden = false;
      placeholder.style.display = "none";
    };

    img.onerror = () => {
      img.hidden = true;
      placeholder.style.display = "flex";
    };

    if (img.complete && img.naturalWidth > 0) {
      img.onload();
    }
  });

  viewAllButton.textContent = showAllPhotos
    ? "Show Less ↑"
    : "View Full Gallery ↗";

  viewAllButton.hidden = galleryPhotos.length <= 6;
}

// Open gallery image
function openGallery(index, trigger) {
  currentPhoto = index;
  lastGalleryButton = trigger;
  updateGalleryModal();
  galleryModal.showModal();
  document.body.classList.add("modal-open");
}

function updateGalleryModal() {
  const photo = galleryPhotos[currentPhoto];

  galleryModalImage.src = photo.src;
  galleryModalImage.alt = photo.title;
  galleryModalTitle.textContent = photo.title;
  galleryModalCaption.textContent = photo.caption;

  galleryCounter.textContent =
    `${currentPhoto + 1} / ${galleryPhotos.length}`;

  galleryModalImage.onerror = () => {
    galleryModalImage.alt = "Photo file not found. Add the image to the images folder.";
  };
}

galleryGrid.addEventListener("click", event => {
  const button = event.target.closest("[data-photo]");

  if (button) {
    const index = Number(button.dataset.photo);
    const img = button.querySelector("img");

    if (img.naturalWidth > 0) {
      openGallery(index, button);
    }
  }
});

// View full gallery
viewAllButton.addEventListener("click", () => {
  showAllPhotos = !showAllPhotos;
  renderGallery();
});

// Next image
document.getElementById("nextPhoto").addEventListener("click", () => {
  currentPhoto = (currentPhoto + 1) % galleryPhotos.length;
  updateGalleryModal();
});

// Previous image
document.getElementById("previousPhoto").addEventListener("click", () => {
  currentPhoto =
    (currentPhoto - 1 + galleryPhotos.length) % galleryPhotos.length;

  updateGalleryModal();
});

// Close gallery
document.getElementById("closeGallery").addEventListener("click", () => {
  galleryModal.close();
});

galleryModal.addEventListener("click", event => {
  if (event.target === galleryModal) galleryModal.close();
});

galleryModal.addEventListener("close", () => {
  document.body.classList.remove("modal-open");
  lastGalleryButton?.focus();
});

// Keyboard controls for gallery
document.addEventListener("keydown", event => {
  if (!galleryModal.open) return;

  if (event.key === "ArrowRight") {
    currentPhoto = (currentPhoto + 1) % galleryPhotos.length;
    updateGalleryModal();
  }

  if (event.key === "ArrowLeft") {
    currentPhoto =
      (currentPhoto - 1 + galleryPhotos.length) % galleryPhotos.length;
    updateGalleryModal();
  }
});

// ============================================
// PROFILE PHOTO
// ============================================

const profileImage = document.getElementById("profileImage");
const profilePlaceholder = document.getElementById("profilePlaceholder");

profileImage.onload = () => {
  profileImage.style.display = "block";
  profilePlaceholder.style.display = "none";
};

profileImage.onerror = () => {
  profileImage.style.display = "none";
  profilePlaceholder.style.display = "flex";
};

if (profileImage.complete && profileImage.naturalWidth > 0) {
  profileImage.onload();
}

// ============================================
// MOBILE NAVIGATION
// ============================================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// ============================================
// FOOTER & INITIALIZATION
// ============================================

document.getElementById("year").textContent =
  new Date().getFullYear();

renderProjects();
renderGallery();
