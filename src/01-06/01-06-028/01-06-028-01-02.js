function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 14a8 8 0 100 16 8 8 0 000-16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 16a6 6 0 000 12V16z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 0v16.719A7.952 7.952 0 0120 22V0h-2zM1.406 9.594L0 11l5.844 5.844c.427-.51.96-.923 1.5-1.313L1.406 9.594z"
}));

export default SvgComponent;