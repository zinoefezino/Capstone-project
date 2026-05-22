🪐Group 18 Planetary Data Explorer

Description 
A modern, responsive single-page React application built with Vite that allows users to seamlessly explore planetary metrics and look up solar system data. This project was migrated from a static HTML/CSS infrastructure into a component-based React ecosystem for our Capstone assignment.

👥 The Team

Akpoghelie Efezino (https://github.com/zinoefezino) — Team Lead, Contact Form & Validation Component ,& Global Styles resolution

Adedaboyo Feyisayo (https://github.com/Feyisayo29) — Hero Section, Video Component & System Architecture.

Adeniyi Julius (https://github.com/Lius-0x1) — Image Gallery Component

Madu Kingsley (https://github.com/Elegant870) — Header & Planet Data Table Component

Joy sunday (https://github.com/letesha) — Footer Component

JohnBull Ubaka  (https://github.com/JOBISSMATTIIS) — 

🚀 Features

Component-Based Architecture: Fully modularized React components (Hero, VideoSection, ImageGallery, PlanetTable, ContactForm).

Dynamic Data Integration: Planet statistics rendered efficiently using JavaScript arrays and mapped JSX elements.

Smooth Scrolling Navigation: Native CSS smooth-glide interactions connecting the Hero CTA buttons directly to data sections.

Strict Separation of Concerns: Centralized styling layout utilizing a global CSS structure to preserve responsive design standards.

Mobile Responsive: Optimized fluid grid systems conforming perfectly to breakpoints below 768px.

🛠️ Tech Stack

Frontend: React.js (Functional Components, Hooks)

Build Tool: Vite (Fast Refresh & Bundling)

Styling: Custom Global CSS & Flexbox/Grid Systems

💻 Getting Started

To run this project locally, follow these quick steps:

1. Clone the repository
   
Go to the GitHub repository (https://github.com/zinoefezino/Capstone-project), then click the "Code" button, and copy the URL.
Open a new terminal and input the command: git clone <repository-link>

2. Install dependencies
   
Bash
npm install

3. Start the local development server
Bash
npm run dev

Once the server starts, open your browser and navigate to the local host given on your terminal.

Live Link: https://group-18-capstone-project.vercel.app/

🔄 Software Development Life Cycle (SDLC) Implementation

Our team strictly followed the Agile SDLC methodology to translate the Capstone Project PDF requirements into a fully optimized, production-ready React application.
[Requirement Analysis] ➔ [System Architecture] ➔ [Component Development] ➔ [Integration & Testing] ➔ [Documentation].

1. Requirements Analysis & Scope Verification
PDF Alignment & Functional Requirements:
Before writing a single line of code, we carefully read the capstone project brief to bring out the core functional requirements. We mapped out a strict checklist of the functional requirements requested by the instructor to ensure our development plan achieved maximum compliance:
 
-Responsive Hero Banner: An introductory section featuring interactive "Explore the Data" and "Contact Us" call-to-action (CTA) buttons configured with smooth-scroll identifier tags (id).

-Embedded Video Showcase: A multimedia section configured to completely autoplay, run muted, and loop continuously.

-Image Gallery (Dynamic Data Hub): A responsive grid section that dynamically renders the Planet Name, Distance from the Sun, and Planet Image retrieved directly via the provided Fetch API.

-Planets Comparison Data Table: A desktop view organizing metrics and targeted media queries to hide the element entirely on the mobile view.

-Validated Contact Form: A user input form utilizing client-side form validation rules that trigger a successful confirmation message to the user upon hitting the designated data submission endpoint.

-Footer Section: It contains a brief description of the team (listing member first names), an active link to TSAcademy (https://tsacademyonline.com/), and an organizational link redirecting users back to our official GitHub Group Repository.

-SEO & Metadata: Document configuration containing a <meta name="author"> tag explicitly defined with our group name.

(Below is our Use Case Diagram illustrating user interactions with these features.)

<p align="center">
  <img src="./Usecase Diagram Group18.png" width="800"/>
</p>

