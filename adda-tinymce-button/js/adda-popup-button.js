(function() {
    tinymce.PluginManager.add('adda_button', function( editor, url ) {
        editor.addButton( 'adda_button', {
            title: 'Adda Button',
            type: 'menubutton',
            icon: 'icon adda-own-icon',
            menu: [
                {
                    text: 'Custom H3 Tag',
                    onclick: function() {
                        editor.windowManager.open( {
                            title: 'Insert H3 Tag',
                            body: [{
                                type: 'textbox',
                                name: 'title',
                                label: 'Your Title'
                            }],
                            onsubmit: function( e ) {
                                editor.insertContent( '<h3>' + e.data.title + '</h3>');
                            }
                        });
                    }
                },
                {
                    text: 'Custom Header Tag',
                    onclick: function() {
                        editor.windowManager.open( {
                            title: 'Insert Header Tag',
                            body: [{
                                type: 'textbox',
                                name: 'title',
                                label: 'Your Title'
                            },
                            {
                                type: 'textbox',
                                name: 'id',
                                label: 'Header Anchor'
                            },
                            {
                                type: 'listbox', 
                                name: 'level', 
                                label: 'Header Level',
                                'values': [
                                    {text: '<h1>', value: '1'},
                                    {text: '<h2>', value: '2'},
                                    {text: '<h3>', value: '3'},
                                    {text: '<h4>', value: '4'},
                                    {text: '<h5>', value: '5'},
                                    {text: '<h6>', value: '6'}
                                ]
                            }],
                            onsubmit: function( e ) {
                                editor.insertContent( '<h' + e.data.level + ' id="' + e.data.id + '">' + e.data.title + '</h' + e.data.level + '>');
                            }
                        });
                    }
                }
           ]
        });
    });
})();