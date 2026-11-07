(() => {
  const supportedLanguages = ["en", "fr", "ja", "zh-TW"];

  const browserLanguages = navigator.languages || [
    navigator.language || "en"
  ];

  let selectedLanguage = "en";

  for (const language of browserLanguages) {
    const normalized = language.toLowerCase();

    const match = supportedLanguages.find(
      lang => lang.toLowerCase() === normalized
    );

    if (match) {
      selectedLanguage = match;
      break;
    }
  }

  window.location.replace(
    `${selectedLanguage}.html`
  );
})();