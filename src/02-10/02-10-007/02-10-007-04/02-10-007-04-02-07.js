function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12.109 0l-.719.719L13.171 2.5l-1.78 1.781.718.719 2.5-2.5-2.5-2.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.109 0L8.39.719 10.171 2.5l-1.78 1.781.718.719 2.5-2.5-2.5-2.5zM8 2.219c-1.067.12-2.094.283-3 .5v.844c.863-.172 1.88-.313 3-.407V2.22zm7 0v.937c1.12.094 2.137.235 3 .406V2.72a25.276 25.276 0 00-3-.5zm-11 .75C1.568 3.702 0 4.793 0 6c0 1.036 1.144 1.977 3 2.688V5.874C2.382 5.61 2 5.315 2 5c0-.46.765-.881 2-1.219V2.97zm0 3.25V9.03c1.155.349 2.51.583 4 .75V6.844C6.404 6.71 5.033 6.5 4 6.219z"
}));

export default SvgComponent;