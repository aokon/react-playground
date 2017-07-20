import React from 'react'
import renderer from 'react-test-renderer'
import Card from './card'

test('Footer Conponent', () => {
  const category = {
    id: '123123-123123-23234',
    attributes: {
      name: 'Category 1'
    }
  }
  const component = renderer.create(
    <Card model={category}
       url={`/category?id=${category.id}`}
       url_map={`/category/${category.id}`} />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})