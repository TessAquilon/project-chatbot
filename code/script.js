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
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");


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
let currentState = "greetAndShowOptions";

const handleAction = () => {
  // Handle state transitions based on currentState and lastClickedButton
  if (currentState === "greetAndShowOptions") {
    greetClient();
    currentState = "showSubOptions";
  } else if (currentState === "showSubOptions") {
    switch (lastClickedButton) {
      case "order":
        showOrderOptions();
        currentState = "handleSubOptionChoice";
        break;
      case "delivery":
        showDeliveryOptions();
        currentState = "handleSubOptionChoice";
        break;
      case "payment":
        showPaymentOptions();
        currentState = "handleSubOptionChoice";
        break;
      case "returns":
        showReturnsOptions();
        currentState = "handleSubOptionChoice";
        break;
      case "other":
        showOtherOptions();
        currentState = "handleSubOptionChoice";
        break;
      default:
        console.log('Unknown button');
        return;
    }
  } else if (currentState === "handleSubOptionChoice") {
    switch (lastClickedButton) {
      case "option1":
        option1Solution();
        currentState = "endOfConversation";
        console.log('Option 1 clicked. Current state:', currentState);
        break;
      case "option2":
        option2Solution();
        currentState = "endOfConversation";
        break;
      case "option3":
        option3Solution();
        currentState = "endOfConversation";
        break;
      case "option4":
        option4Solution();
        currentState = "endOfConversation";
        break;
      default:
        console.log('Unknown button');
        return;
    }
  } else if (currentState === "endOfConversation") {
    endConversation();
    console.log('End of conversation');
  } else {
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
    case 'option3':
    case 'option4':
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
option2.addEventListener("click", () => handleClick('option2'));
option3.addEventListener("click", () => handleClick('option3'));
option4.addEventListener("click", () => handleClick('option4'));


// Greet Client
const greetClient = () => {
  // hide button
  actionBtn.setAttribute("hidden", true);
  showMessage("Hi, I'm your customer support bot 👋 How may I help you today?", 'bot');
  // show options
  options.removeAttribute("hidden");
}

// Order Option
const showOrderOptions = () => {
  // hide options
  options.setAttribute("hidden", true);
  showMessage("I understand. How can I help you with your order?", 'bot');
  // show order options
  orderOptions.removeAttribute("hidden");
}

// Delivery Option
const showDeliveryOptions = () => {
  // hide options
  options.setAttribute("hidden", true);
  showMessage("I understand. How can I help you with your delivery?", 'bot');
  // show order options
  deliveryOptions.removeAttribute("hidden");
}

// Payment Option
const showPaymentOptions = () => {
  // hide options
  options.setAttribute("hidden", true);
  showMessage("I understand. How can I help you with your payment?", 'bot');
  // show order options
  paymentOptions.removeAttribute("hidden");
}

// Returns Option
const showReturnsOptions = () => {
  // hide options
  options.setAttribute("hidden", true);
  showMessage("I understand. How can I help you with your return?", 'bot');
  // show order options
  returnsOptions.removeAttribute("hidden");
}

// Other Option
const showOtherOptions = () => {
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
  showMessage("We are so sorry to hear that. You will get a refund for the product(s) that were sold out while your order was being processed. The refund will be transferred to your bank account within 2-3 working days.", 'bot');
}

// End of Conversation
const endConversation = () => {
  console.log('End of conversation');
  showMessage("Thank you so much for getting in touch! Please don't hesitate to reach out to us via our phone line that is open 24/7, or via email info@customerchatbot.com if you have any more questions. ", 'bot');
}
