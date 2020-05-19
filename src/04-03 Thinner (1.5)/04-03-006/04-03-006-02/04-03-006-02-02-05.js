function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 11
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 11h2V1H7zM13.455 10.641l1.931-.517-2.588-9.66-1.932.518zM.614 10.124l1.932.517L5.134.982 3.202.465z"
}));

export default SvgComponent;