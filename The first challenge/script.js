// function getPosts(userId){

    

//     fetch("https://jsonplaceholder.typicode.com/posts?userId="+userId)
//     .then(response=>{
//         if(response.ok){
//             return response.json()
//         }
//     })
//     .then(posts => {
//         document.getElementById("posts").innerHTML = ""
//         for(post of posts){
//             let content = `
//                 <div class="post" id="post">
//                     <h3>${post.title}</h3>
//                     <h4>${post.body}</h4>
//                 </div>
//             `
//             document.getElementById("posts").innerHTML += content
//         }
    
//     })

// }

// function getUsers(){
//     return new Promise((resolve, reject)=>{
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response=>{
//             if(response.ok){
//                 return response.json()
//             }
//             else{
//                 reject("Error with users request")
//             }
//         })
//         .then(users => {
//             document.getElementById("users").innerHTML = ""
//             for(user of users){
//                 let content = `
//                     <div id="user" class="user" onclick="userClicked(${user.id}, this)">
//                         <h3>${user.name}</h3>
//                         <h3>${user.email}</h3>
//                     </div>
//                 `
//                 document.getElementById("users").innerHTML += content
//             }
//             resolve()
        
//         })
//     })
    

// }
// getUsers()
// .then(()=>{
//     getPosts(1)
// })
// .catch((error)=>{
//     console.log(error)
// })

function getUsersUsingAxios(){
    return new Promise((resolve, reject)=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            let users = response.data
            document.getElementById("users").innerHTML = ""
            for(user of users){
                let content = `
                    <div id="user" class="user" onclick="userClicked(${user.id}, this)">
                        <h3>${user.name}</h3>
                        <h3>${user.email}</h3>
                    </div>
                `
                document.getElementById("users").innerHTML += content
            }
            resolve()
        }).catch(error =>{
            alert(error)
            reject(error)
        })
    })
    
}


function getPostsOfUser(userId){
    let url =  "https://jsonplaceholder.typicode.com/posts?userId="+userId

    axios.get(url)
    .then((response) =>{
        let posts = response.data
        document.getElementById("posts").innerHTML = ""
        for(post of posts){
            let content = `
                <div class="post" id="post">
                    <h3>${post.title}</h3>
                    <h4>${post.body}</h4>
                </div>
            `
            document.getElementById("posts").innerHTML += content
        }
    }).catch(error =>{
        alert(error)
    })
}

getUsersUsingAxios()
.then(()=>{
    getPostsOfUser(1)
})
.catch(error =>{
    alert(error)
})

function userClicked(id, el){
    getPosts(id)

    
    let selectedElements = document.getElementsByClassName("selected")
    for(element of selectedElements){
        element.classList.remove("selected")
    }
    el.classList.add("selected")
}