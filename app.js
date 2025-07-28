
window.onload = function () {
  getRandomQuotationsReady();
};

function getRandomQuotationsReady() {
  var btn = document.getElementById('btn');
  btn.onclick = () => {
    var randomQuotesArray = [
      'True friends stab you in the front.',
      'Women are made to be Loved, not understood.',
      'Be the change that you wish to see in the world.',
      'Live as if you were to die tomorrow. Learn as if you were to live forever.',
      'No one can make you feel inferior without your consent.',
      'Do one thing every day that scares you.',
      'The time is always right to do what is right.',
      'Injustice anywhere is a threat to justice everywhere.',
      "If you 're going through hell, keep going.",
      'Peace begins with a smile.',
      "Stars can't shine without darkness.",
      'Let your life be a garden, where kindness is the seed and joy is the bloom.',
      'You are not a drop in the ocean. You are the entire ocean in a drop.',
      'Every sunrise is a new page in the story of your life. Make it beautiful.',
      'Sometimes the smallest step in the right direction ends up being the biggest leap of your life.',
      'Your soul knows the way. Trust it.',
      'Even the moon understands that phases are part of growth.',
      'Peace begins where expectation ends.',
      'Chase dreams, not people. Build light, not noise. Be love, not fear.'
    ];

    var randomQuote = document.getElementById('randomQuote');

    var rand = Math.floor(Math.random() * 19);
    console.log(rand);

    randomQuote.textContent = '"' + randomQuotesArray[rand] + '"';
  };
}
