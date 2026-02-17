# ElectroHub

ElectroHub is a multi-page electronics eCommerce frontend built using HTML, CSS, and Vanilla JavaScript. It includes dynamic product rendering, category filtering, product detail pages, and a shopping cart powered by localStorage.

## Features

- Multi-page layout
- 40 electronics products
- Category-based filtering
- Product detail page
- Shopping cart (localStorage)
- Responsive design
- Modern UI

## Tech Stack

- HTML5
- CSS3
- JavaScript
- Nginx
- AWS EC2
- AWS Classic Load Balancer

## Project Structure

index.html  
smartphones.html  
laptops.html  
headphones.html  
product.html  
cart.html  
styles.css  
script.js  

## Deployment (AWS)

The application is deployed on AWS infrastructure for high availability.

- 3 × EC2 instances (Ubuntu 22.04, t2.micro)
- Nginx web server
- Classic Load Balancer
- Region: ap-south-1 (Mumbai)

### Architecture Flow

Client → Load Balancer → EC2 Instances → Static Website Files

## How to Run Locally

1. Clone the repository
2. Open in VS Code
3. Run with Live Server

## Production Access

Accessible via AWS Load Balancer DNS.
