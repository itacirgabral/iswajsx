function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 27,
  height: 50
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13.5 0A8.5 8.5 0 0122 8.5a8.501 8.501 0 01-5 7.75V19h3a7 7 0 017 7v24h-2V26a5 5 0 00-5-5H7a5 5 0 00-5 5v24H0V26a7 7 0 017-7h3v-2.75A8.501 8.501 0 015 8.5 8.5 8.5 0 0113.5 0zM21 25v16h-3V25h3zM9 25v15.219A5.414 5.414 0 007.5 40c-.524 0-1.02.08-1.5.219V25h3zm14 19v4H12.406A5.498 5.498 0 0013 45.5c0-.525-.082-1.02-.219-1.5H23z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.5 41a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 1.5a3 3 0 100 6 3 3 0 000-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.5 42.5a3 3 0 110 6 3 3 0 010-6z",
  fill: "#fff"
}));

export default SvgComponent;