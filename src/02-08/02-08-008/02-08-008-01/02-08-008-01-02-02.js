function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 0l7 7H5l7-7zm0 1.438L7.406 6h9.188L12 1.437zM13 7v15a4 4 0 01-4 4H7c-3.866 0-7-2.686-7-6h7c0 2.21.895 4 2 4a2 2 0 002-2V7h2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 1.438L16.594 6H7.406L12 1.437z",
  fill: "#fff"
}));

export default SvgComponent;