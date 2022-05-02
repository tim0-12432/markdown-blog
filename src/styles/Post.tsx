import Styles from "@/types/Styles";

export const styles: Styles = {
    "title": `font-bold
        text-[color:var(--color-font)]
        text-4xl`,
    "date": `text-[color:var(--color-font)]
        text-md`,
    "readTime": `text-[color:var(--color-font)]
        text-md`,
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