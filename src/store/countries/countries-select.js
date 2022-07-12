export const getCountries = (state) => ({
  status: state.countries.status,
  error: state.countries.error,
  qty: state.countries.list.length,
});

export const getAllCountries = (state) => state.countries.list;
