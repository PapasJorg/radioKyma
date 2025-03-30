## [v0.0.1] - 2025-03-26

###  Added
- Introduced modular CSS architecture:
  - `base.css` for global styles, layout, variables, and dark mode support
  - `components.css` for reusable UI components (hero, nav, buttons, etc.)

###  Reorganized
- Created structured project folders:
  - `/css` for stylesheets
  - `/assets/images` for all images
  - `/js` for JavaScript
  - `/pages` for HTML content
- Updated all path references in HTML files to reflect new structure

###  Improved
- Unified transitions, hover effects, and animations across components
- Enhanced dark mode styling consistency
- Cleaned up Plyr audio player styles
- Restored original layout and hover styles for program cards

###  Fixed
- Removed duplicated `.schedule-card` and navigation CSS
- Renamed `tuseday.html` to `tuesday.html` to correct typo