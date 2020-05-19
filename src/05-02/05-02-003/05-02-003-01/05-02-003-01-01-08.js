function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15.986 2.895L.532 7.036.014 5.105 15.469.964l.517 1.931z"
}));

export default SvgComponent;