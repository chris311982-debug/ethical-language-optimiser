function simulateRephrase() {
  console.log("Rephrase button clicked");
  
  const input = document.getElementById("inputText").value;
  const style = document.getElementById("style").value;
  const tone = document.getElementById("tone").value;
  const outputBox = document.getElementById("outputBox");
  const scoreFill = document.getElementById("scoreFill");
  const scoreLabel = document.getElementById("scoreLabel");
  const humanBar = document.getElementById("humanBar");
  const aiBar = document.getElementById("aiBar");
  const mixedBar = document.getElementById("mixedBar");
  const graphLabel = document.getElementById("graphLabel");

  // Simple demo "rephrase" with style and tone shown
  outputBox.innerHTML = `<strong>Output:</strong><p>${input ? `Rephrased (${style}, ${tone}):<br>${input}` : "No input provided."}</p>`;

  // Simulate an Undetectability Score between 60% and 100%
  const score = Math.floor(Math.random() * 41) + 60;
  scoreFill.style.width = score + "%";
  scoreLabel.textContent = `${score}% human-like`;

  // Simulate Human vs AI vs Mixed language ratio
  const human = Math.floor(Math.random() * 51) + 40; // 40-90%
  const ai = Math.floor(Math.random() * (100 - human));
  const mixed = 100 - human - ai;

  humanBar.style.width = human + "%";
  aiBar.style.width = ai + "%";
  mixedBar.style.width = mixed + "%";
  graphLabel.textContent = `Human: ${human}% | AI: ${ai}% | Mixed: ${mixed}%`;
}

function lookupWord() {
  const word = document.getElementById("wordInput").value.trim();
  const type = document.getElementById("lookupType").value;
  const output = document.getElementById("wordOutput");
  if (!word) { output.innerHTML = "<strong>Result:</strong><p>Please enter a word.</p>"; return; }
  let result = "";
  switch (type) {
    case "definition": result = `"${word}" means: [Simulated definition].`; break;
    case "usage": result = `Use "${word}" like this: “She remained ${word} despite challenges.”`; break;
    case "synonyms": result = `Synonyms for "${word}": strong, adaptable, resilient.`; break;
    case "antonyms": result = `Antonyms for "${word}": fragile, vulnerable.`; break;
  }
  output.innerHTML = `<strong>Result:</strong><p>${result}</p>`;
}

function checkPhrase() {
  const phrase = document.getElementById("phraseInput").value.trim().toLowerCase();
  const output = document.getElementById("phraseOutput");
  const aiPhrases = ["in conclusion","it is important to note that","furthermore","moreover"];
  if (!phrase) { output.innerHTML = "<strong>Result:</strong><p>Please enter a phrase.</p>"; return; }
  if (aiPhrases.includes(phrase)) {
    output.innerHTML = `<strong>Result:</strong><p>❌ "${phrase}" is often flagged as robotic or AI-generated. Try rewording!</p>`;
  } else {
    output.innerHTML = `<strong>Result:</strong><p>✅ "${phrase}" sounds natural!</p>`;
  }
}
