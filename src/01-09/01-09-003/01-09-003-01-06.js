function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 28,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13 13c-7 0-7 6-7 6 0 6 6 6 6 6h5.938C15.982 28.01 12 28 12 28c-5.519 0-8.484-2.54-10.094-5.281L0 23.812C3.872 29.997 12 30 12 30c9 0 9-9 9-9 0-8-8-8-8-8zM13 0v11c.72 0 1.38.06 2 .156V0h-2zM22 3l-4.531 8.875a8.3 8.3 0 011.718 1l4.594-8.969L22 3zM26 10l-4.906 4.906c.406.604.718 1.233.968 1.844l5.344-5.344L26 10z"
}));

export default SvgComponent;