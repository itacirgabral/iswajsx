import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M31.82.322L23.114 9.03a2 2 0 01-2.829 0 1.982 1.982 0 01-.574-1.415l.088-1.149a4.01 4.01 0 00-1.193-2.828 4 4 0 00-5.657 0L9.192 7.393c-1.7 1.7-7.07 1.415-7.07 1.415l7.07 7.07s-.285-5.37 1.415-7.07l3.756-3.757a2 2 0 012.829 0c.39.39.574.902.574 1.414l-.088 1.15a4.01 4.01 0 001.193 2.828 4 4 0 005.657 0l8.706-8.706L31.82.322z" />
    <path d="M0 6.686V18h11.314L0 6.686zm.994 2.409l7.911 7.91-7.889-.021-.022-7.89z" />
    <path d="M.994 9.095l.022 7.889 7.89.022L.993 9.095z" fill="#fff" />
  </svg>
);

export default SvgComponent;