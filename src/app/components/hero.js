import { Categories } from "./categories"
import { Box, Toolbar } from "@mui/material"
import Paper from "@mui/material/Paper";
import { Banner } from "./banner";







export const Hero = () => {
    return (
        <>
            <Toolbar />
            <Paper
                component={"div"}
                elevation={0}
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "auto",
                    marginTop: "20px",
                    padding: "10px",
                    width: "90%",
                    height: "400px",
                    backgroundColor: "#ffffff",
                    border: "solid 1px #A9A9A9"
                }}
            >
                <Categories />
                <Banner />
            </Paper></>
    )
}