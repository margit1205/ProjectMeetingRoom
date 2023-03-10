


const loginform = document.querySelector('#login-form');
loginform.addEventListener('submit', (e)=>{
    e.preventDefault();

    const formData1 = new FormData(loginform);
  let formDataObject = Object.fromEntries(formData1.entries());

    // Format the plain form data as JSON
    let formDataJsonString1 = JSON.stringify(formDataObject);


    fetch('http://localhost:8080/MeetingRoomBooking/LoginCheck/Login', {
        method:'Post', 
         //Set the headers that specify you're sending a JSON body request and accepting JSON response
         
    headers: {
        "Content-Type": "application/json",
         Accept: "application/json",
        
      },
        body: formDataJsonString1,
    }).then((res) => res.json())
      .then((data) => {
        console.log(data);
       
        if(data)
        {
          
          
          // {"userId":7,"userName":"username","email":"email@gmail.com","password":"email"}
          
          sessionStorage.setItem("userName", data.userName);
          sessionStorage.setItem("email", data.email);
          sessionStorage.setItem("userId", data.userId)
          sessionStorage.setItem("password", data.password)
          
          alert("You are sucessfully login")

          window.location.replace("User.html");
        }
        else
        {
          alert("You are not registered")
          
        }
      
      
      })
      .catch((err) =>{ 
        alert(err);
        console.log(err)
});
});
