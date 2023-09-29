export const resizeListener=(method)=>{

    window.addEventListener("resize", () => method(window.innerWidth));
}