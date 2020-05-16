import React from "react";

const SvgComponent = (props) => (
  <svg width={19} height={34} {...props}>
    <path d="M12 0l7 7H5l7-7zm0 1.438L7.406 6h9.188L12 1.437zM13 7v23a4 4 0 01-4 4H7c-3.866 0-7-2.686-7-6h7c0 2.21.895 4 2 4a2 2 0 002-2v-4.625a3.5 3.5 0 110-5.75v-3.25a3.5 3.5 0 110-5.75V7h2zm-4 4.5a2 2 0 100 4 2 2 0 000-4zm0 9a2 2 0 100 4 2 2 0 000-4z" />
    <path d="M12 1.438L16.594 6H7.406L12 1.437z" fill="#fff" />
  </svg>
);

export default SvgComponent;
