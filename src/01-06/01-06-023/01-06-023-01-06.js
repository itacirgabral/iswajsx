function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 26,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 17h15v13H6zM6 0h2v15H6zM24.594 9.594L26 11l-4 4h-2.813l5.407-5.406zM1.406 18.594L5 22.187V25l-5-5 1.406-1.406z"
}));

export default SvgComponent;