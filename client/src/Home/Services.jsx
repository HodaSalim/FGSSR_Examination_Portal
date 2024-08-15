import questions_bank from "../../assets/Hero-images/14.png";
import exams_schedule from "../../assets/Hero-images/8.png";
import exams_grades from "../../assets/Hero-images/16.png";
import requests_application from "../../assets/Hero-images/3.png";

export function Services() {
  return (
    <section className="services container">
      <h1 className="section-header">الخدمات</h1>
      <div className="service">
        <img
          src={questions_bank}
          alt="Service 1 Image"
          className="service-image"
        />
        <div className="service-description">
          <h3>بنك الأسئلة</h3>
          <p>
            استفد من مكتبة ضخمة تحتوي على مجموعة متنوعة من الأسئلة النموذجية
            التي تغطي جميع المواد الدراسية. سواء كنت تستعد لاختبار معين أو ترغب
            في تقوية فهمك لموضوع معين، يوفر لك بنك الأسئلة الموارد الضرورية
            لتجاوز الامتحانات بثقة.
          </p>
        </div>
      </div>

      <div className="service service-reverse">
        <img
          src={exams_grades}
          alt="Service 2 Image"
          className="service-image"
        />
        <div className="service-description">
          <h3>بيان الدرجات</h3>
          <p>
            تابع تقدمك الأكاديمي بشكل دقيق من خلال الوصول إلى بيان درجاتك في أي
            وقت. يمكنك عرض وتحميل تقارير الدرجات الخاصة بكل فصل دراسي، مما
            يساعدك على تقييم أدائك والتخطيط لتحسينه في المستقبل.
          </p>
        </div>
      </div>

      <div className="service">
        <img
          src={exams_schedule}
          alt="Service 3 Image"
          className="service-image"
        />
        <div className="service-description">
          <h3>جدول الامتحانات</h3>
          <p>
            احصل على مواعيد الامتحانات الخاصة بك بكل سهولة من خلال جدول
            الامتحانات الإلكتروني. يتم تحديث الجدول بانتظام لضمان حصولك على أحدث
            المعلومات حول مواعيد الاختبارات وأماكن انعقادها، مما يتيح لك التخطيط
            المسبق والاستعداد الجيد.
          </p>
        </div>
      </div>

      <div className="service service-reverse">
        <img
          src={requests_application}
          alt="Service 4 Image"
          className="service-image"
        />
        <div className="service-description">
          <h3>تقديم الطلبات</h3>
          <p>
            من خلال بوابتنا الإلكترونية، يمكنك تقديم كافة الطلبات الأكاديمية
            والإدارية بسهولة ويسر. سواء كنت تحتاج إلى تقديم طلبات للتحويل بين
            المقررات، أو طلبات للانسحاب، أو أي خدمات أخرى، فإن عملية التقديم تتم
            بسرعة وسلاسة عبر هذه الخدمة.
          </p>
        </div>
      </div>
    </section>
  );
}
