/*

*Prim’s algorithm*

https://www.geeksforgeeks.org/prims-minimum-spanning-tree-mst-greedy-algo-5/

Prim’s algorithm is a greedy algorithm that finds a minimum spanning tree for a weighted undirected graph. This means it finds a subset of the edges that forms a tree that includes every vertex, where the total weight of all the edges in the tree is minimized.

1. Spanning Tree: Given a connected and undirected graph, a spanning tree of that graph is a sub-graph that is a tree and concepts all the vertices together.(mean: not conected any cycle.)

2. Minimum Spanning Tree(MST): The spannig tree of the graph whose sum of weights of edges is minimum.

*Connected Undirected Graph
      2
      |
      ▼
    1---2
    |  ∕|
9-> | / |<-6      and mid line is 4
    |∕  |
    4---3
      ▲
      |
      11



*Spanning Tree(T1)

    1   2
    |   |
9-> |   |<-6
    |   |
    4---3
      ▲
      |
      11


*MST:Minimum Spanning Tree(T2)

      2
      |
      ▼
    1---2
       ∕|
      / |<-6      and mid line is 4
     ∕  |
    4   3



Algorithm 
1) Create a set mstSet that keeps track of vertices already included in MST. 
2) Assign a key value to all vertices in the input graph. Initialize all key values as INFINITE. Assign key value as 0 for the first vertex so that it is picked first. 
3) While mstSet doesn’t include all vertices 
….a) Pick a vertex u which is not there in mstSet and has minimum key value. 
….b) Include u to mstSet. 
….c) Update key value of all adjacent vertices of u. To update the key values, iterate through all adjacent vertices. For every adjacent vertex v, if weight of edge u-v is less than the previous key value of v, update the key value as weight of u-v
The idea of using key values is to pick the minimum weight edge from cut. The key values are used only for vertices which are not yet included in MST, the key value for these vertices indicate the minimum weight edges connecting them to the set of vertices included in MST. 



*Prim’s vs Kruskal’s algorithm*
?Prim’s algo
1. A greedy algo that finds a minimum spanning tree for a weighted undirected graph.
2. Generates the minimum spanning tree starting from the root vertex. (according to min weight select adjacent(near) vertex)
3. Selects the root vertex.
4. Selects the shortest edge connected to the root vertex.

?Kruskal's algo
1. A minimum spanning tree algo which finds an edge of the least possible weight that connects any two trees in the forest.
2. Generates the minimum spanning tree starting  form the least weight edge.
3. Select the sortest edge.
4. Selects the next shortest dege.



*/