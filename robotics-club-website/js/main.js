const teamMembers = [
    { fullName: "Darshan Jain", role: "President", photo: "images/team/t1.jpg" },
    { fullName: "Deepu Kumar Gupta", role: "Captain", photo: "images/team/t2 captain.jpg" },
    { fullName: "Kapish Varshney", role: "Vice Captain", photo: "images/team/t3 vice captain.jpg" },
    { fullName: "Rathod Niharika", role: "Secretary", photo: "images/team/t4 secretary.jpg" },
    { fullName: "Amit Kumar Singh", role: "Treasurer", photo: "images/team/t5.jpg" },
    { fullName: "Vimlesh Meena", role: "Joint Secretary", photo: "images/team/t6 joint secretary.jpg" },
    { fullName: "Aman Kesari", role: "Technical Lead", photo: "images/team/t7 tech lead.jpg" },
    { fullName: "Aryansh Gupta", role: "Technical Lead", photo: "images/team/t8 tech lead.jpg" },
    { fullName: "Ankur Narayan Singh", role: "Project Management Lead", photo: "images/team/t9 project management.jpg" },
    { fullName: "Ritik Jha", role: "Project Management Lead", photo: "images/team/t10 project management.jpg" },
    { fullName: "Suraj Kumar", role: "Graphics and Design Lead", photo: "images/team/t11 graphic.jpg" },
    { fullName: "Anjali Raj", role: "Graphics and Design Lead", photo: "images/team/t12 graphics.jpg" },
    { fullName: "Lipi Aditi", role: "Web Lead", photo: "images/team/t13 web lead.jpg" },
    { fullName: "Nandani Kumari", role: "PR and Promotions Lead", photo: "images/team/t14 pr lead.jpg" },
    { fullName: "Ankit Kumar", role: "Content Lead", photo: "images/team/t15 content lead.jpg" },
    { fullName: "Shristy Kumari", role: "Content Lead", photo: "images/team/t16 content lead.jpg" },
    { fullName: "Raja Kumar", role: "Event Management Lead", photo: "images/team/t17 event management.jpg" },
    { fullName: "Shivangi Singh", role: "Member Development Lead", photo: "images/team/t18 member dev lead.jpg" },
    { fullName: "Khushi Verma", role: "3D Modelling and CAD Lead", photo: "images/team/t19 3d and cad lead.jpg" },
    { fullName: "Krishna Kant Verma", role: "Videography and Media Lead", photo: "images/team/t20 vid and media lead.jpg" }
];

const container = document.getElementById('team-container');

teamMembers.forEach(member => {
    container.innerHTML += `
        <div class="member-card">
            <h2 class="member-name">${member.fullName}</h2>
            <p class="member-role">${member.role}</p>
            <div class="image-container">
                <img src="${member.photo}" alt="${member.fullName}">
            </div>
        </div>
    `;
});