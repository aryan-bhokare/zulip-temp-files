const maxlength_all_lang = {
    "Bahasa Indonesia": { "code": "id", "length_12hr": 0, "length_24hr": 0 },
    "British English": { "code": "en-GB", "length_12hr": 0, "length_24hr": 0 },
    "Català": { "code": "ca", "length_12hr": 0, "length_24hr": 0 },
    "česky": { "code": "cs", "length_12hr": 0, "length_24hr": 0 },
    "Chinese (Taiwan)": { "code": "zh-TW", "length_12hr": 0, "length_24hr": 0 },
    "Cymraeg": { "code": "cy", "length_12hr": 0, "length_24hr": 0 },
    "Deutsch": { "code": "de", "length_12hr": 0, "length_24hr": 0 },
    "Español": { "code": "es", "length_12hr": 0, "length_24hr": 0 },
    "Français": { "code": "fr", "length_12hr": 0, "length_24hr": 0 },
    "Italiano": { "code": "it", "length_12hr": 0, "length_24hr": 0 },
    "Lietuviškai": { "code": "lt", "length_12hr": 0, "length_24hr": 0 },
    "Luri (Bakhtiari)": { "code": "lrc", "length_12hr": 0, "length_24hr": 0 },
    "Magyar": { "code": "hu", "length_12hr": 0, "length_24hr": 0 },
    "Mongolian": { "code": "mn", "length_12hr": 0, "length_24hr": 0 },
    "Nederlands": { "code": "nl", "length_12hr": 0, "length_24hr": 0 },
    "Polski": { "code": "pl", "length_12hr": 0, "length_24hr": 0 },
    "Português": { "code": "pt", "length_12hr": 0, "length_24hr": 0 },
    "Português Brasileiro": { "code": "pt-BR", "length_12hr": 0, "length_24hr": 0 },
    "Portuguese (Portugal)": { "code": "pt-PT", "length_12hr": 0, "length_24hr": 0 },
    "Română": { "code": "ro", "length_12hr": 0, "length_24hr": 0 },
    "Sinhala": { "code": "si", "length_12hr": 0, "length_24hr": 0 },
    "Suomi": { "code": "fi", "length_12hr": 0, "length_24hr": 0 },
    "Svenska": { "code": "sv", "length_12hr": 0, "length_24hr": 0 },
    "Tagalog": { "code": "tl", "length_12hr": 0, "length_24hr": 0 },
    "Tiếng Việt": { "code": "vi", "length_12hr": 0, "length_24hr": 0 },
    "Türkçe": { "code": "tr", "length_12hr": 0, "length_24hr": 0 },
    "Беларуская": { "code": "be", "length_12hr": 0, "length_24hr": 0 },
    "Български": { "code": "bg", "length_12hr": 0, "length_24hr": 0 },
    "Русский": { "code": "ru", "length_12hr": 0, "length_24hr": 0 },
    "Српски": { "code": "sr", "length_12hr": 0, "length_24hr": 0 },
    "Українська": { "code": "uk", "length_12hr": 0, "length_24hr": 0 },
    "العربيّة": { "code": "ar", "length_12hr": 0, "length_24hr": 0 },
    "فارسی": { "code": "fa", "length_12hr": 0, "length_24hr": 0 },
    "हिंदी": { "code": "hi", "length_12hr": 0, "length_24hr": 0 },
    "தமிழ்": { "code": "ta", "length_12hr": 0, "length_24hr": 0 },
    "മലയാളം": { "code": "ml", "length_12hr": 0, "length_24hr": 0 },
    "한국어": { "code": "ko", "length_12hr": 0, "length_24hr": 0 },
    "日本語": { "code": "ja", "length_12hr": 0, "length_24hr": 0 },
    "简体中文": { "code": "zh-CN", "length_12hr": 0, "length_24hr": 0 },
    "繁體中文": { "code": "zh-TW", "length_12hr": 0, "length_24hr": 0 }
}

for (const language in maxlength_all_lang) {
    const languageCode = maxlength_all_lang[language].code;
    let maxLength_12 = maxlength_all_lang[language].length_12hr; // Get initial maxLength from JSON
    let maxLength_24 = maxlength_all_lang[language].length_24hr;

    for (let hour = 1; hour <= 23; hour++) {
        for (let minute = 1; minute <= 59; minute++) {
            const formattedTime_12 = new Date(2000, 0, 1, hour, minute).toLocaleString(languageCode, {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true
            });
            // console.log("12",formattedTime_12);
            // Update maxLength if the current formatted time string is longer
            // 12 hour format
            maxLength_12 = Math.max(maxLength_12, formattedTime_12.length);

            // for 24 hours format
            const formattedTime_24 = new Date(2000, 0, 1, hour, minute).toLocaleString(languageCode, {
                hour: 'numeric',
                minute: 'numeric',
                hour12: false
            });
            // console.log("24",formattedTime_24);
            maxLength_24 = Math.max(maxLength_24, formattedTime_24.length);
        }
    }
    // Update maxLength in the JSON object
    maxlength_all_lang[language].length_12hr = maxLength_12;
    maxlength_all_lang[language].length_24hr = maxLength_24;

}
//creating a Dict to store the Data properly
const langCodeDict = {};
for (const lang in maxlength_all_lang) {
    const langData = maxlength_all_lang[lang];
    const langCode = langData.code;
    delete langData.code;
    langData.name = lang;
    langCodeDict[langCode] = langData;
}
// Output JSON object with updated maxLength values
console.log(langCodeDict);


//  OUTPUT
// {
//   id: { length_12hr: 8, length_24hr: 5, name: 'Bahasa Indonesia' },
//   'en-GB': { length_12hr: 8, length_24hr: 5, name: 'British English' },
//   ca: { length_12hr: 11, length_24hr: 5, name: 'Català' },
//   cs: { length_12hr: 10, length_24hr: 5, name: 'česky' },
//   'zh-TW': { length_12hr: 7, length_24hr: 5, name: '繁體中文' },
//   cy: { length_12hr: 8, length_24hr: 5, name: 'Cymraeg' },
//   de: { length_12hr: 8, length_24hr: 5, name: 'Deutsch' },
//   es: { length_12hr: 11, length_24hr: 5, name: 'Español' },
//   fr: { length_12hr: 8, length_24hr: 5, name: 'Français' },
//   it: { length_12hr: 8, length_24hr: 5, name: 'Italiano' },
//   lt: { length_12hr: 15, length_24hr: 5, name: 'Lietuviškai' },
//   lrc: { length_12hr: 8, length_24hr: 5, name: 'Luri (Bakhtiari)' },
//   hu: { length_12hr: 9, length_24hr: 5, name: 'Magyar' },
//   mn: { length_12hr: 10, length_24hr: 5, name: 'Mongolian' },
//   nl: { length_12hr: 10, length_24hr: 5, name: 'Nederlands' },
//   pl: { length_12hr: 8, length_24hr: 5, name: 'Polski' },
//   pt: { length_12hr: 8, length_24hr: 5, name: 'Português' },
//   'pt-BR': { length_12hr: 8, length_24hr: 5, name: 'Português Brasileiro' },
//   'pt-PT': { length_12hr: 14, length_24hr: 5, name: 'Portuguese (Portugal)' },
//   ro: { length_12hr: 10, length_24hr: 5, name: 'Română' },
//   si: { length_12hr: 11, length_24hr: 5, name: 'Sinhala' },
//   fi: { length_12hr: 9, length_24hr: 5, name: 'Suomi' },
//   sv: { length_12hr: 8, length_24hr: 5, name: 'Svenska' },
//   tl: { length_12hr: 8, length_24hr: 5, name: 'Tagalog' },
//   vi: { length_12hr: 8, length_24hr: 5, name: 'Tiếng Việt' },
//   tr: { length_12hr: 8, length_24hr: 5, name: 'Türkçe' },
//   be: { length_12hr: 8, length_24hr: 5, name: 'Беларуская' },
//   bg: { length_12hr: 15, length_24hr: 8, name: 'Български' },
//   ru: { length_12hr: 8, length_24hr: 5, name: 'Русский' },
//   sr: { length_12hr: 8, length_24hr: 5, name: 'Српски' },
//   uk: { length_12hr: 8, length_24hr: 5, name: 'Українська' },
//   ar: { length_12hr: 7, length_24hr: 5, name: 'العربيّة' },
//   fa: { length_12hr: 15, length_24hr: 5, name: 'فارسی' },
//   hi: { length_12hr: 8, length_24hr: 5, name: 'हिंदी' },
//   ta: { length_12hr: 14, length_24hr: 5, name: 'தமிழ்' },
//   ml: { length_12hr: 8, length_24hr: 5, name: 'മലയാളം' },
//   ko: { length_12hr: 8, length_24hr: 5, name: '한국어' },
//   ja: { length_12hr: 7, length_24hr: 5, name: '日本語' },
//   'zh-CN': { length_12hr: 7, length_24hr: 5, name: '简体中文' }

