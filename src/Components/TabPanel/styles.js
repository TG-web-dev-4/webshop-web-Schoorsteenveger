import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    containerTabs: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        border: '1px solid black',
        width: '70%',
        height: 'auto'
    },
    headerTabs: {
        display: 'flex',

    },
    tabs: {
        padding: '1.5em',
        textAlign: 'center',
        width: '50%',
        background: 'primary.light',
        borderBottom: '1px solid primary.dark',
        position: 'relative',
        outline: 'none'
    }
})

export {useStyles}