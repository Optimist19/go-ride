import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  Coordinates,
  RideState,
  // SuggestedDataType,
  userData
} from "../../../types";
import { carClassInfo } from "../../../data";

interface ShowCoords {
  startLat: number;
  startLong: number;
  endLat: number;
  endLong: number;
}

const initialState: RideState = {
  startDestination: "",
  endDestination: "",
  carClass: "",
  carPrice: 0,

  phoneNumber: 0,
  status: "",
  error: "",
  startDestinationResult: [],
  endDestinationResult: [],
  toggleStartDestinationResultModal: false,
  toggleEndDestinationResultModal: false,
  isPanelSlideOpen: false,
  isBook: false,
  startLat: 0,
  startLong: 0,
  endLat: 0,
  endLong: 0,
  coordinateRoutes: [],
  distance: 0
};

const rideSlice = createSlice({
  name: "ride",
  initialState,
  reducers: {
    toggleStartDestinationResultModalFtn(state) {
      state.toggleStartDestinationResultModal =
        !state.toggleStartDestinationResultModal;
    },
    toggleEndDestinationResultModalFtn(state) {
      state.toggleEndDestinationResultModal =
        !state.toggleEndDestinationResultModal;
    },
    setPanelSlideOpen: (state, action: PayloadAction<boolean>) => {
      state.isPanelSlideOpen = action.payload;
    },
    togglePanelSlide: (state) => {
      state.isPanelSlideOpen = !state.isPanelSlideOpen;
    },
    bookNowFtn: (state, actions: PayloadAction<userData>) => {
      const { startDestination, endDestination, carClass, phoneNumber } =
        actions.payload;

      const price = carClassInfo[carClass]?.price || 0;

      state.startDestination = startDestination;
      state.endDestination = endDestination;
      state.carClass = carClass;
      state.carPrice = price;
      state.phoneNumber = phoneNumber;
    },
    confirmBookingFtn: (state) => {
      state.isBook = true;
    },

    startCoordinatesFtn: (state, actions: PayloadAction<Coordinates>) => {
      const { longitude, latitude } = actions.payload;
      state.startLat = latitude;

      state.startLong = longitude;
    },
    endCoordinatesFtn: (state, actions: PayloadAction<Coordinates>) => {
      const { longitude, latitude } = actions.payload;
      state.endLat = latitude;

      state.endLong = longitude;
    },
    totalAmountFtn: (state, actions: PayloadAction<number>) => {
      state.carPrice = actions.payload;
    }
  },
  extraReducers: (builder) => {
    // typeStartDest
    builder
      .addCase(typeStartDest.pending, (state) => {
        state.status = "loading";
      })
      .addCase(typeStartDest.fulfilled, (state, action) => {
        state.startDestinationResult = action.payload;
        state.toggleStartDestinationResultModal =
          !state.toggleStartDestinationResultModal;
      })
      .addCase(typeStartDest.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });

    // typeEndDest
    builder
      .addCase(typeEndDest.pending, (state) => {
        state.status = "loading";
      })
      .addCase(typeEndDest.fulfilled, (state, action) => {
        state.endDestinationResult = action.payload;
        state.toggleEndDestinationResultModal =
          !state.toggleEndDestinationResultModal;
      })
      .addCase(typeEndDest.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
    //Show coordinates routes for start to end address
    builder
      .addCase(showCoordinateRoute.pending, (state) => {
        state.status = "loading";
      })
      .addCase(showCoordinateRoute.fulfilled, (state, action) => {
        state.coordinateRoutes = action.payload?.geometry?.coordinates;
        state.distance = action.payload?.distance;
      })
      .addCase(showCoordinateRoute.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  }
});

export const typeStartDest = createAsyncThunk(
  "typeStartDest",
  async (startDestination: string) => {
    const response = await fetch(`/api/search-address?q=${startDestination}`);
    const data = await response.json();
    const features = data?.data?.features;
    return features;
  }
);

export const typeEndDest = createAsyncThunk(
  "typeEndDest",
  async (endDestination: string) => {
    const response = await fetch(`/api/search-destination?q=${endDestination}`);
    const data = await response.json();
    const features = data?.data?.features;
    return features;
  }
);

export const showCoordinateRoute = createAsyncThunk(
  "showCoordinateRoute",
  async (showCoords: ShowCoords) => {
    const coords = `${showCoords.startLong},${showCoords.startLat},${showCoords.endLong},${showCoords.endLat}`;
    const response = await fetch(`/api/connect?q=${coords}`);
    const data = await response.json();
    return data?.data?.routes[0];
  }
);

export const {
  toggleStartDestinationResultModalFtn,
  toggleEndDestinationResultModalFtn,
  setPanelSlideOpen,
  togglePanelSlide,
  bookNowFtn,
  startCoordinatesFtn,
  endCoordinatesFtn,
  confirmBookingFtn
} = rideSlice.actions;

export default rideSlice.reducer;
