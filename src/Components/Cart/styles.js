import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
    cardMedia: {
        height: 0,
        paddingTop: '56.25%',
    },
    CardContent: {
        display: 'flex',      
        justifyContent: 'space-between',
        fontSize: '1.7rem',
    },
    CardActions: {
        justifyContent: 'space-evenly',
    },
    buttons: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    TotalAmount: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
}));