function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 36,
  height: 9
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M36 0c0 4.97-4.253 9-9.5 9-3.737 0-6.949-2.059-8.5-5.031C16.449 6.94 13.237 9 9.5 9 6.836 9 4.444 7.954 2.719 6.281L0 4l1.781-1.781L4.75 4.25C6.041 4.806 7.704 5 9.5 5 13.642 5 17 3.866 17 0h2c0 3.866 3.358 5 7.5 5C30.642 5 34 3.866 34 0h2z"
}));

export default SvgComponent;