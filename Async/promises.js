const posts = [
    {title: 'Post one', body: "This is post one"},
    {title: 'Post two', body: "This is post two"},
];

function getPosts(){ 
    setTimeout(() => { 
        let output = '';
        posts.forEach((post,index) => {
            output += `<li>${post.title}</li>`; 
        });
        document.body.innerHTML = output;
    }, 1000);   //ms 1000ms = 1s
}

//return promise then we use 'dot then' syntax
//create response here
function createPost(post){ 
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            posts.push(post);

            // const error = true; 
            const error = false; 

            if (!error){
                resolve(); //call getPosts
            }else{
                reject('Error: something went wrong');
            }


        },2000); 

    });
}

//dealing response
// createPost({title:'Post three',body:'This is post three'})
//     .then(getPosts)  //not error
//     .catch(err => console.log(err));  //if error

// Promise.all 
const promise1 = Promise.resolve("Hello World");
const promise2 = 10; 
const promise3 = new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,'Goodbye')
});

// fetch return promise
// without .json, not get real data
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then (res => res.json());

Promise.all([promise1,promise2,promise3,promise4]).then((value)=>{
    console.log(value);
});