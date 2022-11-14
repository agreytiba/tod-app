import { useState, useEffect } from 'react';

import { MdDeleteOutline } from 'react-icons/md';
import '../styles/home.css';
const Home = () => {
	// set the diplay of header & content
	const [ isAll, setIsAll ] = useState(true);
	const [ isActive, setIsActive ] = useState(false);
	const [isComplete, setIsComplete] = useState(false);
	
	// input and data from input & localstorage
	const [ todos, setTodos ] = useState([]);
	const [ todoItem, setTodoItem ] = useState([]);
	const [taskCompleted, setTaskCompleted] = useState(false);
	

	// show all todos
	const handleAll = () => {
		setIsAll(true);
		setIsActive(false);
		setIsComplete(false);
	};
	// show completed tasks
	const handleActive = () => {
		setIsAll(false);
		setIsActive(true);
		setIsComplete(false);
	};
	// show  completed tasks
	const handleComplete = () => {
		setIsAll(false);
		setIsActive(false);
		setIsComplete(true);
	};
	// handle submit of data
	const handleSubmit = (e) => {
		e.preventDefault();
		if (todoItem) {
			let uniqueId = new Date().getTime().toString(36) + new Date().getUTCMilliseconds();
			let newTodoItem = {
				id: uniqueId,
				todo: todoItem,
				complete: false,
				active:true,
			};
			setTodos([newTodoItem, ...todos]);
			setTodoItem('');
		} else {
			setTodoItem('');
		}
	};

//get the todos on localstorage
	useEffect(() => {
		const todos = JSON.parse(localStorage.getItem('todos'));
		if (todos) {
			setTodos(todos);
		}
	}, []);

	// completed task toggle
	const toggleComplete = (id) => {
		todos.find((todo) => {
			if (todo.id === id) {
				todo.complete = !todo.complete;
			}
			return setTodos([ ...todos ]);
		});
    setTaskCompleted(true)
	};


	//save todos from local storage
	useEffect(
		() => {
			localStorage.setItem('todos', JSON.stringify(todos));
		},
		[ todos ]
	);




	

	return (
		<div className="todos_container">
			<div className="todos_wrapper">
				<h1> Todo App</h1>
				<header className="todos-headers">
					<ul type="none">
						<div className="todo-category">
							<li onClick={handleAll} className={isAll && 'active'}>
								All
							</li>
							{isAll && (
								<section className="all_todos todos">
									<form className="add_todo" onSubmit={handleSubmit}>
										<input
											type="text"
											placeholder="add details"
											value={todoItem}
											onChange={(e) => setTodoItem(e.target.value)}
										/>
										<button type="submit">ADD</button>
									</form>
									{/* renderin all todos */}
									<div className="tasks">
										{todos.map(({id,todo}) => {
											return(<div className="form-control" key={id}>
												<input type="checkbox" name="todo" className="task" onClick={() => toggleComplete(id)} />
												<label htmlFor="todo">{todo}</label>
											</div>)
										})
										}
									
									</div>
								</section>
							)}
						</div>
						<div className="todo-category">
							<li onClick={handleActive} className={isActive && 'active'}>
								Active
							</li>

							{isActive && (
								<section className="active_todos todos">

									{/* rendering all active todos */}
								<div className="tasks">
										{todos.map(({id,todo,active}) => {
											
											return (<>{ active&&<div className="form-control" key={id}>
												
													<input type="checkbox" name="todo" className="task" onClick={() => toggleComplete(id)} />
													<label htmlFor="todo">{todo}</label>
												</div>}</>)
										})
										}
									
									</div>
								</section>
							)}
						</div>
						<div className="todo-category">
							<li onClick={handleComplete} className={isComplete && 'active'}>
								Completed
							</li>

							{isComplete && (
								<section className="completed_todos todos">
									{ taskCompleted &&<div>
										<div className="form-control">
											<div>
												<input type="checkbox" name="todo" className="task" />
												<label htmlFor="todo">do coding challenge</label>
											</div>
											<MdDeleteOutline className="delete" />
										</div>
									
										<button className="delete_all">
											<MdDeleteOutline /> delete all
										</button>
									</div>}
								</section>
							)}
						</div>
					</ul>
				</header>
			</div>
		</div>
	);
};

export default Home;
