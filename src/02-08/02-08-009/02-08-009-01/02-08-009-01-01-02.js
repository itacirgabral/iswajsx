function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M23 7l-7-7-7 7h14zM17 7v8a3 3 0 01-3 3 2.98 2.98 0 01-2-.781V22a4 4 0 01-4 4H7c-3.866 0-7-2.686-7-6h6c0 2.21.895 4 2 4a2 2 0 002-2v-9.563l3.281 3.282c.181.18.443.281.719.281a1 1 0 001-1V7h2z"
}));

export default SvgComponent;