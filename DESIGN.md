---
name: Service Record — Worawat Boonrueng
description: A personal resume built as a working service logbook on a dark workbench.
colors:
  workbench: "#071725"
  workbench-raised: "#0b2236"
  cloth: "#0c2236"
  cloth-deep: "#0a1f33"
  paper: "#f3efe3"
  paper-raised: "#fbf8ee"
  paper-shade: "#eae4d4"
  ink: "#132a42"
  ink-soft: "#46586a"
  ink-faint: "#566574"
  ink-hover: "#1d3d5d"
  cyan: "#0a6d87"
  cyan-deep: "#085a70"
  cyan-bright: "#19a7c4"
  cyan-wash: "rgba(10, 109, 135, 0.08)"
  stamp: "#a93226"
  manila: "#d9bd8f"
  manila-deep: "#b3925c"
  manila-hover: "#e3cba4"
  paper-edge: "#d7cab0"
  rule: "rgba(19, 42, 66, 0.16)"
  rule-strong: "rgba(19, 42, 66, 0.32)"
  ledger-grid: "rgba(19, 42, 66, 0.055)"
  workbench-ink: "#8494a3"
  workbench-text: "#93a5b5"
  white: "#ffffff"
  black: "#000000"
typography:
  display:
    fontFamily: "Chakra Petch, Anuphan, sans-serif"
    fontSize: "clamp(1.65rem, 2.5vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  hero:
    fontFamily: "Anuphan, 'Noto Sans Thai', Sarabun, sans-serif"
    fontSize: "clamp(2.2rem, 3.2vw, 3.2rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Anuphan, 'Noto Sans Thai', Sarabun, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono, Consolas, monospace"
    fontSize: "10px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.12em"
rounded:
  paper: "1px"
  control: "2px"
  tab: "5px"
  cover: "4px"
spacing:
  page: "clamp(26px, 3.2vw, 44px)"
  section: "clamp(30px, 4vw, 48px)"
  rhythm: "24px"
  touch: "44px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "10px 18px"
  button-primary-hover:
    backgroundColor: "{colors.ink-hover}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "10px 18px"
  index-tab:
    backgroundColor: "{colors.manila}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tab}"
    padding: "9px 12px 9px 14px"
  index-tab-active:
    backgroundColor: "{colors.paper-raised}"
    textColor: "{colors.ink}"
  tag:
    backgroundColor: "transparent"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.control}"
    padding: "2px 7px"
  work-sheet:
    backgroundColor: "{colors.paper-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.paper}"
    padding: "24px"
---

# Design System: Service Record — Worawat Boonrueng

## Overview

**Creative North Star: "The Service Logbook"**

The site is a hardback service log dropped open on a dark workbench. Paper is the page itself, never a card floating on a page: the navy cloth cover, the grid paper, the manila index tabs, the tape holding the portrait, and one red rubber stamp make the record feel maintained rather than decorated. The world stays quiet so the content can be loud: a recruiter should remember a working record, not a theme.

The logbook devices are functional, not costume. The right-edge tabs are the navigation; the project register is a real tablist with keyboard support; the selected work order is a taped-in sheet; the POS test login is printed where it can be used. On mobile the spread stacks into one page and a compact "3 live systems" proof strip keeps the work inside the first viewport.

The voice is Thai-first and direct. The record is optimistic without hype: every claim is visible in the page or one click away.

**Key Characteristics:**

- Warm grid paper as the ground, framed by a navy cloth cover on a dark workbench.
- Manila index tabs on the right edge; a sticky rail on desktop, a paper drawer on mobile.
- Squared technical display type, calm Thai body type, and mono record labels.
- One red availability stamp; cyan is reserved for the index, links, and live states.
- Work orders with live demos and a working POS test login.
- A single light world; no dark-mode toggle in this system.

## Colors

A navy-and-paper palette with one warm manila material and one dry red stamp: the colors of a maintenance record, not a SaaS dashboard.

### Primary

- **Service Ink** (#132a42): body text, rules, primary buttons, meter fills, headings. It is the ink on the page and the default authority.
- **Service Ink Soft** (#46586a): descriptions and secondary copy. It stays tinted toward the ink hue, never gray.
- **Service Ink Faint** (#566574): document labels, page numbers, captions. It still clears 4.5:1 on paper.
- **Service Ink Hover** (#1d3d5d): the primary button's hover fill; one step deeper, never a new hue.

### Secondary

- **Index Cyan** (#0a6d87): links, active index hole, category labels, live badges, focus rings on paper. It marks the working path through the record.
- **Index Cyan Bright** (#19a7c4): focus rings and progress on the dark workbench only.
- **Index Cyan Deep** (#085a70): the primary demo button's hover fill.

### Tertiary

- **Stamp Red** (#a93226): the availability stamp and the test-login label. It is a human mark, not a status color.
- **Manila** (#d9bd8f): the index tabs and their hover state.
- **Manila Deep** (#b3925c): tab borders and the tab's physical edge.
- **Manila Hover** (#e3cba4): the index tab's hover face.
- **Paper Edge** (#d7cab0): the cut edge of the photo and the active tab.

### Neutral

- **Ledger Paper** (#f3efe3): the page ground, with a 24px grid rule at `rgba(19, 42, 66, 0.055)`.
- **Raised Paper** (#fbf8ee): the work-order sheet, the portrait paper, and the active tab.
- **Paper Shade** (#eae4d4): the test-login box and tonal recesses.
- **Workbench** (#071725): the desk around the book.
- **Cloth** (#0c2236): the book cover frame, with a subtle woven line.
- **Workbench Ink** (#8494a3): the "INDEX" rail label on the dark desk.
- **Workbench Text** (#93a5b5): the site footer on the dark desk.

### Named Rules

**The Paper Ground Rule.** The page is paper. Do not turn the paper into a stack of rounded cards; sections are ruled records, tabs, and taped sheets.

**The One Stamp Rule.** Red appears once, as the availability stamp. If red is used for status, errors, or decoration, the mark loses its meaning.

**The Index Rule.** Cyan marks the current place and the live path: the active tab hole, links, focus, and live badges. It never becomes a gradient or a glow.

## Typography

**Display Font:** Chakra Petch (with Anuphan fallback)
**Body Font:** Anuphan (with Noto Sans Thai, Sarabun fallback)
**Label/Mono Font:** JetBrains Mono (with system monospace fallback)

**Character:** A technical log sheet with a human hand. Chakra Petch supplies the squared instrument-panel voice for section titles and work orders; Anuphan keeps Thai paragraphs calm and readable; JetBrains Mono is the record label, the code, and the number, never the Thai sentence.

### Hierarchy

- **Display** (600, clamp 1.65–2.25rem, 1.12): section titles and the primary page identity.
- **Name** (Anuphan 700, clamp 2.2–3.2rem, 1.0): the Thai name only. It is the one place the techno face does not speak.
- **Title** (600, 1.0–1.6rem, 1.2): work-order titles, experience roles, skill groups.
- **Body** (400, 0.9–1rem, 1.7, max 45ch in the hero): bio, descriptions, contact copy.
- **Label** (400, 10px, 0.12em, uppercase): record lines, metadata, tags, page numbers, credential rows.

### Named Rules

**The Name Rule.** Set the Thai name in Anuphan 700. The display face may run the section titles; it never runs the name a recruiter has to read first.

**The Ledger Rule.** Mono type is for metadata, codes, numbers, and status. Thai body copy is always Anuphan.

**The Two-Step Rule.** A heading is larger and heavier than its body; do not create hierarchy with color alone.

## Layout

The desktop is a two-page spread inside a cloth cover, with a 128px index rail outside the page on the right. The shell is 1180px wide; the cover adds 10px top, 12px sides, and 14px bottom; the paper is a two-column grid with a 54px gutter shadow. Pages use `clamp(26px, 3.2vw, 44px)` block padding and `clamp(30px, 4vw, 58px)` inline padding. Section heads carry a 2px ink rule; sections are separated by a dashed record rule.

At 1120px the index rail is replaced by a sticky top bar and a fixed paper drawer. At 900px the spread becomes a single page: the two pages stack with a dashed divider. At 640px the portrait is 112px, the work register is vertical, and page padding is 22px. At 380px the portrait is 92px, the page padding is 16px, and the mobile brand shortens to "W. Boonrueng".

The rhythm is 24px, the paper grid. More space sits above a section title than below it. Touch targets are 44px minimum; the index tabs are 46px.

## Elevation & Depth

A hybrid of physical layers and offset shadows, never glass. The workbench is a dark, matte field; the cloth cover sits on it with a deep ambient shadow; the paper sits inside the cover with a fine contact shadow; the gutter is a soft shadow across the fold. Tape, the portrait, and the work-order sheet are physical objects with small offset shadows, not floating cards. Blur is not used as decoration.

### Shadow Vocabulary

- **Cover** (`0 34px 80px rgba(0,0,0,0.5), 0 2px 6px rgba(0,0,0,0.35)`): the book on the desk.
- **Paper** (`0 2px 10px rgba(0,0,0,0.35)`): the page inside the cover.
- **Object** (`0 12px 24px rgba(19,42,66,0.13)`): taped sheets and the portrait.
- **Tab** (`0 2px 5px rgba(0,0,0,0.28)`): the manila index tabs.
- **Tape** (`0 2px 4px rgba(19,42,66,0.1)`): the translucent tape strips.

### Named Rules

**The Physical Layer Rule.** Every shadow belongs to an object that could exist on the desk: cover, paper, tape, tab, photo. No zero-offset glows.

## Shapes

Paper is almost square (1px radius) because cut paper has a cut edge, not a pill. Controls use a 2px engineering radius. Index tabs use 5px on the outer edge and a square attached edge. The cover is 4px. Tape strips, the portrait, and the availability stamp are intentionally rotated by 1–6 degrees. Rules are hairline, dashed, or dotted; section divisions are perforations. There are no pill buttons, no floating rounded cards, and no clipped polygons.

## Components

### Buttons

- **Shape:** 2px radius, 44px minimum height, 10px 18px padding.
- **Primary:** Service Ink fill, paper text; hover lifts 1px and deepens to #1d3d5d.
- **Secondary:** transparent, 1px ink border; hover gets the cyan wash.
- **Focus:** 2px Index Cyan outline with 3px offset; 19a7c4 on the dark workbench.
- **Icons:** 15–18px line icons from one set, never emoji or glyphs.

### Chips / Tags

- **Style:** transparent, 1px rule-strong border, 2px radius, 10px mono uppercase, 22px minimum height.
- **State:** no filled selected chip; selection is a tab or a rule, not a colored pill.

### Cards / Containers

- **Work order sheet:** raised paper, 1px paper edge, 24px padding, one tape strip, 0.18s panel fade. It is a taped sheet, not a card.
- **Request slip:** transparent paper with a 1px rule and dotted rows; no shadow.
- **Credential box:** paper shade with a dashed rule; test logins print in ink blocks.

### Navigation

- **Desktop:** fixed-width right rail of manila index tabs, sticky at 34px, punched hole at the left of each tab. Active tab becomes raised paper and its hole turns cyan.
- **Mobile:** sticky dark bar with the W mark and "สารบัญ"; the drawer is paper, index-labelled, focus moves to its first link, Escape closes, and the main content becomes inert while it is open.
- **Scroll spy:** the tab follows the section in view; anchors respect `scroll-padding-top`.

### Work Register

- **Style:** a real tablist of three full-width rows; the selected row takes the cyan wash, the order number turns ink, and the detail sheet changes on the right.
- **Keyboard:** Arrow Up/Down/Left/Right, Home, and End move selection and focus.
- **Detail:** title, role, status, description, proof line, tech tags, credentials, demo and GitHub.

### Portrait & Stamp

- **Portrait:** a paper frame with a translucent tape strip, rotated -1.4deg, real photo, FIG. caption below.
- **Stamp:** 3px Stamp Red border, rotated -6deg, multiply blend, one press animation; it sits on the photo and never covers the role text.

## Do's and Don'ts

### Do:

- **Do** keep paper as the page ground and the dark workbench outside it.
- **Do** use the right-edge tabs as the desktop index and the paper drawer as the mobile index.
- **Do** set the Thai name in Anuphan 700 and section titles in Chakra Petch.
- **Do** keep the red stamp rare and literal: availability, not decoration.
- **Do** keep the live project demos and working test logins visible.
- **Do** keep the mobile "3 live systems" proof strip in the first viewport.
- **Do** hold 44px touch targets, visible focus, reduced motion, and Thai line lengths.

### Don't:

- **Don't** turn sections into equal rounded cards or nested cards.
- **Don't** use gradient text, glass panels, emoji icons, or a colored side stripe on rows.
- **Don't** set Thai body copy in the mono face.
- **Don't** add a dark-mode toggle; this system is one light record.
- **Don't** invent employers, clients, user counts, or metrics.
- **Don't** let the display face set the name or a long Thai paragraph.
- **Don't** hide the project proof below the mobile fold.
