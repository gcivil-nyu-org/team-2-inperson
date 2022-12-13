# Team and Individual Contributions ("Shortlist" team)
Daniel Walt (dw2789) (as of 2022-11-27)

## _**TEAM**_
### Collaboration

- Held an average of **4 hours per week** of *office hours* open for any topic/team member(s)
  - Situations where teammate "drove," often with multiple teammates observing
  - Typically \~2 hour sessions, last two weeks before TDay were at 10 hours per week
- **15 total hours** of pair programming
  - Situations where I "drove", again with multiple teammates observing
  - 3 hours per teammate working on their initial issues (at the start), or on integrating their work
- **5x Class Demo Integrations** (these were incremental to any other stories or issues I worked on during each sprint)
  - Example of the size and complexity of one of these: [[week10]](https://github.com/gcivil-nyu-org/team-2-inperson/pull/155/files)
  - **4-to-12 hours** on Mondays/Tuesdays/Wednesdays spent integrating
- Backlog maintenance & Evergreen Issues
  - Teammates regularly claimed they were blocked, so I created the following Week 11 - 13 [[Issue
        Log]](https://docs.google.com/document/d/1UML25ZzAwQKkxYWbed9MqoGi_2Km_SWvwjCGfy5ZKm4/edit?usp=sharing)
  - This list was compiled to represent atomic units of development work, and many that were/are evergreen
 
## _**INDIVIDUAL**_

Note, my individual velocity, time-to-completion, and total points are being omitted since there has been some question in the past as to whether these are accurate.  Instead, I have direct links to my artifacts where applicable.
### **Backend Features (Python/Django)**
- Recommendations Algorithm([[PR-142]](https://github.com/gcivil-nyu-org/team-2-inperson/pull/142))
  - Data Model
  - Django API calls (pure views)
  - Rankings -> query optimization
- Accounts ([[PR-130]](https://github.com/gcivil-nyu-org/team-2-inperson/pull/130/files))
  - Data Model
  - Django API calls (pure views)
  - Create account / Login
- Schools([[PR-135]](https://github.com/gcivil-nyu-org/team-2-inperson/pull/135),
    [[PR-138]](https://github.com/gcivil-nyu-org/team-2-inperson/pull/138))
  - Data Model (all prior work was a toy school dataset \<25 and with non-production fields)
  - Django API calls (pure views)
  - School, SchoolDim, SchoolDimValue (star schema)
- Entire API client - python version
    ([[PR-135, commit d635ab2...]](https://github.com/gcivil-nyu-org/team-2-inperson/commit/d635ab2b56615a089c4d6ed383d021e1d04bef35))
  - Loading scripts for school data from S3
---
### **Frontend Features (Javascript/HTML)**

- Entire "Preferences" component hierarchy and UX (currently being used as questionnaire) ([[PR-88]](https://github.com/gcivil-nyu-org/team-2-inperson/pull/88/files))
- Entire "Categorize" flow, including the components and the drag and drop UX
  - Entire "School" Component
        ([[PR-104]](https://github.com/gcivil-nyu-org/team-2-inperson/pull/104),
        [[First Project
        Tests, PR-118]](https://github.com/gcivil-nyu-org/team-2-inperson/pull/118/files))
  - Simple Card, Detail Card, and School-as-Icon Component for lists
- Entire "Shortlist" Component; Entire "Recommendation Stack" component ([[PR-106, PR-116, 4ed86d]](https://github.com/gcivil-nyu-org/team-2-inperson/blame/4ed86d3065161b560fbe5d9934b6120f61d80f46/src/frontend/shortlist/src/components/layout/shortlists/ShortlistManager.vue))
  - View, List Component, List Customization, Ranking/Sorting mechanics, Dragging mechanics
- Site Modal Component
        ([[PR-116, ModalFullScreen.vue]](https://github.com/gcivil-nyu-org/team-2-inperson/blame/f7eb61b80cefcb0d799ccddf20b4f236795e67c2/src/frontend/shortlist/src/components/layout/ModalFullScreen.vue))
- Entire API client - javascript version for all backend calls (that were configured as of week 10)
    ([[PR-152]](https://github.com/gcivil-nyu-org/team-2-inperson/pull/152/files))
---
### **Infrastructure** 
After demo 1, my team asked to use my homework deployment model
- Docker Frontend and Backend Configurations
  - Containers; nginx, gunicorn, s3
- AWS configuration for both frontend and backend
  - ECR, EC2, ECS, RDS (postgres)
  - AWS Training Video (1Hr)
  - Deployed at least 5 demos
---
### **CI/CD**
- I was not assigned to CI/CD, though I have helped maintain GitHub Actions
---
### **Edge/Networking**
- DNS - All management
  - Registration, NS configurations, SSL certs
- AWS - All management
  - VPC / Security Groups (EC2, RDS, etc.)
  - API Gateway
  - Load Balancers + DNS subdomains
  - Email service (sandbox & successful application for production 'send' permissions)
