# 📸 Oldagram – Social Feed for Artists

[![Scrimba](https://img.shields.io/badge/Scrimba-Solo%20Project-7c3aed?style=flat-square&logo=scrimba)](https://scrimba.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-Semantic-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-Animations%20%26%20Flexbox-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Vite](https://img.shields.io/badge/Vite-Bundler-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)

An interactive, responsive Instagram clone featuring historical painters, built from scratch as a **Solo Project** for Scrimba's **[Frontend Developer Career Path](https://scrimba.com/fullstack-path-c0fullstack)**.

---

## 📑 Table of Contents

- [Overview](#-overview)
- [The Challenge](#-the-challenge)
- [Key Features](#-key-features)
- [Stretch Goals Achieved](#-stretch-goals-achieved)
- [Tech Stack & Concepts Learned](#-tech-stack--concepts-learned)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Author](#-author)

---

## 🧐 Overview

**Oldagram** is a fun twist on Instagram where legendary artists from the past—such as Vincent van Gogh, Gustave Courbet, and Joseph Ducreux—share their portraits, thoughts, and crypto banter with the world.

The purpose of this solo project was to step away from guided tutorials and independently implement core JavaScript DOM manipulation, event handling, dynamic rendering, and modern CSS techniques according to a strict design spec.

---

## 🎯 The Challenge

The challenge provided by Scrimba required:
- [x] Recreating the design from the provided Figma specifications.
- [x] Storing post details (name, username, location, avatar, post image, caption, and likes) in a JavaScript data structure.
- [x] Dynamically rendering the posts feed using JavaScript without hardcoding content in HTML.
- [x] Implementing an interactive like counter that increments when users click the heart icon.

---

## 🚀 Key Features

- **Dynamic Feed Rendering**: Iterates through post data and injects semantically structured HTML into the DOM via template literals.
- **Selective Post Updates (Optimized DOM)**: Uses HTML5 `data-index` attributes and single-post DOM targeting (`likes-${index}`) to increment likes without re-rendering the entire feed.
- **Dual-Tap / Click Liking**: Likes can be registered by clicking either the like icon or the main artwork image directly.
- **Formatted Metrics**: Formats like counts with localized number separators (`toLocaleString()`).
- **Interactive Micro-Animations**:
  - Heartbeat pulsing keyframe animation on hover.
  - Custom CSS filters transforming the monochrome icon into an Instagram-red glow.
  - Tactile spring-back active state when pressed.

---

## 🌟 Stretch Goals Achieved

- [x] **Like via Image**: Users can click the post image to increment likes in addition to the heart button.
- [x] **Smooth Transitions & Keyframe Heartbeat**: Added custom CSS keyframes (`heartBeat`) with dynamic scale and color glowing effect.
- [x] **Targeted Re-rendering**: Updated state and specific DOM elements in-place instead of rewriting the entire innerHTML on each user interaction.

---

## 🧠 Tech Stack & Concepts Learned

| Technology | Implementation & Skills Practiced |
| :--- | :--- |
| **JavaScript (ES6+)** | Template literals, array methods, event delegation (`event.target`), HTML5 `dataset` API, state management |
| **HTML5** | Semantic structure (`<header>`, `<main>`, `<section>`), data attributes, accessible meta tags |
| **CSS3** | Flexbox for layout alignment, `@keyframes` animation, CSS filters (`invert`, `sepia`, `saturate`, `hue-rotate`, `drop-shadow`), pseudo-classes (`:hover`, `:active`) |
| **Vite** | Modern frontend development server and asset bundling |

---



## 📁 Project Structure

```text
Scrimba_Solo_Project_Oldagram/
├── images/             # Avatars, post artwork, and UI icons
├── index.html          # Main HTML entry point
├── index.css           # Styling, Flexbox layout, and keyframe animations
├── index.js            # Post data array, render logic, and like handlers
├── package.json        # Project metadata and npm scripts
├── vite.config.js      # Vite build configuration
└── README.md           # Documentation
```

---

## 👨‍💻 Author

- **Maciej Nawrot** – [GitHub Profile](https://github.com/macien12)
- Built as part of the **Scrimba The Fullstack Developer Path** 💜

