A small team of 6 people is actively working on a web application, with backend
written in Java and frontend in TypeScript. To make sure that the master/main
branch stays deployable at all times, developers work on feature branches and
create pull requests that can be merged once the changes have been verified.

Aside of manual code review, the team uses CI to automatically build and run
automated tests whenever commits are pushed to Git. Since the source code is
hosted on Github, it makes sense to use Github Actions as CI. More or less
popular cloud-based alternatives include Gitlab CI, Azure DevOps and
AWS CodeBuild.

For such a small team, self-hosted CI is probably not worth the effort. Jenkins
is non-trivial to set up and time-consuming to maintain. Other self-hosted
solutions (e.g. Buildbot) might be less complicated, but you'd still have to
take care of the (Linux) server they're running on, at least the security
patches. A team of 6 people that is going to ship soon is probably already
more than busy enough.

The application needs *three* separate systems for building. For frontend,
dependencies are managed with npm and the actual building is done with Vite.
For backend Java code, Gradle does both of these tasks. Finally, the
application is deployed as a container that is built with Docker.

Npm could be replaced with Yarn, Gradle with Maven and Docker with e.g. Podman.
All of these are good tools, so it is mostly matter of developers' skills and
preferences.