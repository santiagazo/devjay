import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-200 dark:bg-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            Contact Me
          </h2>
          <h3 className="text-md font-bold mb-4  text-gray-800 dark:text-gray-200">
            480.309.1250
          </h3>
        </div>
        <div className="relative text-gray-800 dark:text-gray-200">
          <p>
            Here's how to get ahold of me in order of best to worse. They'll all
            work, I just respond slower to some.
          </p>
          <ul>
            <li>Text: 480-309-1250</li>
            <li>Call: 480-309-1250</li>
            <li>Email: jamesdlaraiii@gmail.com</li>
            <li>
              LinkedIn:{" "}
              <a href="https://www.linkedin.com/in/jay-lara-21294044/">
                https://www.linkedin.com/in/jay-lara-21294044/
              </a>
            </li>
            <li>
              stackoverflow.com:{" "}
              <a href="https://stackoverflow.com/users/5748670/jay">
                https://stackoverflow.com/users/5748670/jay
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
