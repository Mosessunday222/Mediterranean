import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAddress } from "../../services/apiGeocoding";

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export const fetchAddress = createAsyncThunk(
  "user/fetchAddress",
  async function () {
    // 1) We get the user's geolocation position
    const positionObj = await getPosition();
    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };

    // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
    const addressObj = await getAddress(position);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

    // 3) Then we return an object with the data that we are interested in
    // payload of the fullied state
    return { position, address };
  }
);

const initialState = {
  username: "",
};

const userSlice = createSlice({
  name: "user",
  status: "idle",
  position: {},
  address: "",
  error: "",
  initialState,
  reducers: {
    updateName(state, actions) {
      state.username = actions.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAddress.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAddress.fulfilled, (state, actions) => {
        state.position = actions.payload.position;
        state.address = actions.payload.address;
        state.status = "idle";
      })
      .addCase(fetchAddress.rejected, (state, actions) => {
        state.status = "error";
        state.error =
          "we had problem trying to get your address pls help us to filed it, so that we can deliver";
      }),
});

export const { updateName } = userSlice.actions;

export default userSlice.reducer;
