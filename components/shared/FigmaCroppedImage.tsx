import Image from "next/image";

interface FigmaCroppedImageProps {
  src: string;
  alt: string;
  /** Figma export crop — left offset as % of container (often negative) */
  cropLeft: number;
  /** Figma export crop — image width as % of container (often > 100) */
  cropWidth: number;
  /** Mirror transform used in Figma mascot exports */
  flip?: "horizontal" | "polaroid";
  /** How the image fills the crop box — contain matches Figma proportions more closely */
  objectFit?: "cover" | "contain";
  priority?: boolean;
}

/**
 * Renders a Figma-exported mascot image at design scale.
 * Figma uses overflow-hidden containers with oversized, offset images —
 * object-contain shrinks mascots; this matches the design crop instead.
 */
export default function FigmaCroppedImage({
  src,
  alt,
  cropLeft,
  cropWidth,
  flip,
  objectFit = "contain",
  priority,
}: FigmaCroppedImageProps) {
  const transform =
    flip === "horizontal"
      ? "scaleX(-1)"
      : flip === "polaroid"
        ? "rotate(180deg) scaleY(-1)"
        : undefined;

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute top-0 h-full"
        style={{
          left: `${cropLeft}%`,
          width: `${cropWidth}%`,
          transform,
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          unoptimized
          priority={priority}
          className={
            objectFit === "cover"
              ? "max-w-none object-cover object-bottom"
              : "max-w-none object-contain object-bottom"
          }
        />
      </div>
    </div>
  );
}
