function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M23.757 2.657L7.494 18.92a4 4 0 01-5.657 0 6 6 0 010-8.485l1.414 1.414a4 4 0 000 5.657 2 2 0 002.829 0l3.27-3.27a3.5 3.5 0 114.066-4.066l2.298-2.298a3.5 3.5 0 114.066-4.066l2.563-2.563 1.414 1.414zm-6.01.353a2 2 0 10-2.828 2.829 2 2 0 002.828-2.829zm-6.364 6.364a2 2 0 10-2.828 2.829 2 2 0 002.828-2.829z"
}));

export default SvgComponent;