import Image from "next/image";
import ImageNotFound from "./image-not-found";

export default function ({ image }: { image: string }) {
  return (
    <>
      {image ? (
        <Image src={image} alt="artist cover" width={400} height={400} className="object-contain"/>
      ) : (
        <ImageNotFound />
      )}
    </>
  );
}
