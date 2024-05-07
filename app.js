document.addEventListener('DOMContentLoaded', function() {

  // Audio playback
  const audio = new Audio('./metadata/music.mp3');
  audio.loop = true;
  audio.volume = 1.0;

  const closeLandingBtn = document.getElementById('close-landing-button');

  closeLandingBtn.addEventListener('click', function() {
    audio.play().catch(error => {
      console.log("Autoplay was prevented. Please interact with the page to play audio.");
    });
    landingPage.style.display = 'none';
    memeContainer.style.display = 'flex';
    mainPage.style.display = 'flex';
  });

  const landingPage = document.getElementById('landing-page');
  const mainPage = document.getElementById('main-page');
  const memeContainer = document.getElementById('memeContainer');
  landingPage.style.display = 'flex';
  mainPage.style.display = 'none';
  memeContainer.style.display = 'none';

  const twitterBtn = document.getElementById('twitter-button');
  twitterBtn.addEventListener('click', function() {
    window.open('https://twitter.com/tidepodsol', '_blank');
  });

  const telegramBtn = document.getElementById('telegram-button');
  telegramBtn.addEventListener('click', function() {
    window.open("t.me/TIDEPODSonSol", '_blank');
  });

  const chartBtn = document.getElementById('chart-button');
  chartBtn.addEventListener('click', function() {
    window.open('https://dexscreener.com/solana/', '_blank');
  });

  const buyBtn = document.getElementById('buy-button');
  buyBtn.addEventListener('click', function() {
    window.open('https://raydium.io/swap/?inputCurrency=sol&outputCurrency=', '_blank');
  });

  /* Copy button logic */
  const copyButton = document.getElementById('copy-ca-button');
  const textToCopy = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v";
  copyButton.addEventListener("click", async () => {
    try {
      // Try the modern Clipboard API first (if supported)
      await navigator.clipboard.writeText(textToCopy);
      console.log("Text copied successfully using Clipboard API");
      alert("Contract copied successfully!");
    } catch (err) {
      // If Clipboard API fails, use the legacy approach
      const textArea = document.createElement("textarea");
      textArea.value = textToCopy;
      textArea.style.position = "fixed"; // Hide element off-screen
      textArea.style.left = "-9999px";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      console.log("Text copied successfully using legacy approach");
      alert("Contract copied successfully!");
    }
  });
});