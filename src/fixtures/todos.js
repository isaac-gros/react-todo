const correctFixtures = [
    {
        id: 1,
        content: 'Learn more about TDD',
        isDone: false,
    },
    {
        id: 2,
        content: 'Check what does "Foo" stands for',
        isDone: true,
    },
]

const wrongFixtures = [
    "My task",
    {
        message: "Doin it wrong"
    }
]

export { correctFixtures, wrongFixtures }