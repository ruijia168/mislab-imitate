const promise = new Promise((resolve,reject) => {
    if (true) {
      resolve("成功");
    } else {
      reject("失败");
    }
  })
  // 1
  promise
    .then((message) => {
          console.log(message);
  },(reason) => {
          console.log(reason);
  })
      .then((message) => {
        console.log(message) // undefined
      })
  // 2
  promise
    .then((message) => {
          console.log(message);
        return "小天才"
  },(reason) => {
          console.log(reason);
  })
      .then((message) => {
        console.log(message) // 小天才
      })
  // 3
  promise
    .then((message) => {
          console.log(message);
        return new Promise((resolve,reject) => {
          resolve("小天才成功了")
      })
    },(reason) => {
        console.log(reason);
    })
      .then((message) => {
        console.log(message) // 小天才成功了
      })
  