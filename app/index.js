'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var EventEmitter = require('events').EventEmitter;
//TODO: line 93
//var	git = require('simple-git');
//var bonesRepo = "git://github.com/eddiemachado/bones.git";

var WpBonesGenerator = module.exports = function WpBonesGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};


util.inherits(WpBonesGenerator, yeoman.generators.Base);

WpBonesGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  //ASCII art

console.log(chalk.blue.bold("                                    +++++++++++++++++                               "));
console.log(chalk.blue.bold("                                  +++++++++++++++++++++                             "));
console.log(chalk.blue.bold("                                ++++++++++++=++     ;++++                           "));
console.log(chalk.blue.bold("                               +++++++++++;  ==-      ++++                          "));
console.log(chalk.blue.bold("                              ++++++++++=.   -+==;  -+===++                         "));
console.log(chalk.blue.bold("                             +++++++++++x")+chalk.white.bgWhite.bold(" ...")+chalk.blue.bold("++++++++=++ -++                        "));
console.log(chalk.blue.bold("                            +++++++++++")+chalk.white.bgWhite.bold(".......")+chalk.blue.bold("++=,-+++=+  -++                       "));
console.log(chalk.blue.bold("                           +++++++++=")+chalk.white.bgWhite.bold("............   ")+chalk.blue.bold("=++=.  =++                      "));
console.log(chalk.blue.bold("                          ++++++++=")+chalk.white.bgWhite.bold(".... ...........  ")+chalk.blue.bold("++=+   +++                     "));
console.log(chalk.blue.bold("                          +++++++,")+chalk.white.bgWhite.bold("...")+chalk.blue.bold("+xx+")+chalk.white.bgWhite.bold("............")+chalk.blue.bold(",xx+x,.-++                     "));
console.log(chalk.blue.bold("                         +++++++-")+chalk.white.bgWhite.bold("...")+chalk.blue.bold("++++++=")+chalk.white.bgWhite.bold("...........")+chalk.blue.bold("+++++xx+++                    "));
console.log(chalk.blue.bold("                         +++++++")+chalk.white.bgWhite.bold("...")+chalk.blue.bold("=++++++x")+chalk.white.bgWhite.bold(" ..........")+chalk.blue.bold("+x++++xx++                    "));
console.log(chalk.blue.bold("                        ++++++++")+chalk.white.bgWhite.bold("...")+chalk.blue.bold("xxx+=xxx")+chalk.white.bgWhite.bold(" .........")+chalk.blue.bold("-+x+,, .x+++                   "));
console.log(chalk.blue.bold("                        ++++++++")+chalk.white.bgWhite.bold("...")+chalk.blue.bold("xx")+chalk.white.bgWhite.bold(".. ")+chalk.blue.bold("+xx")+chalk.white.bgWhite.bold(" ..........")+chalk.blue.bold("xx-    -x++ +                 "));
console.log(chalk.blue.bold("                        +++++++++")+chalk.white.bgWhite.bold("..")+chalk.blue.bold("+xxx+=xx")+chalk.white.bgWhite.bold(" ...........")+chalk.blue.bold("x-,.-..x++++                 "));
console.log(chalk.blue.bold("                        +++++++++-")+chalk.white.bgWhite.bold(". ")+chalk.blue.bold("xxxxxx+")+chalk.white.bgWhite.bold("......,.....")+chalk.blue.bold("xx-,=.=x++++                 "));
console.log(chalk.blue.bold("                        ++++++++++")+chalk.white.bgWhite.bold("..")+chalk.blue.bold(",+xxx+")+chalk.white.bgWhite.bold(".........,,,,.")+chalk.blue.bold("x-.,.xxx+++                 "));
console.log(chalk.blue.bold("                        +++++++++++")+chalk.white.bgWhite.bold(".. .........")+chalk.blue.bold("++++x,")+chalk.white.bgWhite.bold("...")+chalk.blue.bold("xxxxxx..+++                 "));
console.log(chalk.blue.bold("                        ++++++++++=")+chalk.white.bgWhite.bold(".....")+chalk.blue.bold("+=")+chalk.white.bgWhite.bold("....")+chalk.blue.bold("x+++++x")+chalk.white.bgWhite.bold(",,,")+chalk.blue.bold("-xxxx...+++                 "));
console.log(chalk.blue.bold("                        ++++++++++")+chalk.white.bgWhite.bold("....")+chalk.blue.bold("-xxx-")+chalk.white.bgWhite.bold("..")+chalk.blue.bold(",++xx+++-")+chalk.white.bgWhite.bold(",,,")+chalk.blue.bold(".-xx...+++                 "));
console.log(chalk.blue.bold("                        +++++++++")+chalk.white.bgWhite.bold(" ...")+chalk.blue.bold("-xxxx")+chalk.white.bgWhite.bold("...")+chalk.blue.bold("=x=")+chalk.white.bgWhite.bold("..")+chalk.blue.bold("=xx+")+chalk.white.bgWhite.bold(";;--")+chalk.blue.bold(".+x...+++                 "));
console.log(chalk.blue.bold("                        ++++++++")+chalk.white.bgWhite.bold(".....")+chalk.blue.bold("xxxxx")+chalk.white.bgWhite.bold("...")+chalk.blue.bold("=x=x=-xx+;")+chalk.white.bgWhite.bold("---")+chalk.blue.bold(".;x...+++                 "));
console.log(chalk.blue.bold("                        +++++++=")+chalk.white.bgWhite.bold(".....")+chalk.blue.bold(";xxx")+chalk.white.bgWhite.bold("....,")+chalk.blue.bold("xxx-+xx-;")+chalk.white.bgWhite.bold(";-")+chalk.blue.bold("=.-x,.=+++                 "));
console.log(chalk.blue.bold("                        ++++++++")+chalk.white.bgWhite.bold(".......")+chalk.blue.bold("x=")+chalk.white.bgWhite.bold("....,")+chalk.blue.bold("+xxxxxx;;")+chalk.white.bgWhite.bold("--")+chalk.blue.bold("=.xxx,++++                 "));
console.log(chalk.blue.bold("                        ++++++++=")+chalk.white.bgWhite.bold("......")+chalk.blue.bold("")+chalk.white.bgWhite.bold(",.....,")+chalk.blue.bold(";;+xx=;;")+chalk.white.bgWhite.bold("---")+chalk.blue.bold("=+xx++++++                 "));
console.log(chalk.blue.bold("                        +++++++++=")+chalk.white.bgWhite.bold("...")+chalk.blue.bold("")+chalk.white.bgWhite.bold(",.....,..,;;")+chalk.white.bgWhite.bold("---;;;")+chalk.blue.bold("-=Xxxx+= +++                 "));
console.log(chalk.blue.bold("                        ++++++++++=")+chalk.white.bgWhite.bold(".;......")+chalk.blue.bold("=+x-")+chalk.white.bgWhite.bold(",,,,,,;;")+chalk.blue.bold("-=x++xx+  x                  "));
console.log(chalk.blue.bold("                        ++++++++++++,")+chalk.white.bgWhite.bold("..;..")+chalk.blue.bold("xxxx;=;,;;;;;-,++xx++ .                   "));
console.log(chalk.blue.bold("                        ++++++++++++xx,")+chalk.white.bgWhite.bold("..")+chalk.blue.bold("xxxx;;--+====++;xxxxxx+,                   "));
console.log(chalk.blue.bold("                         ++++=")+chalk.white.bgWhite.bold("..")+chalk.blue.bold(";++xxxx+xxxx,;;;-+++-=++.xxxxxxx                    "));
console.log(chalk.blue.bold("                         ++++=")+chalk.white.bgWhite.bold(".... ")+chalk.blue.bold(",=xxxxxx,;;;;++++=-=-.xxxx++x                    "));
console.log(chalk.blue.bold("                          +++-  ")+chalk.white.bgWhite.bold("...")+chalk.blue.bold(";")+chalk.white.bgWhite.bold(".. ")+chalk.blue.bold("xxx,,.,,++++++=;;+xxxx++                     "));
console.log(chalk.blue.bold("                          +++-")+chalk.white.bgWhite.bold(".....,.,")+chalk.blue.bold(".xx")+chalk.white.bgWhite.bold("....,")+chalk.blue.bold("++++++++++++xxx++                     "));
console.log(chalk.blue.bold("                          ++=")+chalk.white.bgWhite.bold(".....,.........")+chalk.blue.bold("++++++++++++++xx+                       "));
console.log(chalk.blue.bold("                            ++")+chalk.white.bgWhite.bold("..............")+chalk.blue.bold("=++++++++++++++++                       "));
console.log(chalk.blue.bold("                             +++-")+chalk.white.bgWhite.bold("..,,,,")+chalk.white.bgWhite.bold("...")+chalk.blue.bold(",+++++++++++++++++                        "));
console.log(chalk.blue.bold("                              +++++++===+++++++++++++++++++                         "));
console.log(chalk.blue.bold("                               +++++++++++++++++++++++++++                          "));
console.log(chalk.blue.bold("                                +++++++++++++++++++++++++                           "));
console.log(chalk.blue.bold("                                  +++++++++++++++++++++                             "));
console.log(chalk.blue.bold("                                    +++++++++++++++++                               "));
console.log(chalk.blue.bold("                                     x+++++++++++x                                  "));
                                           

  
console.log(chalk.blue.bold("       :::::::::        ::::::::        ::::    :::        ::::::::::        :::::::: "));  
console.log(chalk.blue.bold("     :+:    :+:      :+:    :+:       :+:+:   :+:        :+:              :+:    :+:  "));  
console.log(chalk.blue.bold("    +:+    +:+      +:+    +:+       :+:+:+  +:+        +:+              +:+          "));  
console.log(chalk.blue.bold("   +#++:++#+       +#+    +:+       +#+ +:+ +#+        +#++:++#         +#++:++#++    "));   
console.log(chalk.blue.bold("  +#+    +#+      +#+    +#+       +#+  +#+#+#        +#+                     +#+     "));  
console.log(chalk.blue.bold(" #+#    #+#      #+#    #+#       #+#   #+#+#        #+#              #+#    #+#      "));   
console.log(chalk.blue.bold("#########        ########        ###    ####        ##########        ########        "));  


  var prompts = [{
    name: 'themeName',
    message: 'Name of the theme you want to create?'
  },{
    name: 'themeNameSpace',
    message: 'Uniq name-space for the theme (alphanumeric)?',
    default: function( answers ) {
return answers.themeName.replace(/\W/g, '').toLowerCase();
}
  },{
    name: 'themeAuthor',
    message: 'Name of the themes author?',
    default: function( answers ) {
return 'John Doe';
}
  },{
    name: 'themeAuthorURI',
    message: 'Website of the themes authors?',
    default: function( answers ) {
return 'http://www.'+answers.themeAuthor.replace(/\W/g, '').toLowerCase()+'.com';
}
  },{
    name: 'themeURI',
    message: 'Website of the theme?',
default: function( answers ) {
return answers.themeAuthorURI+'/'+answers.themeNameSpace;
}
  },{
    name: 'themeDescription',
    message: 'Description of the theme?',
    default: function( answers ) {
return 'This is a description for the '+answers.themeName+' theme.';
}
  }];

  this.prompt(prompts, function (props) {
    this.themeName = props.themeName;
    this.themeNameSpace = props.themeNameSpace;
    this.themeAuthor = props.themeAuthor;
    this.themeAuthorURI = props.themeAuthorURI;
    this.themeURI = props.themeURI;
    this.themeDescription = props.themeDescription;
    this.jshintTag = '<%= jshint.all %>';

    cb();
  }.bind(this));
};

WpBonesGenerator.prototype.app = function app() {
  var currentDate = new Date()
  this.themeCreated = currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getDate();
  this.directory('theme', this.themeNameSpace);
  //TODO: Fetch the most recent version from git (see top)
//  require('simple-git')().fetch(this.bonesRepo,this.themeNameSpace)
  
  this.mkdir(this.themeNameSpace+'/library/dist');
  this.mkdir(this.themeNameSpace+'/library/fonts');
  this.mkdir(this.themeNameSpace+'/library/grunt');

  this.template('_gruntfile.js', this.themeNameSpace+'/library/grunt/gruntfile.js')
  this.template('_package.json', this.themeNameSpace+'/library/grunt/package.json')
};
