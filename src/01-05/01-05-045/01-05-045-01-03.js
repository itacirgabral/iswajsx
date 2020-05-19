function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 26,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 0C0 0 0 8 0 8c0 .357.034.678.094 1H3c0-5 9-5 9-5v11h8V0h-8zM24.25 3.938L20 8.188V11l5.656-5.656-1.406-1.407z"
}));

export default SvgComponent;