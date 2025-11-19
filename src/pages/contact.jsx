import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../style/contact.css";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Contact() {
  const [status, setStatus] = useState("idle");
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
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
    <>
    <div className={`contact-page-wrapper ${status !== "idle" ? "blurred" : ""}`}>
        <div className="contact-highlights">
            <div className="highlight-icons">
                <div className="highlight-item">
                <i className='bx bx-message-rounded-dots icon'></i>
                <p>راسلنا في أي وقت وسنعود إليك بأسرع ما يمكن</p>
                </div>

                <div className="highlight-item">
                <i className='bx bxs-cog icon'></i>
                <p>شارك معنا أي اقتراح لتحسين الخدمات</p>
                </div>

                <div className="highlight-item">
                <span className="material-symbols-outlined icon">
                construction
                </span>
                <p>أبلغنا عن أي مشكلة تواجهك داخل الموقع</p>
                </div>
            </div>

            <div className="benefits-box">
                <h3>كيف نستفيد من رسالتك؟</h3>
                <ul>
                <li>تحسين دقة وتحديث بيانات الخدمات الحكومية</li>
                <li>إضافة خدمات جديدة بناءً على اقتراحات المستخدمين</li>
                <li>معالجة المشاكل التقنية وتطوير تجربة الاستخدام</li>
                </ul>
            </div>

            <div className="divider">
                <div className="white">
                    <span>ابدأ مراسلتنا الآن</span>
                    <img src="/10.png" className="contact-illustration" alt=""/>
                </div>
            </div>
            </div>

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
              {status === "loading" && (
                    <div className="dots-loading">
                        Loading<span className="dots"><span>.</span><span>.</span><span>.</span></span>
                    </div>
                )}
              {status === "success" && "Done"}
              {status === "error" && "Failed"}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Contact;
