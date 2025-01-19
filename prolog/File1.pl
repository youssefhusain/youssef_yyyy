%fact
parant(ali,ahmad).
parant(ali,aslam).
parant(ali,roaa).
%rule
sip(X,Y):-parant(Z,X),parant(Z,Y),X\=Y.
