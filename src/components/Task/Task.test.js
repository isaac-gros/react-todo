import { render, screen } from '@testing-library/react'
import Task from './Task'
import { correctFixtures } from '../../fixtures/todos'

test('Should have <span> surrounded text when task is NOT done', () => {
    let task = correctFixtures[0] // Where task.isDone == false
    render(<Task content={task.content} isDone={task.isDone} />)

    let taskElement = screen.getByRole('listitem')
    expect(taskElement).toContainHTML('<span>Learn more about TDD</span>')
})

test('Should have <s> surrounded text when task is marked as done', () => {
    let task = correctFixtures[1] // Where task.isDone == true
    render(<Task content={task.content} isDone={task.isDone} />)

    let taskElement = screen.getByRole('listitem')
    expect(taskElement).toContainHTML('<s>Check what does "Foo" stands for</s>')
})