fetch(
  "https://script.google.com/macros/s/AKfycbx9GQlmjcXhZjNSTGfSB54rpBFo4jR34gt3JwKHE_ewjNsbAtZl3-179Cz8QQFNum2DGA/exec",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "John Doe",
      email: "john.doe@example.com",
      subject: "Test Subject",
      message: "This is a test message.",
    }),
  }
)
  .then((res) => res.json())
  .then((data) => console.log(data));

// App Script
// Handle GET requests for verification
// function doGet(e) {
//   return ContentService.createTextOutput("✅ Script is running successfully.");
// }

// function doPost(e) {
//   try {
//     const sheet = SpreadsheetApp.openById(
//       "1bD2wcIkgZ0vg-kYAqAC2VDCT_N91ldUC6IpjaMYp7uU"
//     ).getSheetByName("incellCheck");

//     let data;

//     if (e.parameter && Object.keys(e.parameter).length > 0) {
//       data = e.parameter;
//     } else if (e.postData && e.postData.contents) {
//       data = JSON.parse(e.postData.contents);
//     } else {
//       throw new Error("No valid data received.");
//     }

//     if (!data.name || !data.email) {
//       throw new Error("Missing required fields: name and email.");
//     }

//     sheet.appendRow([
//       data.name || "N/A",
//       data.email || "N/A",
//       data.subject || "N/A",
//       data.message || "N/A",
//       new Date(), 
//     ]);

//     return ContentService.createTextOutput(
//       JSON.stringify({ result: "Success", data: data })
//     ).setMimeType(ContentService.MimeType.JSON);
//   } catch (error) {
//     return ContentService.createTextOutput(
//       JSON.stringify({ result: "Error", error: error.message })
//     ).setMimeType(ContentService.MimeType.JSON);
//   }
// }
