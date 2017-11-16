---
layout: page
title: Linear Algebra Review
permalink: machine-learning/linear_algebra_review/
---

Table of Contents:

- [Matrix Multiplication](#matrixmultiplication)



<a name='matrixmultiplication'></a>
### Matrix Multiplication

$$
A \in R^{m\times n}
$$

$$
B \in R^{n\times p}
$$

$$
C=AB\in R^{m\times p}
$$

Where:

$$
C_{ij}=\sum_{k=1}^{n}A_{ik}B_{kj}
$$

**Examples**

$$
\begin{bmatrix}
1 & 2 & 3\\ 
4 & 5 & 6
\end{bmatrix}
\times 
\begin{bmatrix}
7 & 8\\ 
9 & 10\\ 
11 & 12 
\end{bmatrix}
= 
\begin{bmatrix}
58 & 64\\ 
139 & 154
\end{bmatrix}
$$

```python
import numpy as np
x = [[1, 2, 3],[4,5,6]]
y = [[7,8],[9,10],[11,12]]
np.dot(x, y)

#array([[ 58,  64],
#      [139, 154]])

```

