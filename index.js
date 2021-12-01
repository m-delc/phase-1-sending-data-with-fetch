// // Add your code here

// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   };

// const configurationObject = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//     },
//     body: JSON.stringify(formData)
// }

// fetch('http://localhost:3000/dogs', configurationObject)
// // .then(res => res.json())
// // .then(obj => console.log(obj))



// .then(function (response) {
//     return response.json();
//   })
//   .then(function (object) {
//     console.log(object);
//   });
// .catch(function (error) {
//     alert("Bad things! Ragnarők!");
//     console.log(error.message);
//   }and this 



  // const formData = {
  //   dogName: "Byron",
  //   dogBreed: "Poodle",
  // };
  
  // // method: "POST" is missing from the object below
  // const configurationObject = {
  //   headers: {
  //     "Content-Type": "application/json",
  //     Accept: "application/json",
  //   },
  //   body: JSON.stringify(formData),
  // };
  
  // fetch("http://localhost:3000/dogs", configurationObject)
  //   .then(function (response) {
  //     return response.json();
  //   })
  //   .then(function (object) {
  //     console.log(object);
  //   })
  //   .catch(function (error) {
  //     alert("Bad things! Ragnarők!");
  //     console.log(error.message);
  //   });



  // const formData = {
  //   dogName: "Byron",
  //   dogBreed: "Poodle",
  // };
  
  // const configurationObject = {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Accept: "application/json",
  //   },
  //   body: JSON.stringify(formData),
  // };
  
  // fetch("http://localhost:3000/dogs", configurationObject)
  //   .then(function (response) {
  //     return response.json();
  //   })
  //   .then(function (object) {
  //     console.log(object);
  //   });




    // const submitData = (userName, userEmail) 
    // const userName = 

    // function submitData(userName, userEmail){
    //   fetch('http://localhost:3000/users'){
    //     Headers: {
    //       'Content-Type': 'application/json',
    //     }
    //     Accept: 'application/json',
    //   }
    //   body: JSON.stringify(submitData)
    //   return fetch()
    //   // .then(res => res.json())
    //   // .then(data =>)
    // }






    function submitData(name, email) {
       return fetch( 'http://localhost:3000/users', {
        method: "POST",    
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify( {
            name,
            email
          } )
        } )
        .then( function (response) {
          return response.json()
        } )
        .then( function (object) {
          document.body.innerHTML = object[ "id" ]
        } )
        .catch( function (error) {
          document.body.innerHTML = error.message
        } )
        // return fetch()
    }