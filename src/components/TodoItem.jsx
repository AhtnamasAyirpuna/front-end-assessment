import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo, toggleItem } from '../slices/todoSlice';
import { Card, Button, Form, Row, Col } from 'react-bootstrap';

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [tripName, setTripName] = useState(todo.tripName);
  const [venue, setVenue] = useState(todo.venue);
  const [date, setDate] = useState(todo.date);
  const [items, setItems] = useState(todo.items);
  const [itinerary, setItinerary] = useState(todo.itinerary || '');

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0 });
  const today = new Date().toISOString().split('T')[0]; //YYYY-MM-DD
  const isPast = todo.date < today;

  useEffect(() => {
    const calculateTimeLeft = () => {
      const diff = new Date(date) - new Date();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000); // update every sec
    return () => clearInterval(timer);
  }, [date]);

  const handleUpdate = () => {
    dispatch(
      updateTodo({
        id: todo.id,
        tripName,
        venue,
        date,
        items,
        itinerary,
      })
    );
    setEditing(false);
  };

  return (
    <Card
      className={`mb-3 ${isPast ? 'text-muted bg-light' : ''}`}
      style={{ opacity: isPast ? 0.6 : 1 }}
    >
      <Card.Body>
        {editing ? (
          <>
            <Form.Control
              type="text"
              value={tripName}
              onChange={(e) => setTripName(e.target.value)}
              placeholder="Trip Name"
              className="mb-2"
            />
            <Form.Control
              type="text"
              value={venue}
              onChange={(e) => setVenue(e.target.value)}
              placeholder="Venue"
              className="mb-2"
            />
            <Form.Control
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mb-2"
            />
            <Form.Control
              as="textarea"
              rows={2}
              value={items.map((item) => item.text).join(',')}
              onChange={(e) =>
                setItems(
                  e.target.value
                    .split(',')
                    .map((i) => ({ text: i.trim(), packed: false }))
                )
              }
              placeholder="Items (comma-separated)"
              className="mb-2"
            />
            <Form.Control
              as="textarea"
              rows={2}
              value={itinerary}
              onChange={(e) => setItinerary(e.target.value)}
              placeholder="Itinerary (optional)"
              className="mb-2"
            />
            <Button variant="success" onClick={handleUpdate} className="me-2">
              Save
            </Button>
            <Button variant="secondary" onClick={() => setEditing(false)}>
              Cancel
            </Button>
          </>
        ) : (
          <>
            <Row className="align-items-center mb-3">
              <Col md={8}>
                <Card.Title
                  className="fw-bold fs-4"
                  style={{
                    background:
                      'linear-gradient(90deg, #FF6B6B, #FF8C42, #FFD93D)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {tripName}{' '}
                  <small className="text-muted"> ({todo.vacationType})</small>
                </Card.Title>
                <Card.Subtitle className="mb-2" style={{ color: '#FF6B6B' }}>
                  {venue}
                </Card.Subtitle>
                <Card.Text style={{ color: '#FF8C42' }}>
                  <strong>Date: {date}</strong>
                </Card.Text>
              </Col>
              <Col
                md={4}
                style={{
                  color:
                    timeLeft.days === 0 && timeLeft.hours === 0
                      ? '#D72638'
                      : '#2E86AB',
                  fontWeight: '600',
                }}
              >
                {timeLeft.days === 0 && timeLeft.hours === 0
                  ? 'Trip started or already passed!'
                  : `${timeLeft.days} days ${timeLeft.hours} hours`}
              </Col>
            </Row>

            {/* Middle Row: Packing List + Itinerary */}
            <Row className="mb-3">
              <Col md={6}>
                <Card.Text className="fw-bold">Packing List:</Card.Text>
                <ul className="list-unstyled ms-2">
                  {todo.items.map((item, index) => (
                    <li key={index} className="mb-1">
                      <label>
                        <input
                          type="checkbox"
                          checked={item.packed}
                          onChange={() =>
                            dispatch(
                              toggleItem({
                                todoId: todo.id,
                                itemIndex: index,
                              })
                            )
                          }
                          className="me-2"
                        />
                        <span
                          className={
                            item.packed
                              ? 'text-decoration-line-through text-muted'
                              : ''
                          }
                        >
                          {item.text}
                        </span>
                      </label>
                    </li>
                  ))}
                </ul>
              </Col>

              <Col md={6}>
                {itinerary && (
                  <>
                    <Card.Text className="fw-bold">Itinerary:</Card.Text>
                    <Card.Text style={{ whiteSpace: "pre-wrap", display: "block" }}>
                      {itinerary}
                    </Card.Text>
                  </>
                )}
              </Col>
            </Row>

            {/* Bottom Row: Buttons */}
            <Row>
              <Col className="d-flex justify-content-end">
                <Button
                  variant="outline-warning"
                  onClick={() => setEditing(true)}
                  className="me-2"
                >
                  ✏️ Edit
                </Button>
                <Button
                  variant="outline-danger"
                  onClick={() => dispatch(deleteTodo(todo.id))}
                  className="me-2"
                >
                  🗑️ Delete
                </Button>
              </Col>
            </Row>
          </>
        )}
      </Card.Body>
    </Card>
  );
}
