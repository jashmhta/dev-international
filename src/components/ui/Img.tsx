"use client";

/** Stable image: bypasses flaky next/image optimizer for local assets */
export function Img({
  src,
  alt = "",
  className = "",
  width,
  height,
  priority,
  style,
}: {
  src: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={style}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      draggable={false}
    />
  );
}
