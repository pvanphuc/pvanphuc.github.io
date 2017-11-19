

```python
import numpy as np
x = [[1, 2, 3],[4,5,6]]
y = [[7,8],[9,10],[11,12]]
z = [1,2]
np.matmul(x, y)
print(np.matmul(y,z))
```

    [23 29 35]



```python
a = [[1, 0], [0, 1]]
b = [[4, 1], [2, 2]]
np.dot(a,b)
```




    array([[4, 1],
           [2, 2]])




```python
c=[[1,2]]
d=[[3],[4],[5]]
np.dot(d,c)
```




    array([[ 3,  6],
           [ 4,  8],
           [ 5, 10]])




```python
a1=[1,2,3]
b1=[4,5,6]
print(np.inner(a1,b1))
print(np.dot(a1,b1))
```

    32
    32



```python
print(np.outer(a1,b1))
```




    array([[ 4,  5,  6],
           [ 8, 10, 12],
           [12, 15, 18]])



$$
A \in R^{m\times n}
$$

