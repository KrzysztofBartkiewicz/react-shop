import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import styles from './sweetalert2.module.css';

const MySwal = withReactContent(Swal);

const withStyles = MySwal.mixin({
  customClass: {
    title: styles.title,
    htmlContainer: styles.text,
    confirmButton: styles.confirmBtn,
  },
});

const swalAlert = (title, text, icon = 'success') => {
  withStyles.fire({
    title,
    text,
    confirmButtonText: 'OK',
    buttonsStyling: false,
    icon,
    timer: 3000,
  });
};

export default swalAlert;
