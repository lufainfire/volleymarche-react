# VolleyMarché React

A modern React website for a volleyball marketplace, converted from the original HTML version. This project features a beautiful, responsive design with dark mode support and modern UI components.

## Features

- 🏐 Volleyball marketplace with product catalog
- 🌙 Dark/Light mode toggle
- 📱 Fully responsive design
- ⚡ Fast Vite build system
- 🎨 Tailwind CSS for styling
- 🔧 TypeScript for type safety
- 🏪 Product grid with shopping cart functionality
- 🤝 Partnership section for community collaboration
- 📧 Newsletter subscription
- 🔗 Social media integration

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Development**: ESLint for code quality

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd volleymarche-react
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── App.tsx          # Main application component
├── main.tsx         # Application entry point
└── index.css        # Global styles and Tailwind imports
```

## Features Overview

### Header Navigation
- Logo and brand name
- Responsive navigation menu
- Shopping cart icon
- Dark/light mode toggle
- Mobile-friendly hamburger menu

### Hero Section
- Full-screen background image
- Compelling headline and call-to-action
- Gradient overlay for text readability

### Category Grid
- Four main product categories
- Hover effects and image scaling
- Responsive grid layout

### Product Showcase
- Featured products with images
- Product details and pricing
- Add to cart functionality
- Responsive product grid

### Partnership Section
- Milton Park Volleyball collaboration
- Event gallery
- Community engagement

### Newsletter Signup
- Email subscription form
- Responsive design
- Clear call-to-action

### Footer
- Brand information
- Navigation links
- Social media icons
- Copyright notice

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: "#0077b6",
  "background-light": "#ffffff",
  "background-dark": "#121212",
  // ... other colors
}
```

### Fonts
The project uses Poppins font from Google Fonts, configured in the Tailwind config.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please open an issue in the repository.
