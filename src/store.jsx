import { createStore } from "easy-peasy";

export const store = createStore({
  formData: {
    type: "",
    bags: "",
    location: "",
    helpGroups: [],
    organisation: "",
    street: "",
    city: "",
    postcode: "",
    phone: "",
    day: "",
    time: "",
    notes: "",
  },
});
