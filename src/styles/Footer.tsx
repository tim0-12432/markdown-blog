import Styles from "@/types/Styles";

export const styles: Styles = {
    "container": `w-full
        bg-[color:var(--color-primary)]
        py-5
        px-3
        m-0
        flex
        justify-center
        items-center
        flex-col`,
    "text": `text-sm
        font-thin
        text-[color:var(--color-font)]
        my-3`,
    "themeBtn": `text-sm
        font-normal
        text-[color:var(--color-font)]
        border-2
        border-[color:var(--color-font)]
        bg-[color:var(--color-primary)]
        box-shadow-md
        hover:box-shadow-xl
        rounded-md
        py-1
        px-2`
};

export default styles;