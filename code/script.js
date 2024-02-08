// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const actionBtn = document.getElementById("action-btn");
const textInput = document.getElementById("text-input")


// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
      chat.innerHTML += `
        <section class="user-msg">
          <div class="bubble user-bubble">
            <p>${message}</p>
          </div>
        </section>
      `;
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
  }

  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
}

// Initialize state
let currentState = "greetClient";

// Function to handle button click and state transitions
const handleAction = () => {
  if (currentState === "greetClient") {
    greetClient();
    currentState = "petBob";
    // change button
    actionBtn.textContent = "Pet Bob";
  } else if (currentState === "petBob") {
    petBob();
    actionBtn.textContent = "Pet head";
    currentState = "petHeadOrBellyRubs";
  } else if (currentState === "petHeadOrBellyRubs") {
    // Handle transition based on which button was clicked
    if (lastClickedButton === "actionBtn") {
      petHead();
      actionBtn.textContent = "Take pic";
      currentState = "takePic";
    } else if (lastClickedButton === "altActionBtn") {
      bellyRubs();
      actionBtn.textContent = "Try again";
      currentState = "tryAgain";
    }
  } else if (currentState === "takePic") {
    takePic();
    currentState = "tryAgain";
    actionBtn.textContent = "Try again";
  } else if (currentState === "tryAgain") {
    tryAgain();
  }
}

// Attach event listener to the buttons
actionBtn.addEventListener("click", () => {
  lastClickedButton = "actionBtn";
  handleAction();});

// Greet Client
const greetClient = () => {
  // hide button
  actionBtn.setAttribute("hidden", true);
  showMessage("Hi, I'm your customer support bot 👋 How may I help you today?", 'bot');
  // show list of options to user

}

