# Deployment Procedure - Google Cloud

Machine : 1vCPU, 3.75GB, Intel
OS : Ubuntu 16.04

## Install Nginx

Update the package manager:
`$ sudo apt-get update`

Check ports are clean:
```
netstat -an | grep ":80"
netstat | less
lsof -i :80
```

Install Nginx:
`$ sudo apt-get install nginx`

Check Nginx profiles:
`$ sudo ufw app list`

Set profile to accept HTTP & HTTPS traffic:
`$ sudo ufw allow "Nginx Full"`

Check if settings are active:
`$ sudo ufw status`

Check if Nginx is running:
`$ systemctl status nginx`

A full check of Nginx, should show a welcome page - this can be done by browsing to the server's external IP:
```
$ sudo apt-get install curl
$ curl -4 icanhazip.com
```

#### Now that you have your web server up and running, we can go over some basic management commands.

To stop your web server, you can type:
`$ sudo systemctl stop nginx`

To start the web server when it is stopped, type:
`$ sudo systemctl start nginx`

To stop and then start the service again, type:
`$ sudo systemctl restart nginx`

If you are simply making configuration changes, Nginx can often reload without dropping connections. To do this, this command can be used:
`$ sudo systemctl reload nginx`

By default, Nginx is configured to start automatically when the server boots. If this is not what you want, you can disable this behavior by typing:
`$ sudo systemctl disable nginx`

To re-enable the service to start up at boot, you can type:
`$ sudo systemctl enable nginx`

## SSL Setup

#### NGINX: Generate CSRs (Certificate Signing Requests)

Run the following command:
`$ openssl req -new -newkey rsa:2048 -nodes -keyout pluto.mgr.consensu.org.key -out pluto.mgr.consensu.org.csr`

Fill in the additional location, company information and the output will be two files:
`pluto.mgr.consensu.org.csr  pluto.mgr.consensu.org.key`

The CSR file is loaded into the SSL provider dash.


## Nodejs Install

We will install v10, which is soon going to be the LTS version

```
$ curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```

Validate the installation:
```
$ node -v
$ npm -v
```

Add build-essentials for packages which need to compile code from source:
`$ sudo apt-get install build-essential`

## Install PM2 Process Manager

Now we will install PM2, which is a process manager for Node.js applications. PM2 provides an easy way to manage and daemonize applications (run them in the background as a service).

`$ sudo npm install -g pm2`

App can be started as follows:
`$ pm2 start server.js`

When the app is running, the below command will ensure that the app starts on server boot:
`$ pm2 startup systemd`

The last line of the resulting output will include a command that you must run with superuser privileges:
```
[PM2] Init System found: systemd
[PM2] You have to run this command as root. Execute the following command:
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u sammy --hp /home/sammy
```

This will create a systemd unit which runs pm2 for your user on boot. This pm2 instance, in turn, runs hello.js. You can check the status of the systemd unit with systemctl:
`$ systemctl status pm2-sammy`

## Install Stackdriver Agents on Machine
```bash
# To install the Stackdriver monitoring agent:
$ curl -sSO https://dl.google.com/cloudagents/install-monitoring-agent.sh
$ sudo bash install-monitoring-agent.sh

# To install the Stackdriver logging agent:
$ curl -sSO https://dl.google.com/cloudagents/install-logging-agent.sh
$ sudo bash install-logging-agent.sh
```

