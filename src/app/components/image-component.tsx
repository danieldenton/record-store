import Image from "next/image";
import ImageNotFound from "./image-not-found";

export default function ({ image }: { image: string }) {
  return (
    <>
      {image ? (
        <Image src={image} alt="artist cover" width={300} height={300} className="object-contain"/>
      ) : (
        <ImageNotFound />
      )}
    </>
  );
}
