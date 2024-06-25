function toggleObservacoes() {
    let selecao = document.getElementById("apresentacao");
    let onde_foi = document.getElementById("observacoes");

    if (selecao.value === "outros") {
        onde_foi.style.display = "block";
        onde_foi.required = true;
        onde_foi.disabled = false;
    } else {
        onde_foi.style.display = "block";
        onde_foi.required = false;
        onde_foi.value = "";
        onde_foi.disabled = true;
    }
}

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    let nome = document.getElementById('nome').value;
    alert(`Agradecemos a sua inscrição ${nome}`);
    this.reset();
});
