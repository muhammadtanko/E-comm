"use client";
import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MessageIcon from '@mui/icons-material/Message';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import { Paper } from "@mui/material"
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import Button from "@mui/material/Button";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: "#fff",
    // position:"fixed",
}));

const StyledToolBar = styled(Toolbar)(({ theme }) => ({
    // width: "90%",
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    [theme.breakpoints.up("xl")]: {
        width: "97%"
    },
    [theme.breakpoints.down("xl")]: {
        width: "90%"
    },
    [theme.breakpoints.down("lg")]: {
        width: "90%"
    },
    [theme.breakpoints.down("md")]: {
        width: "90%"
    }
}));



export const NavBar = () => {
    return (
        <div>
            <StyledAppBar>
                <StyledToolBar>
                    <Box sx={{
                        display: "flex"
                    }}>
                        <IconButton
                            sx={{ display: { xs: "block", md: "none" } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Link href={"/"}>
                            <Image src={"../assets/images/logo.svg"} width={50} height={50} />
                        </Link>
                    </Box>

                    <Box sx={{
                        display: { xs: "none", md: "block" },
                    }}>
                        <Paper component={"form"} elevation={0} variant="outlined" sx={{ p: "2px 4px", width: "420px", border: "1px solid #0D6EFD", display: "flex", justifyContent: "space-between" }}>
                            <InputBase placeholder="Search" sx={{ ml: "5px", borderRadius: "1px solid #0D6EFD" }} />
                            <Divider orientation="vertical" sx={{ color: "#0D6EFD" }} />
                            <Button variant="contained">
                                Search
                            </Button>
                        </Paper>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                        <IconButton >
                            <PersonIcon />
                        </IconButton>
                        <IconButton sx={{
                            display: { xs: "none", md: "block" },
                        }}>
                            <MessageIcon />
                        </IconButton>
                        <IconButton sx={{
                            display: { xs: "none", md: "block" },
                        }}>
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton>
                            <ShoppingCartIcon />
                        </IconButton>

                    </Box>
                </StyledToolBar>
            </StyledAppBar>

        </div>
    )
}
