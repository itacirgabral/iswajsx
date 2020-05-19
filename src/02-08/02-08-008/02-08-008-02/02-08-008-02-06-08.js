function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M24 6v9.192l-1.414-1.414V7.414h-6.364L14.808 6H24z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.757 10.95l-4.242 4.242c-2.734 2.734-6.533 3.367-8.486 1.415L3.494 13.07a9 9 0 010-12.728l7.778 7.778c-2.343 2.343-3.293 5.193-2.121 6.364a4 4 0 005.657 0l4.242-4.242.707.707z"
}));

export default SvgComponent;