function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M18 12V4.222L10.222 12H18z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20.01 19.667c1.358-1.358.862-4.113-.95-6.828l-1.326 1.326c1.596 2.14 2.292 4.072 1.57 4.795-.977.976-4.143-.606-7.072-3.535L6.575 9.768C3.646 6.838 2.064 3.673 3.04 2.697c.767-.768 2.898.072 5.193 1.878l1.37-1.37C6.749 1.154 3.763.56 2.333 1.99L.919 3.404C-.84 5.16.427 9.277 3.747 12.596l5.657 5.657c3.32 3.32 7.435 4.586 9.192 2.828l1.414-1.414z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 8V.222L6.222 8H14z"
}));

export default SvgComponent;