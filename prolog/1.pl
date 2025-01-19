parant(ali,[ahmad,aslam,sara,roaa]).
printa(X):-parant(ali,X),write(X).
par(X):-parant(_,Y),member(X,Y).
