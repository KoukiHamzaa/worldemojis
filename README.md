# Emoji World (عالم الإيموجي) - Interactive Web Version

This project is an interactive web-based replica of the "Emoji World" (عالم الإيموجي) board game. It aims to provide a digital version of the game for testing and demonstration purposes, with the eventual goal of creating printable assets.

## Project Status (as of May 27, 2025 - 20:29 UTC)

The website currently features:
*   A display of the game board.
*   Interactive illustrated cards and prompt cards.
*   Card flipping animation: Clicking a card reveals its corresponding pair.
*   **Corrected Card Orientation:**
    *   Front side (illustration or prompt text) is displayed vertically (portrait).
    *   Back side (prompt text or illustration) is displayed horizontally (landscape).
    *   The text layout on the horizontal back matches the reference image (Arabic text -> Star separator -> English text).
    *   Card expansion issue during flip is fixed.
*   Bilingual support (English/Arabic) with a language toggle.
*   Yamli API integration for improved Arabic text rendering.
*   Custom kid-friendly font ("El Messiri") with specific colors for the text on card backs.

**Latest Deployment:** [https://qzwnapmd.manus.space](https://qzwnapmd.manus.space)

## Setup Instructions

1.  **Prerequisites:** Node.js (v20.18.0 or later) and npm.
2.  **Clone the repository:** `git clone https://github.com/KoukiHamzaa/worldemojis.git`
3.  **Navigate to the project directory:** `cd worldemojis` (or `cd emoji-world-game-updated` if working locally)
4.  **Install dependencies:** `npm install`
5.  **Run the development server:** `npm run dev`
6.  **Build for production:** `npm run build` (Output will be in the `dist` folder)

## Development History & Workflow

This project evolved from an initial request to replicate the physical board game based on provided images and text descriptions.

*   **Initial Replication:** Generated game assets (board, sample cards) and provided them in a zip file and later as a printable PDF.
*   **Web Version:** Created a React (TypeScript + Vite) website to display the game components interactively.
*   **Deployment:** Deployed the website to a permanent URL using the Manus platform.
*   **Iterations based on User Feedback:**
    *   Improved card flipping logic (cards flip to matching pair).
    *   Enhanced Arabic language support (RTL, fonts, Yamli API integration).
    *   Implemented bilingual text display on cards.
    *   Adjusted card back font to be kid-friendly and colorful ("El Messiri").
    *   Redesigned card back layout based on reference image (Arabic -> Star -> English).
    *   Fixed card expansion bug during flip.
    *   **Corrected Card Orientation:** Implemented vertical front / horizontal back as requested.

**New Workflow (Effective May 27, 2025):**
*   All significant steps and changes must be committed to this GitHub repository.
*   This README file must be updated with details of each step taken, ensuring the project is well-documented for future maintenance or handover.

## Key Technologies

*   React
*   TypeScript
*   Vite
*   Tailwind CSS
*   Shadcn/ui (for Tabs component)
*   Yamli API (via custom integration script)
*   Google Fonts (El Messiri, Noto Sans Arabic, Noto Kufi Arabic)
*   Git / GitHub (for version control and backup)
*   Manus Platform (for deployment)

## Next Steps

1.  Await final user feedback on the current version ([https://jirhpfgp.manus.space](https://jirhpfgp.manus.space)).
2.  Make any final adjustments based on feedback.
3.  Finalize the project and ensure all assets (code, documentation, deployment link) are delivered.


*   **Gameboard Redesign (May 27, 2025 - based on feedback):**
    *   Addressed detailed feedback comparing the previous implementation to the original reference images (`1000206422.png`, `1000206423.png`).
    *   Implemented a true two-tone vertical split for the main board area (cyan left, yellow right) using CSS gradients and distinct background colors in `src/components/GameBoard.tsx`.
    *   Added subtle, distinct background textures (dots/stars for cyan, dots/swirls for yellow) to each half for visual depth, replacing the previous uniform gradient.
    *   Corrected the placement and orientation of central card deck placeholders to match the reference: one horizontal stack on the left, two vertical stacks on the right.
    *   Integrated the key Arabic text elements: "عالم" prominently across the central horizontal divide and "روپولي" vertically on the left side, styled according to the reference.
    *   Refined the styling of the perimeter card slots for better integration with the two-tone background and added subtle hover effects.
    *   Adjusted the central art placeholder styling for better visual hierarchy.
    *   Ensured the overall layout and thematic elements (color contrast, text placement, component arrangement) more closely resemble the original physical game board.
