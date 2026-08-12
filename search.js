const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const categorySelect = document.getElementById("categorySelect");
const results = document.getElementById("results");


// =========================
// 显示词条
// =========================

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

      <p>
        <strong>读音：</strong>
        ${item.pronunciation}
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

      <p>
        <strong>Category：</strong>
        ${item.category || ""}
      </p>

      <p>
        <strong>Word ID：</strong>
        ${item.wordsID || ""}
      </p>
    `;

    results.appendChild(card);
  });
}


// =========================
// 自动生成 Category 下拉菜单
// =========================

function loadCategories() {

  const categories = [...new Set(
    dialectData
      .map(item => item.category)
      .filter(category => category)
  )];

  categories.forEach(category => {

    const option = document.createElement("option");

    option.value = category;
    option.textContent = category;

    categorySelect.appendChild(option);
  });
}


// =========================
// 搜索
// =========================

function searchWords() {

  const query = searchInput.value.trim().toLowerCase();

  const selectedCategory = categorySelect.value;

  const filtered = dialectData.filter(item => {

    // 先检查 category
    const categoryMatch =
      selectedCategory === "" ||
      item.category === selectedCategory;

    // 再检查关键词
    const searchableText = `
      ${item.word}
      ${item.pronunciation}
      ${item.mandarin}
      ${item.speaker}
      ${item.exampleDialect}
      ${item.exampleMandarin}
      ${item.wordsID}
    `.toLowerCase();

    const searchMatch =
      query === "" ||
      searchableText.includes(query);

    return categoryMatch && searchMatch;
  });

  displayWords(filtered);
}


// =========================
// 事件
// =========================

searchButton.addEventListener("click", searchWords);

searchInput.addEventListener("keydown", function(event) {

  if (event.key === "Enter") {
    searchWords();
  }

});


// 选择 Category 后自动搜索
categorySelect.addEventListener("change", searchWords);


// =========================
// 初始化
// =========================

loadCategories();

displayWords(dialectData);
