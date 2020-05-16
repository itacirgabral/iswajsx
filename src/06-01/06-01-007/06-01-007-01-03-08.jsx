import React from "react";

const SvgComponent = (props) => (
  <svg width={24} height={37} {...props}>
    <path d="M24 0v22L9 37l-1.406-1.406L22 21.187V5H0V0h24z" />
    <path
      d="M22 5v16.188L7.594 35.593 9 37H7.562l-1.406-1.406 4.25-4.25-2.125-2.094 1.5-1.531c-1.248-1.974-.91-4.746.969-6.625 1.88-1.88 4.651-2.217 6.625-.969l1.5-1.5L21 20.75V6H0V5h22zm-3.125 15.031l-1.406 1.438c-1.562-1.562-4.243-1.414-6 .343-1.758 1.758-1.937 4.438-.375 6L9.688 29.25l.718.688 9.188-9.188-.719-.719zm-4.344 1.844a2.332 2.332 0 011.875.656l-4.25 4.219c-.976-.976-.828-2.703.344-3.875.586-.586 1.327-.936 2.031-1zM9 37l15-15v1.438L10.406 37H9z"
      fill="#fff"
    />
    <path d="M19.586 20.75l-9.193 9.193-.707-.707 1.415-1.415c-1.563-1.562-1.404-4.253.353-6.01 1.757-1.757 4.448-1.916 6.01-.353l1.415-1.415.707.707zm-3.182 1.768c-.977-.976-2.718-.818-3.89.354-1.17 1.171-1.33 2.912-.353 3.889l4.243-4.243z" />
  </svg>
);

export default SvgComponent;
