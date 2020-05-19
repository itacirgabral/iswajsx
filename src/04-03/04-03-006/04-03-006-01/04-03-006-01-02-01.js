function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 11
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 0v2h2V0H7zm0 4v2h2V4H7zm0 4v2h2V8H7zM13.463.372l-.51 1.902 1.932.517.51-1.901-1.932-.518zm-1.027 3.834l-.518 1.931 1.932.518.518-1.932-1.932-.517zm-1.035 3.863l-.526 1.962 1.932.518.526-1.962-1.932-.518zM.605.89l.51 1.901 1.931-.517-.51-1.902L.606.89zm1.027 3.833l.518 1.932 1.932-.518-.518-1.931-1.932.517zm1.035 3.864l.526 1.962 1.932-.518-.526-1.962-1.932.518z"
}));

export default SvgComponent;