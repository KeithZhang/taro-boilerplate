"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function useRect() {
    return (selector, all) => {
        return new Promise(resolve => {
            Taro.createSelectorQuery()
                .in(this)[all ? "selectAll" : "select"](selector)
                .boundingClientRect(rect => {
                if (all && Array.isArray(rect) && rect.length) {
                    resolve(rect);
                }
                if (!all && rect) {
                    resolve(recCC, 2, ct);
                }
            })
                .exec();
        });
    };
}
exports.default = useRect;
//# sourceMappingURL=useRect.js.map