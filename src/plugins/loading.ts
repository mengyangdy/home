// @unocss-include

export function setupLoading() {
  const loading = `
  <div class="fixed top-0 left-0 w-full h-full z-99 overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-full flex-center flex-col">
      <div
        class="w-150px h-150px rounded-50% border-3 border-transparent border-t-white z-2"
      >
        <div
          class="absolute top-5px left-5px right-5px bottom-5px rounded-50% border-3 border-transparent border-t-#a4a4a4 animate-spin"
        ></div>
        <div
          class="absolute top-15px left-15px right-15px bottom-15px rounded-50% border-3 border-transparent border-t-#d3d3d3"
        ></div>
      </div>
      <div class="flex-col items-center text-white z-20 mt-40px text-24px">
        <span class="name"> siteName </span>
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

// <div
//           class="absolute top-5 left-5 right-5 bottom-5 rounded-full border-3 border-transparent border-t-gray-600"
//         ></div>
//         <div
//           class="absolute top-15 left-15 right-15 bottom-15 rounded-full border-3 border-transparent border-t-gray-800"
//         ></div>
