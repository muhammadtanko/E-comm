import Image from "next/image";
import Box from "@mui/material/Box";
import bannerImage from "@img/banner.png";


export const Banner = () => {
    return (
        <Box
            sx={{

            }}>
            <Image
                alt="Banner image"
                src={bannerImage}
                //  /home/muhammad/Dev/code/emporium/public/assets/images/banner.png
            />
            kkkk
        </Box>

    )
}