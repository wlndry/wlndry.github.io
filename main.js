const inputs = document.querySelectorAll(".input");


function addcl() {
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl() {
	let parent = this.parentNode.parentNode;
	if (this.value == "") {
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

function login() {
	var user = document.getElementById("username").value;
	var pass = document.getElementById("password").value;
	if (user == "wulandari") {
		if (pass == "210210501017") {
			window.location.href = "Dashboard.html";
		} else if(pass == "") {
			alert("Masukkan pasword terlebih dahulu!");
		} else {
			alert("Password  salah, coba lagi!");
		}
	} else if (user == "") {
		alert("Masukkan username terlebih dahulu!");
	} else {
		alert("Username yang anda masukkan tidak terdaftar!");
	}
}

function sendmessage() {
	var nama = document.getElementById("nama").value;
	var email = document.getElementById("email").value;
	pesan = document.getElementById("pesan").value;
	nomor = document.getElementById("nomor").value;

	if(nama =="" || email =="" || pesan ==""||nomor ==""){
		alert("Kolom inputan tidak boleh kosong!");
	}else {
		alert("Pesan berhasil terkirim!");
		location.replace("Contact.html");
	}
}