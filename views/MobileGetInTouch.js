import { handleSubmit } from "@/utils/subscribe";
import React, { useState } from "react";

export default function MobileGetInTouch() {
  const [Email, setEmail] = useState();

  return (
    <section id="getInTouch" className="am-mw-mobileGetInTouch">
      <div className="am-mw-container content">
        <div className="am-mw-subscribe">
          <h3 className="title2">Get In Touch</h3>
          <form onSubmit={(e) => handleSubmit(e, Email, setEmail)}>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <button className="am-mw-bg-gradient-red-blue" type="submit">
              <span>Submit</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
