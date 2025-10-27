// 🏺 Collection Info Display
function showCollection(type) {
  const contentBox = document.getElementById("collection-content");
  let content = "";

  if (type === "archaeology") {
    content = `
      <h3>Archaeology Collection</h3>
      <p>Explore ancient artifacts, pottery, and relics from past civilizations.
      Each piece tells a story of human innovation and survival.</p>
      <img src="../images/archaeology.jpg" alt="Archaeological artifacts">
    `;
  } else if (type === "anthropology") {
    content = `
      <h3>Anthropology Collection</h3>
      <p>Dive into the study of cultures, languages, and traditions.
      Learn how societies evolved through time and space.</p>
      <img src="../images/anthropology.jpg" alt="Anthropology exhibit">
    `;
  } else if (type === "history") {
    content = `
      <h3>History Collection</h3>
      <p>Discover documents, maps, and objects that trace key historical events
      shaping our modern world.</p>
      <img src="../images/file_jpng2" alt="Historical artifacts">
    `;
  }

  contentBox.innerHTML = content;
}