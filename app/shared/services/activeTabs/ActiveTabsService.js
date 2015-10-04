'use strict';

/**
 * utilises service
 */
(function(ng) {
  ng.module('websiteassemblylineApp')
    .service('ActiveTabsService', [ '$state', function($state) {

      function ActiveTabsService(){
        this.menus = {};
      }

      ActiveTabsService.prototype.getMenu = function(stateName){
        return this.menus[stateName] || false;
      };

      ActiveTabsService.prototype.addMenu = function(menus, stateName){
        this.menus[stateName || $state.current.name] = menus;
      };

      ActiveTabsService.prototype.removeMenu = function(stateName){
        this.menus[stateName] = null;
      };

      ActiveTabsService.prototype.isActive =  function (menu){
        ng.forEach(menu, function(state){
          state.isActive = $state.current.name === state.name;
        });

      };

      ActiveTabsService.prototype.checkMenus =  function (){
        ng.forEach(this.menus,this.isActive);
      };



      return new ActiveTabsService();
    }]);

})(angular);