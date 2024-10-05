const btn = document.getElementById("btn")

btn.addEventListener("click", clickFunc);

function clickFunc () {
    // console.log("Click med");
    var sidebar = document.querySelector('.sidebar').classList;
    var content = document.querySelector('.content').classList;

    sidebar.toggle('closed');
    content.toggle('sidebar-closed');
}