const resultsDiv = document.getElementById("results");
const searchInput = document.getElementById("search");
const datesDiv = document.getElementById("dates");

function displayResults(data){

resultsDiv.innerHTML = "";

if(data.length === 0){
resultsDiv.innerHTML = "<p>No results found</p>";
return;
}

data.forEach(item => {

const div = document.createElement("div");

div.className = "entry";

div.innerHTML = `
<b>${item.date}</b><br>
${item.text}<br>
<i>${item.translation}</i><br>
${item.notes}
`;

resultsDiv.appendChild(div);

});

}

searchInput.addEventListener("input", function(){

const q = this.value.toLowerCase().trim();

if(q === ""){
resultsDiv.innerHTML = "";
return;
}

const filtered = corpus.filter(item =>

item.text.toLowerCase().includes(q) ||
item.translation.toLowerCase().includes(q) ||
item.notes.toLowerCase().includes(q)

);

displayResults(filtered);

});


const uniqueDates = [...new Set(corpus.map(x => x.date))];

uniqueDates.sort().reverse();

uniqueDates.forEach(d => {

const link = document.createElement("a");

link.href = `day.html?date=${d}`;

link.textContent = d;

link.className = "dateLink";

datesDiv.appendChild(link);

});
