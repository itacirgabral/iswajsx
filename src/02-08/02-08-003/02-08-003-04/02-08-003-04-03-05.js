function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 48
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M14 0a6 6 0 00-6 6v25c0 2.981-4 8-4 8h10s-4-5.019-4-8v-1.563A3.99 3.99 0 0012 30a4 4 0 100-8c-.73 0-1.41.221-2 .563v-4.125A3.99 3.99 0 0012 19a4 4 0 100-8c-.73 0-1.41.221-2 .563V6a4 4 0 014-4 3 3 0 013 3v3h2V5a5 5 0 00-5-5zm-2 13a2 2 0 110 4 2 2 0 010-4zm0 11a2 2 0 110 4 2 2 0 010-4zM0 39l9 9 9-9h-2l-7 7-7-7H0z"
}));

export default SvgComponent;