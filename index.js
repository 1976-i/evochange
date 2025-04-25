export default function HomePage() {
  return (
    <main style={{
      display: 'flex',
      minHeight: '100vh',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffffff',
      color: '#333',
      padding: '2rem'
    }}>
      <header style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
        <div style={{
          position: 'relative',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          border: '4px solid #facc15',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: '1rem'
        }}>
          <span style={{ color: '#facc15', fontWeight: 'bold' }}>EVO</span>
        </div>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>EVO</h1>
      </header>

      <section style={{ textAlign: 'center', maxWidth: '600px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Beyond Empires. Toward Humanity.</h2>
        <p style={{ marginBottom: '1.5rem' }}>
          EVO is a vision of a borderless Europe built on dignity, dialogue, and unity in diversity.
        </p>
        <a
          href="/EVO_Manifesto_s_obsahem.pdf"
          target="_blank"
          style={{
            display: 'inline-block',
            backgroundColor: '#facc15',
            color: '#000',
            padding: '0.5rem 1.5rem',
            borderRadius: '9999px',
            fontWeight: '500',
            textDecoration: 'none',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
          }}
        >
          📄 Read the Manifesto
        </a>
      </section>
    </main>
  );
}
