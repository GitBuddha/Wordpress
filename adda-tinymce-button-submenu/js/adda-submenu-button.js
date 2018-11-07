(function() {
    tinymce.PluginManager.add('adda_button', function( editor, url ) {
        editor.addButton( 'adda_button', {
            title: 'Adda Submenu Button',
            type: 'menubutton',
            icon: 'icon adda-own-icon',
            menu: [
                {
                    text: 'Level I',
                    value: 'Text from Level I',
                    onclick: function() {
                        editor.insertContent(this.value());
                    }
                },
                {
                    text: 'Level II',
                    value: 'Text from Level II',
                    onclick: function() {
                        editor.insertContent(this.value());
                    },
                    menu: [
                        {
                            text: 'Submenu Item I',
                            value: 'Text from Submenu Item I',
                            onclick: function(e) {
                                e.stopPropagation();
                                editor.insertContent(this.value());
                            }
                        },
                        {
                            text: 'Submenu Item II',
                            value: 'Text from Submenu Item II',
                            onclick: function(e) {
                                e.stopPropagation();
                                editor.insertContent(this.value());
                            }
                        }
                    ]
                },
                {
                    text: 'Level III',
                    value: 'Text from Level III',
                    onclick: function() {
                        editor.insertContent(this.value());
                    }
                }
            ]
        });
    });
})();