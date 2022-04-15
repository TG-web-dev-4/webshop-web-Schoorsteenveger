import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
    Media: {
        paddingTop: '56.25%',
    },
    Card: {
        transition: 'transform 200ms ease in',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'

    },
    CardActions: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    CardContent: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    CardDescription: {
        // lineClamp: 2,
        // textOverflow: 'ellipsis',
        wordWrap: 'break-word',
        whiteSpace: 'nowrap',
        
    }
    
}));
