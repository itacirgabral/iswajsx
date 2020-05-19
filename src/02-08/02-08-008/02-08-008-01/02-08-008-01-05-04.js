function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 0H.515L9 8.485V0zm-.994.994l-.022 5.06-5.039-5.038 5.06-.022z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18.9 4.243l-7.072 7.07a4 4 0 01-5.656 0c-1.172-1.17-.855-3.387.707-4.949l-.707-.707L2.636 2.12a6 6 0 000 8.486l2.121 2.12a5 5 0 007.071 0l7.779-7.777-.708-.707z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.006.994l-5.06.022 5.038 5.039.022-5.06z",
  fill: "#fff"
}));

export default SvgComponent;