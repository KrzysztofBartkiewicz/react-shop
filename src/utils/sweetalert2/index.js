import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import styles from './sweetalert2.module.css';

const MySwal = withReactContent(Swal);

const swalAlert = () => {
  MySwal.fire({
    customClass: {
      title: styles.title,
      htmlContainer: styles.text,
      confirmButton: styles.confirmBtn,
    },
    title: 'Cart',
    text: 'Product added.',
    confirmButtonText: 'OK',
    buttonsStyling: false,
    icon: 'success',
    timer: 3000,
  });
};

export default swalAlert;
