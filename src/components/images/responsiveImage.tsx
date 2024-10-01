import Image from 'next/image';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  aspectRatio: number;
}

export default function ResponsiveImage({
  src,
  alt,
  aspectRatio
}: ResponsiveImageProps) {
  const width = 1000;
  const height = Math.round(width / aspectRatio);

  return (
    <Image
      src={src}
      alt={alt}
      sizes="100vw"
      className="w-full h-auto"
      width={width}
      height={height}
    />
  );
}
