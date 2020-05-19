function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 10c-4.416 0-8 3.584-8 8s3.584 8 8 8 8-3.584 8-8-3.584-8-8-8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15 0c-1.656 0-3 1.344-3 3 0 1.3.842 2.397 2 2.813V18h2V5.812c1.158-.415 2-1.511 2-2.812 0-1.656-1.344-3-3-3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 12c-3 0-6 3-6 6s3 6 6 6c3.312 0 6-2.688 6-6 0-3-3-6-6-6z",
  fill: "#fff"
}));

export default SvgComponent;