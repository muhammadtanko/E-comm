import { createContext, useState, useMemo } from "react"
import { createTheme } from "@mui/material"


const themeSettings = (mode) => {
    return {
        palette:{
            mode:mode,
            ...(mode ==="dark"? {
                primary:{
                    main:"",
                },
                secondary:{
                    main:""
                }
            }:
            {
                primary:{
                    main:`linear-gradient(90deg, #127FFF 100%, #0067FF 100%)`,
                },
                secondary:{
                    main:""
                } 
            }
            )
        },
        typography:{
            fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        }
    }
}
export const ColorModeContext = createContext({
    toggleColorMode: () => { }
});

export const UseMode = () => {
    const [mode, setMode] = useState("light");
    const toggleColorMode = () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"))
    }

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    return [theme, toggleColorMode];
}