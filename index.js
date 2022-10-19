let dropDown = document.getElementById("dropDown");
let dropDownDialog = document.getElementById("dropDownDioalog");
let videoButton = document.getElementById("videoButton");
let menuIcon = document.getElementById("menuIcon");


dropDown.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("myDropdown").classList.toggle("show");
});

dropDownDialog.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("myDropdown-Dialog").classList.toggle("show");
  console.log(document.getElementById("myDropdown-Dialog").classList)
});

videoButton.addEventListener("click", () => {
//   console.log(document.querySelector(".head-video"));
//   console.log(document.querySelector(".head-container"));
  document.querySelector(".head-video").classList.toggle("show");
  document.querySelector(".head-container").classList.toggle("show");

});

menuIcon.addEventListener("click", (e)=> {
  e.preventDefault();
  console.log(document.querySelector(".navMenuButton").style.display);
  if (document.querySelector(".navMenuButton").style.display === "none" ||document.querySelector(".navMenuButton").style.display === "") {
    document.querySelector(".navMenuButton").style.display = "block"
  }else{
    document.querySelector(".navMenuButton").style.display = "none"
  }
})

window.onclick = function (e) {
  let myDropdown = document.getElementById("myDropdown");
  let myDropdownDialog = document.getElementById("myDropdown-Dialog");
  if (!e.target.matches("#dropDown") && !e.target.matches("#dropDownDioalog")) {
    if (
      !myDropdown.classList.contains("show") ||
      !myDropdownDialog.classList.contains("show")
    ) {
      myDropdown.classList.add("show");
      myDropdownDialog.classList.add("show");
    }
  } else if (e.target.matches("#dropDown")) {
    if (!myDropdownDialog.classList.contains("show")) {
      myDropdownDialog.classList.add("show");
    }
  } else if (e.target.matches("#dropDownDioalog")) {
    if (!myDropdown.classList.contains("show")) {
      myDropdown.classList.add("show");
    }
  }
};
