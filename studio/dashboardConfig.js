export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
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
                  buildHookId: '6335d5ef48af7611c2eab34f',
                  title: 'Sanity Studio',
                  name: 'phils-new-new-blog-studio',
                  apiId: 'cacb9bf3-10db-4b15-ab98-155462068d96'
                },
                {
                  buildHookId: '6335d5ef295d430084afb073',
                  title: 'Blog Website',
                  name: 'phils-new-new-blog',
                  apiId: 'f5d77c18-d543-40a1-be86-cd7bba9a7fe1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mattnaz/phils-new-new-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://phils-new-new-blog.netlify.app', category: 'apps'}
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
