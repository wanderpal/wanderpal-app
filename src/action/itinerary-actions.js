import superagent from "superagent";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_KEY;
const CREATE_ITINERARY_ROUTE = "create";
const GET_ITINERARIES_ROUTE = "dashboard";

export const create = (itinerary) => ({
  type: "CREATE_ITINERARY",
  payload: itinerary
});

export const get = (itinerary) => ({
  type: "GET_ALL",
  payload: itinerary
});

export const createItinerary = itinerary => store => {
  let { image } = itinerary;
  let formData = new FormData();
  formData.append('userId', itinerary.userId);
  formData.append('name', itinerary.name);
  formData.append('dateStart', itinerary.dateStart);
  formData.append('dateEnd', itinerary.dateEnd);
  formData.append('location', itinerary.location);
  formData.append('details', itinerary.details);
  formData.append("image", itinerary.image);

  return axios.post(`${API_URL}${CREATE_ITINERARY_ROUTE}`, formData, {
    headers: { "Content-Type": "multipart/form-data" }
  }).then(response => {
    return store.dispatch(create(response.data));
  });
};

export const getItineraries = id => store => {
  return superagent.get(`${API_URL}${GET_ITINERARIES_ROUTE}/${id}`)
    .then(response => {
      let sorted = response.body.sort((a, b) => {
        return new Date(b.dateStart) - new Date(a.dateStart);
      });

      // FUTURE: Adding past itineraries
      // let pastItineraries = sorted.map((trip, index) => {
      //   if (isBefore(new Date(trip.dateStart), new Date())){
      //     pastItineraries.push(trip);
      //     sorted.splice(1, index);
      //   }
      // });
      //
      // let itineraries = { current: sorted, past: pastItineraries };

      return store.dispatch(get(sorted));
    })
    .catch(console.log);
};

export const update = itinerary => {
  return {
    type: 'UPDATE_ITINERARY',
    payload: itinerary
  }
};

export const updateItinerary = formData => store => {
  let { id } = formData;
  let { image } = formData;
  return superagent.put(`${API_URL}itineraries/${id}`)
    .set('Content-Type', 'multipart/form-data')
    .type('form')
    .attach('image', image)
    .send(formData)
    .then(response => {
      let sorted = response.body.sort((a, b) => {
        return new Date(b.dateStart) - new Date(a.dateStart);
      });
      return store.dispatch(update(sorted));
    })
    .catch(console.log);
};

export const deleteOne = (id) => ({
  type: "DELETE_ITINERARY",
  payload: id
});

export const deleteItinerary = id => store => {
  return superagent.delete(`${API_URL}itineraries/${id}`)
    .then(() => {
      return store.dispatch(deleteOne(id))
    });
};

