// const jsonUrl = REMOVED FOR ANONYMITY
// let tools = [];

function copyBibtex() {
  const text = document.getElementById("bibtex").innerText;
  navigator.clipboard.writeText(text);
}

// ON LOAD
document.addEventListener("DOMContentLoaded", () => {

  copyBibtex();
	// buildUI();

});