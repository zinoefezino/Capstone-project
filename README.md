<h1>🪐Group 18 Planetary Data Explorer</h1>

<h2>Description </h2>
<p>A modern, responsive single-page React application built with Vite that allows users to seamlessly explore planetary metrics and look up solar system data. This project was migrated from a static HTML/CSS infrastructure into a component-based React ecosystem for our Capstone assignment.</p>

<h2>👥 The Team</h2>

<p>Akpoghelie Efezino (https://github.com/zinoefezino) — Team Lead, Contact Form & Validation Component ,& Global Styles resolution

Adedaboyo Feyisayo (https://github.com/Feyisayo29) — Hero Section, Video Component & System Architecture.

Adeniyi Julius (https://github.com/Lius-0x1) — Image Gallery Component

Madu Kingsley (https://github.com/Elegant870) — Header & Planet Data Table Component

Joy sunday (https://github.com/letesha) — Footer Component

JohnBull Ubaka  (https://github.com/JOBISSMATTIIS) — </p>

<h2>🚀 Features</h2>

<h4>Component-Based Architecture:</h4> Fully modularized React components (Hero, VideoSection, ImageGallery, PlanetTable, ContactForm).

<h4>Dynamic Data Integration:</h4> Planet statistics rendered efficiently using JavaScript arrays and mapped JSX elements.

<h4>Smooth Scrolling Navigation:</h4> Native CSS smooth-glide interactions connecting the Hero CTA buttons directly to data sections.

<h4>Strict Separation of Concerns:</h4> Centralized styling layout utilizing a global CSS structure to preserve responsive design standards.

<h4>Mobile Responsive:</h4> Optimized fluid grid systems conforming perfectly to breakpoints below 768px.

<h2>🛠️ Tech Stack</h2>

<h4>Frontend:</h4> React.js (Functional Components, Hooks)

<h4>Build Tool:</h4> Vite (Fast Refresh & Bundling)

<h4>Styling:</h4> Custom Global CSS & Flexbox/Grid Systems

<h2>💻 Getting Started</h2>

To run this project locally, follow these quick steps:

<h4>1. Clone the repository</h4>
   
Go to the GitHub repository (https://github.com/zinoefezino/Capstone-project), then click the "Code" button, and copy the URL.
Open a new terminal and input the command: git clone <repository-link>

<h4>2. Install dependencies</h4>
   
Bash
npm install

<h4>3. Start the local development server</h4>
Bash
npm run dev

Once the server starts, open your browser and navigate to the local host given on your terminal.

<h4>Live Link:</h4> https://group-18-capstone-project.vercel.app/

<h2>🔄 Software Development Life Cycle (SDLC) Implementation</h2>

Our team strictly followed the Agile SDLC methodology to translate the Capstone Project PDF requirements into a fully optimized, production-ready React application.
<h4>[Requirement Analysis] ➔ [System Architecture] ➔ [Component Development] ➔ [Integration & Testing] ➔ [Documentation].</h4>

<h3>1. Requirements Analysis & Scope Verification</h3>
<h4>PDF Alignment & Functional Requirements:</h4>
<p>Before writing a single line of code, we carefully read the capstone project brief to bring out the core functional requirements. We mapped out a strict checklist of the functional requirements requested by the instructor to ensure our development plan achieved maximum compliance:</p>
 
<b>-Responsive Hero Banner:</b> An introductory section featuring interactive "Explore the Data" and "Contact Us" call-to-action (CTA) buttons configured with smooth-scroll identifier tags (id).

<b>-Embedded Video Showcase:</b> A multimedia section configured to completely autoplay, run muted, and loop continuously.

<b>-Image Gallery (Dynamic Data Hub):</b> A responsive grid section that dynamically renders the Planet Name, Distance from the Sun, and Planet Image retrieved directly via the provided Fetch API.

<b>-Planets Comparison Data Table:</b> A desktop view organizing metrics and targeted media queries to hide the element entirely on the mobile view.

<b>-Validated Contact Form:</b> A user input form utilizing client-side form validation rules that trigger a successful confirmation message to the user upon hitting the designated data submission endpoint.

<b>-Footer Section:</b> It contains a brief description of the team (listing member first names), an active link to TSAcademy (https://tsacademyonline.com/), and an organizational link redirecting users back to our official GitHub Group Repository.

<b>-SEO & Metadata:</b> Document configuration containing a <meta name="author"> tag explicitly defined with our group name.

<p align="center">  (Below is our Use Case Diagram illustrating user interactions with these features.)</p>

<p align="center">
  <img src="Usecase Diagram Group 18.png" width="800"/>
</p>
<b>Feature Slicing:</b> Once the requirements were verified, we broke the interface layout down into separate, independent components to prevent overlapping workflows.
<h3>2. System Architecture & Component Design</h3>
<b>Modular Component Tree:</b> We designed a strict React component hierarchy. We established App.jsx as the central hub, which imports and stacks our completely independent building blocks.
<p algin="center">(Below is our System Architecture Map showing the exact React structure)</p>

