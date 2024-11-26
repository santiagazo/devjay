# DevJay

Welcome to my personal website! This project is designed to showcase my skills in front-end development, user interface design, and infrastructure automation. It is built with **React** and **Vite** for a fast and modern development experience, and is structured to impress potential employers with both its code quality and deployability.

---

## Purpose

The primary goal of this website is to:

1. **Architect a balanced solution**: Satisfying the primary use cases of **Get to know Jay**, **Contact Jay** while balancing time constraints, budget, learning, and more, utilize UML Architecture to provide an appropriate solution.
2. **Test Driven Development**: Tests supporting the primary use cases derived from architecture ensure our code adhears to policy, SOLID principals, and maintainability.
3. **Demonstrate my coding skills**: Clean, modular, and maintainable code using modern JavaScript (ES6+), and eventually C#, NodeJS, and PHP.
2. **Showcase my design abilities**: An intuitive and visually appealing graphical user interface.
3. **Highlight my infrastructure expertise**: The site is deployable using Infrastructure as Code (IaC), ensuring productivity, reproducibility, and scalability.

---

## Tech Stack

- **Frontend**:
  - [React](https://reactjs.org/): A popular library for building user interfaces.
  - [Vite](https://vitejs.dev/): A fast build tool optimized for modern web projects.
  - [Tailwind](https://tailwindcss.com/): A utility-first CSS framework composed to build any design, directly in your markup.

- **Infrastructure**:
  - [AWS Amplify](https://aws.amazon.com/amplify/): For managed hosting and CI/CD.
  - [GitHub Actions](https://github.com/features/actions): For continuous integration and deployment.
  - Infrastructure as Code with [AWS CLI](https://aws.amazon.com/cli/).

---

## Features

- **Responsive Design**: Optimized for both desktop and mobile viewing.
- **Dynamic Content**: Components showcasing API integration and interactivity.
- **Scalable Infrastructure**: Hosted on AWS using best practices for cost-effectiveness and performance.

---

## Getting Started

Follow these steps to run the website locally on your machine:

### Prerequisites

- **Node.js** (version 16 or higher): [Download here](https://nodejs.org/).
- **Git**: [Download here](https://git-scm.com/).

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/santiagazo/devjay.git
   cd devjay
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the site locally.

---

## Deployment

You can deploy this project yourself using AWS Amplify or any other hosting platform. Below is a quick guide for deploying it with Amplify.

### Deploy with AWS Amplify

1. **Set Up AWS CLI**:
   ```bash
   aws configure
   ```
   Provide your AWS credentials and default region.

2. **Initialize Amplify**:
   ```bash
   amplify init
   ```
   Follow the prompts to set up Amplify for this project.

3. **Add Hosting**:
   ```bash
   amplify add hosting
   ```
   Choose "Continuous deployment" and connect your GitHub repository.

4. **Push to AWS**:
   ```bash
   amplify publish
   ```
   Your website will be hosted on the Amplify-provided URL (e.g., `https://main.yourapp.amplifyapp.com`).

---

## Folder Structure

```
devjay/
├── src/
│   ├── components/       # Reusable React components
│   ├── pages/            # Page components (e.g., Home, About)
│   ├── assets/           # Static assets like images and fonts
│   └── App.jsx           # Main application entry point
├── public/               # Static public files
├── amplify/              # Amplify configuration files
├── package.json          # Project metadata and scripts
├── vite.config.js        # Vite configuration file
└── README.md             # Project documentation (this file)
```

---

## How to Contribute

While were not seeking PRs, if you'd like to contribute to this project:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a Pull Request on GitHub.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

If you have any questions or feedback, feel free to reach out:
- **Email**: jamesdlaraiii@gmail.com
- **GitHub**: [santiagazo](https://github.com/santiagazo)
- **Phone**: 480-309-1250

---

Thank you for exploring my project! I hope this website demonstrates my skills and inspires confidence in my abilities. 🚀

