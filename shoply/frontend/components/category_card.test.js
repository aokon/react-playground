import React from 'react'
import renderer from 'react-test-renderer'
import CategoryCard from './category_card'

test('Footer Conponent', () => {
  const category = {
    id: '123123-123123-23234',
    attributes: {
      name: 'Category 1'
    }
  }
  const component = renderer.create(
    <CategoryCard category={category} />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})