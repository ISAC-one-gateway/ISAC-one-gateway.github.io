(() => {
  const path = window.location.pathname;
  const match = path.match(/\/(home|about|engine)\/(en|fr|ja|zh-TW)\.html$/i);
  if (!match) {
    console.warn("Language navigation: page path not matched", path);
    return;
  }

  const category = match[1];
  const currentLang = match[2];

  const navbar = document.querySelector("#quarto-header nav.navbar");

  if (!navbar) {
    console.warn("Language navigation: navbar not found");
    return;
  }

  const container = navbar.querySelector(".navbar-collapse");

  if (!container) {
    console.warn("Language navigation: navbar-collapse not found");
    return;
  }

  // 言語リンク用の領域を作成
  const select = document.createElement("select");
  select.className = "form-select form-select-sm";
  select.style.width = "auto";
  select.style.marginLeft = "1rem";

  const languages = [
    { code: "ja", label: "日本語" },
    { code: "en", label: "English" },
    { code: "fr", label: "Français" }
  ];
    // { code: "zh-TW", label: "繁體中文" }

  languages.forEach(lang => {
    const option = document.createElement("option");
    option.value = lang.code;
    option.textContent = lang.label;
    option.selected = lang.code === currentLang;
    select.appendChild(option);
  });

  select.addEventListener("change", () => {
    window.location.href = `${select.value}.html`;
  });

  const wrapper = document.createElement("div");
  wrapper.className = "d-flex align-items-center ms-auto";
  wrapper.appendChild(select);

  container.appendChild(wrapper);
})();