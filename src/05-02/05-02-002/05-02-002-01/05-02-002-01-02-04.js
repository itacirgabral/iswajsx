function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M.893 4.43l17.678 17.677 3.535-3.536L4.43.894.893 4.429z"
}));

export default SvgComponent;