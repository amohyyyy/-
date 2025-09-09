export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
      {/* نافبار */}
      <nav className="w-full flex items-center justify-between px-8 py-4 bg-white/80 backdrop-blur shadow-md">
        <h1 className="text-2xl font-bold text-blue-600">
          Edu<span className="text-purple-600">Mate</span>
        </h1>
        <div className="flex gap-6 text-gray-700 text-sm">
          <a href="/" className="hover:text-blue-600">الرئيسية</a>
          <a href="/admin" className="hover:text-purple-600">لوحة التحكم</a>
        </div>
      </nav>

      {/* الهيرو */}
      <section className="text-center py-20 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          ✨ مرحباً بك في منصة <span className="text-blue-600">Edu</span>
          <span className="text-purple-600">Mate</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          منصة تعليمية ذكية لدروس تفاعلية واختبارات آلية مع دعم الذكاء الاصطناعي.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="/student" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
            ابدأ التعلم
          </a>
          <a href="/admin" className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition">
            لوحة الأدمن
          </a>
        </div>
      </section>

      {/* الدروس */}
      <section className="container mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">📘 الكسور العشرية</h3>
          <p className="text-gray-600 mb-4">تعلم كيفية التعامل مع الكسور العشرية بسهولة.</p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md">شاهد الدرس</button>
        </div>

        <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">📐 الأشكال الهندسية</h3>
          <p className="text-gray-600 mb-4">استكشف عالم الهندسة بطريقة ممتعة.</p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md">شاهد الدرس</button>
        </div>

        <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">🔢 المعادلات البسيطة</h3>
          <p className="text-gray-600 mb-4">خطوات مبسطة لفهم المعادلات بسهولة.</p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md">شاهد الدرس</button>
        </div>
      </section>

      {/* الفوتر */}
      <footer className="text-center py-6 bg-white/70 backdrop-blur mt-16">
        <p className="text-sm text-gray-600">© 2025 EduMate. جميع الحقوق محفوظة.</p>
      </footer>
    </main>
  );
}
