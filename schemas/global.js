export default {
  name: 'global',
  title: 'Globální nastavení',
  type: 'document',
  fields: [
    {
      name: 'endTitle',
      title: 'Koncovka titulku',
      type: 'string'
    },
    // {
    //   name: 'themeColor',
    //   title: 'Theme color',
    //   type: 'string'
    // },
    // {
    //   name: 'favicon',
    //   title: 'Favicona',
    //   type: 'image'
    // },
    {
      name: 'head404',
      title: 'Nadpis 404',
      type: 'string'
    },
    {
      name: 'text404',
      title: 'Text 404',
      type: 'text'
    },
    {
      name: 'gtm',
      title: 'Google Analytics kód',
      type: 'string'
    }
  ]
}
