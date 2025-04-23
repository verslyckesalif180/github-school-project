// This is a simple example of handling async operations in TypeScript.
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('api/fetchData', async () => {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("There was an error", error);
    throw error;
  }
});

// You can call the fetchData function using `redux-saga` for async operations.
