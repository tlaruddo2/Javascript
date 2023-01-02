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

//async, await - elegant way to handle promises
// async function init(){ 
//     //wait this untill done, then goto getPosts()
//     await createPost({title:'Post three', body:'This is Post three'})

//     getPosts();

// }

// init();

//async, await with fetch 
async function fetchUsers(){
    const res = await fetch ('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();

    console.log(data);
}

fetchUsers();