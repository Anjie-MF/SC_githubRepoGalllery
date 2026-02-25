const myProfileInfo = document.querySelector(".overview");
const username = "Anjie-MF";
const displayRepoList = document.querySelector(".repo-list");

const fetchMyInfo = async function () {
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();
    console.log(data);
    displayUserInfo(data);
};
fetchMyInfo();

const displayUserInfo = async function (data) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("user-info");
    newDiv.innerHTML = `
        <figure>
        <img alt="user avatar" src=${data.avatar_url} />
        </figure>
    <div>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Bio:</strong> ${data.bio}</p>
        <p><strong>Location:</strong> ${data.location}</p>
        <p><strong>Number of public repos:</strong> ${data.public_repos}</p>
    </div> `;

    myProfileInfo.append(newDiv);
};

const fetchMyRepo = async function () {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort:updated&per_page=100`);
    const getData = await response.json();
    console.log(getData);
}
fetchMyRepo();