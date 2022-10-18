dropDown = document.getElementById("dropDown");
dropDownDialog = document.getElementById("dropDownDioalog");

dropDown.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("myDropdown").classList.toggle("show");
});

dropDownDialog.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("myDropdown-Dialog").classList.toggle("show");
});

// window.onclick = function (e) {
//   if (!e.target.matches("#dropDownDioalog")) {
//     let myDropdownDialog = document.getElementById("myDropdown-Dialog");
//     if (!myDropdownDialog.classList.contains("show")) {
//       myDropdownDialog.classList.add("show");
//     }
//   }
// };

window.onclick = function (e) {
  let myDropdown = document.getElementById("myDropdown");
  let myDropdownDialog = document.getElementById("myDropdown-Dialog");
  if (!e.target.matches("#dropDown") && !e.target.matches("#dropDownDioalog")) {
    if ( !myDropdown.classList.contains("show") || !myDropdownDialog.classList.contains("show")) {
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
