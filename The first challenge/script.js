function getPosts(userId){
    let requst = new XMLHttpRequest()
    requst.open("GET", "https://jsonplaceholder.typicode.com/posts?userId="+userId)
    requst.responseType = "json"
    requst.send()
    requst.onload = function(){
        if(requst.status >= 200 && requst.status < 300){
            let posts = requst.response
            for(post of posts){
                let content = `
                    <div class="post" id="post">
                        <h3>${post.title}</h3>
                        <h4>${post.body}</h4>
                    </div>
                `
                document.getElementById("posts").innerHTML += content
            }
        }else(
            alert("error")
        )
    }
}

function getUsers(){
    let requst = new XMLHttpRequest()
    requst.open("GET", "https://jsonplaceholder.typicode.com/users")
    requst.responseType = "json"
    requst.send()
    requst.onload = function(){
        if(requst.status >= 200 && requst.status < 300){
            let users = requst.response
            for(user of users){
                let content = `
                    <div id="user" class="user" onclick="userClicked(${user.id}, this)">
                        <h3>${user.name}</h3>
                        <h3>${user.email}</h3>
                    </div>
                `
                document.getElementById("users").innerHTML += content
            }
        }else(
            alert("error")
        )
    }
}
getPosts(1)
getUsers()


function userClicked(id, el){
    getPosts(id)

    
    let selectedElements = document.getElementsByClassName("selected")
    for(element of selectedElements){
        element.classList.remove("selected")
    }
    el.classList.add("selected")
}