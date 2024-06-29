Hotel Booking Application
Objective
Develop a frontend for a hotel booking application using React with JSX. The application will interact with a static JSON file as its data source to simulate fetching hotel and room data.

Technologies
React with JSX
tailwind css 
tanStackQuery
Requirements
1. User Interface
Create a clean, responsive user interface that is intuitive to navigate.
Implement views for:
User login
User registration
Browsing hotels
Viewing rooms within hotels
Booking rooms
2. Data Handling
Utilize a JSON file to load and display hotels and rooms information.
Create a JSON file to store all the data and dummy data.
3. User Authentication
Simulate user authentication (login functionality) using client-side techniques.
4. Booking Functionality
Allow users to book a room and update the JSON data locally to reflect this change.
Include functionality for viewing and managing current bookings.
5. Professional Practices
Use modern React practices such as hooks and context for state management if not using Redux.
Ensure the application follows best practices for maintainability and scalability.
6. Submission
Submit the project through a public GitHub repository.
Include a README file with comprehensive setup instructions and a detailed description of the application architecture and features.
Setup Instructions
Prerequisites
Node.js (v14 or higher)
npm or yarn
Installation
Clone the repository:

sh
Copy code
git clone https://github.com/Mahedihasanimam/hotel-booking-app.git
cd hotel-booking-app
Install dependencies:

sh
Copy code
npm install
# or
yarn install
Run the development server:

sh
Copy code
npm run dev
# or
yarn dev
Open your browser and navigate to http://localhost:5173.

Building the Project
To build the project for production, run:

sh
Copy code
npm run build
# or
yarn build
Running the Production Build
To start the production build, run:

sh
Copy code
npm start
# or
yarn start
JSON Data File
Ensure that hotels.json file is placed in the public directory of the project.
This file will be used to simulate fetching hotel and room data.
Application Architecture and Features
Project Structure
plaintext
Copy code
hotel-booking-app/
├── public/
│   └── hotels.json
├── src/
│   ├── components/
│   │   ├── login/
│   │   │   ├── Login.jsx
│   │   ├── register/
│   │   │   ├── Register.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Navbar.jsx
│   │   ├── hooks/
│   │   │   ├── useLogout.jsx
│   │   ├── minlayout/
│   │   │   ├── MainLayout.jsx
│   │   ├── pages/
│   │   │   ├── aboutus/
│   │   │   │   ├── AboutUs.jsx
│   │   │   ├── home/
│   │   │   │   ├── Hotels.jsx
│   │   │   ├── hotelDetails/
│   │   │   │   ├── Details.jsx
│   │   │   │   ├── RoomCard.jsx
│   │   │   ├── mybookings/
│   │   │   │   ├── MyBookings.jsx
│   │   ├── route/
│   │   │   ├── Router.jsx
│   ├── index.css
│   ├── main.jsx
├── .eslintc.js
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
Features
User Interface:
A responsive and intuitive UI for navigating the application.
Components for listing hotels and rooms, and booking rooms.
Data Handling:
Loading hotel and room data from a static JSON file.
Updating the JSON data locally to reflect bookings.
User Authentication:
Simulated login functionality with client-side authentication.
Booking Functionality:
Booking a room and managing current bookings.
Updating the local JSON data to reflect booking changes.
State Management:
Using Redux for state management to handle global state across the application.
Alternatively, using React hooks and context for state management if not using Redux.
Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure your code follows the project's coding standards and conventions.

