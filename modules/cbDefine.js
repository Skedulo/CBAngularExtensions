/** cb:define - Allows variables to be defined on the scope within an angular template

	Usage Example: 
		<div cb:define="person = data.person">
			{{person.name}}
		</div>

	Beta quality
*/


angular.module("cb", []);

angular.module("cb").directive( "cbDefine", function($parse){

    return {
      link: function(scope, element, attrs) {
        
        var argument = attrs.cbDefine;
        var parts = argument.split("=");

        var variable   = $parse( parts[0].trim() );
        var expression = $parse( parts[1].trim() );
        
        variable.assign( scope, expression( scope ));
      }
    }

});