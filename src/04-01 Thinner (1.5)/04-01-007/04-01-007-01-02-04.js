function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 14,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10.5 0L14 3.5 10.5 7l-.719-.719L12.562 3.5 9.783.719 10.5 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 3v1H4a2 2 0 000 4h7v2H3.5a3.5 3.5 0 110-7H10z"
}));

export default SvgComponent;