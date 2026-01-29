# PROJECT: Liberry Marketing Website - Design Handover

## 1. EXECUTIVE SUMMARY
**Product:** Liberry (iOS/iPadOS App)
**Goal:** Convert visitors to app users by showcasing the premium, distraction-free, and feature-rich experience of Liberry.
**Target Audience:** Book lovers, students of history/philosophy, and power readers who value ownership and privacy.
**Core Vibe:** "The Digital Library of Alexandria." Elegant, Intellectual, Timeless, yet Modern and Fast.

---

## 2. VISUAL IDENTITY SYSTEM

### Color Palette
The site should mirror the app's reading themes but elevated for web presentation.
*   **Primary Background (Paper):** `#FDFBF7` (Soft, warm off-white, reminiscent of high-quality book paper)
*   **Primary Text (Ink):** `#2D2D2D` (Soft charcoal, never pure black)
*   **Accent/Brand (Amber/Gold):** `#D4AF37` (Used for Audiobooks highlights, "Pro" feelings, and primary CTAs)
*   **Secondary Background (Dark Leather):** `#1A1A1A` (For the "Dark Mode" feature section or footer)
*   **Success/System:** `#4A6C6F` (Muted teal for "Downloaded/Sync" iconography)

### Typography
*   **Headings (Serif):** *Playfair Display* or *Merriweather*.
    *   Use for all section titles and the hero tagline. High contrast, elegant tracking.
*   **Body/UI (Sans-Serif):** *Inter* or *Proxima Nova*.
    *   Use for features lists, technical specs, and footer. Clean and readable.

### Imagery & Assets
*   **Device Frames:** Use high-fidelity iPhone 15 Pro and iPad Pro mockups. Minimalist bezels.
*   **Shadows:** Deep, soft diffusion shadows (`box-shadow: 0 20px 40px -10px rgba(0,0,0,0.15)`) to give devices a "floating" feel.
*   **Backgrounds:** Subtle grain textures or faint typographic overlays (e.g., faded text of *The Odyssey*) behind sections to add depth without clutter.

---

## 3. PAGE STRUCTURE (Single Page Scroll)

### Section A: HERO ("The Hook")
*   **Layout:** Split screen (Desktop) / Stacked (Mobile).
*   **Left (Copy):**
    *   **Headline:** "Just You and the World’s Greatest Stories."
    *   **Sub-headline:** "No subscriptions. No ads. Tens of thousands of free public domain audiobooks and ebooks in your pocket."
    *   **CTA Button:** "Download on the App Store" (Official Apple Badge scale 1.2x).
*   **Right (Visual):**
    *   A slightly tilted, floating iPhone mockup showing the **Library Screen** populated with beautiful covers (The Great Gatsby, Moby Dick).
*   **Interaction:** On load, the iPhone floats up gently (`translateY`), and the book covers inside the screen "parallaxes" slightly as the mouse moves.

### Section B: THE PHILOSOPHY (Value Prop)
*   **Background:** `#F5F5F7` (Light Grey).
*   **Layout:** 3-Column Grid of Icons + Text.
*   **Content:**
    1.  **Icon:** (Infinity Symbol or Open Lock) **Forever Free Content** - "Access 60,000+ titles from Project Gutenberg and LibriVox. Zero quotas."
    2.  **Icon:** (Gavel/Law) **One-Time Purchase** - "Buy the app once. Own your experience forever. No monthly drip-feed."
    3.  **Icon:** (Shield) **Private & Local** - "Your library is yours. Export your data, backup your notes. You own your files."

### Section C: FEATURE SHOWCASE (Scroll-triggered Reveal)

#### 1. "The Reader" (Focus: Aesthetics)
*   **Visual:** iPad Pro mockup in **Landscape** showing the Two-Column reading mode.
*   **Copy:** "A sanctuary for reading."
*   **Bullets:** Customizable fonts, Sepia/Dark themes, smart progress tracking.
*   **Interaction:** A toggle switch on the website allows the user to switch the website section's theme from Light to Dark, which *also* changes the screenshot inside the iPad mockup.

#### 2. "The Listener" (Focus: Audiobooks)
*   **Visual:** iPhone mockup showing the **Audiobook Player**.
*   **Copy:** "Listen without limits."
*   **Details:**
    *   "0.5x - 4.0x Speed Control" (Show a small looping video/gif of the slider moving).
    *   "Offline-First" (Icon of a cloud with a checkmark).
    *   "Seamless Miniplayer" (Show the miniplayer floating at the bottom).
*   **Accent:** Use the Brand Gold (`#D4AF37`) for accents here to distinguish Audio features.

#### 3. "The Scholar" (Focus: Organization)
*   **Visual:** A staggered composition of three screens:
    1.  **Back:** The Book Text with highlights.
    2.  **Middle:** The "Notes & Highlights" export sheet (CSV/TXT).
    3.  **Front:** The "Character Map" screen.
*   **Copy:** "Build your external memory."
*   **Key Feature:** "Connect your thoughts. Link characters to quotes. Export everything to Obsidian, Notion, or plain text."

### Section D: DISCOVERY (The Content)
*   **Layout:** A horizontal scrolling "carousel" of book covers.
*   **Heading:** "Curated Collections."
*   **Content:** Show collections mentioned in the app:
    *   *The Intro 100*
    *   *The Russian Soul*
    *   *Shadows & Spectres*
    *   *Voices from the Veil*
*   **Visual:** High-res book covers with slight drop shadows.

### Section E: FOOTER
*   **Background:** Dark Charcoal (`#2D2D2D`).
*   **Text Color:** White (`#FFFFFF`).
*   **Content:**
    *   Large "Liberry" logo serif.
    *   Links: Support, Privacy Policy (essential for App Store), Terms.
    *   "Built by [Developer Name/Studio]."
    *   Final "Download on the App Store" Badge.

---

## 4. TECHNICAL & IMPLEMENTATION NOTES

### Framework Recommendation
*   **Next.js (React)** + **Tailwind CSS**.
    *   Why: Fast, great for image optimization, easy to deploy to Vercel.

### Animations (Framer Motion)
*   **Fade-in Up:** All text elements should gently fade in and move up as they enter the viewport.
*   **Parallax:** The hero image should move slightly slower than the scroll speed.
*   **Sticky Scroll:** For the "Feature Showcase," consider sticking the text on the left while the device images on the right fade/swap as the user scrolls.

### Responsiveness
*   **Mobile First:** Stack everything vertically.
*   **Touch Targets:** Ensure buttons are 44px+ height.
*   **Images:** Use `srcset` for retina screens. The screenshots must be crisp.

### Assets Folder Structure
(Junior Dev to create)
/public
  /images
    /mockups (hero-iphone.png, reader-ipad.png, audio-player.png)
    /icons (features icons)
    /covers (book cover art)
