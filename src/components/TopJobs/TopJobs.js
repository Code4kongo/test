import React from 'react'
import { Link } from 'react-router-dom'
import LoadingSpinner from '../../feedback/LoadingSpinner/LoadingSpinner'

const TopJobs = ({topJobs, loadingTopJobs}) => {	
	return ( 
		<div className="widget widget-jobs">
				<div className="sd-title">
					<h3>Top Jobs</h3>
				</div>
				{
					!loadingTopJobs ? <LoadingSpinner/> :	topJobs.map(topJob => {
						return (
							<div className="card  mb-3" style={{maxWidth: '18rem'}} key={topJob._id}>
								<div className="card-header">{topJob.title}</div>
								<div className="card-body text-secondary">
									<h5 className="card-title">
									<Link to={`/apply-job/${topJob._id}`}>
										view job
									</Link>
									</h5>
									<p className="card-text">{topJob.overview} </p>
								</div>
							</div>
						)
					})
				}
		</div>
		);
	
}
 
export default TopJobs ;

