import { render, screen } from '@testing-library/react'
import TasksList from './TasksList'
import { correctFixtures, wrongFixtures } from '../../fixtures/todos'

test('Should handle empty tasks prop', () => {
    render(<TasksList />)
    let todoList = screen.queryByRole('list')
    expect(todoList).toBeEmptyDOMElement()
})

test('Should displays tasks passed with props', () => {
    render(<TasksList tasks={correctFixtures} />)
    let tasks = screen.queryAllByRole('listitem')
    expect(tasks.length).toBeGreaterThan(0)
})

test('Should handle badly formatted tasks', () => {
    render(<TasksList tasks={wrongFixtures} />)
    let tasks = screen.queryByRole('listitem')
    expect(tasks).toBe(null)
})