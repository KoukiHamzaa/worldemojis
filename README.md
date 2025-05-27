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

**Latest Deployment:** [https://klszxafu.manus.space](https://klszxafu.manus.space)

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


*   **Gameboard Refinements (May 27, 2025 - based on further feedback):**
    *   Addressed second round of feedback focusing on visual polish and fidelity.
    *   Added the vertical Arabic text "روپولي" to the left side of the central area, matching reference placement.
    *   Enhanced the styling of the central art placeholder with gradients, borders, and shadows for more visual weight.
    *   Implemented subtle background textures (star-like pattern for blue, swirl-like for yellow) using CSS gradients in the `TexturedBackground` helper component.
    *   Refined perimeter slot styling (removed borders, used inner shadows, slight rounding, transparency) to make them feel more integrated into the board.
    *   Improved the central "عالم" text styling with increased font weight (`font-black`) and a more pronounced drop shadow for greater impact.
    *   Added subtle shadows to perimeter slots and other elements to enhance overall depth and polish.
    *   Fixed JSX syntax errors that were causing build failures.
