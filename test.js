const a=[]
for (let i=0;i<34;i++){
    a[i]=i
}


for (let i=0;i<7;i++){
    const j=Math.round(Math.random()*a.length)
    console.log(j)
    a.splice(j, 1)
}
