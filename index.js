function toggleTheme() {
	const btn = document.getElementById("togglebtn");
	const html = document.documentElement;

	btn.addEventListener("click", () => {
		html.classList.toggle("dark");
		console.log("worling")
	});
}

const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

loginTab.addEventListener("click", () => {
	loginForm.classList.remove("hidden");
	signupForm.classList.add("hidden");
	loginTab.classList.add("text-green-600", "border-green-600", "font-semibold");
	loginTab.classList.remove("text-gray-500", "border-gray-200");
	signupTab.classList.add("text-gray-500", "border-gray-200");
	signupTab.classList.remove("text-green-600", "border-green-600", "font-semibold");
});

signupTab.addEventListener("click", () => {
	signupForm.classList.remove("hidden");
	loginForm.classList.add("hidden");
	signupTab.classList.add("text-green-600", "border-green-600", "font-semibold");
	signupTab.classList.remove("text-gray-500", "border-gray-200");
	loginTab.classList.add("text-gray-500", "border-gray-200");
	loginTab.classList.remove("text-green-600", "border-green-600", "font-semibold");
});
