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
let url = new URL(location.href);
let postId = url.searchParams.get('postId');

let mainWrap = СreateDom('', 'mainWrap', 'div', document.body);

let post = fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(post => post.json());

let comments = fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    .then(post => post.json());
Promise.all([post, comments])
    .then(resolt => {
        let [post, comments] = resolt;

        let mainPostblock = СreateDom(null, 'mainPostblock', 'div', mainWrap);

        let mainPostinfo = СreateDom(`iD: ${post.id} - ${post.title}`, 'mainPostinfo', 'h3', mainPostblock);

        let postbody = СreateDom(`${post.body}`, 'mainPostblock', 'p', mainPostblock);

        let commentsblock = СreateDom(null, 'commentsblock', 'div', mainWrap);

        for (let comment of comments) {
            let commenttext = СreateDom(null, 'mainPostblock', 'p', commentsblock);
            commenttext.innerHTML = `<span>${comment.email} - ${comment.name}</span>:<br> ${comment.body}`
        }
    })
// ---------------------------------------------|main code|-----------------------------------------------------------
// --------------------------------------------|audio Block|-------------------------------------------------------
let audioBlock = СreateDom('', 'audioBlock', 'div', document.body);

let audioText = СreateDom('Push to Play!', 'audiotext', 'h5', audioBlock);

let audioblokimg = СreateDom('', 'audioblokimg', 'img', audioBlock);
audioblokimg.src = 'Expert_Leadership.png'

let audiomuss = document.getElementsByTagName("audio")[0];

audioBlock.onclick = () => {audiomuss.play();}
// ----------------------------------------|audio Block|-------------------------------------------------------