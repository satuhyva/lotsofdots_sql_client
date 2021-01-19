import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core'


export const useNavigationStyles = makeStyles((theme: Theme) => 
    createStyles({
        navigationContentsTitle: {
            color: theme.palette.primary.contrastText,
        },
        navigationContentsItem: {
            color: theme.palette.primary.contrastText,
        },
        background: {
            backgroundColor: theme.palette.primary.main,
        },
        divider: {
            backgroundColor: theme.palette.primary.contrastText,
        },
        navigationMenu: {
            backgroundColor: theme.palette.secondary.main,
            borderRadius: 8
        },
        icon: {
            fontSize: 40,
            color: theme.palette.primary.main,
        },
    })
)
