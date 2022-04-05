import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
    root: {
    //    minWidth: '100',
    //     height: 'auto'
    },
    media: {
        height: 100,
        paddingTop: '56.25%',
    },
    Card: {
      transition: 'transform 200ms ease in',
    },
    CardActions: {
        display: 'flex',
        justifyContent: 'space-between',
        // backgroundColor: 'pink'
    },
    CardContent: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    CardDescription: {
        lineClamp: 3,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        paddingRigth: '5px',
        '& p': {
            wordBreak: 'break-all'
        }
    }
    

}));
