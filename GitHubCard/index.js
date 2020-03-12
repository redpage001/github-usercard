/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get("https://api.github.com/users/redpage001")
.then(response => {
  console.log(response.data)
  const cards = document.querySelector(".cards");
  cards.appendChild(UserCard(response.data));
})
.catch(error =>{
  console.log('the data was not returned', error);
})

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ["HNelson98", "dortega5185", "Diddleslip", "MatthewHeideman", "Perezented"];

followersArray.forEach(val => {
  let friendUrl = `https://api.github.com/users/${val}`;

  axios.get(friendUrl)
.then(response => {
  console.log(response.data)
  const cards = document.querySelector(".cards");
  cards.appendChild(UserCard(response.data));
})
.catch(error =>{
  console.log('the data was not returned', error);
})
})

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
function UserCard(data){
  const CardDiv = document.createElement('div');
  const CardImage = document.createElement('img');
  const CardInfoDiv = document.createElement('div');
  const CardHeader = document.createElement('h3');
  const CardUserName = document.createElement('p');
  const CardLocation = document.createElement('p');
  const CardProfile = document.createElement('p');
  const ProfileRef = document.createElement('a');
  const CardFollowers = document.createElement('p');
  const CardFollowing = document.createElement('p');
  const BioInfo = document.createElement('p');

  CardDiv.classList.add('card');
  CardInfoDiv.classList.add('card-info');
  CardHeader.classList.add('name');
  CardUserName.classList.add('username');

  CardImage.src = data.avatar_url;
  CardHeader.textContent = data.name;
  CardUserName.textContent = data.login;
  CardLocation.textContent = `Location: ${data.location}`;
  CardProfile.textContent = `Profile: `;
  ProfileRef.textContent = data.html_url;
  ProfileRef.href = data.html_url;
  CardFollowers.textContent =  `Followers: ${data.followers}`;
  CardFollowing.textContent = `Following: ${data.following}`;
  BioInfo.textContent =  `Bio: ${data.bio}`;

  CardDiv.appendChild(CardImage);
  CardDiv.appendChild(CardInfoDiv);
  CardInfoDiv.appendChild(CardHeader);
  CardInfoDiv.appendChild(CardUserName);
  CardInfoDiv.appendChild(CardLocation);
  CardInfoDiv.appendChild(CardProfile);
  CardProfile.appendChild(ProfileRef);
  CardInfoDiv.appendChild(CardFollowers);
  CardInfoDiv.appendChild(CardFollowing);
  CardInfoDiv.appendChild(BioInfo);

  return CardDiv;
}
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
