import tokenService from "./tokenService"
const BASE_URL = '/api/hotels/'

export function addHotel(hotelData) {
    console.log("service data", hotelData)
    return fetch(BASE_URL, {
      headers: { 'content-type': 'application/json',
        Authorization: "Bearer " + tokenService.getToken() },
      method: 'POST',
      body: JSON.stringify(hotelData)
    },{mode: "cors" })
    .then(res => res.json())
  }

// export function deleteOne(id) {
//     return fetch(`${BASE_URL}/${id}`, {
//       method: 'DELETE'
//     }).then(res => res.json());
//   }