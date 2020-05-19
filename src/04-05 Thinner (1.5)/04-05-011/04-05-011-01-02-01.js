function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 13
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4.25 0s.023 3.837-.5 5.656C2.99 8.298 0 13 0 13h1.75s2.702-4.46 3.406-6.938C5.712 4.11 5.75 0 5.75 0h-1.5zM14.25 0s.038 4.11.594 6.063C15.548 8.538 18.25 13 18.25 13H20s-2.99-4.702-3.75-7.344C15.727 3.837 15.75 0 15.75 0h-1.5z"
}));

export default SvgComponent;