let scav_item_checks = {
  "purple": false,
  "round": false,
  "curly": false,
  "sound": false
}
let clicked_elements = {
  "purple": "",
  "round": "",
  "curly": "",
  "sound": ""
}
let timer = 0.0;
let timerInterval;
document.addEventListener("click", (event) => {
  const clickedElement = event.target;
  console.log(clickedElement);
});
let won = false;
let sidebar_open = false;
let iframeBlackout;
let descriptionText;
let iframeDocument;
let pointRow;
let pointText;

const copy_button = document.getElementById('script-copier');
const hero_container = document.getElementById('hero');
copy_button.addEventListener('click', () => {
  navigator.clipboard.writeText('<script src="https://theplaytest.com/art.js"></script>');
  const copied_confirmation = document.createElement('img');
  copied_confirmation.id = 'copied-confirmation';
  copied_confirmation.src = './img/copied_success.png';
  hero_container.replaceChild(copied_confirmation, copy_button);
  setTimeout(() => {
    hero_container.replaceChild(copy_button, copied_confirmation);
  }, 2000);
});

const nathan_button = document.getElementById('nathan-button');
const step_section = document.getElementById('steps-section');
const snowflake_1 = document.getElementById('snowflake-1');
const snowflake_2 = document.getElementById('snowflake-2');
const snowflake_3 = document.getElementById('snowflake-3');
const snowflake_4 = document.getElementById('snowflake-4');
const skater = document.getElementById('skater');
let nathan_count = 0;

nathan_button.addEventListener('click', () => {
  if (nathan_count == 0) {
    nathan_button.textContent = "Loading...";
    nathan_button.disabled = true;
    nathan_button.style.cursor = "not-allowed";
    snowflake_1.style.left = "7vw"
    snowflake_1.style.bottom = "1vh";
    snowflake_1.style.width = "8%";
    setTimeout(() => {
      snowflake_2.style.left = "9vw"
      snowflake_2.style.bottom = "2vh";
      snowflake_2.style.width = "10%";
      snowflake_2.style.transform = 'rotate(24deg)';
    }, 100);
    setTimeout(() => {
      snowflake_3.style.left = "11.4vw"
      snowflake_3.style.bottom = "1.1vh";
      snowflake_3.style.width = "12%";
      snowflake_3.style.transform = 'rotate(11deg)';
    }, 200);
    setTimeout(() => {
      snowflake_4.style.left = "14vw"
      snowflake_4.style.bottom = "2vh";
      snowflake_4.style.width = "14%";
      snowflake_4.style.transform = 'rotate(48deg)';
    }, 300);
    setTimeout(() => {
      skater.classList.add('animate');
      skater.style.width = "120%";
    }, 500);
    setTimeout(() => {
      nathan_button.disabled = false;
      nathan_button.style.cursor = "pointer";
      nathan_button.textContent = "🫨 HOW??";
    }, 1000);
  } else if (nathan_count >= 1) {
    step_section.scrollIntoView({ behavior: 'smooth' });
  }
  nathan_count++;
});

const step_button = document.getElementById('stepwise');
const step_content = document.getElementById('step-description-text');
const step_number = document.getElementById('step-number');
const step_image = document.getElementById('step-image');
const pricing_section = document.getElementById('pricing-section');
let count = 1;

function handleStepButtonClick() {
  count++;
  console.log(count);
  step_image.src = `./img/step_${count}.png`;
  step_number.src = `./img/${count}.png`;
  if (count == 2) {
    step_content.textContent = "We use those attributes and free space to generate beautiful ads that integrate right into your content.";
    step_button.textContent = "AND THEN??";
  } else if (count >= 3) {
    step_content.textContent = "You get non-disruptive ads, brands get eyeballs, & Playtest sits in the middle taking a small cut. Everybody wins.";
    step_button.removeEventListener('click', handleStepButtonClick);
    step_button.addEventListener('click', scrollToPricingSection);
    step_button.textContent = "SIGN ME UP!!";
  }
}

function scrollToPricingSection() {
  pricing_section.scrollIntoView({ behavior: 'smooth' });
}

step_button.addEventListener('click', handleStepButtonClick);

const signup_button = document.getElementById('signup-button');
const email_input = document.getElementById('email-input');
const signup_header = document.getElementById('signup-box-header');
let email;
email_input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === 'Return') {
    signup_button.click();
  }
});
signup_button.addEventListener('click', () => {
  signup_button.disabled = true;
  signup_button.style.cursor = "not-allowed";
  signup_button.textContent = "Signing up...";
  email_input.disabled = true;
  email_input.style.cursor = "not-allowed";
  email = email_input.value;
  var data = {
    email: email
  };
  var url = "https://script.google.com/macros/s/AKfycbxaVk-jknpkkXICyBw3TAK3P_vBAl4XQjBG5MQqZOkl4CYAu9BNkWYoe90xV7c8Hh8wMQ/exec";

  fetch(url, {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(response => response.text())
  .then(data => {
    if (data == "Data added successfully") {
      signup_header.textContent = `Thanks for signing up! We'll email ${email} when you get off the waitlist.`;
      email_input.remove();
      signup_button.remove();
    }
  })
  .catch(error => {
    console.error("Error:", error);
  });
})

// Typewriter effect function for text
function removeTypewriter(text, textElement, i = 0) {
  const currentText = textElement.textContent;
  const newText = text;

  if (currentText.length > 0) {
    // Remove the last character from the existing text
    textElement.textContent = currentText.substring(0, currentText.length - 1);
    setTimeout(() => removeTypewriter(text, textElement, i), 20);
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
const hiddenTexts = {
  "hero-header": "<span class='red'>G</span><span class='orange'>a</span><span class='green'>m</span><span class='red'>i</span><span class='orange'>f</span><span class='green'>y</span> your content...",
  "hero-footer": "... in just a single line of code",
  "drake-caption": "Keep visitors coming back...<br><br>...by making your site an <span class='red'>a</span><span class='orange'>r</span><span class='green'>c</span><span class='red'>a</span><span class='orange'>d</span><span class='green'>e</span>.",
  "surprise": "Woah! How'd you do that??<br><br>Simple. 3 Steps:",
  "step-description-text": "We analyze your website’s content, tag each element, & <s>find the best spots to place newly generated brand graphics</s> build a contextual understanding of your site.",
  "cost-question": "Two pricing tiers:",
  "signup-caption": "OR! Want Playtest for <i>free</i>?<br>Be the first to use our ad-supported tier.",
  "signup-cta": "SIGN UP NOW:",
  "signup-box-header": "We'll email you when live."
}
// When Ctrl + Shift + H pressed, reveal Game Gen
const targetKeys = {
  ctrlKey: true,  // Control key
  shiftKey: true, // Shift key
  key: 'H'        // 'H' key
};
const hidden_div = document.getElementById("blackout");
const secret_audio = new Audio('./secret.mp3');
const testText = document.getElementById("hero-header");
const allP = document.getElementsByTagName("p");
const blackoutChest = document.createElement("img");
blackoutChest.src = "./the_one.gif";
blackoutChest.id = "blackout-chest";
blackoutChest.className = "blackout-item";
const scriptTag = document.getElementById("script-copier");
const drakeImage = document.getElementById("drake");
const stepNumber = document.getElementById("step-number");
const stepImage = document.getElementById("step-image");
const stepButton = document.getElementById("stepwise");
const pricingTiers = document.getElementById("faux-pricing");
const lolText = document.getElementById("lol");

const nathanSection = document.getElementById("nathan-section");
const divToReplace = document.getElementById("nathan-article-container");
const demoContainer = document.createElement("div");
demoContainer.id = "demo-container";
const urlBar = document.createElement("div");
urlBar.id = "url-bar";
const urlControls = document.createElement("img");
urlControls.src = "./img/hidden_elements/url_controls.png";
urlControls.id = "url-controls";
const urlField = document.createElement("img");
urlField.id = "url-field";
urlField.src = "./img/hidden_elements/url_bar.png";
urlBar.appendChild(urlControls);
urlBar.appendChild(urlField);

// Remember to remove all iframe event listeners for click & mouseover, and also stop all link elements
const iframe = document.createElement("iframe");
iframe.src = "./beast_store.html";
iframe.id = "iframe";
iframe.addEventListener("load", () => {
  iframeDocument = iframe.contentDocument;
  iframeDocument.addEventListener("click", (event) => {
    const clickedElement = event.target;
    console.log(clickedElement);
    if (Object.values(scav_item_checks).every(value => value === true) && won == false) {
      victorySequence();
    }
  });

  const allLinks = iframeDocument.querySelectorAll("a");
  allLinks.forEach((link) => {
    link.removeAttribute("href");
    if (link.classList.contains("purple")) {
      link.addEventListener("click", () => {
        let item = document.getElementById("scav-item-1");
        item.style.opacity = "100%";
        let check = document.getElementById("scav-check-1");
        check.src = "./img/hidden_elements/checked.png";
        console.log("purple clicked");
        scav_item_checks.purple = true;
        const highlight = document.createElement("img");
        highlight.style.transition = 'opacity 0.5s ease';
        highlight.src = `./img/Highlights/purple-1.png`;
        highlight.id = `purple-1-highlight`;
        clicked_elements.purple = "purple-1";
        highlight.style.position = "absolute";
        highlight.style.zIndex = "12";
        highlight.style.top = "5%";
        iframeDocument.getElementById("purple-1").parentElement.appendChild(highlight);
      });
    } else {
      link.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent the default link behavior
      });
    }
    link.style.cursor = "auto";
  });
  let classes = ["purple", "round", "curly", "sound"];
  for (let i = 0; i < classes.length; i++) {
    iframeDocument.querySelectorAll(`.${classes[i]}`).forEach((element) => {
      element.addEventListener("click", () => {
        let item = document.getElementById(`scav-item-${i+1}`);
        item.style.opacity = "100%";
        let check = document.getElementById(`scav-check-${i+1}`);
        check.src = "./img/hidden_elements/checked.png";
        console.log("element click logged")
        
        if (scav_item_checks[classes[i]] == false) {
          scav_item_checks[classes[i]] = true;
          const highlight = document.createElement("img");
          highlight.src = `./img/Highlights/${element.id}.png`;
          highlight.id = `${element.id}-highlight`;
          highlight.style.transition = 'opacity 0.5s ease';
          clicked_elements[classes[i]] = element.id;
          highlight.style.position = "absolute";
          highlight.style.zIndex = "12";
          if (element.id == "curly-1") {
            highlight.style.bottom = "65%";
            highlight.style.left = "37.1%";
            highlight.style.width = "33%";
          } else if (element.id == "curly-2") {
            highlight.style.top = "1%";
            highlight.style.left = "41%";
            highlight.style.width = "33%";
          } else if (element.id == "round-1") {
            highlight.style.width = "43%";
            highlight.style.left = "54%";
            highlight.style.top = "4%";
          } else if (element.id == "round-2") {
            highlight.style.width = "73%";
            highlight.style.left = "16%";
            highlight.style.top = "24%";
          } else if (element.id == "round-3") {
            highlight.style.width = "43%";
            highlight.style.left = "29%";
            highlight.style.top = "-7%";
          } else if (element.id == "purple-2") {
            // adjust
            highlight.style.width = "43%";
            highlight.style.left = "54%";
            highlight.style.top = "4%";
          } else if (element.classList.contains("sound")) {
            // adjust
            highlight.style.width = "1.5%";
            highlight.style.left = "9.7%";
            highlight.style.top = "-4%";
            highlight.src = `./img/Highlights/sound.png`;
            highlight.id = `sound-highlight`;
          }
          if (element.id == "round-3" || element.id == "purple-2") {
            element.parentElement.appendChild(highlight);
          } else if (element.classList.contains("sound")) {
            const divToAddTo = iframeDocument.getElementById("sound-4");
            divToAddTo.appendChild(highlight);
          } else {
            element.appendChild(highlight);
          }
        }
      });
    });
  }
});
demoContainer.appendChild(urlBar);
demoContainer.appendChild(iframe);
// contains pointer & furled-up scroll
const minigameContainer = document.createElement("div");
minigameContainer.id = "minigame-container";
const pointer = document.createElement("img");
pointer.src = "./img/hidden_elements/scroll_pointer.png";
pointer.id = "pointer";
// make pointer position change up and down

function handlePointerClick() {
  nathanSection.scrollIntoView({ behavior: 'smooth' });
  const timedText = document.createElement("p");
  
  timedText.id = "timed-text";
  timedText.classList.add("videogame");
  timedText.textContent = `You've spent ${timer.toFixed(1)} seconds longer on mrbeast.store because of Playtest.`;
  nathanSection.insertBefore(timedText, demoContainer);
  function updateTimer() {
    timer += 0.1; // Increment time by 0.1 seconds
    timedText.textContent = `You've spent ${timer.toFixed(1)} seconds longer on mrbeast.store because of Playtest.`;
  }
  timerInterval = setInterval(updateTimer, 100);
  scrollTopHalf.removeEventListener("click", handlePointerClick);
  scrollBottomHalf.removeEventListener("click", handlePointerClick);

  pointer.style.opacity = "0%";
  setTimeout(() => {
    pointer.remove();
    // then move topHalf of scroll up while simultaneously increasing the miniGameContainer's height
    // scrollTopHalf.style.transform = "translateY(-100%)";
    scrollContents.style.height = "15vw";
    
    const directions = document.createElement("p");
    directions.textContent = "";
    directions.id = "scav-instructions";
    directions.classList.add("videogame");
    minigameContainer.appendChild(directions);
    setTimeout(async () => {
      removeTypewriter("Hunt hints...<br>win prizes...", directions);
      const scav1 = document.createElement("div");
      const scav2 = document.createElement("div");
      const scav3 = document.createElement("div");
      const scav4 = document.createElement("div");
      const scav_items = [scav1, scav2, scav3, scav4];
      const scav_texts = [
        'Something purple...',
        'Something round...',
        'Something curly...',
        'A symbol of sound.'
      ]
      const timer = ms => new Promise(res => setTimeout(res, ms))
      for (let i = 0; i < scav_items.length; i++) {
        scav_items[i].id = `scav-item-${i+1}`;
        const scav_text = document.createElement("p");
        scav_text.id = `scav-text-${i+1}`;
        scav_text.textContent = scav_texts[i];
        const scav_check = document.createElement("img");
        scav_check.src = "./img/hidden_elements/unchecked.png";
        scav_check.classList.add("scav-checkbox");
        scav_check.id = `scav-check-${i+1}`;
        scav_items[i].classList.add("scav-hunt-item");
        scav_text.classList.add("scav-hunt-text");
        scav_text.classList.add("videogame");
        scav_items[i].appendChild(scav_text);
        scav_items[i].appendChild(scav_check);
        scrollContents.appendChild(scav_items[i])
        await timer(200);
        scav_items[i].style.opacity = "50%";
      }
    }, 700);
  }, 500);
  // When fully unfurled, typewriter animate the directions in, then remove typewriter it after a bit
  
  // make the four elements for the four scav hunt tasks opacity ease in to opacity 50%
}

const scrollContents = document.createElement("div");
scrollContents.id = "scroll-contents";
const scrollTopHalf = document.createElement("img");
scrollTopHalf.src = "./img/hidden_elements/scroll_top.png";
scrollTopHalf.id = "scroll-top-half";
const scrollBottomHalf = document.createElement("img");
scrollBottomHalf.src = "./img/hidden_elements/scroll_bottom.png";
scrollBottomHalf.id = "scroll-bottom-half";
scrollTopHalf.addEventListener("click", handlePointerClick);
scrollBottomHalf.addEventListener("click", handlePointerClick);
scrollContents.appendChild(scrollTopHalf);
minigameContainer.appendChild(scrollBottomHalf);
minigameContainer.appendChild(scrollContents);
minigameContainer.appendChild(pointer);
demoContainer.appendChild(minigameContainer);

function handleHiddenSteps() {
  count++;
  console.log(count);
  step_image.src = `./img/hidden_elements/hidden_step_${count}.png`;
  step_number.src = `./img/${count}.png`;
  if (count == 2) {
    step_content.textContent = "We use those attributes to make games your users keep coming back to play, integrated right into your content.";
    step_button.textContent = "AND THEN??";
  } else if (count >= 3) {
    step_content.textContent = "You get returning user traffic, your users get fun ways to engage with your content, and Playtest gets revenue to keep making more cool games. Everybody wins.";
    step_button.removeEventListener('click', handleHiddenSteps);
    step_button.addEventListener('click', scrollToPricingSection);
    step_button.textContent = "SIGN ME UP!!";
  }
}

// Blackout function
function blackout(e) {
  if ((e.ctrlKey === targetKeys.ctrlKey && e.shiftKey === targetKeys.shiftKey && e.key === targetKeys.key) || e.target.id === "hidden-link") {
    hidden_div.style.opacity = "100%";
    count = 1;
    for (let i = 0; i < allP.length; i++) {
      removeTypewriter(hiddenTexts[allP[i].id], allP[i]);
    }
    setTimeout(() => {
      secret_audio.play();
      secret_audio.volume = 0.09;
      hidden_div.appendChild(blackoutChest);
      scriptTag.src = "./img/hidden_elements/hidden_script.png";
      drakeImage.src = "./img/hidden_elements/hidden_drake.png";

      // Nathan section adjustments
      // nathanSection.style.flexDirection = "column";

      // step section adjustments
      stepNumber.src = "./img/1.png";
      stepImage.src = "./img/hidden_elements/hidden_step_1.png";
      step_button.removeEventListener('click', handleStepButtonClick);
      step_button.addEventListener('click', handleHiddenSteps);

      pricingTiers.src = "./img/hidden_elements/pricing.png";
      pricingTiers.style.width = "140%";
      lolText.remove();
      nathanSection.replaceChild(demoContainer, divToReplace);
    }, 300);
    setTimeout(() => {
      hidden_div.style.opacity = "0%";
    }, 3300);
    document.body.removeEventListener('keydown', blackout);
  }
}
document.body.addEventListener('keydown', blackout);
const hiddenButton = document.getElementById("hidden-link");
hiddenButton.addEventListener('click', blackout);

function countUpPoints(textElement) {
  // edit duration to change length of animation
  let duration = 3.6;
  // Calculate the points that we will count up to
  const basePoints = 1000; // Initial number of points when timer is 0.0
  const k = 0.1; // A constant controlling the rate of decrease in points
  const totalPoints = basePoints / (1 + k * timer);

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

function victorySequence() {
  won = true;
  console.log("victory sequence");
  clearInterval(timerInterval);
  const timedText = document.getElementById("timed-text");
  const words = timedText.textContent.split(" ");
  words[0] = "You";
  const modifiedText = words.join(" ");
  timedText.textContent = modifiedText;
  nathanSection.scrollIntoView({ behavior: 'smooth' });

  iframeBlackout = document.createElement("div");
  iframeBlackout.id = "iframe-blackout";
  iframeBlackout.classList.add("blackout");
  demoContainer.appendChild(iframeBlackout);
  iframeBlackout.style.opacity = "100%";

  // point counter has two elements it contains, p & div elements
  const pointCounter = document.createElement("div");
  pointCounter.id = "point-counter";
  // descriptor text
  descriptionText = document.createElement("p");
  descriptionText.id = "description-text";
  descriptionText.classList.add("videogame");
  descriptionText.textContent = ""
  // point row & its two children, p & img elements
  pointRow = document.createElement("div");
  pointRow.id = "point-row";
  pointText = document.createElement("p");
  pointText.id = "point-text";
  pointText.classList.add("videogame");
  pointText.textContent = "0";
  const pointImage = document.createElement("img");
  pointImage.id = "point-image";
  pointImage.src = "./img/hidden_elements/point_icon.png";
  // add elements to pointRow
  pointRow.appendChild(pointText);
  pointRow.appendChild(pointImage);
  // add description and point row to pointCounter
  pointCounter.appendChild(descriptionText);
  pointCounter.appendChild(pointRow);
  // add pointCounter to iframeBlackout
  iframeBlackout.appendChild(pointCounter);
  removeTypewriter("You earned some points! Keep playing to win prizes.", descriptionText);
  countUpPoints(pointText);
}

const sidebarPointDiv = document.createElement('div');

function concludePointsDisplay() {
  // consider creating the sidebar element with Auth0 sign-up prior to this section and have it already added to the demoContainer, and then
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.8 },
    zIndex: 14,
  });
  setTimeout(() => {
    removeTypewriter("", descriptionText);

    setTimeout(() => {
      // fade out and remove point celeb elements
      iframeBlackout.style.opacity = "0%";
      minigameContainer.style.opacity = "0%";
      Object.values(clicked_elements).forEach((value) => {
        let toFadeAndRemove = iframeDocument.getElementById(`${value}`);
        toFadeAndRemove.style.opacity = "0%";
        setTimeout(() => {
          toFadeAndRemove.remove();
        }, 800);
      });

      // once removed, add in new div to contain point indicator
      setTimeout(() => {
        minigameContainer.remove();
        iframeBlackout.remove();

        // consider making these CSS properties a class of div that just gets added later .sidebar-point-row
        pointRow.classList.add("sidebar-point-row");
        pointText.classList.add("sidebar-point-text");
        // ask chatgpt to adjust these later for you
        pointRow.style.right = "2vw"; // do these need to be % instead?
        pointRow.style.bottom = "1vw";
        pointRow.style.backgroundColor = "#ffffff";
        pointRow.style.borderRadius = "10px";
        pointRow.style.padding = "1vw";
        pointRow.style.width = "20%";

        demoContainer.appendChild(pointRow);
        demoContainer.appendChild(sidebarPointDiv);
        pointRow.addEventListener('click', () => {
          toggleSidebar();
        });
      }, 800);
    }, 500);
  }, 1000);

  // add a click listener to pointCounter div that calls toggleSidebar()
  // make pointCounter div have a sparkle animation overlaid on it to show clickability
  // remove sparkle on click if it is still there (removes on first click and keeps removed)
}

function toggleSidebar() {
  // if (sidebar_open == true) {
  //   close sidebar code
  // } else {
    // open sidebar code
  // }
}

// Select all anchor links with the class "smooth-scroll"
const smoothScrollLinks = document.querySelectorAll('.smooth-scroll');

// Add a click event listener to each smooth-scroll link
smoothScrollLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior

    // Get the target element based on the href attribute of the link
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    // Scroll smoothly to the target element
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});