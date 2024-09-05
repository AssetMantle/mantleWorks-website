export const validateEmail = (email) => {
  // Regular expression to validate email with a TLD (e.g., .com, .one, etc.)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return emailRegex.test(email);
};

export const handleSubmit = async (e, Email, setEmail) => {
  e.preventDefault();

  // Validate email before submitting
  if (!validateEmail(Email)) {
    alert("Please enter a valid email address");
    return;
  }

  try {
    const localEmail = Email;
    setEmail("");
    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: localEmail }),
    });

    if (response.ok) {
      alert("Email Subscribed Successfully!");
    } else {
      alert("Email Subscription Failed");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Failed to subscribe Email");
  }
};
