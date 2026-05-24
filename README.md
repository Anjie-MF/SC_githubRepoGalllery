# GitHub Repo Gallery

A dynamic single-page app that fetches and displays a GitHub user's public repositories via the GitHub REST API. Built to practice working with external APIs and async JavaScript.

[Live Demo](#) 

---

## About the Project

This project was my introduction to consuming a third-party API. The goal was to go beyond static content and build something that pulls real, live data then displays it dynamically without a page reload. It pushed me to get comfortable with asynchronous JavaScript, reading API documentation, and manipulating the DOM based on what comes back from a fetch request.

---

## Features

- Fetches a GitHub user's profile info and public repositories on load
- Real-time search — filters the repo list as you type, no reload needed
- Click any repo to load a detail view: description, default branch, languages used, and a link to GitHub
- Fully responsive layout across mobile and desktop

---

## Built With

- **HTML5** — Semantic markup
- **CSS3** — Flexbox-based layouts, custom styles, no CSS framework
- **JavaScript (ES6+)** — Vanilla JS, no libraries or frameworks
- **Fetch API** — All data loaded asynchronously with `async/await`
- **GitHub REST API** — Users, repos, and languages endpoints
- [Google Fonts](https://fonts.google.com/) — Open Sans & Oswald
- [Font Awesome](https://fontawesome.com/) — GitHub icon in the header

---

## What I Learned

- How to read API documentation and map JSON response data to the DOM
- Chaining multiple `async/await` fetch calls — profile loads first, then repos, then repo detail + languages on click
- Why async/await is cleaner than `.then()` chaining for sequential requests
- Real-time filtering with `input` events and toggling `classList` without a framework
- Showing and hiding UI sections based on user interaction

---

## Getting Started

No build tools or dependencies required just clone and open.

```bash
git clone https://github.com/Anjie-MF/github-repo-gallery.git
cd github-repo-gallery
open index.html
```

Or drag `index.html` into any browser.

---

## Project Structure

```
├── index.html          # Entry point — all markup lives here
├── css/
│   ├── styles.css      # All custom styles
│   └── normalize.css   # Cross-browser reset
└── js/
    └── script.js       # All app logic — fetch, render, filter, navigate
```

---

## Roadmap / What I'd Improve Next

- [ ] Add error handling for failed API requests or invalid usernames
- [ ] Make the username configurable via a search input instead of hardcoded
- [ ] Add pagination or infinite scroll for users with many repos
- [ ] Improve accessibility (keyboard navigation, focus management on view switch)
- [ ] Add loading states while fetch requests are in flight

---

## Author

Anjie · [GitHub](https://github.com/Anjie-MF) · [LinkedIn](https://www.linkedin.com/in/anjiemay23/)