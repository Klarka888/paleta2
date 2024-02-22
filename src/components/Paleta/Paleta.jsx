import { ShemeColor } from "../ShemeColor/ShemeColor";
import { palettes } from "../../palettes";

export const Paleta = () => {
    return (
        palettes.map((jednaPaletaData) => {
            return (
                <ShemeColor palety={jednaPaletaData}></ShemeColor>    
            ) 
        }
        )
}

//Pak bych v indexu do props vložila palettes.js ?
