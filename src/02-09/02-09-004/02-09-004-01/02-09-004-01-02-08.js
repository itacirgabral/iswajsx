function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 34,
  height: 34
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9.569 0L0 2.564l2.564 9.569L9.569 0zM7.503 1.589L2.9 9.519 1.225 3.271l6.278-1.682zM34 27c0-4.948-2-9-7-9-3 0-3 2-6 2s-6-2-6-5v-1c0-7-4-9-8.188-9.219l-1.03 1.782C12 7 13 10 13 14v1c0 3 3 7 8 7 3 0 4-3 6-3 0 0 5-1 5 8v7h2v-7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.503 1.589L1.225 3.27l1.674 6.248 4.604-7.93z",
  fill: "#fff"
}));

export default SvgComponent;