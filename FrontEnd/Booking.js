// if(sessionStorage.getItem('idLogIn') != "true"){
//   win
// }
// function getTime() {
//   var now = new Date();
//   return (
//            now.getHours() + '-' +
//            ((now.getMinutes() < 10)
//                ? ("0" + now.getMinutes())
//                : (now.getMinutes())) + ':' +
//            ((now.getSeconds() < 10)
//                ? ("0" + now.getSeconds())
//                : (now.getSeconds())));
// }

const availbutton=document.getElementById('availbtn');
availbutton.addEventListener('click',(e)=>{

e.preventDefault();

const checkavailablity = document.querySelector('#checkavail');
// checkavailablity.addEventListener('click', (e)=>{
//     e.preventDefault();

    const formData3 = new FormData(checkavailablity);
  let formDataObject = Object.fromEntries(formData3.entries());

    // Format the plain form data as JSON
    let formDataJsonString3 = JSON.stringify(formDataObject);

     const bookingdate=document.getElementById("dateinp").value;
      // let bookin=Date.parse(bookingdate);
      // var dates_as_int = dates.map(Date.parse);
      const checkin=document.getElementById("ininp").value;
    //  let  newcheckin =getTime(checkin);

      const checkout=document.getElementById("outinp").value;
      // let newcheckout=getTime(checkout);

     
      formDataJsonString3.checkin = newcheckin;
      formDataJsonString3.chekout = newcheckout;
      formDataJsonString3.bookingdate = bookin;
      console.log(bookin);
      console.log(newcheckin);
      console.log(newcheckout);

    fetch('http://localhost:8080/MeetingRoomBooking//Check/checkavail', {
        method:'Get', 
         //Set the headers that specify you're sending a JSON body request and accepting JSON response
         
    headers: {
        "Content-Type": "application/json",
         Accept: "application/json",
        
      }

    }).then((res) => res.json())
      .then((data) => {
        console.log(data);
        data.bookingdate=bookingdate;
        data.checkin=checkin;
        data.checkout=checkout;
       
        if(data)
        {
          
          console.log(data);
          alert("Room is  available ")
         
        }
        else
        {
          alert("Room is not available")
        }
      
      
      })
      .catch((err) =>{ 
        alert(err);
        console.log(err)
});
// });

});








const form = document.getElementById('bookbtn');
form.addEventListener('click', (e)=>{
    e.preventDefault();

    const booknow = document.querySelector('#bookingnow');

    const formData = new FormData(booknow);
  let formDataObject = Object.fromEntries(formData.entries());

    // Format the plain form data as JSON
    let formDataJsonString = JSON.stringify(formDataObject);


    fetch('http://localhost:8080/MeetingRoomBooking//bookinginfo/doBooking', {
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
          alert("your are sucessfully booked");
          window.location.replace("index.html");
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
