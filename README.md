# 💎 Glassmorphism AI & Tech Portfolio

A high-performance, single-page professional portfolio built with **HTML5, CSS3 (Flexbox/Grid), and JavaScript**. Designed specifically for Google Apps Script environments to showcase technical expertise in Computer Vision, NLP, and Automation.

## ✨ Features
* **Glassmorphism UI:** High-end aesthetics using `backdrop-filter: blur()` and semi-transparent borders.
* **Secure Access Gate:** Integrated passcode protection to hide sensitive professional details (Experience, Education) from the general public.
* **3-Column Grid:** Optimized navigation layout that adapts to mobile devices.
* **GAS Integration:** Built-in hooks for `google.script.run` to fetch server-side content dynamically.
* **Smooth Transitions:** Custom cubic-bezier animations for page switching.

## 📁 Project Structure
* **index.html:** The main UI, including the Glass panels and navigation grid.
* **Code.gs:** (Server-side) Handles passcode verification and serves HTML snippets for private sections.

## 🚀 How to Use

### 1. Setup in Google Apps Script
1.  Go to [script.google.com](https://script.google.com).
2.  Create a new project.
3.  Create an **HTML file** named `index.html` and paste the frontend code.
4.  Create a **Script file** (Code.gs) to handle the `verifyAndGetContent` function.

### 2. Configure Private Sections
In your `Code.gs`, ensure you have a function that matches the frontend request:
```javascript
function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
      .setTitle('Professional Portfolio')
      .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function verifyAndGetContent(passcode, key) {
  const CORRECT_PASS = "1234"; // Set your own passcode
  if (passcode === CORRECT_PASS) {
    // Return specific HTML based on the 'key' (exp, edu, cert)
    return { success: true, html: "<h3>Data for " + key + "</h3>" };
  }
  return { success: false };
}
