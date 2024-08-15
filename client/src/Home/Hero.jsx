import hero from "../../assets/Hero-images/13.png";

export function Hero() {
  return (
    <section className="hero container">
      <div className="hero-content">
        <h1 className="hero-header">مرحبًا بكم في بوابة الطلاب والامتحانات</h1>
        <h2 className="her-subheader">
          كلية الدراسات العليا للبحوث الإحصائية - جامعة القاهرة
        </h2>
        <p className="header-desc">
          تفتح لكم بوابة الطلاب والامتحانات الأبواب لعالم من الفرص الأكاديمية
          المتقدمة. هنا، يمكنكم الوصول بسهولة إلى جداول الامتحانات، نتائج
          التحصيل الأكاديمي، والتسجيل في المقررات الدراسية بكل سلاسة. نسعى
          جاهدين لدعم رحلتكم العلمية بأحدث الأدوات والخدمات الرقمية التي تسهل
          حياتكم الأكاديمية وتساعدكم على تحقيق التميز.
        </p>
      </div>
      <div className="hero-img ">
        <img src={hero} />
      </div>
    </section>
  );
}
