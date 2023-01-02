const posts = [
    {title: 'Post one', body: "This is post one"},
    {title: 'Post two', body: "This is post two"},
];

//mimic how sever work to create blog post
//taking sth from server takes few seconts
function getPosts(){ 
    setTimeout(() => { 
        let output = '';
        posts.forEach((post,index) => {
            output += `<li>${post.title}</li>`; 
        });
        document.body.innerHTML = output;
    }, 1000);   //ms 1000ms = 1s
}

//This is why we use call back 
//without callback, list will not be updated
function createPost(post, callback){ 
    setTimeout(()=>{
        posts.push(post);
        callback();
    },2000); 
}

// getPosts();
createPost({title:'Post three', body:'This is Post three'}, getPosts)

 






