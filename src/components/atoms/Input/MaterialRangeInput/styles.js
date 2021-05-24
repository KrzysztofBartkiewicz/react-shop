import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import { mainTheme } from '../../../../themes/mainTheme';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: 200 + theme.spacing(3) * 2,
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
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
    fontSize: '12px',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);
