function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M25 0v9.9l-1.414-1.415v-7.07h-7.071L15.1 0H25z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20.757 5.657L10.151 16.263a4 4 0 01-5.657 0L3.08 14.85C.346 12.116.03 8 2.373 5.657l4.95 4.95c-1.563 1.562-2.196 3.461-1.415 4.242a2 2 0 002.829 0l3.27-3.27a3.5 3.5 0 114.066-4.066l3.27-3.27 1.414 1.414zm-6.717 1.06a2 2 0 10-2.829 2.829 2 2 0 002.829-2.828z"
}));

export default SvgComponent;