function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5.657 4.243L21.92 20.506l-1.414 1.414L4.243 5.657l1.414-1.414z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 18c0-6.075 4.925-11 11-11v1C11.477 8 7 12.477 7 18v2H6v-2zM17 13V2l5.5 5.5L17 13zm.994-2.408L21.086 7.5l-3.07-3.07-.022 6.162zM9.9 0H0v9.9L9.9 0zM7.468 1.016L1.016 7.47V1.016H7.47z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.469 1.016H1.016V7.47L7.47 1.016zM17.994 10.592l.022-6.162 3.07 3.07-3.092 3.092z",
  fill: "#fff"
}));

export default SvgComponent;