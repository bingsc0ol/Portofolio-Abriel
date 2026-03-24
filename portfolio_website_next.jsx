// ULTRA ELITE COMPLETE PORTFOLIO 🔥 (FULL STORY + PDF STYLE + MANY SLIDES)

"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const data = {
  name: "Abriel Ghasani",
  role: "Engineering Staff",

  background:
    "Saya adalah seorang engineering staff yang terbiasa menangani sistem teknis hotel secara menyeluruh, mulai dari HVAC, kelistrikan, plumbing, hingga jaringan WiFi. Saya terbiasa bekerja cepat, tepat, dan fokus pada solusi di lapangan.",

  education: [
    "SMK (Jurusan Teknik - disesuaikan dengan data asli)",
  ],

  experience: [
    "CV Dinamika Karya (2022-2023) - Teknisi Support CCTV & WiFi",
    "Amaris Hotel Cirebon (2023-2025) - Engineering Staff",
    "Amaris Hotel Tasikmalaya (2025-Sekarang) - Engineering Staff",
  ],

  vision:
    "Menjadi engineer yang profesional, terus berkembang, dan mampu memberikan solusi terbaik di setiap kondisi.",

  mission:
    "Meningkatkan kualitas kerja, membangun sistem yang efisien, serta memberikan kontribusi nyata bagi perusahaan.",

  highlight: [
    "Menguasai berbagai sistem teknis (HVAC, listrik, plumbing, WiFi)",
    "Berpengalaman di beberapa lingkungan hotel",
    "Cepat dalam analisa dan troubleshooting masalah",
    "Mampu bekerja lintas divisi dan tekanan kerja tinggi",
    "Memiliki tanggung jawab dan konsistensi kerja tinggi",
  ],

  projects: [
    {
      title: "HVAC & AC System",
      steps: [
        "Analisa kerusakan unit AC",
        "Pembersihan komponen utama",
        "Pengecekan freon dan tekanan",
        "Perbaikan dan testing ulang",
      ],
      impact: "Meningkatkan kenyamanan tamu dan mengurangi keluhan",
      percent: 90,
    },
    {
      title: "WiFi & Network",
      steps: [
        "Instalasi access point",
        "Konfigurasi jaringan",
        "Optimasi jangkauan sinyal",
        "Testing koneksi",
      ],
      impact: "Jaringan lebih stabil dan minim gangguan",
      percent: 85,
    },
    {
      title: "Plumbing System",
      steps: [
        "Deteksi kebocoran",
        "Perbaikan jalur pipa",
        "Penggantian komponen",
        "Testing aliran air",
      ],
      impact: "Fasilitas kamar tetap optimal",
      percent: 80,
    },
    {
      title: "Fire Alarm System",
      steps: [
        "Pengecekan panel",
        "Testing sensor",
        "Maintenance sistem",
        "Simulasi alarm",
      ],
      impact: "Keamanan hotel meningkat",
      percent: 88,
    },
  ],

  email: "gsnabril@gmail.com",
  phone: "+62 895-3634-86417",
};

function Slide({ children }: any) {
  return (
    <section className="w-screen h-screen flex items-center justify-center shrink-0 px-6 snap-center">
      <motion.div
        variants={fade}
        initial="hidden"
        whileInView="show"
        className="max-w-4xl w-full bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10"
      >
        {children}
      </motion.div>
    </section>
  );
}

function Progress({ value }: any) {
  return (
    <div className="mt-6">
      <div className="flex justify-between text-sm">
        <span>Impact Level</span>
        <span>{value}%</span>
      </div>
      <div className="w-full h-2 bg-white/10 rounded-full">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          transition={{ duration: 1 }}
          className="h-full bg-white"
        />
      </div>
    </div>
  );
}

export default function Page() {
  const ref = useRef<HTMLDivElement>(null);

  const next = () => {
    ref.current?.scrollBy({ left: window.innerWidth, behavior: "smooth" });
  };

  return (
    <main className="bg-black text-white overflow-hidden">
      <div ref={ref} className="flex overflow-x-auto snap-x snap-mandatory">

        {/* HERO */}
        <Slide>
          <div className="text-center">
            <h1 className="text-5xl font-bold">{data.name}</h1>
            <p className="text-gray-400 mt-3">{data.role}</p>
            <button onClick={next} className="mt-8 border px-6 py-3 rounded-full">Mulai →</button>
          </div>
        </Slide>

        {/* BACKGROUND */}
        <Slide>
          <div>
            <h2 className="text-3xl mb-4">Latar Belakang</h2>
            <p>{data.background}</p>
          </div>
        </Slide>

        {/* EDUCATION */}
        <Slide>
          <div>
            <h2 className="text-3xl mb-4">Pendidikan</h2>
            {data.education.map((e, i) => (
              <p key={i}>• {e}</p>
            ))}
          </div>
        </Slide>

        {/* EXPERIENCE */}
        <Slide>
          <div>
            <h2 className="text-3xl mb-4">Pengalaman Kerja</h2>
            {data.experience.map((e, i) => (
              <p key={i}>• {e}</p>
            ))}
          </div>
        </Slide>

        {/* HIGHLIGHT */}
        <Slide>
          <div>
            <h2 className="text-3xl mb-6">Kenapa Saya Berbeda</h2>
            {data.highlight.map((h, i) => (
              <p key={i}>✔ {h}</p>
            ))}
          </div>
        </Slide>

        {/* VISION */}
        <Slide>
          <div>
            <h2 className="text-3xl">Visi</h2>
            <p className="mt-4">{data.vision}</p>
          </div>
        </Slide>

        {/* MISSION */}
        <Slide>
          <div>
            <h2 className="text-3xl">Misi</h2>
            <p className="mt-4">{data.mission}</p>
          </div>
        </Slide>

        {/* PROJECT INTRO */}
        <Slide>
          <div>
            <h2 className="text-3xl">Project Experience</h2>
            <p className="text-gray-400 mt-3">Berikut detail pekerjaan yang saya lakukan.</p>
          </div>
        </Slide>

        {/* PROJECT DETAIL MULTI SLIDE */}
        {data.projects.map((p, i) => (
          <>
            <Slide key={i + "title"}>
              <h2 className="text-3xl">{p.title}</h2>
            </Slide>

            <Slide key={i + "steps"}>
              <div>
                <h2 className="text-2xl mb-4">Proses Pekerjaan</h2>
                {p.steps.map((s, idx) => (
                  <p key={idx}>• {s}</p>
                ))}
              </div>
            </Slide>

            <Slide key={i + "impact"}>
              <div>
                <h2 className="text-2xl mb-4">Hasil & Dampak</h2>
                <p>{p.impact}</p>
                <Progress value={p.percent} />
                <button onClick={next} className="mt-6 border px-4 py-2 rounded-full">Geser →</button>
              </div>
            </Slide>
          </>
        ))}

        {/* CONTACT */}
        <Slide>
          <div className="text-center">
            <h2 className="text-3xl">Contact</h2>
            <p className="mt-4">{data.email}</p>
            <p>{data.phone}</p>
          </div>
        </Slide>

        {/* CLOSING */}
        <Slide>
          <div className="text-center">
            <h2 className="text-3xl">Thank You</h2>
            <p className="text-gray-400 mt-4">
              Terima kasih atas waktu Anda. Saya siap memberikan kontribusi terbaik.
            </p>
          </div>
        </Slide>

      </div>
    </main>
  );
}

// FINAL RESULT:
// 🔥 Super lengkap (background, sekolah, kerja, visi, misi)
// 📊 Project detail + presentase
// 🎬 Banyak slide (tidak monoton)
// 💼 Sangat profesional & siap kirim HR
