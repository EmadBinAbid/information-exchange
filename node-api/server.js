/*
Author: Emad Bin Abid
Created On: Saturday, June 23' 2018
*/

/*Creating a node server */

exports.run = function(expressInstance, port)
{
    expressInstance.listen(port, () => {
        console.log(`Node server listening on port ${port}...`);
    });
}