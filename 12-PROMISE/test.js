let p = new Promise((resolve,reject)=>{
  resolve("yes")
});

p.then(
  (res)=>{
    console.log(res);
  }
).catch((reason,data)=>{
  console.log("catch失败并且抛出原因",reason);
})


Promise.all([p]).then((res)=>{
  console.log(res);
})