'use client';
import Image from 'next/image';

export default function Page() {
  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '120px',
          height: '30px',
          marginBottom: '1.5rem',
        }}
      >
        <Image
          src='/next.svg'
          alt='Test Image'
          fill
          priority
          style={{ objectFit: 'contain' }}
        />
      </div>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        I updated this heading
      </h1>
      <p style={{ maxWidth: '400px', textAlign: 'center', color: '#444' }}>
        This is some body text for testing the UI layout. You can replace this
        with any content you want to display on your page. I also updated this
        to test if the server is changing it on just restart or not.
      </p>
    </main>
  );
}
