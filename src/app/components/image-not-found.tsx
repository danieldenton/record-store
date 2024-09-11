type Size = {
  size?: number;
};

export default function ImageNotFound({ size }: Size) {
  return (
    <div
      className="flex justify-center items-center bg-secondary"
      style={{ height: size, width: size }}
    >
      <h1 className="text-primary text-xs">Image not found</h1>
    </div>
  );
}