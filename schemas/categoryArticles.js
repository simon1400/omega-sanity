export default {
  name: 'categoryArticles',
  title: 'Kategorie článků',
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
      title: 'Popis',
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
