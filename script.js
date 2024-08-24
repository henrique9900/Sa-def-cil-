function showServices() {
  alert(
    "Serviços disponíveis: Consulta médica, entrega de medicamentos, teleatendimento."
  );
}

function fetchHealthTips() {
  fetch("api/api.php")
    .then((response) => response.json())
    .then((data) => {
      let tips = data.tips;
      let tipsList = "<ul>";
      tips.forEach((tip) => {
        tipsList += `<li>${tip}</li>`;
      });
      tipsList += "</ul>";
      document.getElementById("health-tips").innerHTML = tipsList;
    })
    .catch((error) => console.error("Erro ao obter dicas:", error));
}
