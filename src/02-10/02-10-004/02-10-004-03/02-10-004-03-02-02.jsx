import React from "react";

const SvgComponent = (props) => (
  <svg width={33} height={32} {...props}>
    <path d="M10 22.778V15h7.778L10 22.778zm1.016-2.43l4.331-4.332h-4.33v4.331z" />
    <path d="M3.282 1.211C5.04-.546 9.155.721 12.475 4.04l16.263 16.263c3.32 3.32 4.586 7.435 2.829 9.193l-1.414 1.414c-1.758 1.757-6.58 1.198-9.9-2.121l-3.182-3.182 3.536-3.536 3.182 3.182c2.929 2.929 5.387 3.805 6.364 2.828.976-.976.1-3.435-2.829-6.363L11.061 5.454C8.13 2.525 5.673 1.65 4.697 2.626c-.977.976-.1 3.435 2.828 6.364l3.536 3.535-3.536 3.536-3.535-3.536C.67 9.205.11 4.383 1.868 2.625l1.414-1.414z" />
    <path d="M11.016 20.347v-4.33h4.331l-4.33 4.33z" fill="#fff" />
    <path d="M14 26.778V19h7.778L14 26.778zm1.016-2.43l4.331-4.332h-4.33v4.331z" />
    <path d="M15.016 24.347v-4.33h4.331l-4.33 4.33z" fill="#fff" />
  </svg>
);

export default SvgComponent;
