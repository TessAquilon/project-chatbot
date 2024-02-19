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
const option5 = document.getElementById("option5");
const option6 = document.getElementById("option6");
const option7 = document.getElementById("option7");
const option8 = document.getElementById("option8");
const option9 = document.getElementById("option9");
const option10 = document.getElementById("option10");
const option11 = document.getElementById("option11");
const option12 = document.getElementById("option12");
const option13 = document.getElementById("option13");
const option14 = document.getElementById("option14");
const option15 = document.getElementById("option15");
const option16 = document.getElementById("option16");
const option17 = document.getElementById("option17");
const option18 = document.getElementById("option18");
const option19 = document.getElementById("option19");
const option20 = document.getElementById("option20");


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
let lastClickedButton = '';

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
    case 'option5':
    case 'option6':
    case 'option7':
    case 'option8':
    case 'option9':
    case 'option10':
    case 'option11':
    case 'option12':
    case 'option13':
    case 'option14':
    case 'option15':
    case 'option16':
    case 'option17':
    case 'option18':
    case 'option19':
    case 'option20':
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
returns.addEventListener("click", () => handleClick('returns'));
payment.addEventListener("click", () => handleClick('payment'));
other.addEventListener("click", () => handleClick('other'));

option1.addEventListener("click", () => handleClick('option1'));
option2.addEventListener("click", () => handleClick('option2'));
option3.addEventListener("click", () => handleClick('option3'));
option4.addEventListener("click", () => handleClick('option4'));
option5.addEventListener("click", () => handleClick('option5'));
option6.addEventListener("click", () => handleClick('option6'));
option7.addEventListener("click", () => handleClick('option7'));
option8.addEventListener("click", () => handleClick('option8'));
option9.addEventListener("click", () => handleClick('option9'));
option10.addEventListener("click", () => handleClick('option10'));
option11.addEventListener("click", () => handleClick('option11'));
option12.addEventListener("click", () => handleClick('option12'));
option13.addEventListener("click", () => handleClick('option13'));
option14.addEventListener("click", () => handleClick('option14'));
option15.addEventListener("click", () => handleClick('option15'));
option16.addEventListener("click", () => handleClick('option16'));
option17.addEventListener("click", () => handleClick('option17'));
option18.addEventListener("click", () => handleClick('option18'));
option19.addEventListener("click", () => handleClick('option19'));
option20.addEventListener("click", () => handleClick('option20'));



// Greet Client
const greetClient = () => {
  // hide button
  actionBtn.setAttribute("hidden", true);
  showMessage("Hi, I'm your customer support bot 👋 How may I help you today?", 'bot');
  // show options after 1 second
  setTimeout(() => {
  options.removeAttribute("hidden")
  }, 1000);
}

// Show options

const showOptions = (optionType, optionsElement, messageUser, messageBot) => {
  // hide options
  options.setAttribute("hidden", true);
  // show chosen option as a message from the user in the chat
  showMessage(messageUser, 'user');
  showMessage(messageBot, 'bot');
  // show corresponding options after a certain delay
  setTimeout(() => {
    optionsElement.removeAttribute("hidden");
  }, 2000);
}


// Show solution

const showSolution = (optionType, optionsElement, messageUser, messageBot, endConversation, showTextInput) => {
  // hide options
  optionsElement.setAttribute("hidden", true);
  // show chosen option as a message from the user in the chat
  showMessage(messageUser, 'user');
  showMessage(messageBot, 'bot');
  if (endConversation) {
    setTimeout(() => {
      endOfConversation();
    }, 2000);
  }
  if (showTextInput) {
    setTimeout(() => {
      textInput.removeAttribute("hidden");
    }, 2000);
  }
}

// End of Conversation
const endOfConversation = () => {
  console.log('End of conversation');
  showMessage("Thank you so much for getting in touch! Please don't hesitate to reach out to us via our phone line that is open 24/7, or via email info@customerchatbot.com if you have any more questions. ", 'bot');
}

const handleAction = () => {
  // Handle state transitions based on currentState and lastClickedButton
  if (lastClickedButton === "actionBtn" && currentState === "greetAndShowOptions") {
    greetClient();
    currentState = "showSubOptions";
  } else if (currentState === "showSubOptions") {
    switch (lastClickedButton) {
      case "order":
        showOptions("order", orderOptions, "I need help with my order", "I understand. How can I help you with your order?");
        currentState = "handleSubOptionChoice";
        break;
      case "delivery":
        showOptions("delivery", deliveryOptions, "I need help with my delivery", "I understand. How can I help you with your delivery?");
        currentState = "handleSubOptionChoice";
        break;
      case "payment":
        showOptions("payment", paymentOptions, "I need help with my payment", "I understand. How can I help you with your payment?");
        currentState = "handleSubOptionChoice";
        break;
      case "returns":
        showOptions("returns", returnsOptions, "I need help with my return", "I understand. How can I help you with your return?");
        currentState = "handleSubOptionChoice";
        break;
      case "other":
        showOptions("other", otherOptions, "I need help with something else", "I understand. How can I help you?");
        currentState = "handleSubOptionChoice";
        break;
      default:
        console.log('Unknown button');
        return;
    }
  } else if (currentState === "handleSubOptionChoice") {
    switch (lastClickedButton) {
      case "option1":
        showSolution("option1", orderOptions, "Products sold out while my order was processed", "We are so sorry to hear that. You will get a refund for the products that were sold out while your order was being processed. It will be transferred to your bank account within 2-3 working days.", true, false );
        break;
      case "option2":
        showSolution("option2", orderOptions, "There was a problem processing my order", "We are so sorry to hear that there was an error while processing your order. We know how frustrating this can be. Please let me know your order number so we can check what happened with your order.", false, true)
        break;
      case "option3":
      showSolution("option3", orderOptions, "I haven't received my order confirmation", "We are so sorry about that. Please check your spam folder, and if the problem persists, please contact us directly via our phone line or our email.", true, false )
        break;
      case "option4":
        showSolution("option4", orderOptions, "Other", "We are so sorry to hear that there has been an issue with your order. Please contact us directly via our phone line or our email so we can help you with your issue.", true, false )
        break;
      case "option5":
        showSolution("option5", deliveryOptions, "I want to change my delivery details", "I understand. Please enter your email so our customer care team can get in touch with you: ", false, true)
        break;
      case "option6":
        showSolution("option6", deliveryOptions, "My delivery is delayed", "We are so sorry to hear that there has been a delay while delivering your product(s). We know how frustrating it can be to wait longer than expected for an order to arrive. Please enter your order number so we can check what happened to your delivery.", false, true)
        break;
      case "option7":
        showSolution("option7", deliveryOptions, "I haven't received my delivery", "We are so sorry to hear that you haven't received your delivery. Please enter your order number so we can check what happened to your delivery.", false, true)
        break;
      case "option8":
        showSolution("option8", deliveryOptions, "Other", "We are so sorry to hear that there has been an issue with your delivery. Please contact us directly via our phone line or our email so we can help you with your issue.", true, false )
        break;
      case "option9":
        showSolution("option9", paymentOptions, "My payment was declined while ordering", "We are so sorry to hear that your payment was declined while ordering. Please check your payment details and try again. If the problem persists, please contact us directly via our phone line or our email.", true, false )
        break;
      case "option10":
        showSolution("option10", paymentOptions, "Product(s) sold out after my payment was processed", "We are so sorry to hear that. You will get a refund for the products that were sold out after your payment was processed. It will be transferred to your bank account within 2-3 working days.", true, false )
        break;
      case "option11":
        showSolution("option11", paymentOptions, "I want to change my payment details", "I understand. Please enter your email so our customer care team can get in touch with you: ", false, true)
        break;
      case "option12":
        showSolution("option12", paymentOptions, "Other", "We are so sorry to hear that there has been an issue with your payment. Please contact us directly via our phone line or our email so we can help you with your issue.", true, false )
        break;
      case "option13":
        showSolution("option13", returnsOptions, "I want to return my product(s)", "I understand. Please enter your email so our customer care team can get in touch with you: ", false, true)
        break;
      case "option14":
        showSolution("option14", returnsOptions, "I want a refund for my product(s)", "I understand. Please enter your email so our customer care team can get in touch with you: ", false, true)
        break;
      case "option15":
        showSolution("option15", returnsOptions, "I haven't received my refund", "We are so sorry to hear that you haven't received your refund. Please enter your order number so we can check what happened to your refund.", false, true)
        break;
      case "option16":
        showSolution("option16", returnsOptions, "Other", "We are so sorry to hear that there has been an issue with your return. Please contact us directly via our phone line or our email so we can help you with your issue.", true, false )
        break;
      case "option17":
        showSolution("option17", otherOptions, "I have a question about a product", "I understand. Please contact us directly via our phone line or our email so we can help you with your question.", true, false )
        break;
      case "option18":
        showSolution("option18", otherOptions, "I have a question about my account", "I understand. Please contact us directly via our phone line or our email so we can help you with your question.", true, false )
        break;
      case "option19":
        showSolution("option19", otherOptions, "I have a question about a promotion", "I understand. Please contact us directly via our phone line or our email so we can help you with your question.", true, false )
        break;
      case "option20":
        showSolution("option20", otherOptions, "I have a question about something else", "I understand. Please contact us directly via our phone line or our email so we can help you with your question.", true, false )
        break;
      default:
        console.log('Unknown button');
        return;
    }
  } else {
    console.log('Unknown currentState');
  }
};