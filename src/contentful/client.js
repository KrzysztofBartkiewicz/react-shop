import * as contentful from 'contentful';

export const client = contentful.createClient({
  space: process.env.REACT_APP_CONTENTFULL_SPACE,
  accessToken: process.env.REACT_APP_CONTENTFULL_ACCESS_TOKEN,
});
