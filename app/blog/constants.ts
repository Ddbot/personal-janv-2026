import { FilteredCategory } from "./Index";
type Theme = "light" | "dark";
type Tag = {
    name: string;
}

const categories_list: Record<FilteredCategory, number> = {
    "dev": 6504,
    "diy": 6460,
    "musique": 4315
}

export const cards_palette: Record<Theme, string[]> = {
    light: ["#072448","#54d2d2","#ffcb00","#f8aa4b","#ff6150"],
    dark: ["#473107", "#D18254", "#000CFF", "#4ABFF7", "#4FFFA3"]
}

const tags_list: Record<string, Tag> = {
    "696297179": {
        name: "apps_script"
    },
 
    "169": {
        name: "css"
    },
 
    "6504": {
        name: "dev"
    },
 
    "647": {
        name: "html"
    },
 
    "21291": {
        name: "js"
    },
 
    "636056967": {
        name: "nextjs"
    },
 
    "96530": {
        name: "react"
    },
 
    "711439700": {
        name: "supabase"
    },
 
    "33": {
        name: "wordpress"
    }
}

export { tags_list, categories_list };