function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 48
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5 0a6 6 0 016 6v25c0 2.981 4 8 4 8H5s4-5.019 4-8v-1.563A3.99 3.99 0 017 30a4 4 0 110-8c.73 0 1.41.221 2 .563v-4.125A3.99 3.99 0 017 19a4 4 0 110-8c.73 0 1.41.221 2 .563V6a4 4 0 00-4-4 3 3 0 00-3 3v3H0V5a5 5 0 015-5zm2 13a2 2 0 100 4 2 2 0 000-4zm0 11a2 2 0 100 4 2 2 0 000-4zM19 39l-9 9-9-9h2l7 7 7-7h2z"
}));

export default SvgComponent;