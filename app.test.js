const { deleteTask } = require('./app.js')

// app.test.js
/**
 * @jest-environment jsdom
 */

describe('deleteTask', () => {
    let ul, li

    beforeEach(() => {
        ul = document.createElement('ul')
        li = document.createElement('li')
        ul.appendChild(li)
        document.body.appendChild(ul)
    })

    afterEach(() => {
        document.body.innerHTML = ''
    })

    test('removes the task item from the DOM', () => {
        expect(ul.contains(li)).toBe(true)
        deleteTask(li)
        expect(ul.contains(li)).toBe(false)
    })

    test('does not throw if element is not in DOM', () => {
        ul.removeChild(li)
        expect(() => deleteTask(li)).not.toThrow()
    })
})