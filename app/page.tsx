export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #0a0a0a, #1a1f2e)',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '40px 20px'
    }}>
      <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', color: '#67e8f9', marginBottom: '20px' }}>
        OnceMore AI
      </h1>
      <p style={{ fontSize: '1.5rem', maxWidth: '600px', marginBottom: '30px' }}>
        Beginner Content Creation App<br />
        One idea → Script → Real or Cartoon video → Ready for all platforms
      </p>
      <a href="/dashboard" style={{
        background: 'white',
        color: 'black',
        padding: '16px 32px',
        borderRadius: '9999px',
        fontSize: '1.25rem',
        fontWeight: '600',
        textDecoration: 'none'
      }}>
        Start Creating Free →
      </a>
    </div>
  );
}
