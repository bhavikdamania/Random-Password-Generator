


function Generate(){

let randomNum =  Math.floor(Math.random() * (900000000000 * (Math.random() * 1000000))); 
let numToString = randomNum.toString(36);

document.getElementById("random").innerHTML=numToString

}

function copyToClipboard() {
  const text = document.getElementById("random").innerText;
  const btn2 = document.getElementById("btn2"); // make sure your button has this ID
  btn2.style.backgroundColor="green";
  navigator.clipboard.writeText(text)
   .then(() => {
  btn2.innerText = "Copied: " + text;
  
  setTimeout(() => {
    btn2.innerText = "Copy";
  }, 1000); // 2 seconds later
  
})
    .catch(err => console.error("Copy failed:", err));
}
