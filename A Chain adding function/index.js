function add (n) {

  const anotherAdd = x => add(n + x);

  anotherAdd.valueOf = () => n;
    
  return anotherAdd;
  
}