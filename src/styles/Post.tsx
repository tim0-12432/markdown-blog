import Styles from "@/types/Styles";

export const styles: Styles = {
    "cover": `object-cover
        bg-cover
        bg-no-repeat
        bg-center
        h-80
        w-full
        rounded-lg
        drop-shadow-lg
        mb-4`,
    "title": `font-bold
        text-[color:var(--color-font)]
        text-4xl`,
    "details": `text-[color:var(--color-font)]
        text-md
        font-light
        mt-4`,
    "date": `text-[color:var(--color-font)]
        text-md
        font-normal
        mt-2
        pl-4`,
    "readTime": `text-[color:var(--color-font)]
        text-md
        font-normal
        pl-4`,
    "author": `text-[color:var(--color-font)]
        text-md
        font-normal
        pl-4`,
    "tags": `flex
        flex-wrap
        row-start-4
        col-start-1
        col-span-2
        row-span-1
        mx-2
        pl-2
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
        rounded-md
        font-normal`,
    "h1": `font-bold
        mt-4
        mb-1
        text-[color:var(--color-font)]
        text-3xl`,
    "h2": `font-bold
        mt-3
        mb-1
        text-[color:var(--color-font)]
        text-2xl`,
    "h3": `font-bold
        mt-2
        mb-1
        text-[color:var(--color-font)]
        text-xl`,
    "h4": `font-bold
        my-1
        text-[color:var(--color-font)]
        text-lg`,
    "p": `text-[color:var(--color-font)]
        text-md`,
    "a": `text-[color:var(--color-accent)]
        cursor-pointer
        hover:underline`,
    "li": `mt-1
        text-[color:var(--color-font)]
        text-md`,
    "ul": `list-disc
        pl-4`,
    "ol": `list-decimal
        pl-4`,
    "blockquote": ` border-l-4
        border-[color:var(--color-primary)]
        p-4
        text-[color:var(--color-font)]
        text-md`,
    "code": `bg-[#22272d]
        rounded-md
        p-1
        text-[#a7b3c0]`,
    "pre": `bg-[#22272d]
        rounded-lg
        p-3
        my-4`,
    "strong": `font-extrabold
        text-[color:var(--color-font)]`
};

export default styles;