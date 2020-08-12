require('dotenv').config();
const express = require('express');
const axios = require('axios');
const prompt = require('prompt');
const { createBasicAuth } = require('@octokit/auth');

class App {
  constructor() {}

  run() {
    const app = express();

    app.get('/node-masters', async (req, res) => {
      const auth = createBasicAuth({
        username: process.env.GITHUB_USERNAME,
        password: process.env.GITHUB_PASSWORD,
        on2Fa() {
          return prompt('Two-factor authentication Code:');
        },
      });

      const { token } = await auth();
      console.log(token);

      const { totp } = await auth({ type: 'basic' });
      console.log(totp);

      const { data } = await axios.get(
        `${process.env.GITHUB_URL}/orgs/PoaTek/members`,
        {
          headers: { access_token: token },
        }
      );
      console.log(data);
    });

    app.listen(8000, () => {
      console.log('Server is up and running');
    });
  }
}

new App().run();
