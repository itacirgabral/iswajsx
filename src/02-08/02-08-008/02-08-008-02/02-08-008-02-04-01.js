function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 7L6.5.5 13 7H0zM6 7v6c0 3.866 2.239 7 5 7h5a9 9 0 009-9H14c0 3.314-1.343 6-3 6a4 4 0 01-4-4V7H6z"
}));

export default SvgComponent;