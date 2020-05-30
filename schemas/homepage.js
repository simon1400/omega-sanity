export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Hlavní nadpis',
      type: 'string'
    },
    {
      title: 'Obrázek',
      name: 'image',
      type: 'image'
    },
    {
      name: 'content',
      title: 'Text',
      type: 'blockContent'
    },
    {
      title: 'Skupina: Tlačítko',
      name: 'calltoaction',
      type: 'object',
      fields: [
        {
          title: 'Text',
          name: 'title',
          type: 'string'
        },
        {
          title: 'Odkaz',
          name: 'link',
          type: 'reference',
          to: [
            {type: 'category-products'},
            {type: 'categoryArticles'},
            {type: 'product'},
            {type: 'article'}
          ]
        }
      ]
    },
    {
      name: 'titleHead',
      title: 'Titulek',
      type: 'string'
    },
    {
      title: 'Popisek',
      name: 'description',
      type: 'string'
    }
  ],
  // initialValue: {
  //   isHighlighted: false
  // }
}
