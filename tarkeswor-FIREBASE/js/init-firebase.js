// Firebase Initialize Script - Run once to set up database with default data
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getFirestore, doc, setDoc, collection, addDoc } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyD_UEopKeV9hSoULOs8uQbtE0zxc6aryXo",
  authDomain: "dental-fdb54.firebaseapp.com",
  projectId: "dental-fdb54",
  storageBucket: "dental-fdb54.firebasestorage.app",
  messagingSenderId: "73072316508",
  appId: "1:73072316508:web:1a1383aa1ffec477821699"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Default Settings
const defaultSettings = {
  seo_title: "Tarkeswor Dentist Pvt. Ltd. - Quality Dental Care in Kathmandu",
  seo_description: "Best dental clinic in Kathmandu. Expert dentists, modern equipment, emergency care. Book appointment online.",
  logo_text: "Tarkeswor Dentist",
  site_name: "Tarkeswor Dentist Pvt. Ltd.",
  phone: "+977-1-4234567",
  email: "info@tarkeswor.com",
  address: "Kathmandu, Nepal",
  location_url: "https://maps.google.com",
  facebook: "https://facebook.com/tarkeswor",
  twitter: "https://twitter.com/tarkeswor",
  instagram: "https://instagram.com/tarkeswor",
  linkedin: "https://linkedin.com/company/tarkeswor",
  banners_data: JSON.stringify([
    { image: "img/carousel-1.jpg", title: "Expert Dental Care", subtitle: "Your Smile is Our Priority" },
    { image: "img/carousel-2.jpg", title: "Modern Technology", subtitle: "Latest Equipment & Techniques" }
  ]),
  about_heading: "Why Choose Our Clinic?",
  about_text: "With over 15 years of experience, our team provides comprehensive dental care using the latest technology in a comfortable environment."
};

// Add Settings
async function initializeDatabase() {
  try {
    console.log("Initializing Firebase database...");
    
    // Set Settings
    await setDoc(doc(db, 'settings', 'main'), defaultSettings);
    console.log("✓ Settings initialized");

    // Add Services
    const services = [
      { title: "General Dentistry", description: "Routine checkups, cleanings, and fillings", image: "img/service-1.jpg", sortOrder: 1 },
      { title: "Cosmetic Dentistry", description: "Whitening, veneers, and smile makeovers", image: "img/service-2.jpg", sortOrder: 2 },
      { title: "Orthodontics", description: "Braces and aligners for straighter teeth", image: "img/service-3.jpg", sortOrder: 3 },
      { title: "Oral Surgery", description: "Extractions and surgical procedures", image: "img/service-4.jpg", sortOrder: 4 },
      { title: "Root Canal", description: "Endodontic treatment to save teeth", image: "img/service-5.jpg", sortOrder: 5 },
      { title: "Dental Implants", description: "Permanent tooth replacements", image: "img/service-6.jpg", sortOrder: 6 }
    ];
    for (const service of services) {
      await addDoc(collection(db, 'services'), service);
    }
    console.log("✓ Services initialized");

    // Add Doctors
    const doctors = [
      { name: "Dr. Tarkeswor Sharma", category: "Senior Dentist", level: "BDS, MDS", avatarUrl: "img/team-1.jpg", sortOrder: 1 },
      { name: "Dr. Anita Shrestha", category: "Orthodontist", level: "BDS, MDS", avatarUrl: "img/team-2.jpg", sortOrder: 2 },
      { name: "Dr. Bikash Thapa", category: "Oral Surgeon", level: "BDS, MDS", avatarUrl: "img/team-3.jpg", sortOrder: 3 },
      { name: "Dr. Sita Karki", category: "Pediatric Dentist", level: "BDS", avatarUrl: "img/team-4.jpg", sortOrder: 4 }
    ];
    for (const doctor of doctors) {
      await addDoc(collection(db, 'doctors'), doctor);
    }
    console.log("✓ Doctors initialized");

    // Add Blog
    const blogs = [
      { title: "How to Maintain Good Oral Hygiene", author: "Dr. Tarkeswor", excerpt: "Learn best practices for healthy teeth", image: "img/blog-1.jpg", publishedAt: "Jan 15, 2025", sortOrder: 1 },
      { title: "Why Regular Checkups Matter", author: "Dr. Anita", excerpt: "Preventive care saves time and money", image: "img/blog-2.jpg", publishedAt: "Feb 10, 2025", sortOrder: 2 },
      { title: "About Dental Implants", author: "Dr. Bikash", excerpt: "Permanent solution for missing teeth", image: "img/blog-3.jpg", publishedAt: "Mar 5, 2025", sortOrder: 3 }
    ];
    for (const blog of blogs) {
      await addDoc(collection(db, 'blog'), blog);
    }
    console.log("✓ Blog initialized");

    alert("✓ Firebase database initialized successfully!\n\nAll default content is now in place.\nAdmin panel can now edit and update this content in real-time.");
  } catch(err) {
    console.error("Error initializing database:", err);
    alert("Error: " + err.message);
  }
}

initializeDatabase();
