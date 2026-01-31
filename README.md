Swift Translator Testing - ITPM Assignment 1

Project Information
Registration Number: IT23623422
Name: Liyanage D.D.
Course: IT3040 - IT Project Management
Year: 3, Semester 1
University: SLIIT / BSc (Hons) in Information Technology

Project Overview
This repository contains automated test cases for the Swift Translator application (https://www.swifttranslator.com/), which converts Singlish input into Sinhala output in real-time. The project was developed as part of Assignment 1 for IT3040 - IT Project Management.

Test Statistics
Total Test Cases: 35

Positive Functional Tests: 24 (Pos_Fun_0001 to Pos_Fun_0024)

Negative Functional Tests: 10 (Neg_Fun_0001 to Neg_Fun_0010)

UI Test: 1 (Pos_UI_0001)

Assignment Objectives Met
Functional Testing: Evaluate accuracy of Singlish to Sinhala conversion

UI Testing: Assess stability and usability under different conditions

Automation: Implement test automation using Playwright

Documentation: Complete test case documentation in Excel format

Coverage: Test all required scenarios from Appendix 1

Prerequisites
Before running the tests, ensure you have the following installed:

System Requirements
Node.js (version 16 or higher)

npm (usually comes with Node.js)

Git (for cloning the repository)

Browser Requirements
The tests will automatically install the following browsers:

Chromium (default browser for testing)

Firefox (optional)

WebKit (optional)

Installation Instructions
1. Clone the Repository
bash
git clone https://github.com/dulmi-liyanage-02/ITPM-ASSIGNMENT01-IT23623422-.git
cd ITPM-ASSIGNMENT01-IT23623422-
2. Install Dependencies
bash
npm install
This command will install:

Playwright test framework

Playwright browsers (Chromium, Firefox, WebKit)

Any additional dependencies specified in package.json

3. Install Playwright Browsers
bash
npx playwright install
If you want to install specific browsers:

bash
npx playwright install chromium  # Install only Chromium
npx playwright install --with-deps  # Install browsers with dependencies
Project Structure
text



