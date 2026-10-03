document.getElementById("buscar").onclick = () => {

  const entrada = new Date(
    document.getElementById("checkin").value
  );

  const saida = new Date(
    document.getElementById("checkout").value
  );

  if (saida <= entrada) {
    alert("O check-out deve ser depois do check-in.");
    return;
  }

  alert("Quartos pesquisados com sucesso!");

};
