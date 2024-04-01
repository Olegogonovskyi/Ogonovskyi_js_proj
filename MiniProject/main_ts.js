function СreateDom(tag, appendPlace, classname, text) {
    var element = document.createElement("".concat(tag));
    element.classList.add("".concat(classname));
    element.innerHTML = text;
    appendPlace.appendChild(element);
    return element;
}
;
var usersWrap = СreateDom('div', document.body, 'usersWrap', null);
fetch('https://jsonplaceholder.typicode.com/users')
    .then(function (users) { return users.json(); })
    .then(function (users) {
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user = users_1[_i];
        var userBlock = СreateDom('div', usersWrap, 'userBlock', null);
        var mainInfouser = СreateDom('a', userBlock, 'mainInfouser');
        mainInfouser.href = "user-details.html?user=".concat(JSON.stringify(user));
        mainInfouser.innerHTML = "&#9760; Name: ".concat(user.name, " & id: ").concat(user.id);
    }
});
// ----------------------------------------|audio Block|-------------------------------------------------------
var audioBlock = СreateDom('div', document.body, 'audioBlock', null);
var audioText = СreateDom('h5', audioBlock, 'audioblokimg', 'Push to Play!');
var audioblokimg = СreateDom('img', audioBlock, 'audioblokimg', null);
audioblokimg.src = 'Expert_Leadership.png';
var audiomuss = document.getElementsByTagName("audio")[0];
audioBlock.onclick = function () { audiomuss.play(); };
// ----------------------------------------|audio Block|-------------------------------------------------------
