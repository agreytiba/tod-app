import React, { useState } from 'react';
import AddTodo from '../components/AddTodo';
import { MdDeleteOutline } from 'react-icons/md';
import '../styles/home.css';
const Home = () => {
	const [ isAll, setIsAll ] = useState(true);
	const [ isActive, setIsActive ] = useState(false);
	const [ isComplete, setIsComplete ] = useState(false);

	// handle all todos
	const handleAll = () => {
		setIsAll(true);
		setIsActive(false);
		setIsComplete(false);
	};
	const handleActive = () => {
		setIsAll(false);
		setIsActive(true);
		setIsComplete(false);
	};
	const handleComplete = () => {
		setIsAll(false);
		setIsActive(false);
		setIsComplete(true);
	};
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
									<AddTodo />
									<form>
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
									</form>
								</section>
							)}
						</div>
						<div className="todo-category">
							<li onClick={handleActive} className={isActive && 'active'}>
								Active
							</li>

							{isActive && (
								<section className="active_todos todos">
									<AddTodo />
									<form>
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
									</form>
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
										<button className='delete_all'><MdDeleteOutline/> delete all</button>
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
