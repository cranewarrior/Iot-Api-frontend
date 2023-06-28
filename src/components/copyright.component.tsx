import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';


export const Copyright=(props: any)=> {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://www.netlinksdn.com" target="_blank">
                NetLinkSDN
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}