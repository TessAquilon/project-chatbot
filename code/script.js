// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const actionBtn = document.getElementById("action-btn");
const textInput = document.getElementById("text-input");

const options = document.getElementById("options");
const order = document.getElementById("order");
const delivery = document.getElementById("delivery");
const payment = document.getElementById("payment");
const returns = document.getElementById("returns");
const other = document.getElementById("other");

const orderOptions = document.getElementById("order-options");
const deliveryOptions = document.getElementById("delivery-options");
const paymentOptions = document.getElementById("payment-options");
const returnsOptions = document.getElementById("returns-options");
const otherOptions = document.getElementById("other-options");

const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");


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
  // Handle state transitions based on currentState and lastClickedButton
  if (currentState === "greetClient") {
    greetClient();
    currentState = "showOptions";
  } else if (currentState === "showOptions") {
    switch (lastClickedButton) {
      case "order":
        orderOption();
        break;
      case "delivery":
        deliveryOption();
        break;
      case "payment":
        paymentOption();
        break;
      case "returns":
        returnsOption();
        break;
      case "other":
        otherOption();
        break;
      default:
        console.log('Unknown button');
        return;
    }
    currentState = "handleOptionChoice";
  } else if (currentState === "handleOptionChoice") {
    if (lastClickedButton === "option1") {
      option1Solution();
      currentState = "endOfConversation";
    } else {
      console.log('Unknown button');
    }
  } else if (currentState === "endOfConversation") {
    endOfConversation();
    console.log('End of conversation');
  }
  else {
    console.log('Unknown currentState');
  }
};


// Attach event listener to the buttons (switch statement)

const handleClick = (buttonName) => {
  switch(buttonName) {
    case 'actionBtn':
    case 'order':
    case 'delivery':
    case 'payment':
    case 'returns':
    case 'other':
    case 'option1':
    case 'option2':
      lastClickedButton = buttonName;
      handleAction();
      break;
    default:
      console.log('Unknown button');
  }
}

// Attach event listeners to the buttons
actionBtn.addEventListener("click", () => handleClick('actionBtn'));
order.addEventListener("click", () => handleClick('order'));
delivery.addEventListener("click", () => handleClick('delivery'));
payment.addEventListener("click", () => handleClick('payment'));
other.addEventListener("click", () => handleClick('other'));

option1.addEventListener("click", () => handleClick('option1'));


// Greet Client
const greetClient = () => {
  // hide button
  actionBtn.setAttribute("hidden", true);
  showMessage("Hi, I'm your customer support bot 👋 How may I help you today?", 'bot');
  // show options
  options.removeAttribute("hidden");
}

// Order Option
const orderOption = () => {
  // hide options
  options.setAttribute("hidden", true);
  showMessage("I understand. How can I help you with your order?", 'bot');
  // show order options
  orderOptions.removeAttribute("hidden");
}

// Delivery Option
const deliveryOption = () => {
  // hide options
  options.setAttribute("hidden", true);
  showMessage("I understand. How can I help you with your delivery?", 'bot');
  // show order options
  deliveryOptions.removeAttribute("hidden");
}

// Payment Option
const paymentOption = () => {
  // hide options
  options.setAttribute("hidden", true);
  showMessage("I understand. How can I help you with your payment?", 'bot');
  // show order options
  paymentOptions.removeAttribute("hidden");
}

// Returns Option
const returnsOption = () => {
  // hide options
  options.setAttribute("hidden", true);
  showMessage("I understand. How can I help you with your return?", 'bot');
  // show order options
  returnsOptions.removeAttribute("hidden");
}

// Other Option
const otherOption = () => {
  // hide options
  options.setAttribute("hidden", true);
  showMessage("I understand. How can I help you?", 'bot');
  // show order options
  otherOptions.removeAttribute("hidden");
}

// Problem 1
const option1Solution = () => {
  // hide options
  orderOptions.setAttribute("hidden", true);
  showMessage("I understand. You will get a refund for the product(s) that sold out. We will get in touch with you shortly.", 'bot');
}

// End of Conversation
const endOfConversation = () => {
  showMessage("Thank you for getting in touch with me today! If you have any more questions, please don't hesitate to reach out to us via our phone line that is open 24/7, or via email info@customerchatbot.com ", 'bot');
}
