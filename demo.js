TestCollection = new Mongo.Collection('test');
OptionsCollection = new Mongo.Collection('options');

var options = function () {
    return OptionsCollection.find().fetch();
};
if (Meteor.isClient) {
    Template.demo.helpers({
        options: options
    });
}


if (Meteor.isServer) {
    Meteor.startup(function () {
        if (!OptionsCollection.find().count()) {
            OptionsCollection.insert({label: '1111', value: '1111'});
            OptionsCollection.insert({label: '2222', value: '2222'});
            OptionsCollection.insert({label: '3333', value: '3333', selected: true});
            OptionsCollection.insert({label: '1111AAAA', value: '1111AAAA'});
            OptionsCollection.insert({label: '1111BBBB', value: '1111BBBB'});
            OptionsCollection.insert({label: '1111CCCC', value: '1111CCCC'});
            OptionsCollection.insert({label: '2222AAAA', value: '2222AAAA'});
            OptionsCollection.insert({label: '2222BBBB', value: '2222BBBB'});
            OptionsCollection.insert({label: '2222CCCC', value: '2222CCCC'});
            OptionsCollection.insert({label: '3333test', value: '3333test'});
        }
    });
}
