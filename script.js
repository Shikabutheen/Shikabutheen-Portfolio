// let word=[ "PYTHON DEVELOPER"]
// let i=0

// setInterval(()=>{
//     i=(i+1)% word.length;
//     document.getElementById("text-change").textContent=word[i]

// },2000)



// user msed sent 

const scriptURL = 'https://script.google.com/macros/s/AKfycbxnkUm_HEdO-PAXs4zrrMDLD0OPnNgef3Z5EmPqPehd1Kmd7Q8wwGEARRoY6UmPebMO/exec'

  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("end")

  setTimeout(()=>{
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{msg.innerHTML="message sent successfully"
        setTimeout(function (params) {
            msg.innerHTML=""
            
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })},2000)

