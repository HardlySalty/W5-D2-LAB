import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"



class JobsService{
  async getJobs() {
    const jobs = await dbContext.Jobs.find()
    return jobs
  }

  getJobById(jobId) {
    const job = dbContext.Jobs.findById(jobId)
    if(!job){
      throw new BadRequest("Invalid Job Id")
    }
    return job
  }
  
  async createJob(jobData) {
    const job = await dbContext.Jobs.create(jobData)
    return job
  }

}

export const jobsService = new JobsService()