import { Card, Row, Col } from 'react-bootstrap';

export default function AboutPage() {
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
      {/* Dark overlay for readability */}
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
            maxWidth: '650px',
            zIndex: 1,
          }}
        >
          <h2 className="fw-bold mb-3">About WanderList ✈️</h2>
          <p className="text-muted mb-4">
            WanderList is your travel companion app. Plan your trips, organize
            your packing lists, and stay on top of itineraries, so you can focus
            on enjoying the journey 🌍.
          </p>

          <h5 className="fw-bold mt-4 mb-3 text-center">✨ What You Can Do</h5>
          <Row className="text-center gx-4 mb-4">
            <Col xs={6} className="mb-2">
              🧳 Packing Lists
            </Col>
            <Col xs={6} className="mb-2">
              📅 Itineraries
            </Col>
            <Col xs={6} className="mb-2">
              ✅ Task Management
            </Col>
            <Col xs={6} className="mb-2">
              🌍 Trip Organization
            </Col>
          </Row>

          <h5 className="fw-bold mt-4 mb-3">🚀 Our Mission</h5>
          <p className="text-muted">
            To make travel stress-free by giving you all your trip essentials in
            one place. Smart | Simple | Fun
          </p>

          <p className="small text-secondary mt-4 mb-0">
            Built with ❤️ by travel lovers, for travel lovers.
          </p>
        </Card>
      </div>
    </div>
  );
}
