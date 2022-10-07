import { acceptance, exists } from "discourse/tests/helpers/qunit-helpers";
import { click, visit } from "@ember/test-helpers";
import { test } from "qunit";

acceptance("Purple Tentacle", function (needs) {
  needs.settings({ purple_tentacle_enabled: true });
  needs.user();

  test("Purple tentacle button works", async function (assert) {
    await visit("/admin/plugins/purple-tentacle");
    assert.ok(exists("#show-tentacle"), "it shows the purple tentacle button");
    assert.ok(!exists(".tentacle"), "the tentacle is not shown yet");
    await click("#show-tentacle");
    assert.ok(exists(".tentacle"), "the tentacle wants to rule the world!");
  });
});
