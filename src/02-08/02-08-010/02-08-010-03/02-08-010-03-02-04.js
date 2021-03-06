function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 36,
  height: 27
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10 12H.1l9.9 9.9V12zm-1.016 1.016v6.453L2.53 13.016h6.453z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M34.042.686l-6.806 6.806a3.5 3.5 0 10-4.066 4.066l-2.298 2.298a3.5 3.5 0 10-4.066 4.066l-6.099 6.099a3 3 0 01-4.243 0c-1.171-1.172-.855-3.388.708-4.95l-4.243-4.243a6 6 0 000 8.486l2.121 2.121a5 5 0 007.071 0L35.456 2.101 34.042.686zm-8.84 6.01a2 2 0 11-2.828 2.83 2 2 0 012.829-2.83zm-6.363 6.365a2 2 0 11-2.829 2.828 2 2 0 012.829-2.828z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.984 13.016H2.53l6.453 6.453v-6.453z",
  fill: "#fff"
}));

export default SvgComponent;