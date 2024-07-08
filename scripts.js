// ==UserScript==
// @name         finderawesome awesome github
// @namespace    http://tampermonkey.net/
// @version      2024-07-08
// @description  try to take over the world!
// @author       You
// @match        https://github.com/birobirobiro/awesome-shadcn-ui
// @match        https://github.com/vuejs/awesome-vue
// @match        https://github.com/veggiemonk/awesome-docker
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// ==/UserScript==

(function () {
  "use strict";
  const ul = $("article>ul");

  const arr = [];

  ul.each((i, item) => {
    const $title = $($(item).prev());
    const items = item.querySelectorAll("li");
    const list = [...items]
      .map((a) => {
        const aEl = a.querySelector("a");

        if (!aEl) return null;

        return {
          title: aEl.innerText,
          href: aEl.href,
          desc: a.innerText.replace(aEl.innerText, "").replace(/\s+-\s+/, ""),
        };
      })
      .filter((item) => !!item);

    if (list.length > 0) {
      const v = {
        title: $title.text(),
        items: list,
      };

      arr.push(v);
    }
  });

  if (window.location.href.startsWith("https://github.com/vuejs/awesome-vue")) {
    arr.splice(0, 1);
  }

  if (
    window.location.href.startsWith(
      "https://github.com/veggiemonk/awesome-docker"
    )
  ) {
    arr.splice(0, 2);
  }

  console.log(arr);

  // Your code here...
})();
