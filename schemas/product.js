export default {
  name: 'product',
  title: 'Produkty',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Název',
      type: 'string',
      validation: Rule => Rule.required().error('Toto pole je povinné.')
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title'
      },
      validation: Rule => Rule.required().error('Toto pole je povinné.')
    },

    {
      title: 'Hlavní obrázek',
      name: 'image',
      type: 'image'
    },
    {
      name: 'price',
      title: 'Cena',
      type: 'number'
    },
    {
      title: 'Kategorie',
      name: 'categoryP',
      type: 'reference',
      to: [{type: 'category-products'}],
      validation: Rule => Rule.required().error('Toto pole je povinné.')
    },
    {
      name: 'content',
      title: 'Popis',
      type: 'blockContent'
    },
    {
      title: 'Parametry',
      name: 'parametry',
      type: 'array',
      of: [
        {
          title: 'Parametry',
          type: 'object',
          fields: [
            {
              title: 'Parameter',
              name: 'parameter',
              type: 'reference',
              to: [{type: 'param'}]
            },
            {
              name: 'value',
              title: 'Hodnota',
              type: 'string'
            }
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
  ]
}
