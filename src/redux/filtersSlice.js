import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: "filters",
  initialState: {
    filteredContacts: []
  },
  reducers: {
    setStatusFilter(state, action) {
          console.log(action.payload);
    //           return state.filter(contact =>
    //   contact.name.toLowerCase().includes(action.payload)
    // );
      const filteredContacts = state.filteredContacts.filter(contact =>
        contact.name.toLowerCase().includes(action.payload)
          );
          console.log(filteredContacts);
      return { ...state, filteredContacts };
          
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

//     deleteContact(state, action) {
//       return state.filter(contact => contact.id !== action.payload)
// },
    
//     const lowerFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(lowerFilter)
//     );