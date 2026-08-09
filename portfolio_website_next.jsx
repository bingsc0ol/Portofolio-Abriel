<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portofolio - Abriel Ghasani</title>
  <!-- Google Fonts & FontAwesome Icons -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  
  <style>
    :root {
      --primary: #1e3a8a;
      --accent: #f59e0b;
      --bg-dark: #0f172a;
      --card-bg: #1e293b;
      --text: #f8fafc;
      --text-muted: #94a3b8;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
      scroll-behavior: smooth;
    }

    body {
      background-color: var(--bg-dark);
      color: var(--text);
      line-height: 1.6;
    }

    /* Navbar */
    header {
      position: fixed;
      top: 0;
      width: 100%;
      background: rgba(15, 23, 42, 0.9);
      backdrop-filter: blur(10px);
      z-index: 1000;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    nav {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--accent);
    }

    .nav-links {
      display: flex;
      list-style: none;
      gap: 2rem;
    }

    .nav-links a {
      color: var(--text);
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s;
    }

    .nav-links a:hover {
      color: var(--accent);
    }

    /* Hero Section */
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 6rem 2rem 2rem 2rem;
      text-align: center;
      background: radial-gradient(circle at center, #1e3a8a33 0%, transparent 70%);
    }

    .hero-content h1 {
      font-size: 3rem;
      margin-bottom: 0.5rem;
    }

    .hero-content h1 span {
      color: var(--accent);
    }

    .hero-content h3 {
      font-size: 1.5rem;
      color: var(--text-muted);
      margin-bottom: 1.5rem;
    }

    .btn {
      display: inline-block;
      padding: 0.8rem 2rem;
      background: var(--accent);
      color: #000;
      font-weight: 600;
      border-radius: 30px;
      text-decoration: none;
      transition: transform 0.3s, box-shadow 0.3s;
    }

    .btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(245, 158, 11, 0.3);
    }

    /* Container global */
    .section {
      max-width: 1200px;
      margin: 0 auto;
      padding: 5rem 2rem;
    }

    .section-title {
      text-align: center;
      font-size: 2rem;
      margin-bottom: 3rem;
      position: relative;
    }

    .section-title::after {
      content: '';
      display: block;
      width: 50px;
      height: 4px;
      background: var(--accent);
      margin: 0.5rem auto 0;
      border-radius: 2px;
    }

    /* Grid Layouts */
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .card {
      background: var(--card-bg);
      padding: 2rem;
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.05);
      transition: transform 0.3s;
    }

    .card:hover {
      transform: translateY(-5px);
    }

    .card i {
      font-size: 2.5rem;
      color: var(--accent);
      margin-bottom: 1rem;
    }

    /* Timeline */
    .timeline {
      border-left: 2px solid var(--accent);
      padding-left: 1.5rem;
      margin-left: 1rem;
    }

    .timeline-item {
      margin-bottom: 2rem;
      position: relative;
    }

    .timeline-item::before {
      content: '';
      position: absolute;
      left: -2.1rem;
      top: 5px;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: var(--accent);
    }

    .timeline-date {
      color: var(--accent);
      font-weight: 600;
      font-size: 0.9rem;
    }

    /* Contact Section */
    .contact-info {
      display: flex;
      justify-content: center;
      gap: 3rem;
      flex-wrap: wrap;
      margin-top: 2rem;
    }

    .contact-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      background: var(--card-bg);
      padding: 1rem 2rem;
      border-radius: 50px;
    }

    .contact-item i {
      color: var(--accent);
      font-size: 1.2rem;
    }

    footer {
      text-align: center;
      padding: 2rem;
      background: #090d16;
      color: var(--text-muted);
      font-size: 0.9rem;
    }

    /* Mobile Responsive */
    @media (max-width: 768px) {
      .hero-content h1 { font-size: 2.2rem; }
      .nav-links { display: none; }
      .contact-info { flex-direction: column; align-items: stretch; }
    }
  </style>
</head>
<body>

  <!-- Navbar -->
  <header>
    <nav>
      <div class="logo">AG.</div>
      <ul class="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Tentang</a></li>
        <li><a href="#experience">Pengalaman</a></li>
        <li><a href="#skills">Keterampilan</a></li>
        <li><a href="#contact">Kontak</a></li>
      </ul>
    </nav>
  </header>

  <!-- Hero Section -->
  <section id="home" class="hero">
    <div class="hero-content">
      <h1>Halo, Saya <span>Abriel Ghasani</span></h1>
      <h3>Engineering Staff & IT Enthusiast</h3>
      <p style="max-width: 600px; margin: 0 auto 2rem; color: var(--text-muted);">
        Lulusan SMKN 1 Cirebon (Elektronika Industri) yang berpengalaman dalam pengelolaan sistem teknis, HVAC, kelistrikan, serta infrastruktur IT dan jaringan hotel.
      </p>
      <a href="#contact" class="btn">Hubungi Saya</a>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="section">
    <h2 class="section-title">Tentang Saya</h2>
    <div class="grid">
      <div class="card">
        <i class="fa-solid fa-user-gear"></i>
        <h3>Profil Ringkas</h3>
        <p>Lahir di Cirebon, 5 Oktober 2004. Seorang engineer yang terbiasa bekerja fleksibel dengan pemeliharaan sistem mekanikal, elektrikal, fasilitas operasional hotel, serta penanganan jaringan IT/Wi-Fi.</p>
      </div>
      <div class="card">
        <i class="fa-solid fa-bullseye"></i>
        <h3>Visi & Misi</h3>
        <p><strong>Visi:</strong> Menjadi pribadi yang terus belajar, berinovasi, dan membagikan ilmu di bidang engineering.<br>
        <strong>Misi:</strong> Membentuk tim yang efisien dan profesional demi menjaga operasional sistem tetap ideal dan rapi.</p>
      </div>
    </div>
  </section>

  <!-- Experience Section -->
  <section id="experience" class="section">
    <h2 class="section-title">Riwayat Pengalaman</h2>
    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-date">2022 - 2023</div>
        <h3>CV Dinamika Karya</h3>
        <p><strong>Teknisi Support:</strong> Membantu teknisi lapangan dalam pemasangan serta perbaikan instalasi CCTV dan Wi-Fi untuk melancarkan proyek.</p>
      </div>
      <div class="timeline-item">
        <div class="timeline-date">2023 - 2025</div>
        <h3>Amaris Hotel Cirebon</h3>
        <p><strong>Engineering Staff:</strong> Memperbaiki, menangani, dan memastikan operasional sistem hotel (seperti *water heater*) berjalan lancar tanpa kendala.</p>
      </div>
      <div class="timeline-item">
        <div class="timeline-date">2025 - 2026</div>
        <h3>Amaris Hotel Tasikmalaya</h3>
        <p><strong>Engineering Staff:</strong> Mengelola pemeliharaan teknis fasilitas hotel, termasuk penanganan sistem *heat pump*, kelistrikan, dan sistem perpipaan.</p>
      </div>
    </div>
  </section>

  <!-- Skills / Projects Section -->
  <section id="skills" class="section">
    <h2 class="section-title">Keahlian & Bidang Kerja</h2>
    <div class="grid">
      <div class="card">
        <i class="fa-solid fa-wrench"></i>
        <h3>Pekerjaan Lapangan</h3>
        <p>Pengalaman langsung dalam perbaikan AC, Wi-Fi, Shower Tap/Kran, Plumbing, Fire Alarm Control System, hingga penanganan PC.</p>
      </div>
      <div class="card">
        <i class="fa-solid fa-file-lines"></i>
        <h3>Administrasi & Pelaporan</h3>
        <p>Pengalaman merangkap tugas Supervisor: Pembuatan Monthly Report, Manager Report, Evaluasi Kinerja HM, dan penyusunan dokumen teknis.</p>
      </div>
      <div class="card">
        <i class="fa-solid fa-hotel"></i>
        <h3>Dukungan Operasional</h3>
        <p>Memiliki pemahaman dasar fleksibel pada operasional Front Office (sistem PMS), Housekeeping, dan Kitchen.</p>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="section">
    <h2 class="section-title">Informasi Kontak</h2>
    <p style="text-align: center; color: var(--text-muted);">
      Terima kasih kepada Bapak/Ibu HR yang telah meluangkan waktu. Besar harapan saya untuk dapat bergabung dan berkontribusi di perusahaan Bapak/Ibu.
    </p>
    <div class="contact-info">
      <div class="contact-item">
        <i class="fa-solid fa-phone"></i>
        <span>+62 813-1507-6951</span>
      </div>
      <div class="contact-item">
        <i class="fa-solid fa-envelope"></i>
        <span>gsnabril@gmail.com</span>
      </div>
      <div class="contact-item">
        <i class="fa-brands fa-instagram"></i>
        <span>@abrilgsn</span>
      </div>
    </div>
  </section>

  <footer>
    <p>&copy; 2026 Abriel Ghasani. All Rights Reserved.</p>
  </footer>

  <!-- JavaScript Smooth Scroll Dynamic Header -->
  <script>
    window.addEventListener('scroll', function() {
      const header = document.querySelector('header');
      if (window.scrollY > 50) {
        header.style.background = 'rgba(15, 23, 42, 0.95)';
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
      } else {
        header.style.background = 'rgba(15, 23, 42, 0.9)';
        header.style.boxShadow = 'none';
      }
    });
  </script>
</body>
</html>
