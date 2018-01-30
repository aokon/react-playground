import { WishListItem, WishList } from './WishList'
import { getSnapshot } from 'mobx-state-tree'
import { reaction } from 'mobx'

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

it('can calculate totalPrice for WishList', () => {
  const list = WishList.create({
    items: [
      {
        name: 'Dummy 1',
        price: 14.7
      },
      {
        name: 'Dummy 2',
        price: 12.2
      },
    ]
  })

  expect(list.totalPrice).toBe(26.9)

  let changed = 0

  reaction(() => list.totalPrice, () => changed++)

  list.totalPrice
  expect(changed).toBe(0)

  list.items[0].changePrice(32.56)
  expect(changed).toBe(1)
})
