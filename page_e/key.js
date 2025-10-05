class Key {
  constructor(name, content, ...subkeys) {
    this.name = name;
    this.content = content;
    this.expanded = false;
    this.selected = false;
    this.subkeys = subkeys || null;
    this.path = "";
  }
  getSubKey(name) {
    return this.subkeys.find((i) => i.name == name) || null;
  }
}



