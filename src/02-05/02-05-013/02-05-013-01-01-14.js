function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4.243 17.343L20.506 1.08l1.414 1.414L5.657 18.757l-1.414-1.414zM12 6L6.5.5 1 6h11z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.9 23L0 13.1V23h9.9zM17 17C10.925 17 6 12.075 6 6h1c0 5.523 4.477 10 10 10h2v1h-2z"
}));

export default SvgComponent;