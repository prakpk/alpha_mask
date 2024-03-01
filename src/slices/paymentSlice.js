// features/payment/paymentSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const endPoint = 'YOUR_API_ENDPOINT'; // Make sure this is correctly defined or imported

export const initializePayment = createAsyncThunk(
  'payment/initialize',
  async (_, { rejectWithValue }) => {
    try {
      const responses = await Promise.all([
        fetch(`${endPoint}/config`),
        fetch(`${endPoint}/urls`),
        fetch(`${endPoint}/create-payment-intent`),
      ]);
      const dataArray = await Promise.all(responses.map(response => response.json()));

      const { publishableKey, serverUrl, clientUrl, clientSecret } = dataArray;

      // Load HyperLoader.js script dynamically
      const script = document.createElement('script');
      script.src = `${clientUrl}/HyperLoader.js`;
      document.head.appendChild(script);

      await new Promise((resolve, reject) => {
        script.onload = resolve;
        script.onerror = () => reject(new Error('Failed to load the HyperLoader.js script'));
      });

      // Initialize Hyper instance after script is loaded
      const hyperPromise = window.Hyper(publishableKey, { customBackendUrl: serverUrl });

      return { publishableKey, serverUrl, clientUrl, clientSecret, hyperPromise };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const paymentSlice = createSlice({
  name: 'payment',
  initialState: {
    hyperPromise: null,
    clientSecret: '',
    status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
    error: null,
    isSuccess: false, // For payment success status
    message: null, // For payment messages
    isProcessing: false, // For processing state
  },
  reducers: {
    setSuccess: (state, action) => {
      state.isSuccess = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    setProcessing: (state, action) => {
      state.isProcessing = action.payload;
    },
    resetPayment: (state) => {
      // Reset the state to initial values
      state.hyperPromise = null;
      state.clientSecret = '';
      state.status = 'idle';
      state.error = null;
      state.isSuccess = false;
      state.message = null;
      state.isProcessing = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(initializePayment.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(initializePayment.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.clientSecret = action.payload.clientSecret;
        state.hyperPromise = action.payload.hyperPromise;
      })
      .addCase(initializePayment.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

// Export reducers and actions
export const { setSuccess, setMessage, setProcessing, resetPayment } = paymentSlice.actions;

export default paymentSlice.reducer;
