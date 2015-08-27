import { acceptance } from "helpers/qunit-helpers";
acceptance("Purple Tentacle", { loggedIn: true });

test("Purple tentacle button works", () => {
  visit("/admin/plugins/purple-tentacle");

  andThen(() => {
    ok(exists('#show-tentacle'), "it shows the purple tentacle button");
    ok(!exists('.tentacle'), "the tentacle is not shown yet");
  });

  click('#show-tentacle');

  andThen(() => {
    ok(exists('.tentacle'), "the tentacle wants to rule the world!");
  });


});
