# Magnetic Button Component

## Summary

This project provides a standalone React functional component named `MagneticButton`. This component creates an interactive button where the text inside it smoothly follows the user's mouse cursor when hovered. When the mouse leaves the button, the text gracefully returns to its central position. It's built using only React and Tailwind CSS, without any external animation libraries.

## Setup

This is a static site project. To use this `MagneticButton` component, you'll need a React project set up with Tailwind CSS configured.

1.  **Install Dependencies (if not already done in your React project):**
    ```bash
    npm install react react-dom tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    ```

2.  **Configure `tailwind.config.js`:**
    Make sure your `tailwind.config.js` includes paths to your React components to scan for Tailwind classes:
    ```javascript
    // tailwind.config.js
    module.exports = {
      content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```

3.  **Include Tailwind CSS in your `src/index.css` (or equivalent):**
    ```css
    /* src/index.css */
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

4.  **Integrate the component:**
    Place the `MagneticButton.jsx` file into your React project (e.g., in a `src/components` folder). You can then import and use it in any of your React components:

    ```jsx
    // Example usage in App.jsx
    import MagneticButton from './components/MagneticButton'; // Adjust path as needed

    function App() {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <MagneticButton>Hover Me!</MagneticButton>
        </div>
      );
    }

    export default App;
    ```

5.  **Run your React application:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

## Code Explanation

-   **`MagneticButton.jsx`**: This file contains the core React component. It uses `useState` to manage the `mousePosition` state, which tracks the dynamic offset of the button's children. `useRef` is employed to get a direct reference to the button DOM element, allowing for accurate calculation of mouse coordinates relative to the button. The `onMouseMove` and `onMouseLeave` event handlers update the `mousePosition` state. The button's text (`children`) is wrapped in a `span` element whose `transform` CSS property is dynamically updated using inline styles based on the `mousePosition`. Tailwind CSS classes handle all the visual styling and transition effects, ensuring a smooth movement without external animation libraries.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
