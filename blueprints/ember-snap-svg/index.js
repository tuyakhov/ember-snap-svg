/*jshint node:true*/
module.exports = {
  description: '',

  afterInstall: function() {
    return this.addPackageToProject('snapsvg');
  }
};
