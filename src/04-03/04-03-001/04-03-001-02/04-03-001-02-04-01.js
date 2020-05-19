function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 9,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2.844 0c-.202.31-.381.645-.563.969-.034.06-.06.126-.094.187-.1.182-.216.347-.312.532A17.234 17.234 0 000 9.5c0 2.817.685 5.46 1.875 7.813.096.184.213.349.313.53.033.062.059.127.093.188.023.041.04.084.063.125.162.283.323.572.5.844.152-.07.296-.165.437-.25C6.651 17.005 9 13.557 9 9.5S6.652 1.995 3.281.25C3.14.165 2.996.07 2.844 0zm.75 2.719C5.652 4.272 7 6.724 7 9.5s-1.348 5.228-3.406 6.781A15.263 15.263 0 012 9.5c0-2.443.583-4.73 1.594-6.781z"
}));

export default SvgComponent;