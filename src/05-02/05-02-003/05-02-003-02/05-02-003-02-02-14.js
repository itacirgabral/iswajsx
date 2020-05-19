function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 14,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12.278.515l1.035 3.864-11.59 3.106L.686 3.62 12.278.515z"
}));

export default SvgComponent;