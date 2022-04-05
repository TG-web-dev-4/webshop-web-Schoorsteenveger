import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
    root: {
        maxWidth: '100',
        height: 'auto'
    },
    CardMedia: {
        height: 100,
        paddingTop: '56.25%',
    },
    CardContent: {
        display: 'flex',      
        justifyContent: 'space-between',
        fontSize: '1.7rem',
    },
    CardActions: {
        justifyContent: 'space-around',
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