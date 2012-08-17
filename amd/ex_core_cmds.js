/*jslint plusplus: true, white: true, nomen: true */
/*global define */

define([
	'./ex_list_cmds',
], function(
	ex_list_cmds
){
'use strict';

function install(interp) {
	var TclError = interp.TclError;
	if (interp.register_extension('ex_core_cmds')) {return;}

	interp.registerCommand('set', function(args, interp){
		if (args.length < 2 || args.length > 3) {
			throw new TclError('wrong # args: should be "set varName ?newValue?"',
				'TCL', 'WRONGARGS');
		}
		if (args.length === 2) {
			return interp.get_var(args[1]);
		}
		return interp.set_var(args[1], args[2]);
	});

	ex_list_cmds.install(interp);
}

return {'install': install};
});