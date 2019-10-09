// import React from "react";
import AdminPage from "../components/AdminPage";

// // 1. import axios and MockAdapter
// import  axios from 'axios';
// import  MockAdapter from 'axios-mock-adapter';

// // 2. create the mock
// const mock = new MockAdapter(axios);

// // 2.1 the api request to be intercepted has to match exactly
// const API_REQUEST = 'https:///api/organizations/:organization_id/users/'

// import {
//   withKnobs,

//   array,

// } from "@storybook/addon-knobs";
// export function MapStory() {
//   const usersData = array("users", [
//     {
//       id: 1,
//       name: "Rahim",
//       email: "ismaili@gmail.com",
//       createdDate: "2019-10-1",
//       organization: "kvideo"
//     },
//     {
//       id: 2,
//       name: "Swapna",
//       email: "sahu@gmail.com",
//       createdDate: "2019-10-1",
//       organization: "kvideo"
//     },
//     {
//       id: 3,
//       name: "Fowad",
//       email: "f@gmail.com",
//       createdDate: "2019-10-1",
//       organization: "kvideo"
//     }
//   ]);

// export function AdminPageStory() {
//   return (
//     <div>
//       <AdminPage userData={usersData}/>
//     </div>
//   );
// }

import React from "react";
import { storiesOf } from "@storybook/react";

// 1. import axios and MockAdapter
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

// 2. create the mock
const mock = new MockAdapter(axios);

// 2.1 the api request to be intercepted has to match exactly
//const API_REQUEST = "//api/organizations/:organization_id/users/";

storiesOf("Admin Page", module).add("Test", () => {
  // 4. create the mock inside the story
  // if this is outside it'll mess up with other axios instances/requests
  mock.onGet("//api/organizations/:organization_id/users/").reply(200, [
    {
      id: 1,
      name: "Rahim",
      email: "ismaili@gmail.com",
      createdDate: "2019-10-1",
      organization: "kvideo"
    },
    {
      id: 2,
      name: "Swapna",
      email: "sahu@gmail.com",
      createdDate: "2019-10-1",
      organization: "kvideo"
    },
    {
      id: 3,
      name: "Fowad",
      email: "f@gmail.com",
      createdDate: "2019-10-1",
      organization: "kvideo"
    }
  ]);

  return <AdminPage />;
});
