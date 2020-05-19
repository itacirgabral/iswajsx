function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 41,
  height: 12
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M19.5 12A26.434 26.434 0 01.75 4.25l-.5-.5 1.438-1.438.5.5C6.62 7.247 12.735 8 19.5 8c6.765 0 12.879-.754 17.313-5.188L39.593 0 41 1.406 38.25 4.25A26.434 26.434 0 0119.5 12z"
}));

export default SvgComponent;