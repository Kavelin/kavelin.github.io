function isLocalStorageAvailable() {
  var test = 'test';
  try {
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }

}
let root = new Key(

  "root",
  "",
  new Key(
    "kavelin",
    "",
    new Key(
      "coding",
      "I am a programmer attending GMU for my BS in comp sci!",
      new Key("github", "<div contenteditable=false><a href=\"https://github.com/Kavelin/\">https://github.com/Kavelin/</a></div><br><br><div></div>")

    ),
    new Key("about_me", "wtf"),
    new Key(
      "page",
      "",
      new Key("primary", "white"),
      new Key("secondary", "#debfa2")
    )
  )
);

root.expanded = true;
root.path = "~";
root.subkeys[0].selected = true;
root.subkeys[0].expanded = true;

if (isLocalStorageAvailable()) {

} else {


}


