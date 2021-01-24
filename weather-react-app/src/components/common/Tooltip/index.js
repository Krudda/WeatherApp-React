import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';

const LightTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: '#ebebeb',
        fontSize: 14,
        fontWeight: '100'
    },
  }))(Tooltip);

  export default  LightTooltip;