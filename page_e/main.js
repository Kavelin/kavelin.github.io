let curPath, curContent;

let cur = () =>
  curPath
    .slice(2)
    .split("/")
    .reduce((a, c) => {
      console.log(a, c);
      return a.getSubKey(c);
    }, root);


function treeKeys(data, path) {
  let elem = document.createElement("ul");
  elem.classList.add("nested");
  if (data.expanded) elem.classList.add("active");
  data.subkeys.forEach(function(i) {
    let li = document.createElement("li");
    let span = document.createElement("span");
    if (i.subkeys.length) {
      span.classList.add("expandable");
    }
    if (i.expanded) span.classList.add("expanded");
    if (i.selected) span.classList.add("selected");
    span.innerText = i.name;
    i.path = path + "/" + i.name;

    span.addEventListener("click", function() {
      if (this.classList.contains("expandable")) {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("expanded");
        i.expanded = !i.expanded;
      }
      document.querySelector(".selected").classList.remove("selected");
      this.classList.add("selected");
      if (cur()) {
        cur().selected = false;
      }
      i.selected = true;
      curPath = i.path;
      curContent = cur().content;

      document.querySelector("#path").innerText = curPath;
      document.querySelector(".right").innerHTML = curContent;
    });

    li.append(span);
    li.append(treeKeys(i, path + "/" + i.name));
    elem.append(li);
  });
  return elem;
}

/*

function treeKeys(data, path) {
  let container = document.createElement("div");
  data.subkeys.forEach(function (i) {
    let details = document.createElement("details");
    if (i.expanded) details.open = true;

    let summary = document.createElement("summary");
    summary.innerText = i.name;
    summary.dataset.path = path + "/" + i.name;
    if (i.subkeys.length) summary.classList.add("expandable");
    if (i.selected) summary.classList.add("selected");

    summary.addEventListener("click", function (e) {
      e.stopPropagation();
      document.querySelectorAll(".selected").forEach(el => el.classList.remove("selected"));
      summary.classList.add("selected");
      if (cur()) cur().selected = false;
      i.selected = true;
      curPath = summary.dataset.path;
      curContent = cur().content;
      document.querySelector("#path").innerText = curPath;
      document.querySelector(".right").innerHTML = curContent;
    });

    details.append(summary);
    if (i.subkeys.length) {
      details.append(treeKeys(i, path + "/" + i.name));
    }
    container.append(details);
  });
  return container;
}
*/


document.querySelector(".left").append(treeKeys(root, "~"));


curPath = "~/kavelin";
curContent = cur().content;
document.querySelector("#path").innerText = curPath;
document.querySelector(".right").innerText = curContent;
