import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import * as styles from './styles'

const Theme = responsiveFontSizes(createMuiTheme(styles))

export default Theme
