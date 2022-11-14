import { useState, useEffect } from 'react';

import { MdDeleteOutline } from 'react-icons/md';
import '../styles/home.css';
const Home = () => {
	const [ isAll, setIsAll ] = useState(true);
	const [ isActive, setIsActive ] = useState(false);
	const [ isComplete, setIsComplete ] = useState(false);
	const [ todos, setTodos ] = useState([]);
	const [ todoItem, setTodoItem ] = useState("");
	const [ error, setError ] = useState();

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
				complete: false
			};
			setTodos([newTodoItem, ...todos]);
			
			setTodoItem('');
		} else {
			setError(true);
			setTodoItem('');
		}
	};

//save todos from local storage
	useEffect(
		() => {
			localStorage.setItem('todos', JSON.stringify(todos));
		},
		[ todos ]
	);

//get the todos on localstorage
	useEffect(() => {
		const todos = JSON.parse(localStorage.getItem('todos'));
		console.log(todos)
		if (todos) {
			setTodos(todos);
		}
	}, []);



	

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
									<div className="tasks">
										{todos.map((id,todo,complete) => {
											return(<div className="form-control" key={id}>
												<input type="checkbox" name="todo" className="task" />
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
									{/* <form className="add_todo" onSubmit={handleSubmit}>
										<input
											type="text"
											placeholder="add details"
											value={todoItem}
											onChange={(e) => setTodoItem(e.target.value)}
										/>
										<button type="submit">ADD</button>
									</form> */}
									<div className='tasks'>
										<div className="form-control">
											<input type="checkbox" name="todo" className="task" />
											<label htmlFor="todo">do coding challenge</label>
										</div>
										<div className="form-control">
											<input type="checkbox" name="todo" className="task" />
											<label htmlFor="todo">do coding challenge</label>
										</div>
										<div className="form-control">
											<input type="checkbox" name="todo" className="task" />
											<label htmlFor="todo">do coding challenge</label>
										</div>
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
									<form>
										<div className="form-control">
											<div>
												<input type="checkbox" name="todo" className="task" />
												<label htmlFor="todo">do coding challenge</label>
											</div>
											<MdDeleteOutline className="delete" />
										</div>
										<div className="form-control">
											<div>
												<input type="checkbox" name="todo" className="task" />
												<label htmlFor="todo">do coding challenge</label>
											</div>
											<MdDeleteOutline className="delete" />
										</div>
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
									</form>
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
