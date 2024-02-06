const axios = require ('axios')
const cheerio = require ('cheerio')

const fetchJobs = async () => {
    try {
        const response = await axios.get('https://www.linkedin.com/company/ogilvy-argentina/posts/?feedView=all')
        const html = response.data
        const $ = cheerio.load(html)
        const jobs = []

        $('div.update-components-actor').each((index, el) => {
            const job = $(el)
            const title = job.find('div.update-components-actor__container').text()
            jobs.push(title)
        })
        return jobs
    } catch (err) {
        console.error(err)
    }
}
fetchJobs().then(jobs => console.log(jobs))