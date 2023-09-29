export const resizeListener=(method)=>{
    console.log("logged")
    window.addEventListener("resize", () => method(window.innerWidth));
}