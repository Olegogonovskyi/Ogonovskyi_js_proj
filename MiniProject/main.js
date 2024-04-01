// ----------------------------------------|creator Dom function|-------------------------------------------------------
function СreateDom(text, classname, tag, appendPlace) {
    element = document.createElement(`${tag}`);
    element.classList.add(`${classname}`)
    element.innerText = text;
    appendPlace.appendChild(element)
    return element;
}
// ----------------------------------------|creator Dom function|-------------------------------------------------------
// -----------------------------------------|main code|-----------------------------------------------------------
let usersWrap = СreateDom(null, 'usersWrap', 'div', document.body);

fetch('https://jsonplaceholder.typicode.com/users')
    .then(users => users.json())
    .then(users => {

        for (let user of users) {

            let userBlock = СreateDom(null, 'userBlock', 'div', usersWrap)

            let mainInfouser = СreateDom(null, 'mainInfouser', 'a', userBlock)
            mainInfouser.href = `user-details.html?user=${JSON.stringify(user)}`
            mainInfouser.innerHTML = `&#9760; Name: ${user.name} & id: ${user.id}`;
        }
    });
// ---------------------------------------------|main code|-----------------------------------------------------------
// --------------------------------------------|audio Block|-------------------------------------------------------
let audioBlock = СreateDom(null, 'audioBlock', 'div', document.body);

let audioText = СreateDom('Push to Play!', 'audiotext', 'h5', audioBlock);

let audioblokimg = СreateDom(null, 'audioblokimg', 'img', audioBlock);
audioblokimg.src = 'Expert_Leadership.png'

let audiomuss = document.getElementsByTagName("audio")[0];

audioBlock.onclick = () => {audiomuss.play();}
// ----------------------------------------|audio Block|-------------------------------------------------------

