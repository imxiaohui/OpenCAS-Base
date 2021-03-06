Router.configure({
  layoutTemplate: 'Appbody',

  waitOn: function() {
    return [
      Meteor.subscribe('jobs'),
      //Meteor.subscribe('tags'),
      Meteor.subscribe('commits'),
    ];
  }
});




Router.plugin('ensureSignedIn', {
    only: ['jobinfo','publish','edit']
});



Router.map(function() {
  this.route('/', function () {
    this.render('content');
  });

  this.route('/joblist',function(){
    this.render('joblist');
    this.render('pop',{to:'pop'});
  });

  this.route('/jobinfo/:_id',function(){
    name: "jobinfo",
    this.render('jobinfo', {
      data: function(){
        return Job.findOne({_id:this.params._id});
      }
    });
    this.render('pop',{to:'pop'});
  });

  this.route('/faqs',function(){
    this.render('faqs');
    this.render('pop',{to:'pop'});
  });

  this.route('/search',function(){
    this.render('search');
    this.render('pop',{to:'pop'});
  });

  //this.route('/contact',function(){
  //  this.render('contact');
  //});

  //this.route('/sign',function(){
  //  this.render('sign');
  //});

  this.route('/publish',function(){
    this.render('publish');
    this.render('pop',{to:'pop'});
  });

  this.route('/edit/:_id',function(){
    this.render('edit', {
      data: function(){
        return Job.findOne({_id:this.params._id});
      }
    });
    this.render('pop',{to:'pop'});
  });


  this.route('/item', function () {
    var req = this.request;
    var res = this.response;
    res.end('hello from the server\n');
  }, {where: 'server'});


});


