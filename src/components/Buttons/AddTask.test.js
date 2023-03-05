import { render, screen, within } from '@testing-library/react'
import AddTask from './AddTask'
import userEvent from '@testing-library/user-event'

// [WIP] Todo : Fix tests here 
test('Should get a new task on click', async () => {

    // New task handler
    const newTaskHandler = (taskContent) => {
        return {
            id: 1,
            content: taskContent,
            isDone: false
        }
    }

    render(<AddTask handler={newTaskHandler} debug={true}/>)
    let addTaskBtn = screen.queryByRole('button')
    let addTaskInput = screen.queryByRole('textbox')
    
    // Mock user inserting content in new task input
    await userEvent.dblClick(addTaskInput)
    await userEvent.keyboard('A new task')
    await userEvent.click(addTaskBtn)

    // Check if the task was added
    // let newTaskObject = screen.queryByRole('application')
    let newTaskObject = screen.getByText(/A new task/g)
    expect(newTaskObject).toBeDefined()
})

test('Should prevent new task creation if content is empty', async () => {

    // New task handler
    const newTaskHandler = (taskContent) => {
        return {
            id: 1,
            content: taskContent,
            isDone: false
        }
    }

    render(<AddTask handler={newTaskHandler} debug={true}/>)
    
    // Mock user clicking new task button
    let addTaskBtn = screen.queryByRole('button')
    await userEvent.click(addTaskBtn)

    // Check if the task was not added
    let taskDebugger = screen.queryByRole('application')
    expect(taskDebugger).toBeDefined()
})