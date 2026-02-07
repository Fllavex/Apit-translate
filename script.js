
document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('input');
    const translateBtn = document.getElementById('translateBtn');
    const outputText = document.getElementById('output');


    async function translateText() {
        const text = inputText.value.trim();
        const safeText = encodeURIComponent(text);
        const email = 'mashtalermaksim2012@gmail.com';
        const url = `https://api.mymemory.translated.net/get?q=${safeText}&langpair=uk|en&de=${email}`;

        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        outputText.textContent = data.responseData.translatedText;

        if (inputText.value.trim() === '') {
        outputText.textContent = '';
        }
    
}
translateBtn.addEventListener('click', translateText);

});