fetch("https://script.google.com/macros/s/AKfycbx9GQlmjcXhZjNSTGfSB54rpBFo4jR34gt3JwKHE_ewjNsbAtZl3-179Cz8QQFNum2DGA/exec", {
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
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
  