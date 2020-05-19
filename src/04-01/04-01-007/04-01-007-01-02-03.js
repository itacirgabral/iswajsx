function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M18 0v6h-6V5h5V0h1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.5 0c2.9 0 5.537 1.162 7.438 3.063l-.72.718A9.472 9.472 0 008.5 1c-2.623 0-5 1.062-6.719 2.781L.688 4.875 0 4.156l1.063-1.062C2.962 1.194 5.6 0 8.5 0z"
}));

export default SvgComponent;