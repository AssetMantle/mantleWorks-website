import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email } = await req.json();

    const payload = {
      fields: [
        {
          name: "email",
          value: email,
        },
      ],
    };

    const formId = process.env.HUBSPOT_FORM_ID;
    const portalId = process.env.HUBSPOT_PORTAL_ID;
    const hubspotUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

    const response = await fetch(hubspotUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      return NextResponse.json(
        { message: "Form submitted successfully!" },
        { status: 200 }
      );
    } else {
      const errorData = await response.json();
      console.error("Error submitting form:", errorData);
      return NextResponse.json(
        { error: "Failed to submit form." },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    return NextResponse.json(
      { error: "Failed to submit form." },
      { status: 500 }
    );
  }
}
