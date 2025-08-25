import { Card } from 'react-bootstrap';

export default function HomePage() {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://wallpapercrafter.com/sizes/1920x1080/38074-Corona-Del-Mar-4K-4k-wallpaper-4K-California.-USA-Best-Beaches-in-the-World-travel-tourism-sunset-sunrise-sea.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        position: 'fixed',
        zIndex: -1,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.4)',
        }}
      ></div>
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Card
          className="p-5 text-center shadow-lg"
          style={{
            borderRadius: '20px',
            background: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(8px)',
            maxWidth: '500px',
          }}
        >
          <h2 className="fw-bold mb-3">Welcome to WanderList ✈️</h2>
          <p className="text-muted mb-4">
            Plan smarter, travel happier 🌍 <br />
            Organize your trips, packing lists, and itineraries all in one
            place.
          </p>
        </Card>
      </div>
    </div>
  );
}
