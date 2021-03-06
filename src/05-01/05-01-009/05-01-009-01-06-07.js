function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 13,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12.5 3a3 3 0 11-6 0 3 3 0 016 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.5 3.75v-1.5h-7v1.5h7z"
}));

export default SvgComponent;