function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 37
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M24 0v22L9 37l-1.406-1.406L22 21.187V5H0V0h24z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22 5v16.188L7.594 35.593 9 37H7.562l-1.406-1.406L20.75 21H18v-2.125c-2.278-.513-4-2.717-4-5.375s1.722-4.862 4-5.375V6H0V5h22zM9 37l15-15v1.438L10.406 37H9zM20 7h-1v2c-2.21 0-4 2.015-4 4.5s1.79 4.5 4 4.5v2h1V7zm-1 3.5v6c-1.38 0-2.5-1.343-2.5-3s1.12-3 2.5-3z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20 7v13h-1v-2c-2.21 0-4-2.015-4-4.5S16.79 9 19 9V7h1zm-1 3.5c-1.38 0-2.5 1.343-2.5 3s1.12 3 2.5 3v-6z"
}));

export default SvgComponent;