"use client";
import { sendEmail } from "@/app/actions/email";
import DividerGradient from "@/components/DividerGradient";
import PartnersSVG from "@/components/PartnersSVG";
import { montserrat } from "@/config/fonts/GoogleFonts";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [sentMail, setSentMail] = useState(false);

  const emailAddress = "hello@mantleworks.one";

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await sendEmail({
        name: `${firstName} ${lastName}`.trim(),
        businessEmail: email,
        companyName: company,
        message,
      });

      console.log("response: ", response);

      if (response?.success) {
        setFirstName("");
        setLastName("");
        setEmail("");
        setCompany("");
        setMessage("");
        setSentMail(true);
        alert("Email sent successfully!");
      } else {
        alert("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        "An error occurred while sending the email. Please try again later."
      );
    }
  }

  return (
    <section id="contacts">
      <div className="am-mw-container am-mw-contacts d-flex justify-content-center align-items-center flex-column h-100">
        <PartnersSVG onHover={() => {}} />
        <div className="container">
          <div className="content">
            <div className="grid">
              <div className="form-container">
                <h2 className={`${montserrat.className} title`}>
                  Get In Touch
                </h2>
                <form className="form" onSubmit={handleSubmit}>
                  <div className="two-col">
                    {[
                      {
                        label: "First Name",
                        value: firstName,
                        setter: setFirstName,
                        id: "first_name",
                      },
                      {
                        label: "Last Name",
                        value: lastName,
                        setter: setLastName,
                        id: "last_name",
                      },
                    ].map(({ label, value, setter, id }) => (
                      <div key={id} className="element">
                        {/* <label htmlFor={id} className="">
                          {label}
                        </label> */}
                        <input
                          type="text"
                          id={id}
                          className=""
                          value={value}
                          onChange={(e) => setter(e.target.value)}
                          required
                          placeholder={label}
                        />
                      </div>
                    ))}
                  </div>
                  {[
                    {
                      label: "Business Email",
                      value: email,
                      setter: setEmail,
                      type: "email",
                      id: "email",
                    },
                    {
                      label: "Company Name",
                      value: company,
                      setter: setCompany,
                      type: "text",
                      id: "company",
                    },
                  ].map(({ label, value, setter, type, id }) => (
                    <div key={id} className="element">
                      {/* <label htmlFor={id} className="">
                        {label}
                      </label> */}
                      <input
                        type={type}
                        id={id}
                        className=""
                        value={value}
                        onChange={(e) => setter(e.target.value)}
                        required
                        placeholder={label}
                      />
                    </div>
                  ))}
                  <div className="element">
                    {/* <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2 text-[var(--am-tll-orange)]"
                    >
                      Message
                    </label> */}
                    <textarea
                      id="message"
                      rows="4"
                      className=""
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className={`am-mw-bg-gradient-red-blue ${
                      sentMail ? "disabled" : ""
                    }`}
                    disabled={sentMail}
                  >
                    <span>{sentMail ? "Email Sent" : "Submit"}</span>
                  </button>
                </form>
                <div className="divider">
                  <DividerGradient />
                </div>
              </div>
              <div className="socials">
                <h2 className={`${montserrat.className} title mb-none`}>
                  Email us
                </h2>
                <div className="email">
                  <a href={`mailto:${emailAddress}`}>
                    <Image
                      src="/media/icons/mail.svg"
                      alt="mantleWorks Logo"
                      className=""
                      width={20}
                      height={20}
                    />{" "}
                    {emailAddress}
                  </a>
                </div>
                <h2 className={`${montserrat.className} title mb-none`}>
                  Connect with us
                </h2>
                <div className="social-media">
                  {/* <Link
                    href="mailto:hello@mantleworks.one"
                    className="icon md position-relative"
                  >
                    <Image
                      src="/media/icons/mail.svg"
                      alt="mantleWorks Logo"
                      className="w-100 h-100"
                      width={16}
                      height={16}
                      style={{ objectFit: "contain", objectPosition: "center" }}
                    />
                  </Link> */}
                  <Link
                    href="https://www.linkedin.com/company/mantleworks"
                    className="icon position-relative"
                  >
                    <Image
                      src="/media/icons/linkedin.svg"
                      alt="mantleWorks Logo"
                      className="w-100 h-100"
                      width={16}
                      height={16}
                      style={{ objectFit: "contain", objectPosition: "center" }}
                    />
                  </Link>
                  <Link
                    href="https://x.com/MantleWorks"
                    className="icon position-relative"
                  >
                    <Image
                      src="/media/icons/x-icon.svg"
                      alt="mantleWorks Logo"
                      className="w-100 h-100"
                      width={16}
                      height={16}
                      style={{ objectFit: "contain", objectPosition: "center" }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
