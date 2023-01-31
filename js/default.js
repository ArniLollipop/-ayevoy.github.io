let isSelect = false;

function langSelect(id) {
  if (id === 0) {
    document.getElementById("langSelect_back").classList.add("hidden");
    document.getElementById("langSelect").classList.add("hidden");
  } else if (id === 1) {
    document.getElementById("langSelect_back").classList.remove("hidden");
    document.getElementById("langSelect").classList.remove("hidden");
  } else if (id === 2) {
    document.getElementById("header-lang").innerHTML = "ru";
    document.getElementById("langSelect_back").classList.add("hidden");
    document.getElementById("langSelect").classList.add("hidden");
  } else if (id === 3) {
    document.getElementById("header-lang").innerHTML = "az";
    document.getElementById("langSelect_back").classList.add("hidden");
    document.getElementById("langSelect").classList.add("hidden");
  } else if (id == 4) {
    document.getElementById("header-lang").innerHTML = "en";
    document.getElementById("langSelect_back").classList.add("hidden");
    document.getElementById("langSelect").classList.add("hidden");
  }
}
