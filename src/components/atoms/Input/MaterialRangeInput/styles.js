import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import { mainTheme } from '../../../../themes/mainTheme';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: 200 + theme.spacing(3) * 2,
    margin: '0 auto',
  },
  margin: {
    height: theme.spacing(3),
  },
}));

export const PrettoSlider = withStyles({
  root: {
    color: mainTheme.colors.tertiary,
    height: 8,
  },
  thumb: {
    height: 15,
    width: 15,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -6,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    fontSize: '10px',
  },
  track: {
    height: 4,
    borderRadius: 4,
  },
  rail: {
    height: 4,
    borderRadius: 4,
  },
})(Slider);
