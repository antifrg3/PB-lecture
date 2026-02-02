# K-Culture News App Blueprint

## Overview

This document outlines the project for creating a **K-Culture News App**. The app will provide users with a curated feed of news and articles related to Korean culture, allowing them to select specific areas of interest.

The application will be built using modern, framework-less web technologies (HTML, CSS, JavaScript) and will feature a **vibrant, dynamic, and responsive design** suitable for a modern K-culture audience. The design will be mobile-first, ensuring a seamless experience on all devices.

## Design Philosophy

The design moves away from a minimalist, monochrome aesthetic to one that is bold, colorful, and engaging, reflecting the energy of K-culture.

*   **Color Palette:** The palette will be inspired by a modern interpretation of traditional Korean colors (오방색 - Obangsaek). It will use a deep, premium navy as a base, with vibrant accent colors like **energetic pink, vivid teal, and bright yellow** for interactive elements, creating a visually rich experience.
*   **Typography:** A stylish, modern font will be used for headlines to capture attention, while the body text will prioritize readability.
*   **Visual Effects:** The "frosted glass" effect (`backdrop-filter`) will be maintained for a sense of depth, but enhanced with a subtle **"glow" effect** on interactive elements like buttons and cards to make them feel more alive.
*   **Layout:** A responsive card-based layout will be used. On mobile devices, cards will appear in a single column for easy scrolling. On larger screens, the layout will expand to a multi-column grid.

## Core Features

*   **Interest Selection:** Users can choose from a list of K-culture topics: **K-Pop, K-Drama, K-Food, and K-Beauty**.
*   **Personalized Feed:** The main feed will display news articles based on the user's selected interests.
*   **Responsive UI:** The application layout will adapt gracefully to different screen sizes, from mobile phones to desktops.

## Project Plan: K-Culture Redesign

This plan outlines the steps to transform the existing application into the K-Culture News App.

1.  **Update `blueprint.md` (Completed):** Redefine the project's vision, design, and features.
2.  **Update Content & Logic (`main.js`):**
    *   Change the `interests` array to `['K-Pop', 'K-Drama', 'K-Food', 'K-Beauty']`.
    *   Replace the placeholder `dummyArticles` with new content and images relevant to K-culture.
3.  **Revamp Design System (`style.css`):**
    *   Implement the new color palette using CSS variables.
    *   Update fonts and typography.
    *   Refine the styles for cards, buttons, and layout to match the new design, including the "glow" effect.
    *   Enhance media queries to ensure a flawless responsive experience on mobile devices.
4.  **Update HTML Structure (`index.html`):**
    *   Change the page `<title>` to "K-Culture News".
    *   Update the header text to reflect the new app identity.

