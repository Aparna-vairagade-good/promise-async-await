//Q2.
setTimeout(() => {
let count=1;
    console.log(count++);
    setTimeout(() => {
        console.log(count++);
        setTimeout(() => {
            console.log(count++);
            setTimeout(() => {
                console.log(count++);
                setTimeout(() => {
                    console.log(count++);
                    setTimeout(() => {
                        console.log(count++);
                        setTimeout(() => {
                            console.log(count++);
                        }, 7000);
                    }, 6000);
                }, 5000);
            }, 4000);
        }, 3000);
    }, 2000);
}, 1000);

//Q3.
setTimeout(() => {

    let count=1;
        console.log(1);
        setTimeout(() => {
            console.log(2);
            setTimeout(() => {
                console.log(3);
                setTimeout(() => {
                    console.log(4);
                    setTimeout(() => {
                        console.log(5);
                        setTimeout(() => {
                            console.log(6);
                            setTimeout(() => {
                                console.log(7);
                            }, 7000);
                        }, 6000);
                    }, 5000);
                }, 4000);
            }, 3000);
        }, 2000);
    }, 1000);
    
    //Q4.
    let promise = new Promise(function (resolve, reject) {
        let a = 20;
        if (a > 9) {
            resolve("Promise Resolved");
        }
        else reject("Promise Rejected");
    })
    promise.then((data) => { console.log(data); }).catch((data) => { console.log(data); })

//Q5.
function callbackFunction(name) { 
    console.log('Hello ' + name); 
    } 
    function outerFunction(callback) { 
    let name = prompt('hello we write a callback function'); 
    callback(name); 
    } 
    outerFunction(callbackFunction); 
    
    //Q6.
    function callbackhell() {   
        setTimeout(() => { 
        let count=1; 
                console.log(1);
                setTimeout(() => { 
                    console.log(2); 
                    setTimeout(() => { 
                        console.log(3); 
                        setTimeout(() => { 
                            console.log(4); 
                            setTimeout(() => { 
                                console.log(5); 
                                setTimeout(() => {
                                    console.log(6); 
                                    setTimeout(() => { 
                                        console.log(7); 
                                    }, 7000); 
                                }, 6000); 
                            }, 5000); 
                        }, 4000); 
                    }, 3000);
                }, 2000);
            }, 1000); 
    }
    callbackhell();

    //Q7.
    function mypromise(num){
        let promise=new Promise((resolve, reject) => {
            if(num%2==0){
                resolve("Its Even Number")
            }
            else{
                reject("Its Odd Number")
            }
        })
        return promise
        }
        async function Getresult(){
            try{
                let data=await mypromise(8)
                console.log(data)
            }catch(err){
                console.log(err)
            }
        }
        Getresult()

    
