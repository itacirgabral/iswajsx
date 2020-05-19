function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.757 17.343L1.494 1.08.08 2.494l16.263 16.263 1.414-1.414zM10 6L15.5.5 21 6H10z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.1 23l9.9-9.9V23h-9.9zM5 17c6.075 0 11-4.925 11-11h-1c0 5.523-4.477 10-10 10H3v1h2z"
}));

export default SvgComponent;