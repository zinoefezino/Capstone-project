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
 
<b>- Responsive Hero Banner:</b> An introductory section featuring interactive "Explore the Data" and "Contact Us" call-to-action (CTA) buttons configured with smooth-scroll identifier tags (id).

<b>- Embedded Video Showcase:</b> A multimedia section configured to completely autoplay, run muted, and loop continuously.

<b>- Image Gallery (Dynamic Data Hub):</b> A responsive grid section that dynamically renders the Planet Name, Distance from the Sun, and Planet Image retrieved directly via the provided Fetch API.

<b>- Planets Comparison Data Table:</b> A desktop view organizing metrics and targeted media queries to hide the element entirely on the mobile view.

<b>- Validated Contact Form:</b> A user input form utilizing client-side form validation rules that trigger a successful confirmation message to the user upon hitting the designated data submission endpoint.

<b>- Footer Section:</b> It contains a brief description of the team (listing member first names), an active link to TSAcademy (https://tsacademyonline.com/), and an organizational link redirecting users back to our official GitHub Group Repository.

<b>- SEO & Metadata:</b> Document configuration containing a <meta name="author"> tag explicitly defined with our group name.

<p align="center">  (Below is our Use Case Diagram illustrating user interactions with these features.)</p>

<p align="center">
  <img src="Usecase Diagram Group 18.png" width="800"/>
</p>
<b>Feature Slicing:</b> Once the requirements were verified, we broke the interface layout down into separate, independent components to prevent overlapping workflows.
<h3>2. System Architecture & Component Design</h3>
<b>- Modular Component Tree:</b> We designed a strict React component hierarchy. We established App.jsx as the central hub, which imports and stacks our completely independent building blocks.
<p align="center">(Below is our System Architecture Map showing the exact React structure)</p>
<p align="center">
  <img src="React component group18.png" width="800"/>
</p>

<p><b>- Centralized Styling Strategy:</b> To strictly follow the project's visual rules, we moved all CSS into a centralized global.css file. This design choice kept our structure (JSX) and styles (CSS) completely separate. It also ensured that our mobile-responsive rules like hiding the PlanetTable component on smaller screens and shifting the ImageGallery grid applied uniformly without cluttering the JavaScript files.</p>

<p><b>- Navigation & Interaction Flow:</b> We mapped out the interactive flow using standard HTML identifier tags (id). By linking the Hero section's action buttons to matching section IDs down the page, we utilized the global stylesheet's native smooth-scroll behavior to enable fluid user navigation.</p>

<h3>3. Component Development & Version Control (Coding & Collaboration)</h3>

<b>- Branch Workflow:</b> To maintain a stable codebase, our team utilized Git for collaborative version control. We created dedicated local feature branches (e.g., video-section and image-gallery) for our assigned components. This isolated environment allowed each developer to build and test their specific section without breaking the main application.

<b>- Syntax Transition (HTML to JSX):</b> We translated an initial static HTML/CSS design into React-compliant JSX. This required converting standard attributes like "class" to "className" and ensuring multimedia elements in the <VideoSection> used React's required camelCase properties (e.g., "autoPlay" and "playsInline").

<b>- Dynamic Data Integration:</b> The <ImageGallery> component was connected to the planet data API to dynamically map and render the visual grid, name, and distance from the sun.

<b>- Responsive State Management:</b> For the <PlanetTable> component, we implemented specific media queries within our global.css. This ensured the data comparison table was hidden on mobile viewports, strictly complying with the mobile-responsive constraints outlined in the capstone PDF.

<b>- Client-Side Form Validation:</b> The <ContactForm> component was developed to get user input and handle data submission. We used native client-side validation logic that intercepts the form's submit event and evaluates the user's input strings to verify correct formatting. The form displays helpful inline error messages if validation rules fail and outputs a successful submission message to the user once the data successfully hits the designated endpoint.

<b>- Pull Request Reviews & Conflict Resolution:</b> When merging individual component branches back into the main branch, we encountered expected Git merge conflicts within our shared global.css file. We manually reviewed the overlapping lines using GitHub's conflict resolution editor, safely combining our styling rules to preserve everyone's layout work before final integration.

<h3> 4. Integration, Testing & Final Verification (Quality Assurance)</h3>

<b>- System Integration:</b> Once all separate component branches were safely merged into the main production branch, we ran final local builds using Vite to ensure all modules (Header, Hero, Video Section, Image Gallery, Planet Table, Contact Form, and Footer) compiled perfectly together as a single, unified application without errors.

<b>- Functional Cross-Checking (PDF Verification):</b> We ran thorough manual testing to verify that every single requirement stated in the Capstone Project PDF worked flawlessly:

   <b>+ Interactive Links:</b> Tested the smooth-scroll navigation from the Hero CTA buttons to the lower sections.
   
   <b>+ Multimedia Assets:</b> Confirmed the video player successfully loops and auto-plays without requiring user interaction.

   <b>+ Dynamic API Data:</b> Verified that the ImageGallery accurately fetches data from the API and populates the layout dynamically.
   
   <b>+ Form Validation:</b> Tested the input fields on the Contact Form to ensure incorrect entries throw validation errors before allowing submission.
   
<b>- Responsive Breakpoint Auditing:</b> Using browser developer tools, we tested the interface across multiple simulated devices (Mobile, Tablet, Desktop). We verified that the fluid grid system handles small viewports cleanly and confirmed that the <PlanetTable> automatically hides on mobile view as instructed.

<b>- Production Deployment:</b> With all testing criteria successfully passed, the final codebase was deployed live to Vercel (https://group-18-capstone-project.vercel.app/), ensuring full public accessibility and continuous deployment stability

<h3>🎓 Capstone Learning Objectives Achieved</h3>

<b>1. State & Component Management:</b> Broken down complex UI mockups into reusable React components.

<b>2. Git Collaboration:</b> Successfully managed feature-driven branching workflows, pull requests, and real-time merge conflict resolutions.

<b>3. Responsive Engineering:</b> Translated static, desktop-first design briefs into a fluid, multi-device web experience.
