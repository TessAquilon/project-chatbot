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


const problem1 = document.getElementById("problem1");
const problem2 = document.getElementById("problem2");
const problem3 = document.getElementById("problem3");
const problem4 = document.getElementById("problem4");
const problem5 = document.getElementById("problem5");
const problem6 = document.getElementById("problem6");
const problem7 = document.getElementById("problem7");
const problem8 = document.getElementById("problem8");


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
    currentState = "chooseOption";
  } else if (currentState === "chooseOption") {
    if (lastClickedButton === "order") {
      orderOption();
      currentState = "botReply";
    } else if (lastClickedButton === "delivery") {
      deliveryOption();
      currentState = "botReply";
    } else if (lastClickedButton === "payment") {
      paymentOption();
      currentState = "botReply";
    } else if (lastClickedButton === "returns") {
      returnsOption();
      currentState = "botReply";
    } else if (lastClickedButton === "other") {
      otherOption();
      currentState = "botReply";
    } else {
      console.log('Unknown button');
    }}
  else if (currentState === "botReply") {
    if (lastClickedButton === "problem1") {
      problem1Option();
      currentState = "endOfConversation";
    } else {
      console.log('Unknown button');
    }
  
  
  }
}
// Attach event listener to the buttons (switch statement)

const handleClick = (buttonName) => {
  switch(buttonName) {
    case 'actionBtn':
    case 'order':
    case 'delivery':
    case 'payment':
    case 'returns':
    case 'other':
    case 'problem1':
    case 'problem2':
    case 'problem3':
    case 'problem4':
    case 'problem5':
    case 'problem6':
    case 'problem7':
    case 'problem8':
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

problem1.addEventListener("click", () => handleClick('problem1'));


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
const problem1Option = () => {
  // hide options
  orderOptions.setAttribute("hidden", true);
  showMessage("I understand. You will get a refund for the product(s) that sold out. We will get in touch with you shortly.", 'bot');
}

// End of Conversation
const endOfConversation = () => {
  showMessage("If you have any more questions, please don't hesitate to reach out to our customer care team via email. Or for more pressing matters, please get in touch via our phone line, that is open 24/7. Thank you for chatting with me today!", 'bot');
}
