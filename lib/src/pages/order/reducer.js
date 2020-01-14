"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const initState = {
    count: 1
};
function goodsReducer(state = initState, action) {
    const { type, payload } = action;
    switch (type) {
        case "INIT":
            return state;
        default:
            return state;
    }
}
exports.default = goodsReducer;
//# sourceMappingURL=reducer.js.map