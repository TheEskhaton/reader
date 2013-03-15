var mongoose = require('mongoose'),
    xml = require('xmljs');

exports.ref = function(type) {
    return {
        type: mongoose.Schema.Types.ObjectId,
        ref: type
    };
};

function generateXML(parent, object) {
    var node;
    if (Array.isArray(object)) {
        node = parent.node('list');
        
        object.forEach(function(item) {
            generateXML(node, item);
        });
    } else if (typeof object === 'object') {
        node = parent.node('object');
        
        for (var key in object) {
            generateXML(node, object[key]).attr({ name: key });
        }
    } else {
        node = parent.node(typeof object, '' + object);
    }
    
    return node;
}

exports.respond = function(res, response) {
    var format = res.req.query.output || 'json';
    
    switch (format) {
        case 'json':
            return res.json(response);
            
        case 'xml':
            var doc = new xml.Document();
            generateXML(doc, response);
            return res.type('xml').send(doc.toString());
            
        default: 
            res.status(400).send('Invalid output format');
    }
};