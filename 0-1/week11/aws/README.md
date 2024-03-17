
# Cloud Provider
The `cloud` refers to on-demand delivery of IT resources over the internet. Imagine it like electricity - you don't need to build your own power plant, you just pay for the electricity you use.

`Cloud providers` are companies that offer these IT resources like computing power, storage, databases and even software applications.

Few are:
- AWS
- Azure
- GCP
- Oracle cloud
- IBM cloud (kyndryl)
- DigitalOcean
- Vultr

### Can I use my own machine to deploy?
Because you don't have public `IP`. The  number of `IP` address are limited. That is why we rent a AWS machine and it has a `PUBLIC IP`.


## Why to use AWS when we use can Cloudflare?
- Use Cloudflare for content delivery, DDoS protection, and basic security.
- Use AWS for building and running complex applications, with features like databases, compute power, and machine learning.
- When we starting an appplication we usually use `serverless` like cloudflare and when application scale we need a our own `server` like AWS provide and you can increase or decrease your server size.
- Eventually you own your infastructure.