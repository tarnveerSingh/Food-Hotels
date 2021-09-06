import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

// This is the same code as below

// const options  = {
//     params: {
//     bl_latitude: '11.847676',
//     tr_latitude: '12.838442',
//     bl_longitude: '109.095887',
//     tr_longitude: '109.149359',
//     },
//     headers: {
//     'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
//     'x-rapidapi-key': '8621c1704f7mshf631176026c0f59p11ce8djsn945a97c8aa42'
//     }
// }

// export const getPlacesData = async () =>{
//     try {
//         // requesting the api in try
//         const { data:  { data } }  = await axios.get(URL, options)

//         return data;

//     } catch (error) {
//         // if unsuccessful catch will capture the error and print it
//             console.log(error)
//     }
// }

export const getPlacesData = async (sw, ne) => {
  try {
    // requesting the api in try
    // const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
    // console.log("🚀 ~ getPlacesData ~ resp", resp);
    // const data = await resp.json();
    // console.log("🚀 ~ getPlacesData ~ data", data);
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        "x-rapidapi-key": "",
      },
    });
    // console.log("🚀 ~ getPlacesData ~ rest", rest);

    return data;
  } catch (error) {
    // if unsuccessful catch will capture the error
    console.log(error);
  }
};
