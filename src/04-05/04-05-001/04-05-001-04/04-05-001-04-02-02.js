function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 11,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2.672 2.172c-.245.244-.429.532-.597.817l1.127 1.127C4.472 5.386 4.9 7.178 4.55 8.867A3.962 3.962 0 009.367 4.05c-1.689.35-3.48-.078-4.75-1.348L3.488 1.575c-.285.168-.573.352-.817.597z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.5 0a5 5 0 100 10 5 5 0 000-10zm0 1a4 4 0 110 8 4 4 0 010-8z"
}));

export default SvgComponent;