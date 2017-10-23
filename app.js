(function () {

  return {

    eventList: [],

    events: {
      'app.activated': 'initialize',
      '*.changed': 'onChange',
      'click .getEvents': 'onGetEventsClick'
    },

    initialize: function () {
      this.switchTo('layout');
      console.log('app loaded');
    },

    onChange: function(e) {
      //console.log(_.pick(e, 'propertyName'))
      this.eventList.push(e);
    },

    onGetEventsClick: function(e) {
      e.preventDefault();
      var fullEventList = '';
      var eventCount = {};
      _.each(this.eventList, function(evt) {
        fullEventList += helpers.fmt("%@, new value: '%@'\n", evt.propertyName, evt.newValue);
        eventCount[evt.propertyName] = eventCount[evt.propertyName] ? ++eventCount[evt.propertyName] : 1;
      });
      var multiTriggeredEvents = _.omit(eventCount, function(val) {
        return val === 1;
      });
      console.log('\nEvents that triggered multiple times since last getEvents:');
      console.log(multiTriggeredEvents);
      console.log('All events triggered since last getEvents:');
      console.log(fullEventList);
      this.eventList = [];
    }

  };

}());
