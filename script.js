// --- Main JavaScript for Interactivity ---

// 1. Navbar Toggle for Mobile
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

// 2. Active Link on Scroll & Close Navbar
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

// 3. ScrollReveal Animations (More Luxurious)
const sr = ScrollReveal({
    distance: '60px',
    duration: 1200, // Faster animation
    delay: 200,
});

sr.reveal('.home-content', { origin: 'top' });
sr.reveal('.heading, .sub-heading', { origin: 'top', interval: 100 });
sr.reveal('.about-img-container', { origin: 'bottom', distance: '100px', opacity: 0 });
sr.reveal('.about-text', { origin: 'bottom', distance: '100px', delay: 400 });

sr.reveal('.timeline-item', {
    origin: 'bottom',
    interval: 250,
    opacity: 0,
    scale: 0.9
});

sr.reveal('.portfolio-box, .skill-category, .gallery-item', {
    origin: 'bottom',
    interval: 150,
    scale: 0.95,
    opacity: 0
});

sr.reveal('.contact form', { origin: 'bottom', scale: 0.9 });


// 4. Typed.js for Hero Subtitle
const typed = new Typed('.typed-text', {
    strings: [
        'UI/UX Designer',
        'Front-end Developer',
        'Graphic Designer',
        'Informatics Engineering Student',
        'Beginner Flutter Developer',
        'Programmer',
        'Core Team Google Developer GOC',
        'Mentor UI/UX',
        'Trainer UI/UX'
    ],
    typeSpeed: 50, // Faster typing
    backSpeed: 50, // Faster deleting
    backDelay: 1000,
    loop: true
});

// 5. Particles.js Configuration (Constellation Network)
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#ffffff" },
        "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" } },
        "opacity": { "value": 0, "random": true }, // Make particles invisible
        "size": { "value": 3, "random": true },
        "line_linked": { "enable": true, "distance": 200, "color": "#00c9ff", "opacity": 0.3, "width": 1 },
        "move": { "enable": true, "speed": 1, "direction": "none", "random": true, "straight": false, "out_mode": "out" }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": false }, "resize": true },
        "modes": {
            "grab": { "distance": 140, "line_linked": { "opacity": 0.7 } }
        }
    },
    "retina_detect": true
});

// 6. Dynamic Content Generation
document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        { id: 1, title: 'UI/UX Design Mobile MotoGP', type: 'Proyek Portofolio', tools: 'Figma', desc: 'Desain UI/UX pertama saya yang dibuat dari konsep pribadi untuk aplikasi informasi MotoGP.', imgSrc: 'img/mgp.png', galleryId: 'gallery-project-1' },
        { id: 2, title: 'UI/UX Kompetisi "ServisKu"', type: 'Kompetisi', tools: 'Figma', desc: 'Desain platform layanan digital untuk membantu publik mengelola dokumen administratif.', imgSrc: 'img/servisku.png', galleryId: 'gallery-project-2' },
        { id: 3, title: 'UI/UX Aplikasi Kesehatan "PeriksaDulu"', type: 'Proyek Portofolio', tools: 'Figma', desc: 'Desain aplikasi kesehatan mobile yang mempermudah akses informasi klinik dan konsultasi dokter.', imgSrc: 'img/health.png', galleryId: 'gallery-project-3' },
        { id: 4, title: 'UI/UX Website Gaya Cyberpunk', type: 'Proyek Latihan', tools: 'Figma', desc: 'Desain website konseptual dengan tema cyberpunk, menekankan estetika futuristik.', imgSrc: 'img/japanese.png', galleryId: 'gallery-project-4' },
        { id: 5, title: 'UI/UX Aplikasi NFT Responsif', type: 'Proyek Latihan', tools: 'Figma', desc: 'Proyek desain UI/UX responsif untuk aplikasi NFT mobile dengan gaya glassmorphism.', imgSrc: 'img/glass.png', galleryId: 'gallery-project-5' },
        { id: 7, title: 'Front-End Website UNESA', type: 'Proyek Latihan', tools: 'HTML, CSS, Tailwind, JS', desc: 'Membangun ulang landing page situs resmi UNESA untuk melatih skill pengembangan web responsif.', imgSrc: 'img/unesa.png', galleryId: 'gallery-project-7' },
        { id: 8, title: 'Front-End Dashboard YouTube', type: 'Proyek Latihan', tools: 'HTML, CSS, Tailwind', desc: 'Membangun ulang antarmuka dashboard YouTube dalam mode gelap untuk meningkatkan skill.', imgSrc: 'img/ytdark.png', galleryId: 'gallery-project-8' },
        { id: 9, title: 'Front-End Landing Page Portofolio', type: 'Proyek Latihan', tools: 'HTML, CSS, Tailwind', desc: 'Proyek pribadi membangun landing page portofolio responsif dari hasil belajar mandiri.', imgSrc: 'img/portfolio.png', galleryId: 'gallery-project-9' },
        { id: 10, title: 'UI/UX Website MotoGP (Desktop)', type: 'Proyek Akademik', tools: 'Figma', desc: 'Mengadaptasi dan memperluas konsep aplikasi mobile MotoGP ke lingkungan desktop.', imgSrc: 'img/mgpd.png', galleryId: 'gallery-project-10' },
        { id: 11, title: 'UI/UX Aplikasi Kesehatan Mental "SoulSafe"', type: 'Kompetisi', tools: 'Figma', desc: 'Desain UI/UX untuk aplikasi kesehatan mental dalam kompetisi PKM, menawarkan pendekatan holistik.', imgSrc: 'img/soulsafe.png', galleryId: 'gallery-project-11' },
        { id: 12, title: 'UI/UX Aplikasi Monitoring Lingkungan "ENVY"', type: 'Kompetisi', tools: 'Figma', desc: 'Desain UI/UX untuk aplikasi monitoring kebersihan lingkungan, memfasilitasi pelaporan sampah.', imgSrc: 'img/envy.png', galleryId: 'gallery-project-12' },
        { id: 13, title: 'UI/UX Glassmorphism "mySkill"', type: 'Proyek Latihan', tools: 'Figma', desc: 'Proyek eksplorasi mandiri untuk menguasai tren desain glassmorphism.', imgSrc: 'img/myskill.png', galleryId: 'gallery-project-13' },
        { id: 14, title: 'UI/UX Replikasi E-Wallet "Gopay"', type: 'Proyek Akademik', tools: 'Figma', desc: 'Mendesain ulang antarmuka aplikasi e-wallet dengan tata letak dan skema warna baru.', imgSrc: 'img/gopay.png', galleryId: 'gallery-project-14' },
        { id: 15, title: 'UI/UX Website Rengganis Robotics Club', type: 'Proyek Berbayar', tools: 'Figma', desc: 'Proyek desain UI/UX untuk website resmi Rengganis Robotics Club, meningkatkan estetika situs.', imgSrc: 'img/rengganis.png', galleryId: 'gallery-project-15' },
        { id: 16, title: 'UI/UX Aplikasi Edukasi "VirtuLab"', type: 'Proyek Akademik', tools: 'Figma', desc: 'Desain UI/UX komprehensif untuk platform pembelajaran interaktif dengan fitur video, kuis, dan lab virtual.', imgSrc: 'img/virtulab.png', galleryId: 'gallery-project-16' },
        { id: 17, title: 'Mobile Dev Aplikasi Edukasi "VirtuLab"', type: 'Proyek Akademik', tools: 'Flutter, Dart, Firebase', desc: 'Mengubah desain UI/UX "VirtuLab" menjadi aplikasi mobile yang fungsional penuh.', imgSrc: 'img/virtulab.png', galleryId: 'gallery-project-17' },
    ];

    const experiences = [
        { date: "Sekarang", sortDate: "2025-12-31", title: "Tim Logistik", org: "Google Cloud Next Extended Surabaya 2025", desc: "", galleryId: "gallery-org-1", imgSrc: "img/gdgcloud.jpg" },
        { date: "Sekarang", sortDate: "2025-12-30", title: "Panitia Divisi Humas", org: "Liga PKM (Program Kreativitas Mahasiswa) Unesa 2025", desc: "", galleryId: "gallery-org-2", imgSrc: "img/ligapkm.jpg" },
        { date: "Sekarang", sortDate: "2025-12-29", title: "Panitia Divisi Perlengkapan", org: "Career Fair Fakultas Teknik 2025", desc: "", galleryId: "gallery-org-3", imgSrc: "https://statik.unesa.ac.id/eksyar/thumbnail/08157ec1-2211-47cd-8826-4b971017d03f.jpg" },
        { date: "Sekarang", sortDate: "2025-12-28", title: "Panitia Divisi Perlengkapan", org: "PKKMB Fakultas Teknik 2025", desc: "", galleryId: "gallery-org-4", imgSrc: "img/pkkmbft.jpeg" },
        { date: "Maret 2025 - Sekarang", sortDate: "2025-12-27", title: "Staff Publication, Documentation, and Design", org: "PKM Center Unesa", desc: "<ul><li>Mendesain konten visual untuk media sosial.</li><li>Menangani dokumentasi acara (foto/video).</li><li>Mengoperasikan OBS untuk produksi visual acara.</li></ul>", galleryId: "gallery-org-8", imgSrc: "img/pkm25.jpg" },
        { date: "November 2024 - Sekarang", sortDate: "2025-12-26", title: "Research and Development Staff (Mentor UI/UX)", org: "Google Developer Group on Campus Unesa", desc: "<ul><li>Merancang jalur pembelajaran UI/UX.</li><li>Menyampaikan tutorial melalui presentasi dan sesi live.</li><li>Membimbing anggota dalam proyek UI/UX nyata.</li></ul>", galleryId: "gallery-org-11", imgSrc: "img/ls4.JPG" },
        { date: "November 2024 - Sekarang", sortDate: "2025-12-25", title: "Staff Research and Development Division", org: "Google Developer Group on Campus Unesa", desc: "<ul><li>Membantu anggota memahami konsep pengembangan.</li><li>Menyelenggarakan workshop dan sesi pelatihan.</li><li>Merancang kompetisi internal.</li></ul>", galleryId: "gallery-org-12", imgSrc: "img/rnd.jpg" },
        { date: "15 Juni 2025", sortDate: "2025-06-15", title: "Event Committee Member", org: "Google DGOC UNESA: “AI x Business”", desc: "<ul><li>Meninjau dan mengelola rundown acara.</li><li>Memantau durasi setiap sesi.</li><li>Berkoordinasi aktif dengan tim acara.</li></ul>", galleryId: "gallery-org-5", imgSrc: "img/es4.jpg" },
        { date: "20 Mei 2025", sortDate: "2025-05-20", title: "Trainer UI/UX Design", org: "Pelatihan di SMKN 1 Surabaya", desc: "<ul><li>Mengembangkan materi pelatihan yang disesuaikan.</li><li>Menyampaikan materi dengan praktik langsung.</li><li>Memberikan bimbingan satu per satu.</li></ul>", galleryId: "gallery-org-6", imgSrc: "img/trainer.jpg" },
        { date: "27 April 2025", sortDate: "2025-04-27", title: "Speaker UI/UX Design", org: "Google DGOC UNESA Learning Series", desc: "<ul><li>Menyiapkan materi presentasi workshop.</li><li>Mengembangkan contoh studi kasus sederhana.</li><li>Menyampaikan materi dengan demonstrasi langsung.</li></ul>", galleryId: "gallery-org-7", imgSrc: "img/speaker.png" },
        { date: "15 Maret 2025", sortDate: "2025-03-15", title: "Logistics Coordinator", org: "Google DGOC UNESA: “Futurelink – AI & Blockchain”", desc: "<ul><li>Menyusun daftar rinci kebutuhan logistik.</li><li>Mengatur tempat acara dan perlengkapan.</li><li>Mengawasi aspek keamanan dan teknis.</li></ul>", galleryId: "gallery-org-9", imgSrc: "img/es3.JPG" },
        { date: "Januari 2025 - Maret 2025", sortDate: "2025-01-01", title: "Staff External Relations", org: "PKM Center Unesa", desc: "<ul><li>Berkoordinasi dengan pembina dan narasumber.</li><li>Bertugas sebagai narahubung utama.</li><li>Membuat dan mengelola grup koordinasi.</li></ul>", galleryId: "gallery-org-10", imgSrc: "img/pkmhumas.jpg" }
    ];

    const portfolioContainer = document.getElementById('portfolio-container');
    const projectGalleryContainer = document.getElementById('gallery-project-container');
    const timelineContainer = document.getElementById('experience-timeline-container');
    const orgGalleryContainer = document.getElementById('gallery-org-container');
    
    // Populate Projects
    projects.forEach(project => {
        const portfolioBox = document.createElement('div');
        portfolioBox.className = 'portfolio-box aurora-card';
        portfolioBox.setAttribute('data-tilt', '');
        portfolioBox.setAttribute('data-scroll-to', `#${project.galleryId}`);
        portfolioBox.innerHTML = `
            <h4>${project.title}</h4>
            <p>${project.desc}</p>
            <div class="tools">Tools: ${project.tools}</div>
        `;
        portfolioContainer.appendChild(portfolioBox);

        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.id = project.galleryId;
        galleryItem.innerHTML = `
            <img src="${project.imgSrc}" alt="Showcase ${project.title}" class="gallery-image">
            <div class="gallery-overlay"><h4>${project.title}</h4><p>${project.type}</p></div>
        `;
        projectGalleryContainer.appendChild(galleryItem);
    });

    // Populate Experiences
    experiences.sort((a, b) => new Date(b.sortDate) - new Date(a.sortDate));
    experiences.forEach((exp, index) => {
        const side = index % 2 === 0 ? 'left' : 'right';
        const timelineItem = document.createElement('div');
        timelineItem.className = `timeline-item ${side}`;
        timelineItem.innerHTML = `
            <div class="timeline-content aurora-card" data-tilt data-scroll-to="#${exp.galleryId}">
                <div class="timeline-date">${exp.date}</div>
                <h3>${exp.title}</h3>
                <h4>${exp.org}</h4>
                ${exp.desc}
            </div>
        `;
        timelineContainer.appendChild(timelineItem);

        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.id = exp.galleryId;
        galleryItem.innerHTML = `
            <img src="${exp.imgSrc}" alt="Dokumentasi ${exp.title}" class="gallery-image">
            <div class="gallery-overlay"><h4>${exp.title}</h4><p>${exp.org}</p></div>
        `;
        orgGalleryContainer.appendChild(galleryItem);
    });

    initializeEventListeners();
});

function initializeEventListeners() {
    // Lightbox Gallery Logic
    const modal = document.getElementById("lightbox-modal");
    const modalImg = document.getElementById("lightbox-img");
    const galleryItems = document.querySelectorAll(".gallery-item");
    const span = document.getElementsByClassName("lightbox-close")[0];

    galleryItems.forEach(item => {
        item.onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.querySelector('img').src;
        }
    });

    span.onclick = function() { 
        modal.style.display = "none";
    }
    
    modal.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    
    // Scroll-to-Gallery Logic
    const scrollTriggers = document.querySelectorAll('[data-scroll-to]');
    
    scrollTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            const targetId = trigger.dataset.scrollTo;
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                targetElement.classList.add('highlight');
                setTimeout(() => {
                    targetElement.classList.remove('highlight');
                }, 2000);
            }
        });
    });

    // Re-initialize Tilt
    VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.5
    });
}


// 10. Clickable Education Cards
document.getElementById('unesa-card').addEventListener('click', () => {
    window.open('https://maps.app.goo.gl/vNNUNoYCyaVQU8uj8', '_blank');
});

document.getElementById('smk-card').addEventListener('click', () => {
    window.open('https://maps.app.goo.gl/XEYQS8anEoxViJPr7', '_blank');
});