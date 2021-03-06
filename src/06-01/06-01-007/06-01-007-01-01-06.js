function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 31,
  height: 37
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M24 0v22L9 37l-1.406-1.406L22 21.187V5H0V0h24z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M25 0v4h3v2.125c1.23.277 2.278 1.057 3 2.125v3.25C31 9.015 29.21 7 27 7V5h-1v13h1v-2c2.21 0 4-2.015 4-4.5v3.25c-.722 1.068-1.77 1.848-3 2.125V19h-3v3.438L10.406 37H9l15-15V0h1zM9 37H7.562l-1.406-1.406L21 20.75V6H0V5h22v16.188L7.594 35.593 9 37zM27 8.5c1.38 0 2.5 1.343 2.5 3s-1.12 3-2.5 3v-6z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M27 5v2c2.21 0 4 2.015 4 4.5S29.21 16 27 16v2h-1V5h1zm0 3.5v6c1.38 0 2.5-1.343 2.5-3s-1.12-3-2.5-3z"
}));

export default SvgComponent;