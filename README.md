# V2_Task
# Pattern Generator

A web-based application that allows users to dynamically generate and customize backgrounds based on mathematical patterns (e.g., grids, spirals). Users can also export these patterns as image files for further use.

# Features
- Generate Mathematical Patterns:
  - Grid
  - Spiral
- Customization Options:
  - Adjust pattern density, size, and primary color.
- Export Feature:
  - Export generated patterns as `.jpeg` or `.png` image files.
- Interactive User Interface:
  - Responsive UI built using Bootstrap 5, sliders, color pickers, and dropdowns for easy customization.
- Pattern History:
  - Save and manage patterns using MongoDB for persistence.

# Tech Stack
# Frontend:
- HTML5, CSS3, Bootstrap 5
- JavaScript (Vanilla JS + jQuery)
- Canvas API for rendering patterns

# Backend:
- Node.js with Express.js

# Database:
- MongoDB (with Mongoose for schema modeling)

# Additional Libraries:
- Canvas API: For pattern rendering.
- Multer: For handling file uploads (optional, if future features require).


## Project Setup
# Prerequisites
1. Node.js (v14 or above)
2. MongoDB Community Edition
# Installation Steps
1. Clone the Repository:
   git clone https://github.com/Manish-061/V2_Task.git
2. Navigate to the Project Directory:
   cd V2_Task
3. Install Dependencies:
   npm install
4. Set Up MongoDB:
   - Ensure MongoDB is installed and running locally or set up MongoDB Atlas.
   - Update the `DB_URI` in your `app.js` file:
    
     const DB_URI = "mongodb://127.0.0.1:27017/pattern_generator"; // For local MongoDB

5. Run the Application:
   node app.js

   OR if you want hot-reloading during development:
   npm install -g nodemon
   nodemon app.js

6. Access the Application:
   Open your browser and navigate to:
   http://localhost:3000

# Usage
1. Select a pattern type (Grid, Spiral).
2. Customize the pattern's density, size, and primary color.
3. Click #Generate to render the pattern.
4. Export the generated pattern by clicking the Export button.

# Folder Structure
pattern-generator/
├── public/
│   ├── css/
│   │   └── styles.css          # Styles for the frontend
│   ├── js/
│      └── script.js           # Client-side logic and rendering
├── views/
│   ├── index.ejs               # Main template file
├── app.js                      # Entry point for the backend
├── package.json                # Node.js dependencies and metadata
├── README.md                   # Documentation


## Functionalities
1. Dynamic Pattern Rendering:
   - Real-time generation of patterns using the Canvas API.
2. Export Functionality:
   - Export patterns as `.jpeg` files.
3. Customization:
   - User-defined color, size, and density settings for patterns.
4. Responsive Design:
   - Accessible across devices with a professional UI.


## Future Enhancements
- Add more pattern types (e.g., circular grids, random dots).
- Allow multiple color gradients for patterns.
- Provide pre-designed templates for easy use.
- Implement a user login system for managing saved patterns.


## License
This project is licensed under the [MIT License](LICENSE).
