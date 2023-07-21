import {Avatar, AvatarGroup, Box, Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {Club} from "../type";

interface Props {
    club: Club
}

function ClubCard({club}: Props) {
    return (
        <Box mt={2} mx={2}>
            <Card>
                <CardActionArea sx={{display: 'flex', justifyContent: 'left'}}>
                    <CardMedia
                        component="img"
                        sx={{width: 151}}
                        image={club.thumbnailImage.path}
                        alt="Live from space album cover"
                    />
                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                        <CardContent sx={{flex: '1 0 auto'}}>
                            <Typography component="div" variant="h5">
                                {club.name}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                {club.description}
                            </Typography>
                        </CardContent>
                        <Box sx={{display: 'flex', alignItems: 'center', pl: 1, pb: 1}}>
                            <AvatarGroup max={4}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg"/>
                                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg"/>
                                <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg"/>
                                <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg"/>
                            </AvatarGroup>
                        </Box>
                    </Box>
                </CardActionArea>
            </Card>
        </Box>
    );
}

export default ClubCard;