function toggleTheme() {
	const btn = document.getElementById("togglebtn");
	const html = document.documentElement;

	btn.addEventListener("click", () => {
		html.classList.toggle("dark");
		console.log("worling")
	});
}

