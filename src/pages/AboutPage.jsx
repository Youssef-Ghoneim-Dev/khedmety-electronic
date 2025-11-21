import React from "react";
import "../style/AboutPage.css";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AnimatedLeftToRight from "../Animated/AnimatedLeftToRight"
import AnimatedRightToLeft from "../Animated/AnimatedRightToLeft"
function AboutPage() {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
  return (
    <div className="about-page">
      <div className="about-section">
        <div className="about-text">
            <AnimatedLeftToRight>
                <h2>عن خدمتي الإلكترونية</h2>
                <p>
                    موقع خدمتي الإلكترونية هو منصة تجريبية تهدف إلى جمع كل الخدمات الحكومية المصرية، سواء الورقية أو الرقمية، في مكان واحد يسهل الوصول إليه. صُمم الموقع ليكون دليلك الشامل نحو أي خدمة تحتاجها، دون عناء البحث أو الانتقال بين المواقع المختلفة. هدفنا أن نُقرّب الخدمات للمواطن ونُبسّط الإجراءات ونوفّر الوقت والجهد.
                </p>
            </AnimatedLeftToRight>
        </div>
        <div className="about-image">
            <AnimatedRightToLeft>
                <img src="/1.png" className="image-placeholder" alt="لوحة توضيحية للخدمات الرقمية"/>
            </AnimatedRightToLeft>
        </div>
      </div>
        <hr className="mb-5 mt-5" />
      <div className="about-section reverse">
        <div className="about-text">
            <AnimatedRightToLeft>
                <h2>رؤيتنا</h2>
                <p>
                    نسعى إلى دعم التحول الرقمي في مصر من خلال تقديم تجربة رقمية واضحة وسهلة لكل مواطن. رؤيتنا هي أن تكون كل خدمة حكومية متاحة بخطوات بسيطة ومفهومة، بحيث يستطيع أي شخص الوصول للمعلومة الصحيحة من مصدرها دون الحاجة إلى خبرة تقنية أو استفسار من جهة أخرى.
                </p>
            </AnimatedRightToLeft>
        </div>
        <div className="about-image">
            <AnimatedLeftToRight>
                <img src="/2.png" className="image-placeholder" alt="صورة رؤيتنا"/>
            </AnimatedLeftToRight>
        </div>
      </div>
        <hr className="mb-5 mt-5" />
      <div className="about-section">
        <div className="about-text">
            <AnimatedLeftToRight>
                <h2>هدف المشروع</h2>
                <p>
                    هدف مشروع خدمتي الإلكترونية هو مساعدة المواطنين في معرفة تفاصيل الخدمات الحكومية بدقة، من حيث المستندات المطلوبة، وخطوات التنفيذ، والجهة المسؤولة، وأماكن التقديم. نريد أن نجعل الوصول للمعلومة الحكومية عملية سهلة وسريعة، وأن نوفّر منصة موثوقة تُغني عن السؤال أو الازدحام في المصالح الحكومية.
                </p>
            </AnimatedLeftToRight>
        </div>
        <div className="about-image">
            <AnimatedRightToLeft>
                <img src="/3.png" className="image-placeholder" alt="صورة هدف المشروع وتوعية المصريين"/>
            </AnimatedRightToLeft>
        </div>
      </div>
        <hr className="mb-5 mt-5" />
      <div className="about-section reverse">
        <div className="about-text">
            <AnimatedRightToLeft>
                <h2>المميزات</h2>
                <p>
                    الموقع يتميز بتصميم بسيط وسهل التصفح، مع شرح دقيق لكل خدمة بلغة واضحة وسلسة. يمكنك البحث بسهولة عن أي خدمة من خلال شريط البحث الذكي، وستجد الخدمات مقسمة حسب الجهات الحكومية لتسهيل الوصول إليها. كما يدعم الموقع جميع الأجهزة والشاشات، ليعمل بسلاسة على الكمبيوتر والموبايل.
                </p>
            </AnimatedRightToLeft>
        </div>
        <div className="about-image">
            <AnimatedLeftToRight>
                <img src="/4.png" className="image-placeholder" alt="صورة لشاشات بأحجام مختلفة بها موقع خدمتي الإلكترونية"/>
            </AnimatedLeftToRight>
        </div>
      </div>
        <hr className="mb-5 mt-5" />
      <div className="about-section">
        <div className="about-text">
            <AnimatedLeftToRight>
                <h2>طريقة العمل</h2>
                <p>
                        يعتمد الموقع على جمع البيانات والمعلومات الرسمية من المصادر الحكومية المصرية، ثم إعادة صياغتها بطريقة مبسطة ومنظمة. لا يحتاج المستخدم إلى تسجيل حساب أو إدخال بيانات شخصية، فقط يدخل ويبحث عن الخدمة المطلوبة ليحصل على شرح كامل وواضح لكيفية تنفيذها خطوة بخطوة.
                </p>
            </AnimatedLeftToRight>
        </div>
        <div className="about-image">
            <AnimatedRightToLeft>
                <img src="/5.png" className="image-placeholder" alt="صورة طريقة العمل"/>
            </AnimatedRightToLeft>
        </div>
      </div>
        <hr className="mb-5 mt-5" />
      <div className="about-section reverse">
        <div className="about-text">
            <AnimatedRightToLeft>
                <h2>خطط المستقبل</h2>
                <p>
                        نعمل على تطوير خصائص جديدة مثل تصنيف الخدمات بشكل أذكى، وربطها مباشرة بالبوابات الحكومية الرسمية. كما نطمح لإضافة مساعد رقمي يعتمد على الذكاء الاصطناعي لتوجيه المستخدم نحو الخدمة الأنسب له بأقل عدد من الخطوات، مما يجعل التجربة أكثر ذكاءً وسهولة في المستقبل.
                </p>
            </AnimatedRightToLeft>
        </div>
        <div className="about-image">
            <AnimatedLeftToRight>
                <img src="/6.png" className="image-placeholder" alt="صورة ai"/>
            </AnimatedLeftToRight>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
