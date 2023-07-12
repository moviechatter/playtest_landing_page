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