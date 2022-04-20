import Styles from "@/types/Styles";

export const styles: Styles = {
    "list": "grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 xl:gap-14",
    "listElement": `border
        border-solid
        border-[color:var(--color-font)]
        rounded-lg
        drop-shadow-md
        hover:drop-shadow-xl
        bg-[color:var(--color-secondary)]
        grid
        grid-cols-3
        gap-0
        grid-rows-4`,
    "thumbnail": `object-cover
        h-full
        w-full
        rounded-lg`,
    "thumnailContainer": `col-start-3
        col-span-1
        row-start-1
        row-span-4`,
    "title": `font-bold
        text-[color:var(--color-accent)]
        py-4
        px-2
        break-words
        row-start-1
        col-start-1
        col-span-2
        row-span-2
        text-center
        align-middle
        inline-block
        text-2xl`,
    "date": `text-[color:var(--color-font)]
        p-2
        row-start-3
        col-start-1
        col-span-1
        row-span-1
        text-left
        align-middle
        text-md`,
    "readTime": `text-[color:var(--color-font)]
        p-2
        row-start-3
        col-start-2
        col-span-1
        row-span-1
        text-left
        align-middle
        text-md`,
    "tags": `flex
        flex-wrap
        row-start-4
        col-start-1
        col-span-2
        row-span-1
        mx-2
        my-3`,
    "tag": `px-2
        py-1
        mr-2
        text-xs
        text-[color:var(--color-font)]
        hover:text-[color:var(--color-accent)]
        border
        border-[color:var(--color-font)]
        bg-[color:var(--color-secondary)]
        box-shadow-md
        hover:box-shadow-xl
        rounded-md`
};

export default styles;