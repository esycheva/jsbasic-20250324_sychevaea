function ucFirst(str) {
  if (!str) return str;
  if (str.length == 1) return str.at(0).toUpperCase();

  return str.at(0).toUpperCase() + str.slice(1);
}
