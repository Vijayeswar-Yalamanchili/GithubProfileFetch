const userData = document.querySelector("#userinput");
const submitBtn = document.querySelector("#submit");
const profileDatas = document.querySelector("#profileDatas");
const repos = document.querySelector("#repos");

//using async/await
submitBtn.addEventListener("click",async ()=>{
    const userName = userData.value
    const result = await fetch(`https://api.github.com/users/${userName}`)
    const data = await result.json();
    getProfiledata(data)
    getRepo(userName)
});

//getting profile details using fetchapi grom github
const getProfiledata = (data) =>{
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
    </div>`;
}

//getting repos of user using fetchapi grom github
const getRepo = async(userName) =>{
    const res = await fetch(`https://api.github.com/users/${userName}/repos`);
    const projects = await res.json();
    for (let i = 0; i < projects.length; i++) {
        repos.innerHTML += `
        <div class = "card">
            <div class = "card-body">
                <h6 class = "card-title">${projects[i].name}</h6>
                <div class = "lang"><em>${projects[i].language}</em></div>
                <div class="card-text">
                    <button class = "btn btn-primary pathbtn">
                        <a href="${projects[i].html_url}" target ="_blank" class="path">Open Repo</a>
                    </button>
                </div>
            </div>        
        </div>`;
    }    
}