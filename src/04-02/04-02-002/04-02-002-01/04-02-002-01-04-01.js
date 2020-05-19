function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5 0L0 5l.719.719L5.406 1H12V0H5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.594 3L2.28 7.281 3 8l4-4h4V3H6.594zM20 0l5 5-.719.719L19.594 1H13V0h7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18.406 3l4.313 4.281L22 8l-4-4h-4V3h4.406z"
}));

export default SvgComponent;