import {
    AppBar,
    BottomNavigation,
    BottomNavigationAction,
    Box,
    CssBaseline,
    Paper,
    Tab,
    Tabs,
    Toolbar,
    Typography
} from "@mui/material";
import {AddCircle, Home, Person} from "@mui/icons-material";
import {useState} from "react";
import ClubCard from "../components/ClubCard";
import {Club} from "../type";

const clubs: Club[] = Array(200).fill({
    id: 1,
    name: "나이스데이 볼링 동아리",
    description: "나이스데이인 이라면 모두 참여할 수 있습니다.",
    thumbnailImage: {
        path: "https://mui.com/static/images/cards/live-from-space.jpg",
        name: "이미지"
    },
})

function IndexPage() {

    const [value, setValue] = useState('one');

    const handleChange = (event: any, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box>
            <CssBaseline/>
            <AppBar
                component="nav"
                sx={{
                    background: "#fff"
                }}
            >
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}} color="black">
                        Clubber
                    </Typography>
                </Toolbar>
                <Box sx={{width: '100%', px: 2}}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="primary"
                        indicatorColor="primary"
                    >
                        <Tab value="one" label="클럽"/>
                        <Tab value="two" label="일정"/>
                    </Tabs>
                </Box>
            </AppBar>
            <Box sx={{my: 16}}>
                {
                    clubs.map(c => <ClubCard key={c.id} club={c}/>)
                }
            </Box>
            <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0}}>
                <BottomNavigation showLabels>
                    <BottomNavigationAction label="홈" icon={<Home/>}/>
                    <BottomNavigationAction icon={<AddCircle/>}/>
                    <BottomNavigationAction label="프로필" icon={<Person/>}/>
                </BottomNavigation>
            </Paper>
        </Box>
    );
}

export default IndexPage;
