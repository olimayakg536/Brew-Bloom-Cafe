# ☕ Brew & Bloom Café – Local Business Website

> **Tagline:** *“Fresh Brews. Good Food. Better Moments.”*  
> **Academic Project:** Responsive Web Development College Project  
> **Demo Business Location:** 123, Avinashi Road, Coimbatore, Tamil Nadu  

---

## 📌 Project Overview

**Brew & Bloom Café** is a modern, responsive single-page website developed as a practical web development college project. It models a complete digital storefront for an independent coffee shop and casual dining café located on Avinashi Road in Coimbatore.

Designed specifically to be pitched as a viable digital solution to a local café owner, the website balances clean aesthetic design with practical, conversion-focused features. It runs on pure, standards-compliant web technologies without unnecessary framework complexity.

> **Note:** *This is a demonstration project created for educational and academic evaluation purposes. All business names, contact details, and promotions are fictitious simulations.*

---

## 🎯 Business Problems & Challenges

Small, independent neighborhood cafés often encounter the following operational challenges:

1. **Lack of an Online Presence:**  
   Potential customers (students, remote workers, families) search online for cafés near them. Without a dedicated website, a business loses customers to large corporate chains.
2. **Difficult Menu Access:**  
   Customers struggle to find current menu items, pricing, and dietary categories on fragmented social media posts or low-resolution image uploads.
3. **Friction in Table Bookings & Enquiries:**  
   Customers hesitate to call during peak hours or cannot easily check seating availability for group study sessions or meetings.
4. **Weak Customer Engagement & Daily Promotion Reach:**  
   Cafés lack an effortless channel to highlight daily chef specials, combo discounts, and student perks without printing new flyers every week.

---

## 💡 The Solution

This website directly solves these everyday hurdles by delivering:

- **Instant, Structured Menu Discovery:** An interactive, categorised menu that filters instantaneously in real time without refreshing the page.
- **Automated "Today's Special" Showcase:** A dynamic client-side widget that checks the day of the week and highlights a discounted daily combo to boost foot traffic.
- **Frictionless Reservation Request:** A responsive booking form with real-time field validation that lets guests request tables and specify custom needs.
- **One-Click WhatsApp Communication:** A floating WhatsApp button with pre-filled enquiry text for quick customer contact.
- **Clear Location & Operational Transparency:** Prominent display of operating hours, Avinashi Road address, and an embedded interactive map.

---

## ✨ Key Features

| Feature | Description | Tech Used |
| :--- | :--- | :--- |
| **Responsive Design** | Fluid layouts optimized across smartphones, tablets, laptops, and ultra-wide screens. | CSS Flexbox & CSS Grid, Media Queries |
| **Today's Special** | Automatically identifies the current day via JavaScript `Date` and renders a curated combo with pricing and instant reserve pre-fill. | Vanilla JavaScript (`new Date().getDay()`) |
| **Interactive Menu Filter** | Tabbed category filter (`All`, `Coffee`, `Tea`, `Snacks`, `Main Course`, `Desserts`) with smooth item transitions. | Vanilla JavaScript DOM Filtering |
| **Client-Side Reservation Form** | Clean booking form with validation for name, phone, date, time, and guests. Displays instant confirmation without needing a backend server. | Vanilla JavaScript Form Validation |
| **WhatsApp Quick Connect** | Floating, non-intrusive action button with pre-filled inquiry text targeting the café's phone number. | HTML / CSS / WhatsApp API Link |
| **Ambience Gallery & Lightbox** | 6-image photography grid with an interactive modal lightbox supporting previous/next navigation and keyboard shortcuts (`Esc`, arrows). | Vanilla JavaScript Modal & CSS Grid |
| **Mobile Hamburger Drawer** | Accessible mobile navigation drawer that smoothly collapses and expands on mobile viewports. | Vanilla JavaScript & CSS Transitions |
| **Curated Combos & Offers** | Visually highlighted student, couple, and workday combo cards with one-click reservation transfer. | HTML5 & CSS Cards |
| **Location & Contact Hub** | Avinashi Road address, operating hours, direct phone/email links, and OpenStreetMap demo embed. | Semantic HTML5 & Responsive Iframe |
| **Dynamic Footer** | Copyright year automatically updates based on client time. | Vanilla JavaScript |

---

## 🛠️ Technology Stack

This project deliberately avoids heavy frameworks to keep the code accessible, maintainable, and easy to explain during a college viva:

- **HTML5:** Semantic markup (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`) for superior SEO and accessibility.
- **CSS3:** Custom CSS variables, modern Grid/Flexbox layouts, clamp typography, subtle shadows, and responsive media queries. No external CSS libraries (e.g. Bootstrap/Tailwind) required.
- **JavaScript (ES6+):** Pure vanilla JavaScript for DOM manipulation, client-side validation, event delegation, and dynamic date calculations. No libraries (e.g. jQuery, React) needed.

---

## 📂 Project Structure

```text
Brew-Bloom-Cafe/
│
├── index.html          # Main HTML5 single-page application entry point
│
├── css/
│   └── style.css       # Complete stylesheet with coffee palette & responsive rules
│
├── js/
│   └── script.js       # Vanilla JS for special deals, menu filter, form & lightbox
│
├── images/
│   └── README.txt      # Image documentation and local asset instructions
│
├── README.md           # Comprehensive project documentation
├── PITCH.md            # Client pitch guide & 30–60 second verbal script
└── .gitignore          # Git exclusion rules
```

---

## 🚀 How to Run the Project

No Node.js, npm installations, or backend servers are required!

### Option 1: Direct File Open
1. Extract `Brew-Bloom-Cafe.zip`.
2. Double-click `index.html` to open it in any modern web browser (Google Chrome, Microsoft Edge, Firefox, Safari).

### Option 2: VS Code Live Server
1. Open the `Brew-Bloom-Cafe` folder in **Visual Studio Code**.
2. Right-click `index.html` and click **"Open with Live Server"**.
3. The website will run locally at `http://127.0.0.1:5500/index.html`.

---

## 🔮 Future Improvements

For a production deployment or future academic phases, the following additions can be integrated:

1. **Backend Integration:** Connect reservation requests to a Node.js/Express API or Python Flask backend with email/SMS confirmations.
2. **Online Pre-Ordering & Takeaway:** Add a lightweight shopping cart system for takeaway pick-ups.
3. **Database Integration:** Store guest reservations and customer feedback in PostgreSQL or MongoDB.
4. **Direct WhatsApp Business API:** Route bookings into the official WhatsApp Business Cloud API.
5. **Google Business Profile & Maps API:** Live Google Maps JavaScript API with real-time transit directions.
6. **Owner Admin Dashboard:** A protected portal for café staff to update menu prices, mark items out of stock, and approve reservations.
7. **Analytics Tracking:** Google Analytics or privacy-friendly analytics to track high-performing menu items and customer traffic.

---

## 👨‍💻 Project Submission Note

- **Author:** College Project Submission
- **Demonstration Purpose:** Academic Web Development & Local Business Solution Pitch
- **License:** Open for Educational Use

---

## 🌐 Live Demo

**[Click here to visit the live website](https://brew-and-bloom-cafe.onrender.com)**
