

const form = document.getElementById('register-form');
form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const formData = new FormData(form);
  let formDataObject = Object.fromEntries(formData.entries());

  
    let formDataJsonString = JSON.stringify(formDataObject);


    fetch('http://localhost:8080/MeetingRoom/Employee/createEmployee', {
        method:'Post', 
        
         
    headers: {
        "Content-Type": "application/json",
         Accept: "application/json",
      },
        body: formDataJsonString,
    }).then(res => res.json)
      .then(data => {
       
        if(data)
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

const registerbtn=document.getElementById('login-btn');
registerbtn.addEventListener('click',e => {
 
  // const body=document.getElementById('mybody');
  // body.classList.toggle('blur');
  // e.preventDefault();
  // e.stopPropagation();



})