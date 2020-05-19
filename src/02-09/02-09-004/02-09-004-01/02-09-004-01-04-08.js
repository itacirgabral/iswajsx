function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 29,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M29 23c0-4.948-2-9-7-9-3 0-3 2-6 2s-6-2-6-5v-1C10 3 6 1 1.812.781L.782 2.562C7 3 8 6 8 10v1c0 3 3 7 8 7 3 0 4-3 6-3 0 0 5-1 5 8v7h2v-7z"
}));

export default SvgComponent;