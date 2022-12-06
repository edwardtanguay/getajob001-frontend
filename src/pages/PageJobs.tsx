import _jobs from '../data/jobs.json';

type Job = {
	id: number;
	title: string;
	company: string;
	description: string;
	url: string;
	skills: string;
	todo: string;
};

const jobs: Job[] = _jobs as any[];

export const PageJobs = () => {
	return (
		<div className="pageJobs">
			<div className="jobs">
				<h2>There are {jobs.length} jobs:</h2>
				{jobs.map((job: Job) => {
					return (
						<div className="job">
							<div className="title">
								<a href={job.url} target="_blank">
									{job.title}
								</a>
							</div>
							<div className="company">{job.company}</div>
							<div className="description">{job.description}</div>
							<div className="skills">{job.skills}</div>
							<div className="todo">{job.todo}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
