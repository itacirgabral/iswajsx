function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 15h15v15H6zM3 6v7h2V8h2v7h2V6H3zM14 0h-2v15h2V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.25 8.219L.312 8.75 6 30v-7.781l-3.75-14z"
}));

export default SvgComponent;