const express = require('express')
const app = express()
var cors = require('cors')
const coursesCategory=require('./data/courses-category.json')
const courses=require('./data/courses.json')
const port =process.env.PORT|| 5000
app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/course-category',(req,res)=>{
  res.send(coursesCategory)
})
app.get('/course-category/:courseId',(req,res)=>{
  const id=req.params.courseId
  if(id==='08'){
    res.send(courses)
  }
  else{
    const categoryCourse=courses.filter(course=>course.category_id===id)
    res.send(categoryCourse)
  }
})
app.get('/courses',(req,res)=>{
  res.send(courses)
})
app.get('/courses/:courseId',(req,res)=>{
  const id=req.params.courseId
  const selectedCourse=courses.filter(course=>course._id===id)
  console.log(id)
  res.send(selectedCourse)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})