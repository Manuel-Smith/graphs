Explanation:

The numIslands function takes the grid as input.
It checks for empty or undefined grids.


It defines variables for rows, columns, and island count.

The dfs function is a recursive function that explores connected land.

It checks if the cell is within boundaries and unvisited land.
If valid, it marks the cell as visited ('0') to avoid revisiting.
It then recursively calls itself on the four adjacent cells (down, up, right, left) to explore connected land.
The main loop iterates through the grid.
If a cell is unvisited land ('1'), it calls dfs to explore the island and increments the islandCount.
Finally, the function returns the total number of islands.
This code utilizes DFS to traverse connected landmasses and keeps track of the number of times DFS is called on unvisited land, representing separate islands.