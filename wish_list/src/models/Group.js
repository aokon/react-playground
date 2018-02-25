import { types, flow, getParent } from 'mobx-state-tree'

import { WishList } from './WishList'

// const Women = types.model({
//   id: types.string,
//   name: types.string,
//   gender: types.literal('f')
// })

// const Men = types.model({
//   id: types.string,
//   name: types.string,
//   gender: types.literal('m')
// })

// const Human = types.union(Women, Men)

export const User = types
  .model({
    id: types.identifier(),
    name: types.string,
    gender: types.enumeration('gender', ['m', 'w']),
    wishList: types.optional(WishList, {}),
    recipient: types.maybe(types.reference(types.late(() => User)))
  })
  .actions(self => ({
    getSugestions: flow(function * () {
      const response = yield window.fetch(`http://localhost:3001/suggestions_${self.gender}`)
      self.wishList.items.push(...(yield response.json()))
    })
  }))

export const Group = types
  .model({
    users: types.map(User)
  })
  .actions(self => ({
    drawLots: () => {
      self.users.forEach((user) => {
        user.recipient = self.users.get(Math.floor(Math.random() * self.users.size))
      })
    },
  }))
