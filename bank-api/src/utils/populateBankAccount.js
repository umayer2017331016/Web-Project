// const Account = require('../models/accountModel')


// const accounts = async ()=>{
//     try{
//         const ecom= new Account({holderName:"E-Commerce",accountNumber:"12345"});
//         const customer = new Account({holderName:"Ratul",accountNumber:"67890"});
//         const supplier1 = new Account({holderName:"Abir1",accountNumber:"11223"});
//         const supplier2 = new Account({holderName:"Abir2",accountNumber:"99999"});
//         const supplier3 = new Account({holderName:"Abir3",accountNumber:"88888"});
//         await Promise.all([ecom.save(),customer.save(),supplier1.save(),supplier2.save(),supplier3.save()])
//         // await ecom.save()
//         // await customer.save()
//         // await supplier.save()

//     }catch(e){
//         console.log(e.message)
//     }
// }

// // accounts().then(()=>{

// // })

// (async()=>{
//     accounts()
//     console.log("Accounts created");
// })

