
/* =========================================
   LEADERSHIP PROFILE INFORMATION
========================================= */

const leaders = {

    gedion: {
        name: "Gedion Ongeri",
        role: "Rovermate 1",
        description: "Supports the overall leadership of the scouting crew, helping guide members and coordinate club activities."
    },

    benita: {
        name: "Benita Njeri",
        role: "Rovermate 2",
        description: "Works alongside the Rovermate 1 in supporting the leadership team and promoting active participation among members."
    },

    stacey: {
        name: "Stacey Lugallah",
        role: "Treasurer",
        description: "Oversees the club's financial records, supports budgeting and promotes accountability in the management of funds."
    },

    brian: {
        name: "Brian Omukuba",
        role: "Secretary",
        description: "Maintains official club records, documents meetings and supports effective communication and administration."
    },

    austine: {
        name: "Austine Okumu",
        role: "Organising Secretary",
        description: "Supports the planning, coordination and organisation of club meetings, events and activities."
    },

    fais: {
        name: "Fais",
        role: "Assistant Secretary",
        description: "Assists with record keeping, meeting documentation and other administrative responsibilities."
    },

    susan: {
        name: "Susan",
        role: "Assistant Organising Secretary",
        description: "Assists in coordinating club activities, preparing events and supporting the Organising Secretary."
    },

    natasha: {
        name: "Natasha",
        role: "Female Special Member",
        description: "Contributes to female representation and participation in the club's leadership activities."
    },

    mwangemi: {
        name: "Mwangemi Brian",
        role: "Male Special Member",
        description: "Contributes to male representation and participation in the club's leadership activities."
    },

    leiton: {
        name: "Leiton Ochieng",
        role: "Board of Trustees",
        description: "Contributes to oversight, guidance and continuity within the scouting crew as a member of the Board of Trustees."
    },

    bonface: {
        name: "Bonface Juma",
        role: "Board of Trustees",
        description: "Supports the club through guidance, accountability and institutional oversight as a member of the Board of Trustees."
    },

    gloria: {
        name: "Gloria",
        role: "Board of Trustees",
        description: "Helps provide guidance and support for the club's long-term development as a member of the Board of Trustees."
    }

};


/* Remember the button that opened the popup */
let lastFocusedElement = null;


/* OPEN A LEADER'S PROFILE */
function showProfile(leaderId) {

    const leader = leaders[leaderId];
    const modal = document.getElementById("profileModal");

    if (!leader || !modal) {
        console.error("Leader profile or profile popup not found:", leaderId);
        return;
    }

    lastFocusedElement = document.activeElement;

    document.getElementById("profileName").textContent = leader.name;
    document.getElementById("profileRole").textContent = leader.role;
    document.getElementById("profileDescription").textContent = leader.description;

    modal.style.display = "flex";
    modal.setAttribute("aria-hidden", "false");

    document.body.classList.add("modal-open");

    const closeButton = modal.querySelector(".close-btn");

    if (closeButton) {
        closeButton.focus();
    }
}


/* CLOSE THE PROFILE POPUP */
function closeProfile() {

    const modal = document.getElementById("profileModal");

    if (!modal) return;

    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");

    document.body.classList.remove("modal-open");

    if (lastFocusedElement) {
        lastFocusedElement.focus();
        lastFocusedElement = null;
    }
}


/* MAKE FUNCTIONS AVAILABLE TO HTML BUTTONS */
window.showProfile = showProfile;
window.closeProfile = closeProfile;


/* PAGE SETUP */
document.addEventListener("DOMContentLoaded", function () {

    const modal = document.getElementById("profileModal");
    const yearElement = document.getElementById("year");

    /* Automatically update the copyright year */
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    if (!modal) return;

    /* Close popup when clicking outside the content */
    modal.addEventListener("click", function (event) {

        if (event.target === modal) {
            closeProfile();
        }

    });

    /* Close popup using Escape key */
    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape" && modal.style.display === "flex") {
            closeProfile();
        }

    });

});
