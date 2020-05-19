function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 10,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5 12.89l-.719.72L2.5 11.827.719 13.61 0 12.891l2.5-2.5 2.5 2.5zM9.969 12a28.785 28.785 0 01-.094 2h-.969c.047-.646.053-1.307.063-2h1zm0-1h-1c-.01-.693-.016-1.354-.063-2h.969c.057.648.082 1.316.094 2zm-.188 4a22.592 22.592 0 01-.594 3h-.874c.214-.863.382-1.88.5-3h.968zm0-7h-.969a22.374 22.374 0 00-.5-3h.876c.243.905.459 1.933.593 3zm-.875 11c-.825 2.444-2.044 4-3.406 4-1.165 0-2.232-1.144-3.031-3h2.937c.332.618.7 1 1.094 1 .574 0 1.11-.764 1.531-2h.875zm0-15h-.875C7.61 2.764 7.074 2 6.5 2c-.394 0-.762.382-1.094 1H2.47C3.268 1.144 4.335 0 5.5 0c1.362 0 2.581 1.556 3.406 4zM4.97 19H2.094c-.476-1.409-.805-3.12-.969-5h2.969c.146 2.016.45 3.758.875 5zm0-15c-.424 1.242-.73 2.984-.875 5H1.125c.164-1.88.493-3.591.969-5h2.875z"
}));

export default SvgComponent;