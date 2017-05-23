Ipglobal Web Template conversion from PSD to HTML5 and CSS(framework) - BootStrap


Sample Projects for Bootstrap css framework.

This repo contains sample projects that uses CSS Bootstrap framework with Sass.

Note: Basic knowledge in linux command for this sample Project.

Side note: Work Environment.
-Vbox/Ubuntu OS.
-SSH/Putty.
-SFTP/Cyberduck.
-Also uses nginx as local Web Server.

IDE: ATOM text editor.


Motivation
	The creation of this sample project is to provide some workflow when creating a Bootstrap project with Sass.

Installation/Setup.
-Package Manager (npm/bower)
-Task Runners/Sass Compiler ( gulp )
-Node.js installed.

-Create the package.json file for the dev dependency ( npm init)
-install bower globally ( npm install -g bower)
-Install bootstrap sass ( bower install bootstrap-sass --save)
-Setup the gulp task runner/sass compiler.
 -- npm install --save-dev gulp gulp-sass gulp-concat.
 -- see the gulpfile.js above to setup the sass compiler.


FOLDER STRUCTURE
-bower_components
 --bootstrap-sass
   ---assets
 --font-awesome
 --jquery
-fonts
-img
-node_modules
-src
 --css
   ---app.css
 --scss
   ---components
   ---settings
   ---tools
   ---app.scss
.ftpconfig
.ftpignore
.gulpfile.js
.index.html
.package.json
.readme.md
