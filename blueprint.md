# K-Culture News App Blueprint

## Overview

This document outlines the project for creating a **K-Culture News App**. The app provides users with a curated feed of real-time news and articles related to Korean culture, allowing them to select specific areas of interest.

The application is built using modern, framework-less web technologies (HTML, CSS, JavaScript) and features a vibrant, dynamic, and responsive design suitable for a modern K-culture audience. The design is mobile-first, ensuring a seamless experience on all devices.

## Data Source

*   **API Provider:** [NewsAPI.org](https://newsapi.org)
*   **Plan:** Developer (Free)
*   **Content:** Real-time news articles fetched by keyword search (e.g., "K-Pop", "K-Drama"). All articles link back to their original source to respect copyright.

## Design Philosophy

The design moves away from a minimalist, monochrome aesthetic to one that is bold, colorful, and engaging, reflecting the energy of K-culture.

*   **Color Palette:** A deep, premium navy base with vibrant accent colors like **energetic pink, vivid teal, and bright yellow** for interactive elements.
*   **Typography:** A stylish, modern font for headlines and a readable font for body text.
*   **Visual Effects:** A "frosted glass" effect (`backdrop-filter`) for depth, and a **"glow" effect** on interactive elements.
*   **Layout:** A responsive, multi-column card-based layout that adapts to different screen sizes.

## Core Features

*   **Interest Selection:** Users can choose from: **K-Pop, K-Drama, K-Food, and K-Beauty**.
*   **Real-Time Personalized Feed:** The main feed displays the latest news articles fetched from NewsAPI.org based on the user's selected interest.
*   **Responsive UI:** The application layout adapts gracefully from mobile phones to desktops.

---

## **Phase 1: Initial Design & Structure (Completed)**

*   **Objective:** Create the foundational structure and a vibrant, modern design for the app.
*   **Steps:**
    1.  **Define Blueprint:** Established the project's vision, design, and features in `blueprint.md`.
    2.  **Update Content & Logic (`main.js`):** Changed `interests` array and replaced placeholder content with K-culture-themed dummy data.
    3.  **Revamp Design System (`style.css`):** Implemented the new color palette, fonts, "glow" effect, and responsive layouts.
    4.  **Update HTML Structure (`index.html`):** Updated the page title and header to reflect the app's identity.

## **Phase 2: Real-Time News Integration (In Progress)**

*   **Objective:** Replace the static dummy data with a live feed of news from an external API.
*   **Steps:**
    1.  **API Key Acquisition:** Acquired a free developer API key from NewsAPI.org.
    2.  **Update Blueprint (Completed):** Documented the use of NewsAPI.org as the official data source.
    3.  **Implement API Logic (`main.js`):**
        *   Store the API key securely.
        *   Create a function to `fetch` news data based on the selected interest.
        *   Remove the old `dummyArticles` object.
        *   Update the `displayNews` and `createNewsArticle` functions to process and render the live data from the API.
    4.  **Error Handling & Placeholders:** Implement messages for when news articles can't be loaded or none are found.
