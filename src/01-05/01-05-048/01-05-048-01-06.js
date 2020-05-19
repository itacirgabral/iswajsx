function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 27
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 7v15h8V7H8zM1.5.5L.094 1.938 6 7.813V5L1.5.5zM6 21.188l-4.5 4.468 1.438 1.407L6 24v-2.813z"
}));

export default SvgComponent;