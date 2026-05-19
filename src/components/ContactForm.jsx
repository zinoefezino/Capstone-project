import { useState } from "react";
import "../styles/global.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);
    try {
      await fetch("https://whitebricks.com/tsacademy.php", {
        method: "POST",
        mode: "no-cors",
        body: new FormData(e.target),
      });

      setLoading(false); // stop spinner BEFORE showing success
      setSuccess("Your message has been sent! We'll get back to you shortly.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setLoading(false);
      setErrors({ form: "Submission failed. Please try again." });
    }
  };

  if (success) {
    return (
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="success-state">
            <div className="success-icon-wrap">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3>Message sent!</h3>
            <p>{success}</p>
            <button className="reset-btn" onClick={() => setSuccess("")}>
              Send another message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-text">
          <h2>Have Questions About Planetary Science?</h2>
          <p>
            Interested in learning about space, astronomy, or how planetary data
            is collected and analyzed? Reach out and we'll get back to you.
          </p>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full name"
                  className={errors.name ? "input-error" : ""}
                />
                {errors.name && (
                  <small className="error-msg">{errors.name}</small>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@example.com"
                  className={errors.email ? "input-error" : ""}
                />
                {errors.email && (
                  <small className="error-msg">{errors.email}</small>
                )}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Please enter a valid phone number"
                  className={errors.phone ? "input-error" : ""}
                />
                {errors.phone && (
                  <small className="error-msg">{errors.phone}</small>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message.."
                  className={errors.message ? "input-error" : ""}
                />
                {errors.message && (
                  <small className="error-msg">{errors.message}</small>
                )}
              </div>
            </div>

            {errors.form && <p className="form-error">{errors.form}</p>}

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? (
                <>
                  <span className="spinner" />
                  Sending…
                </>
              ) : (
                <>
                  Send Message
                  <svg
                    className="btn-icon"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
