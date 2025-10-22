"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

export type BlurImageProps = {
  src: string
  alt?: string
  className?: string
  fill?: boolean
  width?: number
  height?: number
}

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  fill,
  ...rest
}: BlurImageProps) => {
  const [isLoading, setLoading] = useState(true)

  return (
    <img
      className={cn(
        "h-full w-full transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className,
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  )
}
