/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Link from '@mui/material/Link';

export const CardProject = (props) => {
    return (
        <Card sx={{ maxWidth: 345}} className='portfolio_single_content'>
            <CardActionArea >
            <Link 
            target="_blank"
            rel="noopener"
            href={props.projects.url} >
                <CardMedia
                    component="img"
                    height="300"
                    image={props.projects.srcImg}
                    alt="green iguana"
                />
                <CardContent className='portfolio_single_content_text'>
                    <Typography gutterBottom variant="h5" component="div" className='projects_title'>
                        {props.projects.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className='projects_subtitle'>
                        {props.projects.subtitle}
                    </Typography>
                </CardContent>
                </Link>
            </CardActionArea>
        </Card>
    )
}
