import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../slices/todoSlice.js';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import TodoItem from '../components/TodoItem.jsx';

export default function TodoPage() {
  const [tripName, setTripName] = useState('');
  const [venue, setVenue] = useState('');
  const [date, setDate] = useState('');
  const [items, setItems] = useState('');
  const [vacationType, setVacationType] = useState('beach');
  const [itinerary, setItinerary] = useState('');

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (tripName.trim() && venue.trim() && date.trim()) {
      dispatch(
        addTodo({
          tripName,
          venue,
          date,
          vacationType,
          items: items ? items.split(',').map((i) => i.trim()) : [],
          itinerary: itinerary.trim() ? itinerary.trim() : '',
        })
      );
      setTripName('');
      setVenue('');
      setDate('');
      setItems('');
      setVacationType('beach');
      setItinerary('');
    }
  };

  return (
    <>
      <div
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://static.vecteezy.com/system/resources/thumbnails/033/645/608/small_2x/sunset-view-from-airplane-window-generative-ai-photo.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          position: 'fixed',
          inset: 0,
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          padding: '120px 40px',
          minHeight: '100vh',
          zIndex: 1,
        }}
      >
        <Card
          className="p-5 shadow-sm"
          style={{
            borderRadius: '5px',
            background: 'rgba(255, 255, 255, 0.5)',
            width: '100%',
            maxWidth: '900px',
          }}
        >
          <h4 className="fw-bold">Your Travel Todos</h4>

          {/* Trip Form */}
          <Row className="mb-3">
            <Col lg={3} md={6} xs={12} className="mb-3 mb-lg-0">
              <Form.Control
                type="text"
                value={tripName}
                onChange={(e) => setTripName(e.target.value)}
                placeholder="Trip name"
              />
            </Col>
            <Col lg={3} md={6} xs={12} className="mb-3 mb-lg-0">
              <Form.Control
                type="text"
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
                placeholder="Venue"
              />
            </Col>
            <Col lg={3} md={6} xs={12} className="mb-3 mb-lg-0">
              <Form.Control
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Col>
            <Col lg={3} md={6} xs={12}>
              <Form.Select
                value={vacationType}
                onChange={(e) => setVacationType(e.target.value)}
              >
                <option value="beach">Beach Holiday</option>
                <option value="hiking">Hiking Trip</option>
                <option value="business">Business Travel</option>
              </Form.Select>
            </Col>
          </Row>

          <Row className="mb-3">
          <Col xs={12}>
              <Form.Control
                as="textarea"
                rows={2}
                value={itinerary}
                onChange={(e) => setItinerary(e.target.value)}
                placeholder="Itinerary (optional)"
              />
            </Col>
          </Row>

          <Button onClick={handleAdd} className="mb-3">
            Add Trip
          </Button>

          {/* Todo List */}
          <ul className="list-unstyled">
            {todos
              .slice()
              .sort((a, b) => new Date(a.date) - new Date(b.date))
              .map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
              ))}
          </ul>
        </Card>
      </div>
    </>
  );
}