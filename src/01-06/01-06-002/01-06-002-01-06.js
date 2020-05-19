function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 14a8 8 0 100 16 8 8 0 000-16zM1.406 6.406L0 7.813l5 5c.683-.297 1.436-.487 2.188-.626l-5.782-5.78zM8 0v12.063c.326-.033.665-.063 1-.063.335 0 .674.03 1 .063V0H8zM16.594 6.406l-5.782 5.782c.752.138 1.505.328 2.188.624l5-5-1.406-1.406z"
}));

export default SvgComponent;