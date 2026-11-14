# Anudeep V F - Personal Developer Portfolio

A responsive, high-performance, and modern developer portfolio website built for **Anudeep V F** (BCA Graduate, Web & Python Developer).

Live preview ready for **GitHub Pages**, **Vercel**, or **Netlify**.

---

## 🌟 Key Features

- **Cyber-Modern Aesthetic**: Glassmorphism cards, glowing ambient accents, smooth gradients, and clean typography (`Plus Jakarta Sans` & `Outfit`).
- **Dark / Light Theme Toggle**: Seamless transition with local storage persistence.
- **Dynamic Typing Subtitle**: Highlights core tech competencies dynamically.
- **Projects Showcase & Interactive Modals**:
  - *Byndoor - A Heaven of Natural Beauty* (Tourism Web Application - PHP/SQL/JS).
  - *Hospital Appointment Booking System* (Desktop Application - JavaFX/FXML).
- **Interactive Skills Filter**: One-click toggling between All, Technical & Dev, and Professional & Soft Skills.
- **Education Timeline**: Vertical progress timeline highlighting BCA (CGPA 8.0), PUC, and SSLC.
- **Verified Certifications Grid**: TCS iON, AWS Industrial & Internship, AI/ML, and Unnati Foundation.
- **Direct Contact Panel**:
  - One-click copy email button with toast feedback.
  - Direct WhatsApp and Phone call links.
  - Functional contact form with prefilled email dispatch.
- **100% Mobile & Responsive**: Optimized from 320px mobile screens up to 4K displays.

---

## 📁 Project Structure

```text
anudeep-portfolio/
│
├── index.html        # Semantic HTML5 markup with SEO & Open Graph meta tags
├── styles.css        # Responsive CSS with CSS custom properties & modern glassmorphism
├── script.js         # Theme toggle, typing animation, modals, filtering, email copy
└── README.md         # Deployment & setup documentation
```

---

## 🚀 How to Host on GitHub Pages (Step-by-Step)

You can host this portfolio **100% free forever** using **GitHub Pages**.

### Step 1: Create a GitHub Repository
1. Log in to your [GitHub Account](https://github.com).
2. Click **New Repository** (or visit `https://github.com/new`).
3. Repository name: `portfolio` (or `<your-username>.github.io`).
4. Keep it **Public**.
5. Leave "Add a README file" unchecked (we already have one).
6. Click **Create repository**.

### Step 2: Push your Portfolio to GitHub
Open your terminal (PowerShell or Bash) in this project folder:

```bash
cd "C:\Users\Anudeep\.gemini\antigravity\scratch\anudeep-portfolio"

# Initialize Git
git init

# Add all files and commit
git add .
git commit -m "Initial commit: Anudeep V F Portfolio"

# Rename branch to main
git branch -M main

# Link your GitHub repository (replace <username> with your actual GitHub username)
git remote add origin https://github.com/<your-username>/portfolio.git

# Push the code
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub.
2. Click **Settings** (top menu bar).
3. In the left sidebar, click **Pages**.
4. Under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: Select **`main`** and folder **`/(root)`**
5. Click **Save**.
6. Wait 1–2 minutes, refresh the page, and GitHub will provide your live URL:
   ```
   https://<your-username>.github.io/portfolio/
   ```

---

## 💻 How to View Locally

Simply double-click `index.html` to open it in your browser (Chrome, Edge, Firefox, Brave, Safari).

Alternatively, if you use VS Code or Node.js:
```bash
# Using Python built-in server:
python -m http.server 3000

# Open in browser:
http://localhost:3000
```

---

## 🛠️ Personal Customizations

- **Add your Resume PDF**:
  Save your resume file as `resume.pdf` in the root folder, and update the "Download Resume" link in `index.html`:
  ```html
  <a href="resume.pdf" download class="btn btn-primary">Download Resume</a>
  ```
- **Social Profiles**:
  Replace `https://github.com` and `https://linkedin.com` in `index.html` with your actual profile links.
- **Form Handling with Formspree (Optional)**:
  To receive contact form submissions straight to your inbox without opening a mail client, create a free account at [Formspree](https://formspree.io/) and set `action="https://formspree.io/f/<your-id>"` in the `<form>` tag.

---

## 👤 Author

**Anudeep V F**  
- Location: Kalmakki, Byndoor, Udupi, Karnataka - 576214  
- Email: [anudeepvfbyndoor@gmail.com](mailto:anudeepvfbyndoor@gmail.com)  
- Phone: [+91 9380523675](tel:+919380523675)  
