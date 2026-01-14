const teamMembers = [
    { name: "Aman Kesari", role: "Technical Lead", category: "hardware", photo: "images/team/t7 tech lead.jpg" },
    { name: "Aryansh Gupta", role: "Technical Lead", category: "hardware", photo: "images/team/t8 tech lead.jpg" },
    { name: "Ankur Narayan Singh", role: "Project Management Lead", category: "software", photo: "images/team/t9 project management.jpg" },
    { name: "Ritik Jha", role: "Project Management Lead", category: "software", photo: "images/team/t10 project management.jpg" },
    { name: "Suraj Kumar", role: "Graphics and Design Lead", category: "design", photo: "images/team/t11 graphic.jpg" },
    { name: "Anjali Raj", role: "Graphics and Design Lead", category: "design", photo: "images/team/t12 graphics.jpg" },
    { name: "Lipi Aditi", role: "Web Lead", category: "software", photo: "images/team/t13 web lead.jpg" },
    { name: "Nandani Kumari", role: "PR and Promotions Lead", category: "ai", photo: "images/team/t14 pr lead.jpg" },
    { name: "Ankit Kumar", role: "Content Lead", category: "ai", photo: "images/team/t15 content lead.jpg" },
    { name: "Shristy Kumari", role: "Content Lead", category: "ai", photo: "images/team/t16 content lead.jpg" },
    { name: "Raja Kumar", role: "Event Management Lead", category: "software", photo: "images/team/t17 event management.jpg" },
    { name: "Shivangi Singh", role: "Member Development Lead", category: "software", photo: "images/team/t18 member dev lead.jpg" },
    { name: "Khushi Verma", role: "3D Modelling and CAD Lead", category: "design", photo: "images/team/t19 3d and cad lead.jpg" },
    { name: "Krishna Kant Verma", role: "Videography and Media Lead", category: "design", photo: "images/team/t20 vid and media lead.jpg" }
];

const teamGrid = document.getElementById('team-grid');
const filterBtns = document.querySelectorAll('.filter-btn');

function displayTeam(category) {
    // Filter logic
    const filtered = category === 'all' 
        ? teamMembers 
        : teamMembers.filter(member => member.category === category);

    // HTML Rendering
    teamGrid.innerHTML = filtered.map(member => `
        <div class="member-card">
            <div class="member-img">
                <img src="${member.photo}" alt="${member.name}">
            </div>
            <div class="member-info">
                <h3>${member.name}</h3>
                <p>${member.role}</p>
            </div>
        </div>
    `).join('');
}

// Button Click Event
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Active button change karein
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');

        // Filtering trigger karein
        const filterValue = btn.getAttribute('data-filter');
        displayTeam(filterValue);
    });
});

// Initial Load (Default: All)
displayTeam('all');