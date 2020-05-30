// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import blockContent from './blockContent'
import homepage from './homepage'
import product from './product'
import article from './article'
import categoryProducts from './categoryProducts'
import categoryArticles from './categoryArticles'
import globalSettings from './global'
import parameter from './parameter'
import settingsCategory from './settingsCategory'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    homepage,
    product,
    article,
    categoryArticles,
    categoryProducts,
    globalSettings,
    settingsCategory,
    parameter,
    blockContent
  ])
})
