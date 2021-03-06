function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 7,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5 10.11l-.719-.72L2.5 11.173.719 9.39 0 10.109l2.5 2.5 2.5-2.5zM7 .656C6.534.236 6.023 0 5.5 0 4.335 0 3.268 1.144 2.469 3h2.937c.332-.618.7-1 1.094-1 .166 0 .342.066.5.188V.655zm0 20.157a.835.835 0 01-.5.187c-.394 0-.762-.382-1.094-1H2.47c.799 1.856 1.866 3 3.031 3 .523 0 1.034-.236 1.5-.656v-1.532zM4.969 4H2.094c-.476 1.409-.805 3.12-.969 5h2.969c.146-2.016.45-3.758.875-5zm0 15c-.424-1.242-.73-2.984-.875-5H1.125c.164 1.88.493 3.591.969 5h2.875z"
}));

export default SvgComponent;