export default {
  name: 'category-products',
  title: 'Kategorie produktu',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Název',
      type: 'string'
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title'
      }
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
      name: 'titleHead',
      title: 'Titulek',
      type: 'string'
    },
    {
      title: 'Popisek',
      name: 'description',
      type: 'string'
    }
  ]
}
