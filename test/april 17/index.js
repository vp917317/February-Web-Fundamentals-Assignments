var someArr = [
    {
      id: 1,
      email: "george.bluth@reqres.in",
      first_name: "George",
      last_name: "Bluth",
      avatar: "https://reqres.in/img/faces/1-image.jpg",
    },
    {
      id: 2,
      email: "janet.weaver@reqres.in",
      first_name: "Janet",
      last_name: "Weaver",
      avatar: "https://reqres.in/img/faces/2-image.jpg",
    },
    {
      id: 3,
      email: "emma.wong@reqres.in",
      first_name: "Emma",
      last_name: "Wong",
      avatar: "https://reqres.in/img/faces/3-image.jpg",
    },
    {
      id: 4,
      email: "eve.holt@reqres.in",
      first_name: "Eve",
      last_name: "Holt",
      avatar: "https://reqres.in/img/faces/4-image.jpg",
    },
    {
      id: 5,
      email: "charles.morris@reqres.in",
      first_name: "Charles",
      last_name: "Morris",
      avatar: "https://reqres.in/img/faces/5-image.jpg",
    },
    {
      id: 6,
      email: "tracey.ramos@reqres.in",
      first_name: "Tracey",
      last_name: "Ramos",
      avatar: "https://reqres.in/img/faces/6-image.jpg",
    },
  ];
  
  var someArrele = ["https://reqres.in/img/faces/1-image.jpg","https://reqres.in/img/faces/2-image.jpg","https://reqres.in/img/faces/3-image.jpg","https://reqres.in/img/faces/4-image.jpg","https://reqres.in/img/faces/5-image.jpg","https://reqres.in/img/faces/6-image.jpg"]
  //console.log(someArr[0].email)
  //console.log(someArr[3].first_name)
  
  var tableRef = document.createElement("table");
  var trRef1 = document.createElement("tr");
  
  
  var thRef1 = document.createElement("th");
  var thRef2 = document.createElement("th");
  var thRef3 = document.createElement("th");
  var thRef4 = document.createElement("th");
  
  thRef1.innerText = "First Name";
  thRef2.innerText = "Last Name";
  thRef3.innerText = "Email";
  thRef4.innerText = "Avatar";
  
  trRef1.appendChild(thRef1);
  trRef1.appendChild(thRef2);
  trRef1.appendChild(thRef3);
  trRef1.appendChild(thRef4);
  
  tableRef.appendChild(trRef1);
  
  someArr.map(function(ele){
      
      var trRef2 = document.createElement("tr");
  
      var tdRef1 = document.createElement("td");
      var tdRef2 = document.createElement("td");
      var tdRef3 = document.createElement("td");
      var tdRef4 = document.createElement("td");
  
  
      tdRef1.innerText = ele.first_name;
      tdRef2.innerText = ele.last_name;
      tdRef3.innerText = ele.email;
      tdRef4.innerHTML = `<img src="${ele.avatar}" width="110px" height="110px"/>`;
      
  
      trRef2.appendChild(tdRef1);
      trRef2.appendChild(tdRef2);
      trRef2.appendChild(tdRef3);
      trRef2.appendChild(tdRef4);
      
      tableRef.style.boxShadow = "0 0 30px";
      tableRef.style.textAlign = "center";
      tableRef.style.margin = "30px 0px 0px 500px";
      tableRef.style.backgroundColor = "pink"
      
  
      
  
      tableRef.appendChild(trRef2);
      
  
      
      return;
      
  });
  
  document.querySelector("body").appendChild(tableRef);
  