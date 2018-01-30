import { WishListItem, WishList } from './WishList'
import { getSnapshot } from 'mobx-state-tree'

it('can create an instance of the WishListItem model', () => {
  const item = WishListItem.create({
    name: 'Test',
    price: 34.99,
  })

  expect(item.name).toBe('Test')
  expect(item.image).toBe('')

  item.changeName('New name')

  expect(item.name).toBe('New name')
})

it('can create WishList model', () => {
  const list = WishList.create({
    items: [{
      name: 'Test',
      price: 34.99,
    }]
  })

  expect(list.items.length).toBe(1)
})

it('can add a new WishListItem to the list', () => {
  const list = WishList.create()

  list.add(WishListItem.create({
    name: 'Dummy',
    price: 10
  }))

  expect(list.items.length).toBe(1)
  expect(getSnapshot(list)).toMatchSnapshot()
})
