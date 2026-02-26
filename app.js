// GENERATE KODE UNIK
function generateCode() {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

const myCode = generateCode();
document.getElementById("myCode").innerText = myCode;

// MULAI CHAT (DEMO)
document.getElementById("startChat").onclick = () => {
  const code = document.getElementById("friendCode").value;
  if (!code) return alert("Masukkan kode teman");

  document.getElementById("chatContainer").classList.remove("hidden");
  document.getElementById("chatWith").innerText = "Chat dengan: " + code;
};

// KIRIM PESAN TEKS (DEMO)
document.getElementById("sendBtn").onclick = () => {
  const input = document.getElementById("messageInput");
  if (!input.value) return;

  const msg = document.createElement("div");
  msg.className = "message me";
  msg.innerText = input.value;

  document.getElementById("chatBox").appendChild(msg);
  input.value = "";
};

// FILE (DEMO)
document.getElementById("fileBtn").onclick = () => {
  document.getElementById("fileInput").click();
};

document.getElementById("fileInput").onchange = (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const msg = document.createElement("div");
  msg.className = "message me";
  msg.innerText = "📎 " + file.name;

  document.getElementById("chatBox").appendChild(msg);
};
