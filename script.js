const skillInput = document.getElementById("skill");
const addButtton = document.getElementById("button-add-skill");
const skillsContainer = document.querySelector(".skills");

addButtton.addEventListener("click", function(){
    const skillValue = skillInput.value.trim(); //ambil nilai input

    //jika input kosong
    if(skillValue === ""){
        alert("Please enter a skill!");
        return;
    }

    //element baru dengan class "skill-card"
    const skillCard = document.createElement("div");
    skillCard.classList.add("skill-card");

    //buat p dengan class "skill-text" dengan isi dari skill value
    const skillText = document.createElement("p");
    skillText.classList.add("skill-text");
    skillText.textContent = skillValue;

    //buat tombol hapus
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-skill");
    deleteButton.textContent = "×";

    //fungsi untuk jika tombol ditekan dapat menghapus
    deleteButton.addEventListener("click", function(){
        skillsContainer.removeChild(skillCard);
    });

    //Penggabungan elemen ke dalam skill card
    skillCard.appendChild(skillText);
    skillCard.appendChild(deleteButton);

    //Skill card dimasukkan ke container
    skillsContainer.appendChild(skillCard);

    //kosongin input setelah nambahin skill
    skillInput.value = "";
})