function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 14,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12.537.481l.517 1.932L1.464 5.52.945 3.587 12.536.481z"
}));

export default SvgComponent;