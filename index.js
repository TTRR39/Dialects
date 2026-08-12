<!DOCTYPE html>
<html>
<head>

<meta charset="UTF-8">
<title>Spanish Corpus</title>

<style>

body{
font-family:Arial;
max-width:800px;
margin:40px auto;
}

input{
width:100%;
padding:10px;
margin-bottom:20px;
}

.entry{
border-bottom:1px solid #ddd;
padding:10px 0;
}

.dateLink{
display:block;
padding:6px 0;
}

</style>

</head>

<body>

<h1>📚 Spanish Chat Corpus</h1>

<input id="search" placeholder="Type a word to search the corpus">
  
<h2>Results</h2>
<div id="results"></div>

<h2>Browse by date</h2>
<div id="dates"></div>

<script src="data.js"></script>
<script src="search.js"></script>

</body>
</html>
