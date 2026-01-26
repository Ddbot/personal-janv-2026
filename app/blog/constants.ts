import { Category } from "./Index";
type Tag = {
    name: string;
}

const categories_list: Record<Category, number | number[]> = {
    all: [6504, 6460, 4315],
    dev: 6504,
    diy: 6460,
    musique: 4315
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