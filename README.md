[ YOUR FAIR POTENTIAL ]
This app was inspired by the FAIR Data Principles (data should be Findable, Accessible, Interoperable, and Reusable). The main idea of the app is to promote science literacy because it helps to: lead richer, healthier lives (OECD, 2012a), participate in civic decision making, lead to less unemployment and a high standard of living.

This apps allows to view the summaries to the open access scientific articles. 

[ Implemented: ]
- landing page; 
- index page with a search bar to find articles; 
- index page fetches 50 articles from the UnPayWall API; 
- index page redirects to the article show page; 
- article show page has summaries linked to it (summaries exist in the PostgreSQL database);
- adding comments to the summary;
- styling. 

[ Future features: ]
- This apps will allow to add summaries to the scientific articles;
- Adding comments to the article;
- Deleting and editing comments,
- Deleting and editing summaries;
- User authorization; 
- Upvote/Downvote feature.

🚀 Programming
Backend: Ruby 2.7.3, Rails 5.2.8.1
Frontend: React 18.2.0
Database: PostgreSQL 14.5
Third party APIs: UnPayWall API

🚀 Development:

Clone the repository
git clone https://github.com/zettlingzettel/your-fair-potential

Install Ruby gems
`bundle exec bundle install`

Install Packages with Yarn
`yarn install`

Start Ruby server
`rails server`

Start webpack-dev-server
`yarn run start`

Open the development site localhost:3000

🤝 Contributing
Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated.

Clone the Project
Create your Feature Branch (git checkout -b feature-contributing main)
Commit your Changes (git commit -m 'contribute to new feature')
Push to the Branch (git push origin head)
Open a Pull Request

