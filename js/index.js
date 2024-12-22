
var webSitesName = []
var webSitesUrl = []
var webName = document.getElementById("WebsiteName")
var webUrl = document.getElementById("url")


if(localStorage.getItem("website name") !== null){
    webSitesName = JSON.parse(localStorage.getItem("website name"))
    DisplayWebsite()
}

function addWebsite() {
    var website= webUrl.value
    var webInfo = webName.value
    if (webInfo && website) {
        webSitesName.push(webInfo)
        webSitesUrl.push(website)
        DisplayWebsite()
        webName.value = ""
        webUrl.value=""
        localStorage.setItem("website name",JSON.stringify(webSitesName))
    }
    else {
        window.alert("please enter a valid information 🙏👍")
    }
}

function DisplayWebsite() {
    var cartona = ``
    for (var i = 0; i < webSitesName.length; i = i + 1) {
        cartona += `<tr class="text-center   border-top my-1">
                    <th class="py-2">${i + 1}</th>
                    <th class="py-2">${webSitesName[i]}</th>
                    <th class="py-2"><button onclick="visitWebsite(${i})" id="btn1"><i class="fa-solid fa-eye"></i> Visit</button></th>
                    <th class="py-2"><button onclick="deleteWebsite(${i})"  id="btn2"><i class="fa-solid fa-trash  class="py-2""></i> Delete</button>
                    </th>
                </tr>`
    }
    document.getElementById("tbody").innerHTML = cartona
}



function deleteWebsite(index){
    webSitesName.splice(index,1)
    localStorage.setItem("website name",JSON.stringify(webSitesName))
    DisplayWebsite()
}


// ! visit websites
function visitWebsite(index){
    window.open(webSitesUrl[index],"_blank")
}
function validation(){
    var regexNmae=/^\w{3,}(\s+\w+)*$/;
    if(regexNmae.test(webName.value)){
        webName.classList.add("is-valid")
        webName.classList.remove("is-invalid")
    }
    else{
        webName.classList.remove("is-valid")
        webName.classList.add("is-invalid")
    }
}
function validateUrl(){
    var regexUrl= /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;

    if(regexUrl.test(webUrl.value)){
        webUrl.classList.add("is-valid")
        webUrl.classList.remove("is-invalid")
    }
    else{
        webUrl.classList.remove("is-valid")
        webUrl.classList.add("is-invalid")
    }
}