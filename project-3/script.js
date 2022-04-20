$(document).ready(function() {
  
//         $('.coolflower').click(function(){
//        $('p').toggle();
//     });
//    
        $(function () {
        $(".coolflower").draggable();
    });  
    
     $('#keyboard').click(function () {
//        $('.infopanel').toggle(2000);     
        $(this).toggleClass("smaller");
    });
  
     $(function () {
        $("#my-special-div").draggable();
    });  
});



//firebase code

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxh6eZo7lC_8Nkl5uIpLNlRNVoI7WHdLc",
  authDomain: "iml-s22-demo-nicolas.firebaseapp.com",
  projectId: "iml-s22-demo-nicolas",
  storageBucket: "iml-s22-demo-nicolas.appspot.com",
  messagingSenderId: "222265602604",
  appId: "1:222265602604:web:93d735c3073db0781c9789"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();
let dbRef = db.ref("text");

//  var data ={
//    name: "q",
//    word: "hello"
//  }
 
// dbRef.push(data);


let chatContainer = document.getElementById("chat-container");
let entry = document.getElementById("text-input-entry");
let share = document.getElementById("text-input-submit");


dbRef.on("child_added", gotText);

function gotText(data) {
  let id = data.key;
  let value = data.val();
  console.log(value);
  chatContainer.innerHTML =
    "<div class='response'>" + value + "</div>" + chatContainer.innerHTML;
}

//click button will run this function
const textInputSubmit = document.getElementById("text-input-submit");
textInputSubmit.addEventListener("click", submitText);

let textContainerElement = document.getElementById("text-input-entry");

function submitText() {
  let textToSubmit = textContainerElement.value; //gets text value from textbox
  let newKey = dbRef.push().key; //ask firebase to give you a new key / 'name'
  let updates = {}; //send firebase list of values
  updates[newKey] = textToSubmit;
  dbRef.update(updates);
}

function submitlock() {
  entry.remove();
  share.value = "Thanks for telling me.";
  share.disabled = true;
  share.style.width = "70%";
}
