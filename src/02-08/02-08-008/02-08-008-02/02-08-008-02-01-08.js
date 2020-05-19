function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 28,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M28 11.314V0H16.686L28 11.314z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M23.05 6.364l-12.02 12.02a4 4 0 01-5.657 0l-2.829-2.828a8 8 0 010-11.313l7.071 7.07-2.121 2.122c-1.172 1.172-1.488 2.755-.707 3.536a2 2 0 002.828 0L21.636 4.95l1.414 1.414z"
}));

export default SvgComponent;