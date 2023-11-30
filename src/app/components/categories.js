import MenuIcon from "@mui/icons-material/Menu"
import Box from "@mui/material/Box"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';




export const Categories = () => {

    const categories = [
        {
            id: 1,
            name: "All",
        },
        {
            id: 2,
            name: "Hot offers   ",
        },
        {
            id: 3,
            name: "Gift Boxes",
        },
        {
            id: 4,
            name: "Projects",
        },
        {
            id: 5,
            name: "Menu item",
        },
        {
            id: 6,
            name: "Help"
        },
        {
            id: 7,
            name: "All",
        },
        {
            id: 8,
            name: "Hot offers",
        },
        {
            id: 9,
            name: "Gift Boxes",
        },
        {
            id: 10,
            name: "Projects",
        },
        {
            id: 11,
            name: "Menu item",
        },
        {
            id: 12,
            name: "Help"
        }
    ]
    return (
        <Box sx={{
            display: { xs: "none", md: "block" },
            // overflow: 'visible',
            overscrollBehavior: "auto"
        }}>
            <List
                sx={{
                    width: "100%",
                    backgroundColor: "#ffffff",
                    // maxWidth:""
                }}>
                {categories.map((item, idx) => (
                    <ListItem key={idx}>
                        <ListItemText>
                            <Typography
                                >
                                {item.name}
                            </Typography>
                        </ListItemText>
                    </ListItem>

                ))}

            </List>
        </Box>
    );
}