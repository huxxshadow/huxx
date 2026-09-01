// 页面切换转场：配合 Base.astro 里的 <ClientRouter />，挂在 <main transition:animate={pageShift}> 上。
// keyframes 定义在 src/styles/motion.css。
//
// 方向由 Astro 自己判断：浏览器后退 / 带 data-astro-transition="back" 的链接走 backwards，
// 其余走 forwards。项目详情页的返回按钮就是靠那个属性拿到反向动画的。

const EASE = "cubic-bezier(0.2, 1, 0.3, 1)";

const step = (name: string, duration: string) => ({
    name,
    duration,
    easing: EASE,
    fillMode: "both" as const,
});

export const pageShift = {
    forwards: {
        old: [step("page-leave-up", "0.22s")],
        new: [step("page-enter-up", "0.42s")],
    },
    backwards: {
        old: [step("page-leave-down", "0.22s")],
        new: [step("page-enter-down", "0.42s")],
    },
};
