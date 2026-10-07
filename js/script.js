const campoBusca = document.querySelector("#busca");
const gradeAtores = document.querySelector("#atores");

function formatarData(data) {
  const partes = data.split("-");
  return `${partes[2]}/${partes[1]}/${partes[0]}`;
}

function mostrarAtores(lista) {
  let cards = "";

  lista.forEach((ator) => {
    cards += `
      <article class="card">
        <img src="${ator.foto}" alt="Foto de ${ator.nome}" loading="lazy">
        <div class="card-conteudo">
          <h2>${ator.nome}</h2>
          <p><strong>País:</strong> ${ator.pais}</p>
          <p><strong>Nascimento:</strong> ${formatarData(ator.nascimento)}</p>
        </div>
      </article>
    `;
  });

  gradeAtores.innerHTML = cards || '<p class="sem-resultados">Nenhum ator ou atriz encontrado.</p>';
}

function filtrarAtores() {
  const nomeBuscado = campoBusca.value.trim().toLowerCase();
  const resultado = atores.filter((ator) =>
    ator.nome.toLowerCase().includes(nomeBuscado)
  );

  mostrarAtores(resultado);
}

mostrarAtores(atores);
