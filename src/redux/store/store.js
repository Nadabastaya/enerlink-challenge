import { configureStore } from '@reduxjs/toolkit'
import { todosSlice } from '../slices/todos/todosSlices'

export const store = configureStore({
    reducer: {
        todos: todosSlice.reducer,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})