import moment from 'moment';
import emailjs from 'emailjs-com';
import swalAlert from '../../../utils/sweetalert2';

const ZULU = 'YYYY-MM-DDTHH:mm:ss.SSS';

export const proceedPayment = ({
  actions,
  currentUser,
  usersCollections,
  cart,
  cartTotalPrice,
  allOrdersCollection,
  email,
  firstName,
  lastName,
  deleteAllItemsFromCart,
}) => {
  actions.order.capture().then((res) => {
    const createTime = moment(res.create_time, ZULU).format('DD-MM-YYYY');
    const deliveryDate = moment(res.create_time, ZULU)
      .add(1, 'w')
      .format('DD-MM-YYYY');

    if (currentUser) {
      usersCollections
        .doc(currentUser.id)
        .get()
        .then((doc) => {
          const userData = doc.data();

          const newOrder = {
            createTime,
            deliveryDate,
            id: res.id,
            status: res.status,
            items: cart,
            price: cartTotalPrice,
          };

          const updatedUserData = {
            ...userData,
            orders: [...userData.orders, newOrder],
          };

          usersCollections
            .doc(currentUser.id)
            .set(updatedUserData)
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    }

    allOrdersCollection
      .doc(res.id)
      .set(
        {
          id: res.id,
          email,
          firstName,
          lastName,
          createTime,
          deliveryDate,
          status: res.status,
          items: cart,
          price: cartTotalPrice,
        },
        { merge: true }
      )
      .catch((err) => console.log(err));

    const emailDetails = {
      email,
      details: cart.reduce((acc, curr, index) => {
        acc = acc.concat(`${index + 1}. ${curr.name} ${curr.price}<br />`);
        return acc;
      }, ''),
      totalPrice: `${cartTotalPrice}$`,
    };

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_EMAIL_CONFIRMATION_TEMPLATE_ID,
        emailDetails,
        process.env.REACT_APP_USER_ID
      )
      .catch((err) => console.log(err));

    swalAlert('Payment', 'Success!');
    deleteAllItemsFromCart();
  });
};
