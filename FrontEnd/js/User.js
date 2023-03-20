let logout=document.querySelector('#logout-tab');

logout.addEventListener('click',(e)=>{

alert("You are sucessfully logout");
window.location.replace("index.html");
sessionStorage.setItem("isLoggedin","false");

});



let userName = sessionStorage.getItem("userName");
let email =   sessionStorage.getItem("email");
let userId =     sessionStorage.getItem("userId");
let password =     sessionStorage.getItem("password");



let username=document.getElementById("username");
let username2=document.getElementById("username2");
let useremail=document.getElementById("useremail");
let userid=document.getElementById("userid");
let userpass=document.getElementById("userpassword");

username.innerHTML = userName;
username2.innerHTML = userName;
useremail.innerHTML = email;
userid.innerHTML = userId;
userpass.innerHTML = password;





const form3 = document.getElementById('update');
form3.addEventListener('submit', (e)=>{
    e.preventDefault();

    const formData = new FormData(form3);
  let formDataObject = Object.fromEntries(formData.entries());

    
    let formDataJsonString = JSON.stringify(formDataObject);


    fetch('http://localhost:8080/MeetingRoomBooking//userDetails/update', {
        method:'Post', 
         
         
    headers: {
        "Content-Type": "application/json",
         Accept: "application/json",
      },
        body: formDataJsonString,
    }).then(res => res.json())

      .then(data => {
        if(true)
        {
            console.log(data)
          alert("User Details Updated")
            username.innerHTML = data.userName;
            username2.innerHTML = data.userName;
            useremail.innerHTML = data.email;
            userpass.innerHTML = data.password;
          
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




const bookingdetails = document.querySelector('#view');
bookingdetails.addEventListener('click', (e)=>{
    e.preventDefault();
    const booknow = document.querySelector('#booking-form');

    const formData3 = new FormData(booknow);
  let formDataObject5 = Object.fromEntries(formData3.entries());

//     // Format the plain form data as JSON
    let formDataJsonString3 = JSON.stringify(formDataObject5);
     
    

      //  function showBookings(){

         

    fetch('http://localhost:8080/MeetingRoomBooking/booking/bookingInfo', {
        method:'Get', 
         //Set the headers that specify you're sending a JSON body request and accepting JSON response
        //  [{"bookingId":1,"userId":2,"roomId":1,"noguest":4,"bdate":20221211,"checkintime":193010,"checkouttime":203010},{"bookingId":2,"userId":3,"roomId":2,"noguest":4,"bdate":20221212,"checkintime":193010,"checkouttime":233010}]
         
    headers: {
        "Content-Type": "application/json",
         Accept: "application/json",
        
      }

    }).then((res) => res.json())
      .then((data) => {
        
       
        var flag=false;
        
        data.forEach(element => {
          
  

          const bookingdate=document.getElementById("bookingdate").value;
          const checkin=document.getElementById("check-in").value;
          const checkout=document.getElementById("check-out").value;
          const roomid=document.getElementById("roomid").value;
          const bookingid=document.getElementById("bookingid").value;
          const guestno=document.getElementById("guestno").value;
          
          let currUserId = sessionStorage.getItem("userId").value;
          if(element.userId == currUserId){
            
            roomid.innerHTML=element.roomId;
            bookingid.innerHTML=element.bookingId;
            checkin.innerHTML=element.checkintime;
            checkout.innerHTML=element.checkouttime;
            guestno.innerHTML=element.noguest;
            bookingdate.innerHTML=element.bdate;

            console.log(data);
            
            
           flag=true;
            
          }

        });
        if(!flag){
          alert("No booking done yet");
        }


       

       
       
      
      
      })
      .catch((err) =>{ 
        alert(err);
        console.log(err)
});
// }
});









