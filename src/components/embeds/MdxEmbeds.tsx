import YouTube from "./YouTube";
import Image from "./Image";

export const MdxEmbeds: {[name: string]: ({}: any) => JSX.Element} = {
  Youtube: YouTube,
  Image: Image
};

export default MdxEmbeds;