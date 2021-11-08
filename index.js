function submitData(name,email){
    let user = {
        'name' : name ,
        'email' : email
    }
    
    return fetch('http://localhost:3000/users',{
        method: 'POST',
        headers: {
           'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(object => document.body.innerHTML = object.id)
    .catch(function (error) {
        alert("Bad things! Ragnarők!");
        console.log(error.message);
        document.body.innerHTML = error.message
      })
}

submitData();


    
