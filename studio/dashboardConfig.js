export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '603590c89454d41664151d6c',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-y2sf6jky',
                  apiId: 'c553295f-30b0-44ff-99db-aadfecff59be'
                },
                {
                  buildHookId: '603590c82a60c819799aa4db',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-kf87swtp',
                  apiId: 'f540a594-bece-4c2b-b8ef-378adc6c2db5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/heyiamluke/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-kf87swtp.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
