let dog = {
    name: "Steve",
    age: 1,
    location: "Japan",
    profileImg: "https://images.unsplash.com/photo-1613410180211-106788bd2d94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80",
    bannerImg: "url('https://thumbs.dreamstime.com/b/green-polka-dot-background-25383307.jpg')",
    backgroundColor: "#00FFFF",
    stats: {
        followers: "1.2M",
        likes: "8M",
        posts: "2K"
    }
}

document.getElementById("full-name").innerText = dog.name
document.getElementById("full-name").style.color = "green"

document.getElementById("age").innerText = dog.age
document.getElementById("location").innerText = dog.location
document.getElementsByTagName("img")[0].src = dog.profileImg;

console.log(document.getElementsByClassName("top")[0].style.backgroundImage = dog.bannerImg)
document.body.style.backgroundColor = dog.backgroundColor
let numbers = document.getElementsByClassName("nums")
let status = Object.keys(dog.stats)

for(let i=0; i<numbers.length; i++){  
    numbers[i].innerText = dog.stats[status[i]]
}