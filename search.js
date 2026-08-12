const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const results = document.getElementById("results");


function displayWords(data) {

  results.innerHTML = "";

  if (data.length === 0) {
    results.innerHTML = "<p>没有找到相关词条。</p>";
    return;
  }

  data.forEach(item => {

    const card = document.createElement("div");

    card.className = "word-card";

    card.innerHTML = `
      <h2>${item.word}</h2>

      <p class="pronunciation">
        /${item.pronunciation}/
      </p>

      <p>
        <strong>普通话：</strong>
        ${item.mandarin}
      </p>

      <p>
        <strong>发音人：</strong>
        ${item.speaker}
      </p>

      <p>
        <strong>例句：</strong>
        ${item.exampleDialect}
      </p>

      <p>
        <strong>普通话：</strong>
        ${item.exampleMandarin}
      </p>
    `;

    results.appendChild(card);
  });
}


function searchWords() {

  const query = searchInput.value
    .trim()
    .toLowerCase();

  if (query === "") {
    displayWords(dialectData);
    return;
  }

  const filtered = dialectData.filter(item => {

    return (
      item.word.toLowerCase().includes(query) ||
      item.pronunciation.toLowerCase().includes(query) ||
      item.mandarin.toLowerCase().includes(query) ||
      item.exampleDialect.toLowerCase().includes(query) ||
      item.exampleMandarin.toLowerCase().includes(query)
    );

  });

  displayWords(filtered);
}


searchButton.addEventListener("click", searchWords);


searchInput.addEventListener("keydown", function(event) {

  if (event.key === "Enter") {
    searchWords();
  }

});


displayWords(dialectData);
