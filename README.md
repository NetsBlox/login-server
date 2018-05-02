# NetsBlox Login Server
This is a standalone server for providing login to a NetsBlox instance. This is convenient for providing redirect urls when sharing cookies across multiple subdomains.

For example, suppose you want to integrate NodeBB and NetsBlox on different subdomains. First, you will set up NetsBlox and NodeBB on separate subdomains, say `editor.netsblox.org` and `community.netsblox.org`. Both sites can be configured to use the same cookies (with `domain` set to `.netsblox.org`). If you need a single page solely for logging in, you can run this server on a subdomain such as `login.netsblox.org` and then redirect logins to this endpoint with `redirect=https://redirect.here.after.login.org`

## Quick Start
Install NodeJS LTS. Clone the repo. Then run `npm install` and `npm start` from the project root.
