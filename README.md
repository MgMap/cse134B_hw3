# Portfolio Website - CSE 134 HW2

A personal portfolio website showcasing projects, experiences, education, and skills. Built with semantic HTML5, custom CSS elements, and vanilla JavaScript.

## Author

**Min Aung Paing**
- Email: mpaing@ucsd.edu
- LinkedIn: [min-aung-paing-swe](https://www.linkedin.com/in/min-aung-paing-swe/)
- GitHub: [MgMap](https://github.com/MgMap)

## Project Structure

```
cse134-hw2/
├── index.html              # Home page with hero section, quick links, and contact form
├── about.html              # About page with skills, resume, and blog posts
├── projects.html           # Projects showcase page
├── experiences.html        # Professional experiences
├── education.html          # Educational background
├── experiments.html        # Experimental features and demos
├── styles.css              # Custom CSS for semantic elements
├── custom-elements.js      # Custom web components
├── Assets/
│   ├── MinAung_Paing_2026_newGrad_Apple.pdf
│   └── PR20240718_SCIDS.jpg
└── README.md
```

## Features

### HTML5 Elements Used

- **Semantic Structure**: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- **Text Formatting**: `<b>`, `<i>`, `<em>`, `<strong>`, `<span>`
- **Lists**: `<ul>`, `<ol>`, `<li>`
- **Forms**: `<form>`, `<input>`, `<textarea>`, `<button>`, `<fieldset>`, `<legend>`, `<label>`
- **Media**: `<img>`, `<svg>`, `<iframe>`
- **Interactive**: `<dialog>`, `<progress>`, `<button>`
- **Metadata**: `<meta>`, `<time>`

### Custom Elements

#### JavaScript Custom Element
- `<hello-world>`: A custom web component that logs to console
- Defined in [custom-elements.js](custom-elements.js)

#### CSS Custom Element
- `<project-card>`: A semantic element styled with CSS
- Styled in [styles.css](styles.css)

### SVG Graphics

- Custom icons for navigation (circle, square, triangle shapes)
- Email and social media icons
- Resume/PDF document icon

### Forms

- Contact form with validation
- Fields: name, email, subject, message
- Submits to `https://httpbin.org/post` for testing

### Interactive Features

- Progress bars for technical skills visualization
- Dialog/modal for welcome message
- Embedded iframe for content preview
- Download link for resume PDF

## Pages Overview

### Home ([index.html](index.html))
- Welcome hero section with profile photo
- Quick access navigation with SVG icons
- Featured project showcase
- Technical skills with progress indicators
- Contact form
- Embedded demo content

### About ([about.html](about.html))
- Personal story and background
- Technical skills organized by category:
  - Frontend Development
  - Backend Development
  - Tools & Technologies
- Resume download link
- Social media connection links
- Recent blog posts with publication dates

### Projects ([projects.html](projects.html))
- E-Commerce platform showcase
- Project descriptions with technologies used
- Demo and GitHub links
- Custom project cards

### Experiences ([experiences.html](experiences.html))
- Professional work history and roles

### Education ([education.html](education.html))
- Academic background and achievements

### Experiments ([experiments.html](experiments.html))
- Experimental features and technology demos

## Technologies Used

- **HTML5**: Semantic markup and modern HTML elements
- **CSS3**: Custom styling for semantic elements
- **JavaScript (ES6+)**: Custom web components
- **SVG**: Scalable vector graphics for icons

## Browser Compatibility

This website uses modern web standards including:
- Custom Elements API (Web Components)
- HTML5 semantic elements
- CSS3 features
- SVG graphics

Works best with JavaScript enabled, but core content is accessible without it (see `<noscript>` message).

## Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/MgMap/cse134-hw2.git
   ```

2. Open [index.html](index.html) in a web browser:
   ```bash
   open index.html
   # or
   python3 -m http.server 8000
   ```

3. No build process or dependencies required - pure HTML/CSS/JS

## Key Features Demonstrated

- Semantic HTML5 structure
- Accessibility considerations (alt text, labels, ARIA)
- Form validation and handling
- Custom web components
- SVG inline graphics
- Responsive meta viewport
- SEO meta tags (description, author)
- Progressive enhancement (works without JS)

## License

© 2025 Min Aung Paing. All rights reserved.

## Course Information

**Course**: CSE 134 - Web Client Languages
**Assignment**: Homework 2
**Institution**: UC San Diego
