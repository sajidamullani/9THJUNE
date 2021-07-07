console.log("app.js loaded ....");
function onSubmit(){
    
    const userName=document.getElementById("userName").value;
    const email=document.getElementById("email").value;
    const dob=document.getElementById("dob").value;
    
    const user=new User(userName,email,dob);
    if(typeof(Storage)!=="undefined"){
        
        localStorage.setItem(user.email,user.toString());
        alert("user data saved successfully!")
    }else{
        alert("Storage not supported ! ");
    }
    console.log("userName "+userName);
    console.log("email "+email);
    console.log("dob "+dob);
    // return false;
}

// 1. creating Javascript object: overaloaded constructor for an object
function User(userName,email,dob){
    this.userName=userName;
    this.email=email;
    this.dob=dob;
    this.toString=function (){
        return userName+" "+email+" "+dob;
    }
}

// 2. storing it in local/session storage
function clickCounter() {
    
      
      const userName=document.getElementById("userName").value;
      const email=document.getElementById("email").value;
      const dob=document.getElementById("dob").value;
      var user1;
      const user=new User(userName,email,dob);
      if(typeof(Storage)!=="undefined")
      {
        console.log(user.toString());
        localStorage.setItem(user1,user.toString());
          alert("user data saved successfully!");
          console.log("success");
          document.getElementById("register").innerHTML = localStorage.getItem(user1);
      }
      else 
      {
        document.getElementById("register").innerHTML = "Sorry, your browser does not support web storage...";
        console.log("unsuccess");
      }
  }