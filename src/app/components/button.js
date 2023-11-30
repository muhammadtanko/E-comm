"use client";
import { Button} from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomButton = styled(Button)(({theme})=>({
    fontSize: "13px",
    color: "white",
    marginTop: "10px",
    backgroundColor: "linear-gradient(90deg, #127FFF 100%, #0067FF 100%)",
   
}))

export default CustomButton;