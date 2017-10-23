# ZD Ticket 1866215

Demonstrates in ZAF V1 that custom change events are triggered multiple times for ticket fields of type multiline.

### Installation

Install it, open an existing ticket where you have a ticket field visible in form of type multiline, and hit the hit the 'checkEvents' button.

You should see that the multiline event starts out as null but transforms into an empty string, in fact triggering two events. This is not the case for other fields, like text, which, if null, stays null, and don't trigger multiple events.

I haven't tested for V2 but maybe the event behavior is not dependant on ZAF version?

As a developer, I prefer events are handled in a uniform manner. To me it's prefereable multiline fields stay null unless interacted with, like text fields do.
