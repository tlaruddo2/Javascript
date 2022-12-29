const todos = [
    {
      id: 1,
      text: 'Take out trash',
      isComplete: false
    },
    {
      id: 2,
      text: 'Dinner with wife',
      isComplete: false
    },
    {
      id: 3,
      text: 'Meeting with boss',
      isComplete: true
    }
  ];
  
  
  // forEach() - Loops through array
  todos.forEach(function(todo, i, a, b) {
    console.log(`${i + 1}: ${todo.text}`);
    console.log(a);
    console.log(b)
  });
  