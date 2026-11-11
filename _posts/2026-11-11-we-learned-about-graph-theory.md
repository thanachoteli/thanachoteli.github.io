---
layout: post
title: "Graph Theory"
date: 2026-11-06 10:00:00 +0700
categories: personal
description: "Basic theory of graph that I learned for today's discrete class"
---

# Graph Theory
In today discrete structure class, we learned about the basic of graph theory. We just went over the basic like the definiton and theorem. For defintion, the graph $G$ is defined as 

$$
G = (V,E)
$$

where $V$ is the non-empty set of verticies and $E$ is the 2 subset of items that represent edges
Another is the **degree**, which is a number of edges incident on a node

The theorem that I found the most interesting is the **hand-shaking theorem**. It is a way to relate the total degrees with the number of edges of graph. If $G$ is a simple undirected graph, then the below relation is true

$$
2m = \sum_{v\in V} \text{degree}(v) 
$$

where $m$ is the edges and $V$ is the set of verticies. Simply, the total degree of all verticies in set $V$ of graph $G$ is $2m$. 

What I found hand-shaking theorem quite fascinating is because it is seem so magical. We know that each edge has two nodes connected. So we can implies the above relation

Moreover, we can link the hand-shaking theorem to the complete graph. 
A **complete graph** is defined to be a simple undirected graph in which every pair of distinct vertices is connected by a unique edge. For example, the 5-node complete graph is a shape of the star. The total edges is $4+3+2+1=10$. Since each node contains n-1 edges. Everytime we add each edge from each node, we must degree by the number we alread count, hence the decrement. In general, we can defined the number of edges as 
$$
m = \sum_{k=1}^{n-1} = 1 + 2 + \ldots + n-1 = \frac{n(n-1)}{2} 
$$
This is where we can use the hand-shaken theorem to find the above formula using alternative method. Since the graph is complete, each vertex has n-1 degree and there are n nodes, so
$$
2m = n(n-1) \implies m=\frac{n(n-1)}{2}
$$
