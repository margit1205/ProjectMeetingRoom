

const form = document.getElementById('register-form');
form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const formData = new FormData(form);
  let formDataObject = Object.fromEntries(formData.entries());

    // Format the plain form data as JSON
    let formDataJsonString = JSON.stringify(formDataObject);


    fetch('http://localhost:8080/MeetingRoomBooking/userDetails/register', {
        method:'Post', 
         //Set the headers that specify you're sending a JSON body request and accepting JSON response
         
    headers: {
        "Content-Type": "application/json",
         Accept: "application/json",
      },
        body: formDataJsonString,
    }).then(res => res.json)
      .then(data => {
        if(true)
        {
          alert("your are sucessfully registered")
          document.querySelector(".wrapper").style.transform="scale(0)";
        }
      else
      {
        alert("Invalid Credentaials")
      }
      })
      .catch((err) =>{ 
        alert(err);
        console.log(err)
});
});
