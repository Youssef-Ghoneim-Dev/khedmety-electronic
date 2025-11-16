import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../style/contact.css";

function Contact() {
  const [status, setStatus] = useState("idle");
    console.log("SERVICE:", process.env.REACT_APP_EMAILJS_SERVICE_ID);
console.log("TEMPLATE:", process.env.REACT_APP_EMAILJS_TEMPLATE_ID);
console.log("PUBLIC:", process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setTimeout(() => {
          setStatus("success");
          e.target.reset();
          setTimeout(() => setStatus("idle"), 2000);
        }, 2000);
      })
      .catch(() => {
        setTimeout(() => {
          setStatus("error");
          setTimeout(() => setStatus("idle"), 2000);
        }, 2000);
      });
  }

  return (
    <div className={`contact-page-wrapper ${status !== "idle" ? "blurred" : ""}`}>
      <div className="contact-container">
        <h1 className="contact-title">تواصل معنا</h1>
        <p className="contact-desc">
          يسعدنا استقبال استفساراتكم واقتراحاتكم حول منصة خدمتي الإلكترونية. 
          من خلال هذا النموذج يمكنك إرسال ملاحظاتك أو أفكارك لتطوير الموقع 
          وجعل الخدمات الحكومية أسهل وأوضح للجميع.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="الاسم الكامل"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="البريد الإلكتروني"
              required
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="موضوع الرسالة (مثال: اقتراح خدمة جديدة)"
            required
          />

          <select name="type" defaultValue="" required>
            <option value="" disabled>
              اختر نوع الرسالة
            </option>
            <option value="suggestion">اقتراح تحسين</option>
            <option value="bug">الإبلاغ عن مشكلة</option>
            <option value="service-request">طلب إضافة خدمة</option>
            <option value="other">أخرى</option>
          </select>

          <textarea
            name="message"
            placeholder="اكتب رسالتك هنا بالتفصيل..."
            required
          ></textarea>

          <button
            type="submit"
            disabled={status === "loading"}
            className={status === "loading" ? "btn-loading" : ""}
          >
            {status === "loading" ? "جاري الإرسال..." : "إرسال الرسالة"}
          </button>
        </form>
      </div>

      {status !== "idle" && (
        <div className="status-overlay">
          <div className="status-box">
            <div
              className={`status-circle ${
                status === "loading"
                  ? "loading"
                  : status === "success"
                  ? "success"
                  : "error"
              }`}
            >
              {status === "loading" && <span className="spinner"></span>}
              {status === "success" && <span className="status-icon">✔</span>}
              {status === "error" && <span className="status-icon">✖</span>}
            </div>
            <div className="status-text">
              {status === "loading" && "Loading..."}
              {status === "success" && "Done"}
              {status === "error" && "Failed"}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
