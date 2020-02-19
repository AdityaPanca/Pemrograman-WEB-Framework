let getMember = new Promise((resolve, reject)=>{
    if (true){
        resolve('berhasil!')
    }
    reject('gagal')

}).then((msg) => {
    console.log('ini dalam then '+ msg)
}).catch((msg)=> {
    console.log('ini dalam catch '+ msg)

})

console.log(getMember)