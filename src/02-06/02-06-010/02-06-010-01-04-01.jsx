import React from "react";

const SvgComponent = (props) => (
  <svg width={24} height={21} {...props}>
    <path d="M0 4v7h7L0 4zM24 14v7h-7l7-7z" />
    <path d="M2.094 6.094l3.532-3.469A8.988 8.988 0 0112 0c2.485 0 4.746.996 6.375 2.625L22 6.281l-.688.688-3.656-3.625A7.974 7.974 0 0012 1c-2.21 0-4.209.896-5.657 2.344L2.782 6.78l-.688-.687z" />
    <path
      d="M2.782 6.781l3.562-3.437A7.974 7.974 0 0112 1c2.21 0 4.209.896 5.657 2.344l3.656 3.625-1.438 1.437L16.25 4.75A5.992 5.992 0 0012 3a5.992 5.992 0 00-4.25 1.75L4.22 8.219 2.781 6.78z"
      fill="#fff"
    />
    <path d="M4.22 8.219L7.75 4.75A5.992 5.992 0 0112 3c1.657 0 3.165.664 4.25 1.75l3.625 3.656-.687.688-3.656-3.625a4.978 4.978 0 00-7.063 0L4.907 8.906l-.688-.687zM21.907 16.094l-3.532-3.469A8.988 8.988 0 0012.001 10a8.988 8.988 0 00-6.375 2.625L2 16.281l.688.688 3.656-3.625A7.974 7.974 0 0112.001 11c2.209 0 4.208.896 5.656 2.344l3.562 3.437.688-.687z" />
    <path
      d="M21.22 16.781l-3.563-3.437A7.974 7.974 0 0012 11c-2.21 0-4.209.896-5.657 2.344l-3.656 3.625 1.437 1.437L7.75 14.75A5.992 5.992 0 0112 13c1.657 0 3.165.664 4.25 1.75l3.532 3.469 1.437-1.438z"
      fill="#fff"
    />
    <path d="M19.782 18.219L16.25 14.75A5.992 5.992 0 0012 13a5.992 5.992 0 00-4.25 1.75l-3.624 3.656.687.688 3.656-3.625a4.978 4.978 0 017.063 0l3.562 3.437.688-.687z" />
  </svg>
);

export default SvgComponent;
