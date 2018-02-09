import { types } from 'mobx-state-tree'

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

export const User = types.model({
  id: types.string,
  name: types.string,
  gender: types.enumeration('gender', ['m', 'w']),
  wishList: types.optional(WishList, {})
})

export const Group = types.model({
  users: types.map(User)
})
