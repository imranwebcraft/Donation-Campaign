# Project Features

## Feature 1: Dynamic JSON Data

This project generates fake JSON data with dynamic color codes for card backgrounds, category backgrounds, and text colors. It includes four categories: Health, Food, Education, and Clothing. Each card displays a different image and description related to its category.

## Feature 2: Dynamic Routing

The project implements dynamic routing based on category IDs, allowing users to click on any card to view its details. The details page dynamically displays information about the selected donation, and users can make donations by clicking the "Donate" button. A toast notification confirms successful donations, and users can only donate once for each card to prevent duplicate donations.

## Feature 3: Donation Tracking

Donation details are stored in the browser's `localStorage`. When users visit the "Donation" route, they can see how many donations they've made. If they haven't made any donations yet, the page notifies them. Donations are displayed, and if a user makes more than four donations, a "See All" button appears to view additional donations. Clicking "See All" hides the button.

Additionally, there's a "Statistics" route where users can see a pie chart preview of their donation percentages.

Feel free to customize and expand on these features in your README.md file as needed.
