const MASTER_PASSCODE = "1234"; // Set your password here (Server-side only)

function doGet() {
  return HtmlService.createTemplateFromFile('Index')
      .evaluate()
      .setTitle('Personal Portfolio')
      .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

// This function runs on Google's servers, not in the user's browser
function verifyAndGetContent(passcode, key) {
  const content = {
    edu: "<h2>Education</h2><p>High school and schooling history details...</p>",
    college: "<h2>College</h2><p>University and Degree details...</p>",
    career: "<h2>Career</h2><p>Work history and professional roles...</p>",
    contact: "<h2>Contact Info</h2><p>Email: example@gmail.com<br>Phone: +91...</p>",
    other: "<h2>Other Details</h2><p>Certifications & Hobbies...</p>"
  };

  if (passcode === MASTER_PASSCODE) {
    return { success: true, html: content[key] };
  } else {
    return { success: false, html: "Invalid Passcode Access Denied." };
  }
}
