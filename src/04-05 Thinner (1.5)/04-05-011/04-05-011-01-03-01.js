function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5.75 0v7s-.038 4.11-.594 6.063C4.452 15.538 1.75 20 1.75 20H0s2.99-4.702 3.75-7.344c.523-1.819.5-5.656.5-5.656V0h1.5zM14.25 0v7s.038 4.11.594 6.063C15.548 15.538 18.25 20 18.25 20H20s-2.99-4.702-3.75-7.344c-.523-1.819-.5-5.656-.5-5.656V0h-1.5z"
}));

export default SvgComponent;