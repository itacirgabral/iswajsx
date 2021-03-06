function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 43,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 11h43v2H0v-2zM20 0v3.156c-3.033.662-5.412 3.28-5.906 6.563C12.964 8.096 10.887 7 8.5 7c-2.525 0-4.705 1.22-5.781 3H6.25c.638-.323 1.422-.5 2.25-.5.828 0 1.612.177 2.25.5h21.5c.638-.323 1.422-.5 2.25-.5.828 0 1.612.177 2.25.5h3.531c-1.076-1.78-3.256-3-5.781-3-2.387 0-4.464 1.096-5.594 2.719-.494-3.283-2.873-5.9-5.906-6.563V0h-3zM2.25 14c.777 2.3 3.281 4 6.25 4 2.851 0 5.28-1.558 6.156-3.719C15.83 17.068 18.451 19 21.5 19c3.049 0 5.671-1.932 6.844-4.719C29.22 16.442 31.649 18 34.5 18c2.969 0 5.473-1.7 6.25-4h-2.813c-.693.893-1.96 1.5-3.437 1.5-1.476 0-2.744-.607-3.438-1.5H11.938c-.693.893-1.96 1.5-3.437 1.5-1.476 0-2.744-.607-3.438-1.5H2.25z"
}));

export default SvgComponent;