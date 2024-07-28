const verses = [
  "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future. - Jeremiah 29:11",
  "Remember the Sabbath day, to keep it holy. - Exodus 20:8",
  "The Lord is my shepherd; I shall not want. - Psalm 23:1",
  "I can do all things through Christ who strengthens me. - Philippians 4:13",
  "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life. - John 3:16",
  "In the beginning, God created the heavens and the earth. - Genesis 1:1",
  "The grace of our Lord Jesus Christ be with you all. Amen. - Revelation 22:21",
  "Trust in the Lord with all your heart and lean not on your own understanding. - Proverbs 3:5",
  "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control. - Galatians 5:22-23",
  "The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you. - Numbers 6:24-25",
  "And we know that in all things God works for the good of those who love him, who have been called according to his purpose. - Romans 8:28",
  "The Lord is my light and my salvation; whom shall I fear? The Lord is the strength of my life; of whom shall I be afraid? - Psalm 27:1",
  "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint. - Isaiah 40:31",
  "Cast all your anxiety on him because he cares for you. - 1 Peter 5:7",
  "For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord. - Romans 6:23"
];

let currentVerseIndex = 0;

function loadVerse() {
  const verseElement = document.getElementById('bible-verse');
  verseElement.innerText = verses[currentVerseIndex];
}

function analyzeReflection() {
  const reflection = document.getElementById('user-reflection').value;

  const feedbackElement = document.getElementById('feedback');
  if (reflection.toLowerCase().includes('god')) {
      feedbackElement.innerText = 'Great reflection! Keep focusing on God\'s word. Moving to the next verse.';
      
      // Move to the next verse after a delay
      setTimeout(() => {
          currentVerseIndex = (currentVerseIndex + 1) % verses.length;
          loadVerse();
          document.getElementById('user-reflection').value = '';
          feedbackElement.innerText = '';
      }, 3000);
  } else {
      feedbackElement.innerText = 'Try to connect your reflection more with the verse.';
  }
}
