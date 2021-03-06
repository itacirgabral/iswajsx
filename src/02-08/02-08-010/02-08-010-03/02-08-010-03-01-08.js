function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 30,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M30 9.9V0h-9.9L30 9.9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M25.757 5.657L9.494 21.92a4 4 0 01-5.657 0l-1.414-1.414c-2.734-2.734-3.05-6.85-.707-9.192l4.95 4.95c-1.563 1.562-2.196 3.461-1.415 4.242a2 2 0 002.829 0l3.27-3.27a3.5 3.5 0 114.066-4.066l2.298-2.298a3.5 3.5 0 114.066-4.066l2.563-2.563 1.414 1.414zm-6.01.353a2 2 0 10-2.828 2.829 2 2 0 002.828-2.829zm-6.364 6.364a2 2 0 10-2.828 2.829 2 2 0 002.828-2.829z"
}));

export default SvgComponent;