let mail = document.querySelector("#mail");
let nam = document.querySelector("#name");
let pass = document.querySelector("#pass");
let btn = document.querySelector("#btn");
let signin = document.querySelector("#signin");
let signup = document.querySelector("#signup");
let main = document.querySelector("#main");

const userinfo = {};

signin.addEventListener("click", async => {
main.classList.add("trans");

})

signup.addEventListener("click", async => {
main.classList.add("trans");
})

btn.addEventListener("click" , async => {
 console.dir();
 Val();
}
)

mail.addEventListener("change",function Val(){
    let mai = this.value;
})
nam.addEventListener("change",function Val(){
    let na = this.value;
})
pass.addEventListener("change",function Val(){
    let pa = this.value;
})
