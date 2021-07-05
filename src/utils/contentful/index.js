import { client } from '../../contentful/client';

export const getContentfulData = () => {
  return client
    .getEntries({
      content_type: 'product',
    })
    .then((res) =>
      res.items.map((item) => {
        const id = item.sys.id;
        const image = item.fields.image.fields.file.url;

        return {
          ...item.fields,
          id,
          image,
        };
      })
    )
    .catch((err) => console.log(err));
};

export const getContentfulDeliveryMethods = () => {
  return client
    .getEntries({
      content_type: 'delivery',
    })
    .then((res) =>
      res.items.map((item) => {
        const id = item.sys.id;
        const icon = item.fields.icon.fields.file.url;

        return {
          ...item.fields,
          id,
          icon,
        };
      })
    )
    .catch((err) => console.log(err));
};
