function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 12,
  height: 13
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10.813.25C11.566 2.254 11.815 4.38 12 6.5c-.023 2.197-.526 4.2-1.188 6.25L0 6.5 10.813.25zm-1.22 3L3.97 6.5l5.656 3.25c.223-1.062.33-2.155.375-3.25.039-1.118-.146-2.19-.406-3.25z"
}));

export default SvgComponent;