import configuration from "@/config/configuration";
import { Color } from "@/types/Configuration";

export const colors: {dark: Color, light: Color} | Color = configuration.colors;

export function getColor(theme: "dark" | "light", color: "primary" | "secondary" | "font" | "accent") {
    switch (theme) {
        case "dark":
            if ("dark" in colors) {
                return colors.dark[color];
            }
            break;
        case "light":
            if ("light" in colors) {
                return colors.light[color];
            }
            break;
        default:
            break;
    }
    return (colors as Color)[color];
}

export default getColor;