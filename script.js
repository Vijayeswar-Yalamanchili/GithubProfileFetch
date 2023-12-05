const userData = document.querySelector("#userinput");
const submitBtn = document.querySelector("#submit");
const profileDatas = document.querySelector("#profileDatas");

//using async/await
submitBtn.addEventListener("click",async ()=>{
    const userName = userData.value
    // console.log(userName);
    const result = await fetch(`https://api.github.com/users/${userName}`)
    const data = await result.json();
    // console.log(data); 
    getProfiledata(data)
});

const getProfiledata = (data) =>{
    // console.log("hi");
    profileDatas.innerHTML = `
    <div class = "card">
        <div class = "card-img">
            <img src="${data.avatar_url}" alt="${data.name}">
        </div>
        <div class = "card-body">
            <div class = "card-title">
                <div class = "name">${data.name} </div>
                <div class = "loginName">${data.login}</div>
            </div>
            <div class="card-text>
                <p class = "bio">${data.bio}</p>
                <p class = "followers"><i class="fa-solid fa-user-group"></i> ${data.followers} Followers . ${data.following} Following</p>
                <p class = "location"><i class="fa-solid fa-location-dot"></i> ${data.location}</p>
            </div>            
            <button class = "btn btn-primary pathbtn">
                <a href="${data.html_url} target = "_blank" class="path">Visit Profile</a>
            </button>
        </div>        
    </div>`
}