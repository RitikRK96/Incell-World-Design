
---

# **INCELL Build & Design LTD. Website**  

This is the official website for **INCELL Build & Design LTD.**, built using **React.js** and hosted on **Hostinger**. The website showcases the company's services, expertise, and contact details.

## **🔗 Live Website**  
[https://incellbuilddesign.co.uk/](https://incellbuilddesign.co.uk/)  

---

## **🛠 Tech Stack**  
- **Frontend:** React.js, React Router, Vite  
- **Styling:** CSS, AOS (Animate on Scroll)  
- **SEO:** React Helmet Async  
- **Hosting:** Hostinger  
- **Domain Provider:** 123-Reg  

---

## **📂 Project Structure**  
```
/src
│── /assets                     # Static assets (images, icons, etc.)
│── /Components                  # Reusable UI components
│   ├── AboutUs
│   ├── Approach
│   ├── Banner
│   ├── Cards
│   ├── Carousel
│   ├── ContactUS
│   ├── Footer
│   ├── Navbar
│   ├── PartnerCarousel
│   ├── PrivacyNotice
│   ├── Services Wrapper
│   ├── Testimonials
│── /Pages                       # Main pages
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Home.jsx
│   ├── Services.jsx
│── App.css                      # Global styles
│── App.jsx                      # Main App component
│── index.css                    # Additional styles
│── main.jsx                      # Entry point
│── .gitignore                    # Git ignore file
│── .htaccess                     # Configuration for Apache server
│── eslint.config.js               # ESLint configuration
│── index.html                     # Main HTML template
│── package-lock.json               # Lock file for npm dependencies
│── package.json                    # Project dependencies and scripts
│── README.md                      # Project documentation
│── test-contactUS.js              # Test file for contact page
│── vercel.json                    # Vercel configuration
│── vite.config.js                  # Vite configuration
```

---

## **🚀 Installation & Setup**  

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/RitikRK96/Incell-World-Design.git
cd incell-website
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Start Development Server**
```sh
npm run dev
```
The website will be available at **`http://localhost:5173`**.

---

## **🌍 Deployment (Hostinger + 123-Reg Domain)**
### **1️⃣ Build the Project**
```sh
npm run build
```
This creates an optimized `build` folder.

### **2️⃣ Upload to Hostinger**
1. Login to **Hostinger** and go to **File Manager**.  
2. Navigate to `public_html` and upload the **build** folder contents.  
3. Ensure `index.html` is in `public_html`.

### **3️⃣ Update Domain NameServers (123-Reg)**
1. Login to **123-Reg** and go to **Domain Management**.  
2. Find your domain and click **Manage**.  
3. Look for **Nameservers** and update them to Hostinger's:  
   ```
   ns1.dns-parking.com  
   ns2.dns-parking.com
   ```
4. Save changes and wait for DNS propagation (~24 hours).  

---

## **📧 Contact**  
For support or queries, reach out at:  
📩 **Email:** [ritikrk008@gmail.com](mailto:ritikrk008@gmail.com])  
📞 **Phone:** [+919693895842](tel:+919693895842)  

---

## **📜 License**  
This project is owned by **Ritik Kumar** and is the official website of **INCELL Build & Design LTD.**  

---

