// @unocss-include
export function setupLoading() {
  const appName=import.meta.env.VITE_APP_NAME

  const loading = `
  <div class="fixed top-0 left-0 w-full h-full z-99 overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-full flex-center flex-col">
      <div
        class="w-150px h-150px rounded-50% border-3 border-transparent border-t-white z-2 animate-name-spin animate-duration-1800 animate-ease-linear animate-iteration-count-infinite"
      >
        <div
          class="absolute top-5px left-5px right-5px bottom-5px rounded-50% border-3 border-transparent border-t-#a4a4a4 animate-name-spin-reverse animate-duration-600 animate-ease-linear animate-iteration-count-infinite"
        ></div>
        <div
          class="absolute top-15px left-15px right-15px bottom-15px rounded-50% border-3 border-transparent border-t-#d3d3d3 animate-name-spin animate-duration-1000 animate-ease-linear animate-iteration-count-infinite"
        ></div>
      </div>
      <div class="flex-col items-center text-white z-20 mt-40px text-24px">
        <span class="name"> ${appName} </span>
        <span class="mt-6px text-18px opacity-60"> 加载中 </span>
      </div>
    </div>
    <div class="fixed top-0 w-51% h-full bg-#333 z-1 left-0"></div>
    <div class="fixed top-0 w-51% h-full bg-#333 z-1 right-0"></div>
  </div>
  `;

  const app = document.getElementById("app");

  if (app) {
    app.innerHTML = loading;
  }
}
