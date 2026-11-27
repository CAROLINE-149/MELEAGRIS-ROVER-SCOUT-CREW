SCOUTS EVENTS, NEWSLETTERS & DOCUMENTS PAGE

FILES
- index.html: page structure
- style.css: green, black and white styling
- script.js: event/news/document rendering, searching, filters and demo subscription
- documents/: put your real downloadable documents here
- images/: put your own images here

HOW TO RUN
1. Extract the ZIP file.
2. Open the scouts_events_newsletters folder in VS Code.
3. Open index.html in your browser (or use the VS Code Live Server extension).

HOW TO ADD YOUR OWN PICTURES
1. Copy your picture into the images folder, e.g. images/scouts-hero.jpg.
2. In style.css, find the .hero rule and the example background-image comment.
3. Replace the current background-image line with:
   background-image: linear-gradient(90deg, rgba(5,20,11,.82), rgba(5,20,11,.25)), url("images/scouts-hero.jpg");
4. For event/news cards, you can replace the emoji/icon placeholders with <img> elements and add your image paths.

HOW TO ADD REAL DOCUMENTS
1. Copy each PDF/Word file into the documents folder.
2. Open script.js and edit the documents array near the top.
3. Change each file property to the exact file path, e.g. "documents/member-registration.pdf".
4. Change title, category, type and details to match your document.
5. For newsletter downloads, edit the newsletters array and set each file path to the actual newsletter file.

HOW TO EDIT EVENTS AND NEWSLETTERS
Edit the events and newsletters arrays near the top of script.js. Add or remove objects and change the sample titles, dates, descriptions and locations.

IMPORTANT LIMITATION
This is a front-end website. The subscription form stores email addresses only in the visitor's browser using localStorage. It does not send emails to you or save subscribers to a shared database. For a live website with real subscriptions, user accounts, or admin event/document uploads, you will need a backend/database and suitable security.
