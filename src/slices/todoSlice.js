import { createSlice } from '@reduxjs/toolkit';
import { packingTemplates } from '../data/packingTemplates';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const { tripName, venue, date, vacationType, itinerary } = action.payload;
      const items = packingTemplates[vacationType] || [];

      state.push({
        id: Date.now(),
        tripName: action.payload.tripName,
        venue: action.payload.venue,
        date: action.payload.date,
        vacationType: action.payload.vacationType,
        items: items.map((item) => ({ text: item, packed: false })),
        itinerary: itinerary || '',
      });
    },
    updateTodo: (state, action) => {
      //action.payload should be {id, tripName, venue, date, items}
      const { id, tripName, venue, date, items, itinerary } = action.payload;
      const todo = state.find((t) => t.id === id);
      if (todo) {
        todo.tripName = tripName;
        todo.venue = venue;
        todo.date = date;
        todo.items = Array.isArray(items)
          ? items
          : items.split(',').map((i) => i.trim());
        todo.itinerary = itinerary || '';
      }
    },
    deleteTodo: (state, action) => {
      return state.filter((t) => t.id !== action.payload);
    },
    toggleItem: (state, action) => {
      const { todoId, itemIndex } = action.payload;
      const todo = state.find((t) => t.id === todoId);
      if (todo) {
        todo.items[itemIndex].packed = !todo.items[itemIndex].packed;
      }
    },
  },
});

export const { addTodo, updateTodo, deleteTodo, toggleItem } =
  todoSlice.actions;
export default todoSlice.reducer;
