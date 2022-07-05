import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  user: [],
  success: false,
};

export const crudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => {
        return user.id !== action.payload;
      });
    },
    getUser: (state, action) => {
      state.user = state.users.filter((user) => user.id == action.payload);
    },
    resetUser: (state, action) => {
      state.user = [];
      state.success = false;
    },
    updateUser: (state, action) => {
      const { id } = action.payload;
      state.success = true;
      state.users = state.users.map((user) => {
        return user.id == id ? (user = action.payload) : user;
      });
    },
  },
});

export const { addUser, deleteUser, getUser, resetUser, updateUser } =
  crudSlice.actions;

export default crudSlice.reducer;
