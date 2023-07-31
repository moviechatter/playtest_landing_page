let multiplier_score;
let multiplier;
let variableTimeout;
let not_confettied = true;
let iframeScrabbleBlackout;
let scrabblePointsTotal
let woodAlert;
woodAlert = document.createElement('div');
woodAlert.id = "wood-alert";
woodAlert.style.backgroundImage = "url('./scrabble/wooden_sign.png')";
woodAlert.style.backgroundSize = "cover";
woodAlert.style.width = "66%";
woodAlert.style.height = "8vw";
woodAlert.style.display = "flex";
woodAlert.style.justifyContent = "center";
woodAlert.style.alignItems = "center";
let woodAlertText = document.createElement('p');
woodAlertText.id = "wood-alert-text";
woodAlertText.textContent = "Add up to 7 tiles to your tray!";
woodAlertText.style.width = "80%";
woodAlertText.style.color = "white";
woodAlertText.style.fontSize = "0.8vw";
// woodAlertText.style.padding = "0.2vw 2vw";
woodAlertText.classList.add("videogame");
woodAlertText.style.textAlign = "center";
woodAlert.appendChild(woodAlertText);
let pointCounter;
let pointImage;
let pointRow;
let pointText;
let scrabbleDescriptionText;
let sidebar_open = false;
let activeTab = "prizes";
let timerText = document.createElement('p');
timerText.id = "scrabble-timer-text";
timerText.classList.add("videogame");
timerText.style.backgroundColor = "white";
timerText.style.color = "#141134";
timerText.style.position = "fixed";
timerText.style.top = "5.0vw";
timerText.style.right = "2vw";
timerText.style.fontSize = "0.8vw";
timerText.style.padding = "0.5vw 1vw";
timerText.style.zIndex = "24";
let timer = 0.0;
let timerInterval;
timerText.textContent = `You've spent ${timer.toFixed(1)} seconds longer on this site because of Playtest.`;

const sidebarPointDiv = document.createElement('div');
sidebarPointDiv.style.width = '25%';
sidebarPointDiv.style.position = 'fixed';
sidebarPointDiv.style.top = '0';
sidebarPointDiv.style.bottom = '0';
sidebarPointDiv.style.transition = 'right 0.3s ease';
sidebarPointDiv.style.display = 'flex';
sidebarPointDiv.style.flexDirection = 'column';
sidebarPointDiv.style.justifyContent = 'flex-start';
sidebarPointDiv.style.alignItems = 'center';
sidebarPointDiv.style.zIndex = '25';
sidebarPointDiv.style.backgroundColor = '#EFF5FF';
sidebarPointDiv.style.borderRadius = '10px 0 0 10px';
sidebarPointDiv.style.right = "-25%";
const sidebarHeader = document.createElement('p');
sidebarHeader.id = "scrabble-sidebar-header";
sidebarHeader.style.fontSize = '2.0vw';
sidebarHeader.style.fontWeight = 'bold';
sidebarHeader.style.color = '#141134';
sidebarHeader.style.marginBottom = '0.2vw';
sidebarHeader.style.marginTop = '0.2vw';
sidebarHeader.textContent = "Playtest";
sidebarHeader.style.fontFamily = "Roboto Mono";
const sidebarCloseButton = document.createElement('button');
sidebarCloseButton.style.top = '0.5vw';
sidebarCloseButton.style.right = '0.5vw';
sidebarCloseButton.style.margin = '2%';
sidebarCloseButton.style.fontSize = '1vw';
sidebarCloseButton.textContent = "X";
sidebarCloseButton.style.position = 'absolute';
sidebarCloseButton.style.color = '#ffffff';
sidebarCloseButton.style.backgroundColor = '#141134';
sidebarCloseButton.style.cursor = 'pointer';
sidebarCloseButton.style.border = 'none';
sidebarCloseButton.style.borderRadius = '2px';
sidebarCloseButton.style.padding = '.8% 2.2%';
sidebarCloseButton.addEventListener('click', () => {
  toggleSidebar();
});
const sidebarHeroImg = document.createElement('img');
sidebarHeroImg.style.width = '100%';
sidebarHeroImg.src = "./img/sidebar/hero_prize_banner.png";
const sidebarTabsDiv = document.createElement('div');
sidebarTabsDiv.style.width = '100%';
sidebarTabsDiv.style.display = 'flex';
sidebarTabsDiv.style.flexDirection = 'row';
sidebarTabsDiv.style.justifyContent = 'space-around';
const prizesTabButton = document.createElement('button');
prizesTabButton.textContent = "Prizes";
prizesTabButton.style.color = 'white';
prizesTabButton.style.padding = '1% 2%';
prizesTabButton.style.backgroundColor = '#141134';
prizesTabButton.addEventListener('click', () => {
  activeTab = "prizes";
  prizesTabButton.style.color = 'white';
  prizesTabButton.style.backgroundColor = '#141134';
  rankingsTabButton.style.color = '#787878';
  rankingsTabButton.style.backgroundColor = 'transparent';
  prizesTab.style.display = "flex";
  rankingsTab.style.display = "none";
});
const rankingsTabButton = document.createElement('button');
rankingsTabButton.textContent = "Rankings";
rankingsTabButton.style.padding = '1% 2%';
rankingsTabButton.style.backgroundColor = 'transparent';
rankingsTabButton.addEventListener('click', () => {
  activeTab = "rankings";
  rankingsTabButton.style.color = 'white';
  rankingsTabButton.style.backgroundColor = '#141134';
  prizesTabButton.style.color = '#787878';
  prizesTabButton.style.backgroundColor = 'transparent';
  rankingsTab.style.display = "flex";
  prizesTab.style.display = "none";
});
[prizesTabButton, rankingsTabButton].forEach(btn => {
  btn.style.border = 'none';
  btn.style.borderRadius = '3px';
  btn.style.fontSize = '1.4vw';
  btn.style.fontFamily = 'Roboto Mono';
  btn.style.transition = 'background-color 0.3s ease, color 0.3s ease';
  btn.style.padding = '1% 2%';
});
prizesTabButton.addEventListener('mouseover', () => {
  prizesTabButton.style.cursor = 'pointer';
  if (activeTab !== "prizes") {
    prizesTabButton.style.color = 'white';
    prizesTabButton.style.backgroundColor = '#141134';
  }
});
prizesTabButton.addEventListener('mouseout', () => {
  if (activeTab !== "prizes") {
    prizesTabButton.style.color = '#787878';
    prizesTabButton.style.backgroundColor = 'transparent';
  }
});
rankingsTabButton.addEventListener('mouseover', () => {
  if (activeTab !== "rankings") {
    rankingsTabButton.style.color = 'white';
    rankingsTabButton.style.backgroundColor = '#141134';
  }
});
rankingsTabButton.addEventListener('mouseout', () => {
  if (activeTab !== "rankings") {
    rankingsTabButton.style.color = '#787878';
    rankingsTabButton.style.backgroundColor = 'transparent';
  }
});
sidebarTabsDiv.appendChild(prizesTabButton);
sidebarTabsDiv.appendChild(rankingsTabButton);

// Building the prize tab
const prizesTab = document.createElement('div');
prizesTab.style.marginTop = '2%';
prizesTab.style.display = "flex";
prizesTab.style.flexDirection = 'column';
prizesTab.style.justifyContent = 'center';
prizesTab.style.alignItems = 'center';
// Building the prize tab components
const prizeHeader = document.createElement('p');
prizeHeader.id = "scrabble-prize-header";
prizeHeader.classList.add("plain");
prizeHeader.textContent = "The best part of any game: the Loot.";
prizeHeader.style.fontSize = "1.5vw";
prizeHeader.style.color = "#141134";
prizeHeader.style.width = "70%";
prizeHeader.style.textAlign = "center";
const prizeHeroContainer = document.createElement('div');
prizeHeroContainer.id = "prize-hero-container";
prizeHeroContainer.style.width = "80%";
prizeHeroContainer.style.display = "flex";
prizeHeroContainer.style.justifyContent = "center";
prizeHeroContainer.style.alignItems = "center";
const prizeHeroImg = document.createElement('img');
prizeHeroImg.id = "prize-hero-img";
prizeHeroImg.src = "./img/sidebar/prize_hero.png";
prizeHeroContainer.appendChild(prizeHeroImg);
const signupCTAText = document.createElement('p');
signupCTAText.id = "scrabble-signup-cta-text";
signupCTAText.classList.add("videogame");
signupCTAText.style.width = "90%";
signupCTAText.style.textAlign = "center";
signupCTAText.style.marginTop = "2vw";
signupCTAText.style.color = "#141134";
signupCTAText.textContent = "Sign up to turn your points into prizes:";
signupCTAText.style.fontSize = "1.4vw";
prizesTab.appendChild(prizeHeader);
prizesTab.appendChild(prizeHeroContainer);
prizesTab.appendChild(signupCTAText);


// Building the ranking tab
const rankingsTab = document.createElement('div');
rankingsTab.style.width = "100%";
rankingsTab.style.display = "none";
rankingsTab.style.flexDirection = 'column';
rankingsTab.style.justifyContent = 'center';
rankingsTab.style.alignItems = 'center';
// Building the ranking tab components
const rankingCategoriesDiv = document.createElement('div');
rankingCategoriesDiv.id = "ranking-categories-div";
rankingCategoriesDiv.classList.add("ranking-container-element");
rankingCategoriesDiv.style.width = "90%";
rankingCategoriesDiv.style.marginTop = "2vw";
let rankTexts = ["Rank", "Username", "Points"];
// loop over rankTexts and create p tags and append as children into rankingCategoriesDiv
for (let i = 0; i < rankTexts.length; i++) {
  const text = document.createElement('p');
  if (i == 0) {
    text.style.width = "14%";
  } else if (i == 1) {
    text.style.width = "32%";
  } else {
    text.style.width = "34%";
  }
  text.classList.add("plain");
  text.classList.add("ranking-category-text");
  text.textContent = rankTexts[i];
  text.style.textAlign = "center";
  rankingCategoriesDiv.appendChild(text);
}
let placementRows = {
  "0": ["1", "michaelchang", "10,000"],
  "1": ["2", "sylverwolphe", "8,000"],
  "2": ["3", "matdallen", "6,000"],
  "3": ["287", "your_username", pointText],
}
// Call Firebase, format into class .placement-row
// .username and .points can be applied to the p tags for the individual elements
const placementsDiv = document.createElement('div');
placementsDiv.id = "placements-div";
placementsDiv.style.width = "90%";
placementsDiv.style.display = "flex";
placementsDiv.style.flexDirection = "column";
placementsDiv.style.justifyContent = "center";
placementsDiv.style.alignItems = "center";
for (let key in placementRows) {
  let valuesArray = placementRows[key];
  const placementRow = document.createElement('div');
  placementRow.style.width = "100%";
  placementRow.style.display = "flex";
  placementRow.style.justifyContent = "space-between";
  placementRow.style.alignItems = "center";
  placementRow.style.marginTop = "1.2vw";
  placementRow.style.marginBottom = "1.2vw";
  let rankImg = document.createElement('img');
  rankImg.src = `./img/sidebar/${valuesArray[0]}.png`;
  rankImg.style.width = "16%";
  rankImg.style.height = "auto";
  let usernameText = document.createElement('p');
  usernameText.classList.add("ignore");
  usernameText.classList.add("videogame");
  usernameText.style.width = "30%";
  usernameText.style.textAlign = "center";
  usernameText.style.color = "#141134";
  usernameText.textContent = `@${valuesArray[1]}`;
  usernameText.style.fontSize = "0.7vw";
  let pointText = document.createElement('p');
  pointText.classList.add("ignore");
  pointText.classList.add("videogame");
  pointText.style.width = "36%";
  pointText.style.textAlign = "center";
  pointText.style.color = "#141134";
  pointText.style.fontSize = "0.8vw";
  if (key < 3) {
    pointText.textContent = valuesArray[2];
  } else {
    const moreRanksButton = document.createElement('button');
    moreRanksButton.id = "more-ranks-button";
    moreRanksButton.classList.add("ranking-container-element");
    moreRanksButton.textContent = "more...";
    moreRanksButton.style.alignItems = "center";
    placementsDiv.appendChild(moreRanksButton);
    pointText.id = "adjustment-points";
  }
  placementRow.appendChild(rankImg);
  placementRow.appendChild(usernameText);
  placementRow.appendChild(pointText);
  placementsDiv.appendChild(placementRow);
}

rankingsTab.appendChild(rankingCategoriesDiv);
rankingsTab.appendChild(placementsDiv);


// CTA button
const sidebarSignupButton = document.createElement('button');
sidebarSignupButton.id = "sidebar-signup-button";
sidebarSignupButton.classList.add("styled-button");
sidebarSignupButton.textContent = "Sign up";

// Adding things together to form the sidebar point div
sidebarPointDiv.appendChild(sidebarHeader);
sidebarPointDiv.appendChild(sidebarCloseButton);
sidebarPointDiv.appendChild(sidebarHeroImg);
sidebarPointDiv.appendChild(sidebarTabsDiv);
sidebarPointDiv.appendChild(prizesTab);
sidebarPointDiv.appendChild(rankingsTab);
sidebarPointDiv.appendChild(sidebarSignupButton);
document.body.appendChild(sidebarPointDiv);

function removeScrabbleTypewriter(text, textElement, i = 0) {
  const currentText = textElement.textContent;
  const newText = text;

  if (currentText.length > 0) {
    // Remove the last character from the existing text
    textElement.textContent = currentText.substring(0, currentText.length - 1);
    setTimeout(() => removeScrabbleTypewriter(text, textElement, i), 20);
  } else {
    setTimeout(() => typewriter(newText, textElement, i), 20);
  }
}
function typewriter(text, textElement, i = 0) {
  if (i < text.length) {
    const char = text.charAt(i);
    if (char === '<') {
      // Find the closing angle bracket '>'
      const closingIndex = text.indexOf('/', i);
      const finalBracketIndex = text.indexOf('>', closingIndex);
      if (closingIndex !== -1) {
        // Extract the HTML tag
        const tag = text.slice(i, finalBracketIndex + 1);
        textElement.insertAdjacentHTML('beforeend', tag);
        i = finalBracketIndex + 1;
      } else {
        const closingBracketIndex = text.indexOf('>', i);
        console.log(closingBracketIndex);
        const tag = text.slice(i, closingBracketIndex + 1);
        textElement.insertAdjacentHTML('beforeend', tag);
        i = closingBracketIndex + 1;
      }
    } else {
      textElement.insertAdjacentText('beforeend', char);
      i++;
    }
    setTimeout(() => typewriter(text, textElement, i), 20);
  }
}

function toggleSidebar() {
  if (sidebar_open == true) {
    sidebar_open = false;
    sidebarPointDiv.style.right = "-25%";
  } else {
    sidebar_open = true;
    sidebarPointDiv.style.right = "0%";
  }
}

function isValidScrabbleWord(word) {
  const scrabbleJsonPath = "scrabble_2019.json";

  return fetch(scrabbleJsonPath)
    .then(response => response.json())
    .then(words => {
      const scrabbleSet = new Set(words);
      return scrabbleSet.has(word.toUpperCase());
    })
    .catch(error => {
      console.error('Error loading Scrabble words:', error);
    });
}

const inventory = document.createElement('div');
inventory.style.position = 'fixed';
inventory.style.width = '26vw';
inventory.style.display = 'flex';
inventory.style.flexDirection = 'column';
inventory.style.bottom = '20px';
inventory.style.right = '20px';
inventory.style.transition = 'opacity 0.5s ease';
inventory.style.zIndex = '9999999999';
inventory.style.justifyContent = 'center';
inventory.style.alignItems = 'center';
const inventoryRow = document.createElement('div');
inventoryRow.style.display = 'flex';
inventoryRow.style.width = "93%";
inventoryRow.style.flexDirection = 'row';
inventoryRow.style.padding = '1vw';
inventoryRow.style.backgroundImage = "url('./scrabble/tray.png')";
inventoryRow.style.backgroundSize = "cover";
inventoryRow.style.height = '3vw';

const guessRow = document.createElement('div');
guessRow.style.display = 'flex';
guessRow.style.flexDirection = 'row';
guessRow.style.border = '0.2vw solid black';
guessRow.style.backgroundColor = "white";
guessRow.style.width = "100%";

for (let i = 0; i < 7; i++) {
  let guessSpace = document.createElement('div');
  if (i == 3) {
    guessSpace.style.backgroundImage = "url('./scrabble/DOUBLELETTER.png')";
    guessSpace.style.backgroundSize = "cover";
  } else if (i == 6) {
    guessSpace.style.backgroundImage = "url('./scrabble/TRIPLEWORD.png')";
    guessSpace.style.backgroundSize = "cover";
  }
  guessSpace.classList.add('guess-space');

  guessSpace.style.width = '2vw';
  guessSpace.style.height = '2vw';
  guessSpace.style.border = '0.3vw solid white';
  guessSpace.style.backgroundColor = '#FFDEAD';
  guessSpace.style.marginRight = '5px';
  guessSpace.style.borderRadius = '0.8vw';
  guessSpace.style.position = 'relative';
  guessSpace.style.padding = '0.5vw';

  guessRow.appendChild(guessSpace);

}

const submitButton = document.createElement('button');
submitButton.textContent = 'Submit';
submitButton.style.backgroundColor = "#141134";
submitButton.style.color = 'white';
submitButton.style.border = '2px solid white';
submitButton.style.borderRadius = '1vw';
submitButton.classList.add('videogame');
submitButton.style.padding = '0.5vw 1vw';
submitButton.style.marginTop = '1vw';
submitButton.style.fontSize = '1.5vw';
submitButton.style.width = "70%";
submitButton.addEventListener('mouseover', () => {
  submitButton.style.cursor = 'pointer';
  submitButton.style.backgroundColor = "#4E4988";
});

submitButton.addEventListener('mouseout', () => {
  submitButton.style.backgroundColor = '#141134';
});

// document.body.appendChild(inventory);
let clicks = 0;
let inventoryFilled = false;
let started = false;

// Get all p elements
const paragraphs = document.querySelectorAll('p');
let randomCounter = Math.ceil(Math.random() * paragraphs.length / 20 + 2);

paragraphs.forEach(p => {
  if (p.id == "wood-alert-text" || p.id == "scrabble-sidebar-header" || p.id == "scrabble-prize-header" || p.id == "scrabble-prize-footer" || p.classList.contains("ranking-category-text") || p.id == "scrabble-signup-cta-text" || p.classList.contains("ignore")) {
    return;
  }
  const nodes = Array.from(p.childNodes);

  // Filter out unwanted nodes (e.g., scripts, styles)
  const validNodes = nodes.filter(node => {
    return node.nodeType === Node.TEXT_NODE || node.nodeName === 'SPAN' || node.nodeName === 'BR';
  });

  const letterArray = [];
  const spanIndices = new Set();

  validNodes.forEach(node => {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent;
      letterArray.push(...text.split(''));
    } else if (node.nodeName === 'SPAN') {
      const spanHTML = node.outerHTML;
      const spanLength = node.textContent.length;
      const startIndex = letterArray.length;
      for (let i = 0; i < spanLength; i++) {
        spanIndices.add(startIndex + i);
      }
      letterArray.push(spanHTML);
    } else if (node.nodeName === 'BR') {
      letterArray.push('<br>');
    }
  });

  // Replace some letters with spans
  for (let i = 0; i < randomCounter; i++) {
    const index = Math.floor(Math.random() * letterArray.length);

    // Skip if the index is already wrapped in a span or inside an existing span
    if (spanIndices.has(index)) {
      continue;
    }

    // Check if the character is a letter
    const char = letterArray[index];
    if (typeof char === 'string' && char.match(/[a-zA-Z]/) && char !== ' ') {
      // Wrap in span
      letterArray[index] = `<span class="scrabble">${char}</span>`;
      spanIndices.add(index);
    }
  }

  // Join and set innerHTML
  p.innerHTML = letterArray.join('');
});

// Get all elements with the class name "scrabble"
const scrabbleElements = document.querySelectorAll('span.scrabble');

let scrabblePoints = {
  "A": 1,
  "B": 3,
  "C": 3,
  "D": 2,
  "E": 1,
  "F": 4, 
  "G": 2,
  "H": 4,
  "I": 1,
  "J": 8,
  "K": 5,
  "L": 1,
  "M": 3,
  "N": 1,
  "O": 1, 
  "P": 3,
  "Q": 10,
  "R": 1,
  "S": 1, 
  "T": 1,
  "U": 1,
  "V": 4,
  "W": 4,
  "X": 8,
  "Y": 4,
  "Z": 10
}

scrabbleElements.forEach(element => {
  function addMouseoverAlert(el) {
    const alertElement = document.createElement('div');
    alertElement.classList.add('scrabble-alert');
    alertElement.style.position = 'absolute';
    alertElement.style.top = '-4vw';
    alertElement.style.backgroundColor = 'white';
    alertElement.style.fontSize = '1vw';
    alertElement.style.padding = '0.1vw 0.4vw';
    alertElement.style.display = 'none'; // Hide the alert by default
    alertElement.style.whiteSpace = 'nowrap'; // Prevent text from wrapping
    alertElement.style.fontFamily = 'sans-serif';
    alertElement.style.border = '0.3vw solid tan';
    alertElement.style.borderRadius = '0.2vw';

    el.addEventListener("mouseover", function(event) {
      if (inventoryFilled == false && el.style.backgroundColor !== "tan") {
        alertElement.style.display = 'block';
        alertElement.textContent = "Tile already added!";
      } else if (inventoryFilled == true && el.style.backgroundColor !== "tan") {
        alertElement.style.display = 'block';
        alertElement.textContent = "Max. tiles added!";
      } else if (inventoryFilled == false && el.style.backgroundColor == "tan") {
        alertElement.style.display = 'block';
        alertElement.textContent = "Click to add to inventory!";
      }
    });
    el.addEventListener("mouseout", function(event) {
      alertElement.style.display = 'none';
    });

    el.appendChild(alertElement);
  }

  addMouseoverAlert(element);
  let letter = element.textContent.toUpperCase();
  // Get current font size 
  let currentFontSize = window.getComputedStyle(element).fontSize;

  // styles for tiles
  element.style.color = "#5c4428"; // alex added this to remind to make letters a color too!
  element.style.borderStyle = "solid";
  element.style.borderTop = "2px solid #e2c19b";
  element.style.borderLeft = "2px solid #e2c19b";
  element.style.borderBottom = "2px solid #998369";
  element.style.borderRight = "2px solid #998369";
  element.style.backgroundColor = "tan";
  element.style.position = "relative";
  element.style.width = currentFontSize;
  element.style.height = currentFontSize;
  element.style.display = "inline-block";
  element.style.textAlign = "center";
  element.style.alignItems = "center";
  element.style.justifyContent = "center";
  element.style.fontFamily = "eurostile";
  element.style.fontSize = currentFontSize;
  element.style.textTransform = "uppercase";
  element.style.top = "-1%";
  element.style.borderRadius = "5px";
  element.style.lineHeight = element.style.height;
  element.style.lineHeight = element.style.width;
  element.style.fontWeight = "normal"

  // If a tile is clicked before 7 tiles have been reached, shade it
  element.addEventListener("click", function(event) {
    if (clicks >= 3) {
      woodAlertText.textContent = `Click on tiles in your tray to add them to your guess!`;
      woodAlertText.style.color = "white";
    } else if (clicks >= 1) {
      woodAlertText.textContent = `Submit a word related to this site for bonus points!`;
      woodAlertText.style.color = "white";
    }
    if (started == false) {
      started = true;
      inventory.appendChild(guessRow);
      document.body.appendChild(inventory);
      inventory.appendChild(inventoryRow);
      inventory.appendChild(submitButton);
      inventory.prepend(woodAlert);
      document.body.appendChild(timerText);
      function updateTimer() {
        timer += 0.1; // Increment time by 0.1 seconds
        timerText.textContent = `You've spent ${timer.toFixed(1)} seconds longer on this site because of Playtest.`;
      }
      timerInterval = setInterval(updateTimer, 100);
    }
    if (this.style.backgroundColor === 'tan') {
      let inventoryLetter = this.cloneNode(true);
      const excludedChild = inventoryLetter.querySelector('.scrabble-alert');
      if (excludedChild) {
        excludedChild.parentNode.removeChild(excludedChild);
      }
      inventoryLetter.style.width = '3vw';
      inventoryLetter.style.height = '3vw';
      inventoryLetter.style.fontSize = '2vw';
      inventoryLetter.style.lineHeight = '3vw';
      inventoryLetter.addEventListener("click", function(event) {
        if (inventoryLetter.classList.contains('guessed')) {
          inventoryRow.appendChild(inventoryLetter);
          inventoryLetter.style.position = 'relative';
          inventoryLetter.style.top = "unset";
          inventoryLetter.style.left = "unset";
          inventoryLetter.classList.remove('guessed');
          inventoryLetter.style.width = '3vw';
          inventoryLetter.style.height = '3vw';
        } else {
          inventoryLetter.classList.add('guessed');
          // Find all elements with the class 'guess-space' inside the guessRow container
          const guessSpaces = guessRow.getElementsByClassName('guess-space');
          // Variable to store the target guess-space element
          let emptyGuessSpace = null;
          // Loop through each guess-space element to find the first empty one
          for (const space of guessSpaces) {
            if (!space.firstChild) { // Check if the guess-space element is empty
              emptyGuessSpace = space;
              break; // Stop the loop once you find the first empty guess-space element
            }
          }
          // Append the 'inventoryLetter' element to the target guess-space element (if found)
          if (emptyGuessSpace) {
            inventoryLetter.style.width = '2.5vw';
            inventoryLetter.style.height = '2.5vw';
            emptyGuessSpace.appendChild(inventoryLetter);
          } else {
            console.log("No empty guess-space element found inside guessRow.");
          }
          inventoryLetter.style.position = 'absolute';
          inventoryLetter.style.top = '0.15vw';
          inventoryLetter.style.left = '0.15vw';
        }
      });

      this.style.backgroundColor = '#b39265';
      this.style.color = '#000000'
      this.style.cursor = "not-allowed";
      inventoryRow.appendChild(inventoryLetter);
    }

    clicks++;
    if (clicks >= 7) {
      inventoryFilled = true;
      scrabbleElements.forEach(element => {
        element.style.backgroundColor = '#b39265';
        element.style.color = '#000000'
        element.style.cursor = "not-allowed";
      });
    }
  });
  // Create a new span for the point number
  const pointsSpan = document.createElement('span');

  // Style it
  pointsSpan.style.fontSize = "10px";
  pointsSpan.style.fontFamily = "sans-serif";
  pointsSpan.style.position = "absolute";
  pointsSpan.style.top = "10px";
  pointsSpan.style.right = "2px";

  // Find way to associate points with values
  console.log(scrabblePoints[letter]);
  pointsSpan.textContent = scrabblePoints[letter];

  // Append to element
  element.appendChild(pointsSpan);

});

// let wordstring = "dfdffdddfdf";
let wordstring = "heist";
function calculatePoints(wordstring) {

  // Initialize the points variable
  let points = 0;

  // Loop through each character in the inputString
  for (let i = 0; i < wordstring.length; i++) {
    // Convert the character to uppercase to handle lowercase letters as well
    let char = wordstring[i].toUpperCase();

    // Check if the character exists in scrabblePoints
    if (scrabblePoints.hasOwnProperty(char) && i == 3) {
      // Add the points associated with the character to the points variable
      points += scrabblePoints[char] * 2;
    } else if (scrabblePoints.hasOwnProperty(char)) {
      points += scrabblePoints[char];
    }
  }

  if (wordstring.length == 7) {
    points *= 3;
  }

  // Return the total points
  return points;
}

function countUpPoints(textElement, points) {
  // edit duration to change length of animation
  let duration = 6.2;
  const totalPoints = points;

  const startTime = performance.now();
  const interval = 16; // 60 FPS (1000ms / 60 frames)
  
  function exponentialEaseOut(t) {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  }
  
  function updatePoints() {
    const currentTime = performance.now();
    const elapsedTime = currentTime - startTime;
    
    if (elapsedTime >= duration * 1000) {
      textElement.textContent = Math.ceil(totalPoints);
      concludePointsDisplay();
      return;
    }
    
    const t = elapsedTime / (duration * 1000);
    const easing = exponentialEaseOut(t);
    const currentPoints = Math.ceil(totalPoints * easing);
    textElement.textContent = currentPoints;
    
    setTimeout(updatePoints, interval);
  }

  updatePoints();
}

function concludePointsDisplay() {
  if (not_confettied) {
    not_confettied = false;
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.8 },
      zIndex: 14,
    });
  }
}

submitButton.addEventListener('click', function(event) {
  submitButton.disabled = true;
  // I want my button to have a cursor that indicates it's not clickable while loading and for the button background color to be slightly lighter while loading
  submitButton.style.backgroundColor = "#504A8F";
  submitButton.style.cursor = "not-allowed";
  submitButton.style.textContent = "Loading...";
  const guessedLetters = Array.from(guessRow.childNodes);
  const guessedWord = guessedLetters.map(letter => letter.textContent).join('');
  const sanitizedWord = guessedWord.replace(/\d+/g, '').toLowerCase();
  console.log(sanitizedWord);
  isValidScrabbleWord(sanitizedWord)
  .then(isValid => {
    if (isValid) {
      clearInterval(timerInterval);
      const words = timerText.textContent.split(" ");
      words[0] = "You";
      const modifiedText = words.join(" ");
      timerText.textContent = modifiedText;
      // run command on terminal for the following to work: venv/bin/uvicorn claude_scorer_api:app --reload
      fetch('http://localhost:8000/get_score', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
        },
        // body is pre-fed, word is sanitizedWord
        body: JSON.stringify({
          "context": " Here is a summary of the key details from the provided document:\n\nThe document appears to be an excerpt from the homepage of a company called Playtest that provides a service for monetizing website content through dynamically generated art/graphics. The main topics covered are:\n\n- Playtest's service that analyzes website content, tags elements, and inserts branded graphics to monetize without disruptive ads. \n\n- A 3-step overview of how their service works.\n\n- The service is free to use since it makes money for the website owner. \n\n- A call-to-action to sign up and get first access to the service.\n\nBased on the content, the main products/services offered by Playtest appear to be:\n\n- Automated analysis of website content\n- Contextual tagging of website elements \n- Generating custom branded graphics\n- Inserting graphics/artwork into websites to monetize\n\nIn summary, this is promotional content for Playtest's free service that dynamically monetizes website content by inserting targeted, branded art and graphics. It aims to convince potential customers to sign up to get early access.\n Here are the main ideas, potential SEO keywords, and relevant topics I extracted from the document:\n\nMain Ideas:\n- Monetizing website content with dynamically generated art/graphics \n- Playtest's free service analyzes content, tags elements, inserts graphics\n- Service aims to monetize without disruptive ads\n- Overview of how Playtest's 3-step service works\n- Call-to-action to sign up and get early access\n\nPotential SEO Keywords:\n- content monetization, website monetization, monetize website\n- dynamic art monetization, branded art monetization \n- ad-free monetization, non-disruptive monetization\n- automated content analysis, contextual content tagging\n- sign up, early access\n\nRelevant Topics:\n- Website monetization, ad optimization\n- Content marketing, native advertising \n- Dynamic content generation\n- Contextual content analysis\n- Lead generation\n\nThe main topics seem to be around website monetization through contextual, dynamic art/graphics as well as the specifics of Playtest's service and how it works. Relevant SEO keywords focus on monetization and the key aspects of",
          "word": sanitizedWord
        })
      })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        multiplier_score = result
        const highMults = {
          16: 1.6,
          17: 1.7,
          18: 1.8,
          19: 1.9,
          20: 2,
        }
        multiplier = 1;
        if (multiplier_score >= 10 && multiplier_score <= 15) {
          multiplier = 1.5;
        } else if (multiplier_score >= 15) {
          multiplier = highMults[multiplier_score];
        }
        scrabblePointsTotal = calculatePoints(sanitizedWord) * 100 * multiplier;
        ///////// BONUS POINTS /////////
        setTimeout(() => {
          if (multiplier > 1) {
            countUpPoints(pointText, scrabblePointsTotal);
            removeScrabbleTypewriter("And more bonus points for a guess relevant to the site content!", scrabbleDescriptionText);
            variableTimeout = 5000;
          } else {
            removeScrabbleTypewriter("... buuuut no bonus points because your guess wasn't relevant to the site.", scrabbleDescriptionText);
            variableTimeout = 4000;
          }
          
      
          setTimeout(() => {
            // fade out and remove point celeb elements
            iframeScrabbleBlackout.style.opacity = "0%";
      
            setTimeout(() => {
              iframeScrabbleBlackout.remove();
              inventory.style.opacity = "0%";
      
              // consider making these CSS properties a class of div that just gets added later .sidebar-point-row
              pointRow.style.position = 'fixed';
              pointRow.style.right = '5%';
              pointRow.style.bottom = '10%';
              pointRow.style.backgroundColor = '#ffffff';
              pointRow.style.zIndex = "14";
              pointRow.style.borderRadius = '10px';
              pointRow.style.padding = '5%';
              pointRow.style.cursor = 'pointer';
              pointRow.style.border = '0.4vw solid #F4B831';
              pointRow.style.width = "12vw";
              pointRow.style.height = "7vw";
              pointRow.style.opacity = "0%";
              pointRow.style.padding = "0";
              pointText.style.color = "black";
              pointText.style.fontSize = "2vw";
              pointText.style.marginTop = "0";
              pointText.style.marginBottom = "0";
              pointText.style.marginRight = "0.4vw";
              pointText.style.textAlign = "center";
              pointText.classList.add("videogame");
              pointImage.style.width = "2.9vw";
              pointImage.style.transform = "translateY(-8%)";
      
              document.body.appendChild(pointRow);
              const miniSidebarPointRow = pointRow.cloneNode(true);
              miniSidebarPointRow.style.position = "absolute";
              miniSidebarPointRow.style.backgroundColor = 'transparent';
              miniSidebarPointRow.style.border = 'none';
              miniSidebarPointRow.style.right = 'unset';
              miniSidebarPointRow.style.bottom = 'unset';
              miniSidebarPointRow.style.top = '0.5vw';
              miniSidebarPointRow.style.left = '0.5vw';
              miniSidebarPointRow.style.zIndex = '16';
              miniSidebarPointRow.style.opacity = '1.0';
              miniSidebarPointRow.style.display = 'flex';
              miniSidebarPointRow.style.flexDirection = 'row';
              miniSidebarPointRow.style.height = "0.7vw";
              miniSidebarPointRow.style.width = '5vw';
              miniSidebarPointRow.style.cursor = 'auto';
              miniSidebarPointRow.style.marginTop = '0.7vw';
              miniSidebarPointRow.style.opacity = "1.0";
              // change ID of the p tag and img tag inside of miniPointRow
              let miniSidebarPointText = miniSidebarPointRow.children[0];
              miniSidebarPointText.style.fontSize = '0.8vw';
              miniSidebarPointText.style.marginRight = "0.2vw";
              let miniSidebarPointImg = miniSidebarPointRow.children[1];
              miniSidebarPointImg.style.width = '1vw';
              miniSidebarPointImg.style.height = '1vw';
              sidebarPointDiv.appendChild(miniSidebarPointRow);
              pointRow.style.opacity = "100%";
              pointRow.addEventListener('click', () => {
                toggleSidebar();
              });
              setTimeout(() => {
                inventory.remove();
                let adjustmentsPointText = document.getElementById("adjustment-points");
                adjustmentsPointText.textContent = `${scrabblePointsTotal}`;
              }, 500);
            }, 1000);
          }, variableTimeout);
        }, 1000);
      })
      .catch(error => {
        console.log('error from relevancy multiplier')
        // removeScrabbleTypewriter("... buuuut no bonus points because your guess wasn't relevant to the site.", scrabbleDescriptionText);
        variableTimeout = 7200;
        setTimeout(() => {
          // fade out and remove point celeb elements
          iframeScrabbleBlackout.style.opacity = "0%";
    
          setTimeout(() => {
            iframeScrabbleBlackout.remove();
            inventory.style.opacity = "0%";
    
            // consider making these CSS properties a class of div that just gets added later .sidebar-point-row
            pointRow.style.position = 'fixed';
            pointRow.style.right = '5%';
            pointRow.style.bottom = '10%';
            pointRow.style.backgroundColor = '#ffffff';
            pointRow.style.zIndex = "14";
            pointRow.style.borderRadius = '10px';
            pointRow.style.padding = '5%';
            pointRow.style.cursor = 'pointer';
            pointRow.style.border = '0.4vw solid #F4B831';
            pointRow.style.width = "12vw";
            pointRow.style.height = "7vw";
            pointRow.style.opacity = "0%";
            pointRow.style.padding = "0";
            pointText.style.color = "black";
            pointText.style.fontSize = "2vw";
            pointText.style.marginTop = "0";
            pointText.style.marginBottom = "0";
            pointText.style.marginRight = "0.4vw";
            pointText.classList.add("videogame");
            pointImage.style.width = "2.9vw";
            pointImage.style.transform = "translateY(-8%)";
    
            document.body.appendChild(pointRow);
            const miniSidebarPointRow = pointRow.cloneNode(true);
            miniSidebarPointRow.style.position = "absolute";
            miniSidebarPointRow.style.backgroundColor = 'transparent';
            miniSidebarPointRow.style.border = 'none';
            miniSidebarPointRow.style.right = 'unset';
            miniSidebarPointRow.style.bottom = 'unset';
            miniSidebarPointRow.style.top = '0.5vw';
            miniSidebarPointRow.style.left = '0.5vw';
            miniSidebarPointRow.style.zIndex = '16';
            miniSidebarPointRow.style.opacity = '1.0';
            miniSidebarPointRow.style.display = 'flex';
            miniSidebarPointRow.style.flexDirection = 'row';
            miniSidebarPointRow.style.height = "0.7vw";
            miniSidebarPointRow.style.width = '5vw';
            miniSidebarPointRow.style.cursor = 'auto';
            miniSidebarPointRow.style.marginTop = '0.7vw';
            miniSidebarPointRow.style.opacity = "1.0";
            // change ID of the p tag and img tag inside of miniPointRow
            let miniSidebarPointText = miniSidebarPointRow.children[0];
            miniSidebarPointText.style.fontSize = '0.8vw';
            miniSidebarPointText.style.marginRight = "0.2vw";
            let miniSidebarPointImg = miniSidebarPointRow.children[1];
            miniSidebarPointImg.style.width = '1vw';
            miniSidebarPointImg.style.height = '1vw';
            sidebarPointDiv.appendChild(miniSidebarPointRow);
            pointRow.style.opacity = "100%";
            pointRow.addEventListener('click', () => {
              toggleSidebar();
            });
            setTimeout(() => {
              inventory.remove();
              let adjustmentsPointText = document.getElementById("adjustment-points");
              adjustmentsPointText.textContent = `${scrabblePointsTotal}`;
            }, 500);
          }, 1000);
        }, variableTimeout);
      })

      scrabblePointsTotal = calculatePoints(sanitizedWord) * 100;
      console.log(`Total Points: ${scrabblePointsTotal}`);

      iframeScrabbleBlackout = document.createElement("div");
      iframeScrabbleBlackout.style.transition = "opacity 0.5s ease";
      iframeScrabbleBlackout.style.position = "fixed";
      iframeScrabbleBlackout.style.top = "0";
      iframeScrabbleBlackout.style.left = "0";
      iframeScrabbleBlackout.style.width = "100%";
      iframeScrabbleBlackout.style.height = "100%";
      document.body.appendChild(iframeScrabbleBlackout);
      iframeScrabbleBlackout.style.opacity = "100%";
      iframeScrabbleBlackout.style.backgroundColor = "rgba(0,0,0, 0.8)";
      iframeScrabbleBlackout.style.zIndex = "13";
      iframeScrabbleBlackout.style.display = "flex";
      iframeScrabbleBlackout.style.flexDirection = "column";
      iframeScrabbleBlackout.style.alignItems = "center";
      iframeScrabbleBlackout.style.justifyContent = "center";

      // point counter has two elements it contains, p & div elements
      pointCounter = document.createElement("div");
      pointCounter.style.display = 'flex';
      pointCounter.style.flexDirection = 'column';
      pointCounter.style.justifyContent = 'center';
      pointCounter.style.alignItems = 'center';
      pointCounter.style.width = '80%';
      // descriptor text
      scrabbleDescriptionText = document.createElement("p");
      scrabbleDescriptionText.style.color = 'white';
      scrabbleDescriptionText.style.fontSize = '1.2vw';
      scrabbleDescriptionText.classList.add("videogame");
      scrabbleDescriptionText.textContent = ""
      // point row & its two children, p & img elements
      pointRow = document.createElement("div");
      pointRow.style.display = 'flex';
      pointRow.style.flexDirection = 'row';
      pointRow.style.justifyContent = 'center';
      pointRow.style.alignItems = 'center';
      pointRow.style.width = '50%';
      pointRow.style.transition = 'opacity 0.8s ease';
      pointText = document.createElement("p");
      pointText.style.color = 'white';
      pointText.style.fontSize = '4.2vw';
      pointText.style.marginRight = '3%';
      pointText.style.marginTop = '4%';
      pointText.style.transition = 'color 0.3s ease';
      pointText.classList.add("videogame");
      pointText.textContent = "0";
      pointImage = document.createElement("img");
      pointImage.style.width = '10%';
      pointImage.style.transform = 'translateY(-40%)';
      pointImage.src = "./img/hidden_elements/point_icon.png";
      // add elements to pointRow
      pointRow.appendChild(pointText);
      pointRow.appendChild(pointImage);
      // add description and point row to pointCounter
      pointCounter.appendChild(scrabbleDescriptionText);
      pointCounter.appendChild(pointRow);
      // add pointCounter to iframeScrabbleBlackout
      iframeScrabbleBlackout.appendChild(pointCounter);
      removeScrabbleTypewriter("Congratulations! You earned some points with Playtest!", scrabbleDescriptionText);
      countUpPoints(pointText, scrabblePointsTotal);
    } else {
      console.log("not valid word");
      woodAlertText.style.color = "red";
      woodAlertText.textContent = "Not a valid word! Re-submit";
      // I want to change the button cursor back to clickable and for the button background color to change back to normal
      submitButton.style.backgroundColor = "#141134";
      submitButton.style.cursor = "pointer";
      submitButton.disabled = false;
    }
  });
});

// fetch('http://localhost:8000/summarize_webpage', {
//     method: 'POST',
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*',
//         'Access-Control-Allow-Credentials': 'true',
//     },
//     body: JSON.stringify({ "url": "https://www.etsy.com/market/credit_card_skin_charizard" })
// })
//    .then(response => response.json())
//    .then(response => console.log(JSON.stringify(response)))
