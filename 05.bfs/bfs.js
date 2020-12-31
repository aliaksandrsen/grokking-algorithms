let graph = {};
graph["you"] = ["alice", "bob", "claire"];
graph["bob"] = ["anuj", "peggy"];
graph["alice"] = ["peggy"];
graph["claire"] = ["thom", "jonny"];
graph["anuj"] = [];
graph["peggy"] = [];
graph["thom"] = [];
graph["jonny"] = [];

// let graph = {};
// graph["you"] = ["alice"];
// graph["alice"] = ["you"];

let searchQueue = [];

const addToQueue = (list, queue) => {
  for (let i = 0; i < list.length; i += 1) {
    queue.push(list[i]);
  }
  return queue;
};

const personIsSeller = (name) => name.slice(-1) === "m";

const findMangoSeller = (searchQueue, graph, startPoint) => {
  searchQueue = addToQueue(graph[startPoint], searchQueue);
  let searched = [];

  while (searchQueue.length !== 0) {
    let person = searchQueue.shift();
    if (!searched.includes(person)) {
      if (personIsSeller(person)) {
        return person + " is a mango seller";
      } else {
        searchQueue = addToQueue(graph[person], searchQueue);
        searched.push(person);
      }
    }
  }

  return "nobody is a mango seller";
};

console.log(findMangoSeller(searchQueue, graph, "you"));
