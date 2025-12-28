document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle (Simplified for now)
    /*const navLinks = document.querySelector('.nav-links');
    const hamburger = document.createElement('div');
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    hamburger.className = 'hamburger';*/

    const hamburger = document.querySelector('.hamburger'); // Selects the div from your HTML
    const navLinks = document.querySelector('.nav-links');  // Selects your menu list

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            // Toggles the 'active' class on the menu
            navLinks.classList.toggle('active');
            
            // Optional: Toggle an 'open' class on hamburger for animations
            hamburger.classList.toggle('open');
});
    }
    
    // 2. Active Page Highlighter
    const currentPage = window.location.pathname.split("/").pop();
    document.querySelectorAll('.nav-links a').forEach(link => {
        if(link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // 3. Realistic Scroll Reveal
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.style.padding = "0.7rem 5%";
            nav.style.background = "rgba(2, 6, 23, 0.95)";
        } else {
            nav.style.padding = "1rem 5%";
            nav.style.background = "var(--glass)";
        }
    });
});
/*about */
document.addEventListener('DOMContentLoaded', () => {
    // Reveal animation on scroll for timeline items
    const observerOptions = { threshold: 0.2 };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.timeline-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = '0.6s ease-out';
        observer.observe(item);
    });
});
//project
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.project-card');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Active button class
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            cards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    setTimeout(() => card.style.opacity = '1', 10);
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => card.style.display = 'none', 300);
                }
            });
        });
    });
});
const projectData = {
    project1: {
        title: "Autonomous Hexacopter",
        desc: "Detailed information about the hexacopter including flight control systems and the integration of ROS for mapping.",
        team: "Siddharth (Lead), Rahul, Priya",
        tech: "ROS, Arduino, Python, Lidar"
    },
    project2: {
        title: "Gesture Controlled Bot",
        desc: "This bot uses a camera feed to interpret hand signals and translate them into movement commands.",
        team: "Amit, Sneha",
        tech: "OpenCV, Raspberry Pi, Python"
    }
};

function openModal(id) {
    const modal = document.getElementById('projectModal');
    const body = document.getElementById('modalBody');
    const data = projectData[id];

    body.innerHTML = `
        <h2 class="orbitron-text">${data.title}</h2>
        <p style="margin: 20px 0;">${data.desc}</p>
        <p><strong>Team Members:</strong> ${data.team}</p>
        <p><strong>Technologies:</strong> ${data.tech}</p>
    `;
    
    modal.style.display = "block";
}

document.querySelector('.close-modal').onclick = () => {
    document.getElementById('projectModal').style.display = "none";
};

window.onclick = (event) => {
    if (event.target == document.getElementById('projectModal')) {
        document.getElementById('projectModal').style.display = "none";
    }
};

//achievements
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    const speed = 200;

    const startCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target + "+";
                }
            };
            updateCount();
        });
    };

    // Trigger animation when section is visible
    const observer = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting) {
            startCounters();
        }
    }, { threshold: 0.5 });

    observer.observe(document.querySelector('.stats-bar'));
});

//contact
function handleFormSubmit(event) {
    event.preventDefault();
    const feedback = document.getElementById('formFeedback');
    const btn = document.querySelector('.submit-btn');
    
    // Simulate pulse animation during sending
    btn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
    btn.style.opacity = '0.7';

    setTimeout(() => {
        feedback.style.color = '#4ade80';
        feedback.innerText = 'Transmission Successful! Our bots will get back to you soon.';
        btn.innerHTML = 'Sent! <i class="fas fa-check"></i>';
        btn.style.background = '#4ade80';
        document.getElementById('contactForm').reset();
    }, 1500);

    return false;
}