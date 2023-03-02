import { render, screen } from '@testing-library/react';
import TasksList from './TasksList';

const fixtures = [
    {
        id: 1,
        content: 'Learn more about TDD',
        isDone: false,
    },
    {
        id: 2,
        content: 'Learn more about BDD',
        isDone: false,
    },
    {
        id: 3,
        content: 'Check what does "Foo" stands for',
        isDone: true,
    },
]

test('Tasks list is empty', () => {
    const { container } = render(<TasksList />)
    expect(container.querySelector('ul')).toBeEmptyDOMElement()
});

test('Tasks list displays tasks', () => {
    
    const { container } = render(<TasksList tasks={fixtures} />);
    expect(container.lastElementChild).toHaveTextContent()
});
