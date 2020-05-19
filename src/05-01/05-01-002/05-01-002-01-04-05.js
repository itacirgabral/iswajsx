function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 55,
  height: 11
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 0L0 2v4l9-2.5V11l34-8v7l12-4V4l-9 2V0L12 6V0z"
}));

export default SvgComponent;