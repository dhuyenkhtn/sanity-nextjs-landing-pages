export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '623006e3ba6e471eba9f7649',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-qopt27uq',
                  apiId: 'c9d9e836-d44a-4f96-9b8a-ada3a0ecff39'
                },
                {
                  buildHookId: '623006e43d7b9920c87667da',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-wqrpgm18',
                  apiId: '84d3f8da-adf9-4008-a80f-9b2b3fa7b89d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dhuyenkhtn/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-wqrpgm18.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
