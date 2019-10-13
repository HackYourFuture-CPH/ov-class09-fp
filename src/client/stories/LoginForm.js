import React from "react";
import LoginForm from "../components/login-form";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
//import axios from 'axios';
//import MockAdapter from 'axios-mock-adapter';

// 2. create the mock
//const mock = new MockAdapter(axios);

// 2.1 the api request to be intercepted has to match exactly
//const API_REQUEST = '/api/auth/login';

export function LoginFormStory() {
  const email = text("Email", "test@test.com");
  const password = text("password", "test");
  const isLoggedIn = boolean("isLoogedIn", false);

  return (
    <LoginForm Email={email} Password={password} isLoggedIn={isLoggedIn} />
  );
}
//export default LoginFormStory;
//storiesOf('Mocking Api responses with Axios and axios-mock-adapter', module)
//.add('Test', () => {

// 4. create the mock inside the story
// if this is outside it'll mess up with other axios instances/requests
//mock.onGet(API_REQUEST).reply(200, { test: 'some mock data' });

// return <LoginForm />
// });
