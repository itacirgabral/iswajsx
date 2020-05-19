function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 41,
  height: 12
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M19.5 0A26.434 26.434 0 00.75 7.75l-.5.5 1.438 1.438.5-.5C6.62 4.753 12.735 2 19.5 2c6.765 0 12.879 2.754 17.313 7.188L39.593 12 41 10.594 38.25 7.75A26.434 26.434 0 0019.5 0z"
}));

export default SvgComponent;