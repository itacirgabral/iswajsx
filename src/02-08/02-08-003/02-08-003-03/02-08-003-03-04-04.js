function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M23.577 1.665a4 4 0 00-5.657 0L.243 19.343l1.414 1.414 4.53-4.53c.131.494.386.961.773 1.348a3 3 0 104.243-4.242 2.98 2.98 0 00-1.348-.774l1.989-1.988c.13.493.386.96.773 1.348a3 3 0 004.243-4.243 2.98 2.98 0 00-1.348-.774l3.823-3.822a2 2 0 012.828 0 1 1 0 010 1.414l-3.536 3.535 1.415 1.415 3.535-3.536a3 3 0 000-4.243zM15.8 8.737a1.5 1.5 0 11-2.121 2.12 1.5 1.5 0 012.121-2.12zm-5.657 5.656a1.5 1.5 0 11-2.121 2.122 1.5 1.5 0 012.121-2.122z"
}));

export default SvgComponent;