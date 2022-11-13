import React, { useState } from 'react';
import AddTodo from '../components/AddTodo';
import '../styles/home.css';
const Home = () => {
    const [all, setAll] = useState(true);

	return (
		<div className="todos_container">
			<div className="todos_wrapper">
				<h1> Todo App</h1>
				<header className="todos-headers">
					<ul type="none">
						<div>
							<li>All</li>
							<section className="all_todos todos">
								<AddTodo />
								<form>
									<div className='form-control'>
										<input type="checkbox" name="todo" className="task" />
										<label htmlFor="todo">do coding challenge</label>
									</div>
									<div className='form-control'>
										<input type="checkbox" name="todo" className="task" />
										<label htmlFor="todo">do coding challenge</label>
									</div>
									<div className='form-control'>
										<input type="checkbox" name="todo" className="task" />
										<label htmlFor="todo">do coding challenge</label>
									</div>
								</form>
							</section>
						</div>
						<div>
							<li>Active</li>
							<section className="active_todos todos">
								<AddTodo />
								<form>
									<div className='form-control'>
										<input type="checkbox" name="todo" className="task" />
										<label htmlFor="todo">do coding challenge</label>
									</div>
									<div className='form-control'>
										<input type="checkbox" name="todo" className="task" />
										<label htmlFor="todo">do coding challenge</label>
									</div>
									<div className='form-control'>
										<input type="checkbox" name="todo" className="task" />
										<label htmlFor="todo">do coding challenge</label>
									</div>
								</form>
							</section>
						</div>

						<div>
							<li>Completed</li>
							<section className="completed_todos todos">
								<form>
									<div className='form-control'>
										<input type="checkbox" name="todo" className="task" />
										<label htmlFor="todo">do coding challenge</label>
									</div>
									<div className='form-control'>
										<input type="checkbox" name="todo" className="task" />
										<label htmlFor="todo">do coding challenge</label>
									</div>
									<div className='form-control'>
										<input type="checkbox" name="todo" className="task" />
										<label htmlFor="todo">do coding challenge</label>
									</div>
								</form>
							</section>
						</div>
					</ul>
				</header>
			</div>
		</div>
	);
};

export default Home;
