const { When, Then } = require('@cucumber/cucumber')
const { render, screen } = require('@testing-library/react')
const TasksList = require('../../src/components/TasksList')

When("aucune tâche n'est fournie", function () {
    render(<TasksList />)

    this.tasksList = screen.getByRole('list')
});

Then("la liste doit contenir {value}", function (expectedResponse) {
    expect(this.tasksList).toEqual(expectedResponse)
});