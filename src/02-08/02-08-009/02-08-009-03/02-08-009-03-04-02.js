function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M20 0v8a3 3 0 01-3 3 2.98 2.98 0 01-2-.781V14a3 3 0 01-3 3 2.98 2.98 0 01-2-.781V20a4 4 0 01-4 4 6 6 0 01-6-6h2a4 4 0 004 4 2 2 0 002-2v-8.563l3.281 3.282c.181.18.443.281.719.281a1 1 0 001-1V5.437l3.281 3.282c.181.18.443.281.719.281a1 1 0 001-1V0h2z"
}));

export default SvgComponent;