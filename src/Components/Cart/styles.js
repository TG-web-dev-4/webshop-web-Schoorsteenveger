import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
    media: {
        height: 160,
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    cartActions: {
        justifyContent: 'space-between',
    },
    buttons: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    totalAmount: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    checkoutBox: {
        display: 'flex',
        alignItems: 'center',
        // justifyContent: 'space-between',
        width: '100%',
        backgroundColor: 'grey',
        height: '100',
    }
}));