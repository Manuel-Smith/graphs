// const depthFirstPrint = (graph, source)=>{
//     const stack = [ source ];

//     while(stack.length){
//         const current = stack.pop();
//         console.log(current);

//         for(let neighbor of graph[current]){
//             stack.push(neighbor);
//         }
//     }
// }

// const depthFirstPrintRec = (graph, source)=>{
//     console.log(source);
//     for(let neighbor of graph[source]){
//         depthFirstPrintRec(graph, neighbor);
//     }
// }

// const breadFirstPrint = (graph, Source) => {
//     const queue = [ Source ]

//     while(queue.length){
//         const current = queue.shift();
//         console.log(current);

//         for(let neighbor of graph[current]){
//             queue.push(neighbor);
//         }
//     }
// }

// const graph = {
//     f: ['g', 'i'],
//     g: ['h'],
//     h: [],
//     i: ['g', 'k'],
//     j: ['i'],
//     k: []
// };

// breadFirstPrint(graph, 'a');
// depthFirstPrintRec(graph, 'a');
// depthFirstPrint(graph, 'a') // abdfce

// breadFirstPrint(graph, 'a); // acbedf

/**
 * HasPass
 *
 * Write a function, hasPath, that takes in an object representing the adjacency list of a directed
 * graph and two nodes (src, dst). The function should return a boolean indicating whether or not
 * there exists a directed path between the source and destination nodes.
 */

// const hasPath = (graph, source, destination) => {
//     const stack = [ source ];

//     while(stack.length){
//         const current = stack.pop();
//         if(current === destination) return true

//         for(let neighbor of graph[current]){
//             stack.push(neighbor);
//         }
//     }

//     return false
// }

// const hasPathRec = (graph, source, destination)=>{
//     if(source === destination) return true
//     console.log(source);
//     for(let neighbor of graph[source]){
//         if(hasPathRec(graph, neighbor, destination) === true) return true
//     }

//     return false
// }

// const result = hasPathRec(graph, 'f', 'k');
// // const result = hasPath(graph, 'j', 'i')
// console.log(result);

// const hasPathBreadthFirst = (graph, src, dst)=>{
//     const queue = [ src ]

//     while(queue.length){
//         const current = queue.shift();
//         if(current === dst) return true

//         for(let neighbor of graph[current]){
//             queue.push(neighbor);
//         }

//     }

//     return false
// }
// console.log(hasPathBreadthFirst(graph, 'f', 'm'));

/**
 * Write a function, undirectedPath, that takes in an array of edges for an undirected graph
 * and two nodes(nodeA, nodeB). The function should return a boolean indicating whether or not
 * there exists a path between nodeA and nodeB.
 */
// const edgeList = [["i", "j"], ["k", "i"], ["m", "k"], ["k", "l"], ["o", "n"]]

// const undirectedPath = (edges, nodeA, nodeB) => {
//     const graph = createGraph(edges)
//     return hasPath(graph, nodeA, nodeB, new Set());
// }

// const hasPath = (graph, src, dest, visited)=>{
//     if(src === dest) return true
//     if(visited.has(src)) return false
//     visited.add(src);

//     for(let neighbor of graph[src]){
//         if(hasPath(graph, neighbor, dest, visited)===true) return true
//     }

//     return false
// }

// const createGraph = (edges)=>{
//     const graph = {}

//     edges.forEach((edge)=>{
//         const [ a, b ] = edge
//         if(!(a in graph)) graph[a] = []
//         if(!(b in graph)) graph[b] = []
//         graph[a].push(b);
//         graph[b].push(a);
//     })

//     return graph
// }

// console.log(undirectedPath(edgeList, "m", 'l'))

/**
 * Problem Statement
 *
 * You're given an undirected graph represented as an edge list. Your task is to
 * determine if there exists a path between two specific nodes in the graph.
 *
 * Input:
 * 1. Edge List: An array of pairs, where each pair `[u, v]` represents an
 * undirected edge between node `u` and node `v`.
 *
 * 2. Nodes to Check: Two integers `start` and `end` representing the nodes
 * between which you need to check for the path.
 *
 *
 *
 * Output:
 * Return `True` if there is a path between `start` and `end`
 * Return `False` otherwise
 * Example
 *
 * Input":
 *
 * edges = [[0, 1], [0, 2], [1, 2], [1, 3], [3, 4]]
 * start = 0
 * end = 4
 *
 * Ans = True
 */

// const edges = [
//     [0, 1],
//     [1, 2],
//     [3, 4],
//     [4, 5],
//     [5, 6]
//   ]

// const findPath = (edges, start, end)=>{
//     const graph = makeGraph(edges);
//     const pathExists = isPathThere(graph, start, end, new Set());
//     return pathExists
// }

// const isPathThere = (graph, start, end, visited)=>{
//     const stack = [ start ]

//     while(stack.length){
//         const current = stack.pop();
//         if(current === end) return true

//         if(!(visited.has(current))){;
//             visited.add(current);

//             for(let neighbor of graph[current]){
//                 stack.push(neighbor);
//             }
//         }
//     }
//     return false
// }

// const makeGraph = (edges) =>{
//     const graph = {}

//     edges.forEach((edge) => {
//         const [a, b ] = edge;
//         if(!(a in graph)) graph[a] = [];
//         if(!(b in graph)) graph[b] = [];
//         graph[a].push(b);
//         graph[b].push(a);
//     })
//     return graph
// }

// console.log(findPath(edges, 0, 2)); // true
// console.log(findPath(edges, 3, 6)); // true
// console.log(findPath(edges, 0, 5)); // false
// console.log(findPath(edges, 1, 4)); // false

/**
 * Connected Components
 *
 *
 * Write a function, connectedComponentsCount, that takes in the adjacency list of an undirected graph.
 * The function should return the number of connected components within the graph
 *
 * connectedComponentCount({
 * 0: [8, 1, 5],
 * 1: [0],
 * 5: [0, 8],
 * 8: [0, 5],
 * 2: [3, 4],
 * 3: [2, 4],
 * 4: [3, 2]})
 */

// const graphObj = {
//     3: [],
//     4: [6],
//     6: [4, 5, 7, 8],
//     8: [6],
//     7: [6],
//     5: [6],
//     1: [2],
//     2: [1]
//   };

// const connectedComponentCount = (graph) =>{
//     const visited = new Set();
//     let count = 0
//     for(let node in graph){
//         if(explore(graph, node, visited) === true) count++
//     }
//     return count
// }

// const explore = (graph, current, visited)=>{
//     if(visited.has(String(current))) return false
//     visited.add(String(current));

//     for(let neighbor of graph[current]){
//         explore(graph, neighbor, visited);
//     }
//     return true
// }

// console.log(connectedComponentCount(graphObj))

/* Write a function, connectedComponentsCount, that takes in the adjacency list of an undirected graph.
 * The function should return the number of connected components within the graph
 *
 * connectedComponentCount({
 * 0: [8, 1, 5],
 * 1: [0],
 * 5: [0, 8],
 * 8: [0, 5],
 * 2: [3, 4],
 * 3: [2, 4],
 * 4: [3, 2]})
 *
 *
 */

/**
 * Write a function, connectedComponentCount, that takes in the adjacency list of an undirected graph.
 * The function should return the number of connected components within the graph.
 *
 *
 */

const adjacentList = {
  0: [],
  1: [],
  2: [],
  3: [],
  4: [],
  5: [],
  6: [],
  7: [],
  8: [],
  9: [],
};

// const connectedComponentCount = (graph) => {
//     const visited = new Set();
//     let count = 0;
//     for(node in graph){
//         if(explore(graph, node, visited)===true) count++
//     }
//     return count
// }

// const explore = (graph, current, visited) =>{
//     if(visited.has(String(current))) return false
//     visited.add(String(current))

//     for(let neighbor of graph[current]){
//         explore(graph, neighbor, visited);
//     }

//     return true
// }

// console.log(connectedComponentCount(adjacentList))

/**
 * Write a function, largestComponent, that takes in the adjacent list of an undirected graph.
 * The funciton should return the size of the largest connected component in the graph.
 *
 *
 *
 * largestComponent({
 * 0: ['8', '1', '5'],
 * 1: ['0'],
 * 5: ['0', '8'],
 * 8: ['0', '5'],
 * 2: ['3', '4'],
 * 3: ['2', '4'],
 * 4: ['3', '2']})
 */

// const graphOjb = {
//      0: ['8', '1', '5'],
//      1: ['0'],
//      5: ['0', '8'],
//      8: ['0', '5'],
//      2: ['3', '4'],
//      3: ['2', '4'],
//      4: ['3', '2']}

// const largestComponent = (graph)=>{
//     const visited = new Set();
//     let size = 0
//     for(let node in graph){
//         let componentSize = exploreSize(graph, node, visited);
//         if(size < componentSize) size=componentSize
//     }
//     return size
// }

// const exploreSize = (graph, current, visited)=>{
//     if(visited.has(String(current))) return 0

//     visited.add(String(current));
//     let step = 1
//     for(let neighbor of graph[current]){
//         step+= exploreSize(graph, neighbor, visited);
//     }
//     return step
// }

// console.log(largestComponent(graphOjb))

/**
 * Write a function, shortestPath, that takes in an array of edges for an undirected graph and
 * two nodes (nodeA, nodeB). The function should return the length of the shortest path between
 * A and B. Consider the length as the number of edges in the path, not the number of nodes.
 * If there is no path between A and B, then return -1.
 */

// const edges = [
//     ['w', 'x'],
//     ['x', 'y'],
//     ['z', 'y'],
//     ['z', 'v'],
//     ['w', 'v']
// ]

// const shortestPath = (edges, nodeA, nodeB) =>{
//     const graph = createGraph(edges)
//     const visited = new Set([nodeA, 0])
//     const queue = [[nodeA, 0]]

//     while(queue.length){
//         const [node, distance] = queue.shift();
//         if(node === nodeB) return distance

//         for(let neighbor of graph[node]){
//             if(!visited.has(neighbor)){
//                 visited.add(neighbor);
//                 queue.push([neighbor, distance+1])

//             }
//         }
//     }

//     return -1
// }

// const createGraph = (edges)=>{
//     const graph = {}

//     for(let neighbor of edges){
//         const [a, b ] = neighbor
//         if(!(a in graph)) graph[a]=[];
//         if(!(b in graph)) graph[b]=[];
//         graph[a].push(b);
//         graph[b].push(a);
//     }
//     return graph
// }

// console.log(shortestPath(edges, 'w', 'z'));

/**
 * Island count
 *
 *
 *
 * Write a function, islandCount, that takes in a grid containing Ws and Ls. W represents water and L represents land.
 * The function should return the number of islands on the grid. An island is a vertically or horizontally
 * connected region of land.
 */

// const grid = [
//     ['W', 'L', 'W', 'W', 'W'],
//     ['W', 'L', 'W', 'W', 'W'],
//     ['W', 'W', 'W', 'L', 'W'],
//     ['W', 'W', 'W', 'L', 'W'],
//     ['L', 'W', 'W', 'L', 'L'],
//     ['L', 'L', 'W', 'W', 'W']
// ]

// const islandCount = (grid)=>{

//     const visited = new Set();
//     for(let r = 0; r<grid.length; r++){
//         for(let c=0; c<grid[0].length; c++){
//             explore(grid, r, c, visited);
//         }
//     }
// }

// const explore = (grid, r, c, visited)=>{
//     const ps = r + ',' + c;

// }

// function numIslands(grid) {
//     // Handle empty or undefined grid
//     if (!grid || !grid.length) return 0;

//     const rows = grid.length;
//     const cols = grid[0].length;
//     let islandCount = 0;

//     const dfs = (row, col) => {
//       // Check if cell is within grid boundaries and unvisited land
//       if (row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] === '0') {
//         return;
//       }

//       // Mark cell as visited
//       grid[row][col] = '0';

//       // Explore connected land in all 4 directions (DFS recursively)
//       dfs(row + 1, col); // Down
//       dfs(row - 1, col); // Up
//       dfs(row, col + 1); // Right
//       dfs(row, col - 1); // Left
//     }

//     // Iterate through the grid
//     for (let row = 0; row < rows; row++) {
//       for (let col = 0; col < cols; col++) {
//         if (grid[row][col] === '1') {
//           // Encountered unvisited land, start DFS and increment island count
//           dfs(row, col);
//           islandCount++;
//         }
//       }
//     }

//     return islandCount;
//   }

// Example usage

// console.log(numIslands(grid)); // Output: 1

// const grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","1","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"],
//   ["0","0","0","0","0"],
//   ["0","0","1","0","0"],
// ];

// const numIsland = (grid)=>{
//   // Handle this if the grid is undefined or empty
//   if(!grid.length || !grid[0].length) return 0

//   // Number of rows and colums
//   const rows = grid.length;
//   const cols = grid[0].length;

//   // counting the number of islands
//   let islandCount = 0;

//   const dfs = (row, col)=>{
//     // Check if the rows and columns are within the boundaries or if already visited.
//     if(row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col]==='0') return
//     grid[row][col] = '0';

//     // Explore all the connected islands
//     dfs(row+1, col); // Up
//     dfs(row-1, col); // Down
//     dfs(row, col+1); // Right
//     dfs(row, col-1); // Left

//   }

//   for(let row = 0; row < rows; row++){
//     for(let col = 0; col < cols; col++){
//       if(grid[row][col]==='1'){
//         dfs(row, col);
//         islandCount++
//       }
//     }
//   }

//   return islandCount;
// }

// console.log(numIsland(grid));

// const grid = [
//   ["1", "1", "0", "0", "0"],
//   ["1", "1", "0", "1", "0"],
//   ["0", "0", "1", "0", "0"],
//   ["0", "0", "0", "1", "1"],
//   ["0", "0", "0", "0", "0"],
//   ["0", "0", "1", "0", "0"],
// ];

// const smallestIsland = (grid) => {
//   //Check if the grid is empty or undefined
//   if (!grid.length || !grid[0].length) return 0;

//   const rows = grid.length;
//   const cols = grid[0].length;

//   const dfs = (row, col) => {
//     const visited = "0";

//     // Checking if the rows and cols are out of bounds and not visited.
//     if (
//       col < 0 ||
//       row < 0 ||
//       row >= rows ||
//       col >= cols ||
//       grid[row][col] === visited
//     )
//       return 0;
//     grid[row][col] = "0";

//     let size = 1;
//     // Exploring connected Islands
//     size += dfs(row + 1, col);
//     size += dfs(row - 1, col);
//     size += dfs(row, col + 1);
//     size += dfs(row, col - 1);
//     return size;
//   };

//   let minSize = Infinity;

//   for (let row = 0; row < rows; row++) {
//     for (let col = 0; col < cols; col++) {
//       if (grid[row][col] === "1") {
//         const islandSize = dfs(row, col);
//         if (minSize > islandSize) minSize = islandSize;
//       }
//     }
//   }

//   return minSize;
// };

// console.log(smallestIsland(grid));

/**
   * The dungeon has a size of R x C and you start at cell ‘s’ and there’s an exit at cell ‘E’.
A cell full of rock is indicated by a ‘#’ and empty cells are represented by a ‘.’

[S . . # . . .]
[. # . . . # . ]
[. # . . . . . ]
[ . . # # . . . ]
[# . # E . # .]

*/

const grid = [
  ["S", ".", ".", "#", ".", ".", "."],
  [".", "#", ".", ".", ".", "#", "."],
  [".", "#", ".", ".", ".", ".", "."],
  [".", ".", "#", "#", ".", ".", "."],
  ["#", "#", "#", "E", ".", "#", "."],
];

const findPath = (grid, start, destination) => {
  const rows = grid.length;
  const cols = grid[0].length;
  const path = [];
  const visited = new Set();
  
  const dfs = (row, col) => {
    // Check bounds and if cell is blocked or already visited
    if (row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] === '#' || visited.has(`${row},${col}`)) {
      return false;
    }
    // Check if the destination is reached
    if (grid[row][col] === destination) {
      path.push({row, col});
      return true;
    }
    
    // Mark the cell as visited
    visited.add(`${row},${col}`);
    path.push({row, col});
    
    // Explore neighbors in the order of Down, Up, Right, Left
    if (dfs(row + 1, col) || // Down
        dfs(row - 1, col) || // Up
        dfs(row, col + 1) || // Right
        dfs(row, col - 1)) { // Left
      return true;
    }
    
    // Backtrack if none of the paths worked
    path.pop();
    return false;
  };
  
  // Find the start position and initiate DFS
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === start) {
        if (dfs(row, col)) {
          return path;
        } else {
          return null; // No path found
        }
      }
    }
  }
};

console.log(findPath(grid, 'S', 'E'));
// console.log(grid);
// . . . #
// . # . .
// . . . .
// # . # E
// S . . .