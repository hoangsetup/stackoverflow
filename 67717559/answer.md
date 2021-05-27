Just wrap all your code into one `try/catch` block is enough. When insert to `my_job_groups`, `job_group_name` should be `jobDetail.jobGroupName` instead of `jobDetails.jobGroupName`. 

And, I think should be better if your API returns a response to the client.

```js
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");


app.post("/process-job", async (req, res) => {
  try {
    const { jobName, jobType, jobGroups: jobDetails } = req.body // destruct to get all properties

    const job = await pool.query(
      "INSERT INTO my_jobs (job_name, job_type) VALUES($1, $2) RETURNING job_id",
      [jobName, jobType],
    );
    const jobId = job.rows[0];

    const promises = jobDetails.map(async jobDetail => {
      const newJob = await pool.query(
        "INSERT INTO my_job_groups (job_id, job_group_name) VALUES($1, $2) RETURNING job_group_id",
        [jobId, jobDetail.jobGroupName] // jobDetail.jobGroupName instead of jobDetails.jobGroupName
      );

      return {
        id: newJob.rows[0],
      };
    });

    const result = await Promise.all(promises);

     res.json(result);
  } catch (err) {
    console.error(err); // print out message object
    res.status(500).json({ message: err.message }); // response with status 500
  }
});
```
