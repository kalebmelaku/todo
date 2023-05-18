const Task = require('./taskModel')


//@desc Get Goals
//@route GET /api/goals
//@access private
const getTask = async (req, res) =>{
    const tasks = await Task.find().sort({createdAt: -1})
    res.json({tasks})
}

//@desc Set Goals
//@route POST /api/goals
//@access private
const setTask = async (req, res) =>{
    if(!req.body.text){
        res.status(400)
        console.log('errorr');
    }
    const tasks = await Task.create({
        text: req.body.text
    })
    res.json({tasks})
}

//@desc Update Goals
//@route PUT /api/goals/:id
//@access private
// const updateGoal = asyncHandler(async (req, res) =>{
//     const id = req.params.id
//     const goal = await Goal.findById(id)
//     if(!goal){
//         res.status(400)
//         throw new Error('Goal Not Found')
//     }
//         const updatedGoal = await Goal.findByIdAndUpdate(id, req.body, {new: true})
    
//     res.json(updatedGoal)
// })

//@desc Delete Goals
//@route DELETE /api/goals/:id
//@access private
// const deletegoal = asyncHandler(async (req, res) =>{
//     const id = req.params.id
//     const goal = await Goal.findByIdAndDelete(id)
//     if(!goal){
//         res.status(400)
//         throw new Error('Goal Not Found')
//     }
//     await goal.remove()
//     res.status(200).json({id: id})
// })

module.exports = {
    getTask,
    setTask,
    // updateTask,
    // deleteTask,
}