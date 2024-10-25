# React Tabs Challenge

![Preview GIF](https://github.com/Mereb-Tech/react-tabs-challenge/blob/main/preview.gif)

## Overview

**React Tabs Challenge** is a React application that features a dynamic `Tabs` component. Each tab fetches and displays content from the [Loripsum](https://loripsum.net/) REST API. The application implements caching and state management to enhance performance and user experience.

Due to CORS (Cross-Origin Resource Sharing) restrictions, the application utilizes a CORS proxy to fetch data from the Loripsum API seamlessly.

## Demo

![Application Screenshot](https://user-images.githubusercontent.com/108453092/181007694-d9b59f74-5a09-480c-b562-30efc27dfe1a.png)

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

Ensure you have the following installed on your machine:

- **[Node.js](https://nodejs.org/en/download/)** (v12 or higher)
- **[npm](https://www.npmjs.com/get-npm)** (comes with Node.js)
- **[Git](https://git-scm.com/downloads)**

You can verify the installations by running:

```bash
node -v
npm -v
git --version 

```
### Clone the Repository

``` bash
git clone https://github.com/Mereb-Tech/react-tabs-challenge.git
```

### Navigate to the Project Directory

```bash
cd react-tabs-challenge
```

### Install Frontend Dependencies

```bash
npm install
```

### Navigate to the CORS Proxy Directory

The CORS proxy setup is located within the cors-proxy directory.

```bash
cd cors-proxy
```

```bash
npm install
```

### Start the CORS Proxy Server

``` bash
node server.js
```

You should see the following output indicating that the proxy server is running:

```bash
CORS Anywhere proxy running on http://localhost:8080
```

### Note: Keep this terminal window open as the proxy server needs to run concurrently with the React application.

### Open a New Terminal Window

Ensure you're in the root directory of the project (react-tabs-challenge).

Start the React Development Server

First, ensure you're in the root directory:

```bash
cd react-tabs-challenge
```

Then, install frontend dependencies (if not already done):

```bash
npm install
```

Start the React application:

```bash
npm start
```

This command will launch the React application in your default browser at http://localhost:3000. If it doesn't open automatically, you can manually navigate to the URL.

## Usage
Interact with Tabs
Click on any of the four tabs (Tab 1, Tab 2, Tab 3, Tab 4) to fetch and display content.