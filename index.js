export default function EvoLandingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-white text-gray-900 p-6">
      <header className="w-full flex justify-center mt-8">
        <div className="flex items-center space-x-4">
          <div className="relative w-14 h-14">
            <div className="absolute inset-0 rounded-full border-4 border-yellow-400"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl font-bold text-yellow-400">EVO</span>
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight">EVO</h1>
        </div>
      </header>

      <section className="text-center mt-12 max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4">Beyond Empires. Toward Humanity.</h2>
        <p className="text-md mb-6">
          EVO is a vision of a borderless Europe built on dignity, dialogue, and unity in diversity.
        </p>
        <a
          href="/EVO_Manifesto_s_obsahem.pdf"
          target="_blank"
          className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-medium py-2 px-6 rounded-full shadow"
        >
          📄 Read the Manifesto
        </a>
      </section>

      <section className="mt-16 w-full max-w-4xl">
        <div className="aspect-video bg-blue-100 flex items-center justify-center rounded-lg shadow">
          <p className="text-gray-600 italic">[World map placeholder]</p>
        </div>
      </section>

      <section className="mt-12 text-center">
        <h3 className="text-xl font-semibold mb-3">Want to build something new?</h3>
        <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">
          Join the Circle
        </button>
      </section>

      <footer className="mt-20 text-sm text-gray-400">
        © 2025 EVO Network · Vision by Igor
      </footer>
    </main>
  );
}