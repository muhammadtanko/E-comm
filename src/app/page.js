import { NavBar } from "@/app/components/NavBar";
import { Box } from "@mui/material";
import { Hero } from "./components/hero";

export default function Home() {


  return (
    <Box sx={{
      // bgcolor:"#f7fafc"
    }}>
      <NavBar />
      <Hero />
    </Box>
  )
}