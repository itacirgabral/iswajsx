function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 43,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1 0l42 6v5L1 2V0zM10 10v1H4.5a3.5 3.5 0 100 7H13v2H5a5 5 0 110-10h5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.75 6.25L14 10.5l-4.25 4.25-.688-.719 3.5-3.531-3.5-3.531.688-.719z"
}));

export default SvgComponent;