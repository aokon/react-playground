import { types, flow, applySnapshot, getSnapshot, onSnapshot } from 'mobx-state-tree'

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
    getSugestions: flow(function* () {
      const response = yield window.fetch(`http://localhost:3001/suggestions_${self.gender}`)
      self.wishList.items.push(...(yield response.json()))
    }),
    save: flow(function* () {
      try {
        yield window.fetch(
          `http://localhost:3001/users/${self.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(getSnapshot(self))
        })
      } catch(e) {
        console.error('Save failed, something went wrong :(')
      }
    }),
    afterCreate() {
      onSnapshot(self, self.save)
    }
  }))

export const Group = types
  .model({
    users: types.map(User)
  })
  .actions(self => {
    let controller

    return {
      afterCreate: () => {
        self.load()
      },
      load: flow(function* (){
        controller = new window.AbortController()

        try {
          const response = yield window.fetch(
            'http://localhost:3001/users',
            { signal: controller.signal }
          )
          // compare state that already exists with a state that receives and make few changes as posible
          applySnapshot(self.users, yield response.json())
        } catch(e) {
          console.log('aborted: ', e)
        }
      }),
      reload() {
        if(controller) controller.abort()
        self.load()
      },
      beforeDestroy() {
        if(controller) controller.abort()
      },
      drawLots: () => {
        self.users.forEach((user) => {
          user.recipient = self.users.get(Math.floor(Math.random() * self.users.size))
        })
      },
    }
  }
)
