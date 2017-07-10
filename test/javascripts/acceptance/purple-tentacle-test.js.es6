import { acceptance } from "helpers/qunit-helpers";
acceptance("Purple Tentacle", { loggedIn: true });

test("Purple tentacle button works", assert => {
  visit("/admin/plugins/purple-tentacle");

  andThen(() => {
    assert.ok(exists('#show-tentacle'), "it shows the purple tentacle button");
    assert.ok(!exists('.tentacle'), "the tentacle is not shown yet");
  });

  click('#show-tentacle');

  andThen(() => {
    assert.ok(exists('.tentacle'), "the tentacle wants to rule the world!");
  });


});
