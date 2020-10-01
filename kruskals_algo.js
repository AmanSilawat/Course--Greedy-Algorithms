/*
*Kruskal’s algorithm*

When edges connects all vertices in a graph and form a tree then it is known as spanning tree. While connecting edges no cycle should be formed. A minimum spanning tree is the spanning tree whose sum of edge weights is as small as possible.


Kruskal’s algorithm says that always select minimum cost edge but if it is forming a cycle don’t include that edge.

*Steps for finding MST using Kruskal’s algorithm
1. Sort all the edges in non-decreasing order of their weight.
2. Pick the smallest edge. Check if it forms a cycle with the spanning tree formed so far. If cycle is not formed, include this edge. Else, discard it.
3. Repeat step#2 until there are (V-1) edges in the spanning tree.

calculate weight of Minimum spanning tree


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


*MST:Minimum Spanning Tree( Kruskal’s algorithm )

      2
      |
      ▼
    1---2
       ∕|
   4->/ |<-6
     ∕  |
    4   3

*/